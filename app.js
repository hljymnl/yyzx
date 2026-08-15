/* 应用逻辑 */

const LS_KEY = "yyzx_checkin";

// ---------- 工具 ----------
function $(id) { return document.getElementById(id); }

// 日期相关：以"天序号"作为每日内容轮换依据
function dayIndex() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  return Math.floor((now - start) / 86400000);
}

function dateStr(d) {
  const y = d.getFullYear(), m = String(d.getMonth()+1).padStart(2,'0'), dd = String(d.getDate()).padStart(2,'0');
  return `${y}-${m}-${dd}`;
}

// ---------- 打卡存储 ----------
function getCheckins() {
  try { return JSON.parse(localStorage.getItem(LS_KEY)) || {}; }
  catch(e) { return {}; }
}
function saveCheckins(c) { localStorage.setItem(LS_KEY, JSON.stringify(c)); }

// ---------- 今日学习 ----------
function renderToday() {
  const idx = dayIndex() % WORD_DAYS.length;
  const dayData = WORD_DAYS[idx];
  const read = READINGS[idx % READINGS.length];

  // 标题/日期
  $("todayTitle").textContent = `📅 今日学习（第 ${idx+1} 天）`;
  const now = new Date();
  $("todayDate").textContent = `${now.getFullYear()}年${now.getMonth()+1}月${now.getDate()}日 · 组别：${dayData.level==='core'?'核心':dayData.level==='high'?'高频':'进阶'}词`;

  // 单词
  $("todayWords").innerHTML = dayData.words.map(w => `
    <div class="word-item">
      <div class="w-head">
        <span class="w-word">${w.w}</span>
        <span class="w-phon">${w.ph}</span>
        <span class="w-pos">${w.pos}</span>
      </div>
      <div class="w-means">${w.means}</div>
      <div class="w-example">${w.ex}</div>
    </div>`).join("");

  // 语法
  const g = GRAMMAR[idx % GRAMMAR.length];
  $("todayGrammar").innerHTML = `<div class="g-title">${g.title}</div><div class="g-exp">${g.body.replace(/\n/g, "<br>")}</div><div class="g-ex">${g.ex.replace(/\n/g, "<br>")}</div>`;

  // 阅读
  $("todayReading").innerHTML = `<div class="r-en">${read.en}</div><div class="r-cn">${read.cn}</div>`;

  // 练习
  renderQuiz(TODAY_QUIZ, "todayQuiz", false);

  // 清除上次结果
  $("todayResult").innerHTML = "";
}

function renderQuiz(items, containerId, immediate) {
  const c = $(containerId);
  c.innerHTML = items.map((it, i) => `
    <div class="quiz-q" data-idx="${i}">
      <div class="q-text">${it.q}</div>
      <div class="q-opts">
        ${it.opts.map((o, j) => `<div class="q-opt" data-idx="${j}" onclick="selectOpt(this)">${o}</div>`).join("")}
      </div>
      <div class="q-explain"></div>
    </div>`).join("");
}

function selectOpt(el) {
  const q = el.closest(".quiz-q");
  q.querySelectorAll(".q-opt").forEach(o => o.classList.remove("selected"));
  el.classList.add("selected");
}

function checkTodayQuiz() {
  const qs = document.querySelectorAll("#todayQuiz .quiz-q");
  let correct = 0;
  qs.forEach((q, i) => {
    const opts = q.querySelectorAll(".q-opt");
    const chosen = q.querySelector(".q-opt.selected");
    const exp = q.querySelector(".q-explain");
    exp.style.display = "block";
    opts.forEach((o, j) => {
      o.classList.remove("correct","wrong");
      if (j === TODAY_QUIZ[i].ans) o.classList.add("correct");
    });
    if (chosen && Number(chosen.dataset.idx) === TODAY_QUIZ[i].ans) {
      correct++;
    } else if (chosen) {
      chosen.classList.add("wrong");
    }
    exp.innerHTML = `💡 ${TODAY_QUIZ[i].exp}`;
  });
  const total = TODAY_QUIZ.length;
  const el = $("todayResult");
  if (correct === total) {
    el.innerHTML = `🎉 全对！${correct}/${total} 太棒了，今天学得很扎实！`;
    el.style.color = "#2ea44f";
  } else {
    el.innerHTML = `${correct}/${total} 对了，看看解析记住它，明天更好！`;
    el.style.color = "#d73a49";
  }
}

function doCheckin() {
  const today = dateStr(new Date());
  const c = getCheckins();
  c[today] = true;
  saveCheckins(c);
  const fill = $("pmFill");
  fill.style.width = "100%";
  renderCalendar();
  alert("✅ 打卡成功！今天学完啦，明天继续坚持～");
}

// ---------- 单词本 ----------
let wfFilter = "all";
function renderWordsAll() {
  let items = [];
  WORD_DAYS.forEach(d => {
    (d.level === wfFilter || wfFilter === "all") && items.push(...d.words);
  });
  $("wordsAll").innerHTML = items.map(w => `
    <div class="word-item">
      <div class="w-head">
        <span class="w-word">${w.w}</span>
        <span class="w-phon">${w.ph}</span>
        <span class="w-pos">${w.pos}</span>
      </div>
      <div class="w-means">${w.means}</div>
      <div class="w-example">${w.ex}</div>
    </div>`).join("");
}

// ---------- 语法库 ----------
function renderGrammar() {
  $("grammarList").innerHTML = GRAMMAR.map(g => `
    <div class="g-item">
      <h3>${g.title}</h3>
      <div class="g-body">${g.body.replace(/\n/g,"<br>")}</div>
      <div class="g-ex">${g.ex.replace(/\n/g,"<br>")}</div>
    </div>`).join("");
}

// ---------- 真题练习 ----------
function renderPractice() {
  $("practiceList").innerHTML = PRACTICE.map((p, pi) => `
    <div class="card">
      <h2>${p.type}</h2>
      ${p.passage ? `<p class="muted" style="background:#f7f9ff;padding:10px;border-radius:8px;">${p.passage}</p>` : ""}
      <div data-practice="${pi}"></div>
      <button class="btn primary" onclick="checkPractice(${pi})">查看答案</button>
    </div>`).join("");

  PRACTICE.forEach((p, pi) => {
    const holder = document.querySelector(`[data-practice="${pi}"]`);
    if (p.passage) {
      // 完形：绑定题目里的题干文本已在 passage 展示
      holder.innerHTML = p.items.map((it, i) => `
        <div class="quiz-q" data-idx="${i}">
          <div class="q-text">${it.q}</div>
          <div class="q-opts">
            ${it.opts.map((o, j) => `<div class="q-opt" data-idx="${j}" onclick="selectOpt(this)">${o}</div>`).join("")}
          </div>
          <div class="q-explain"></div>
        </div>`).join("");
    } else if (p.items[0].opts.length > 0) {
      holder.innerHTML = p.items.map((it, i) => `
        <div class="quiz-q" data-idx="${i}">
          <div class="q-text">${it.q}</div>
          <div class="q-opts">
            ${it.opts.map((o, j) => `<div class="q-opt" data-idx="${j}" onclick="selectOpt(this)">${o}</div>`).join("")}
          </div>
          <div class="q-explain"></div>
        </div>`).join("");
    } else {
      // 翻译题：无选项
      holder.innerHTML = p.items.map((it, i) => `
        <div class="quiz-q" data-idx="${i}">
          <div class="q-text">${it.q}</div>
          <div class="q-explain" style="display:none"></div>
        </div>`).join("");
    }
  });
}

function checkPractice(pi) {
  const p = PRACTICE[pi];
  const qs = document.querySelectorAll(`[data-practice="${pi}"] .quiz-q`);
  qs.forEach((q, i) => {
    const it = p.items[i];
    const exp = q.querySelector(".q-explain");
    exp.style.display = "block";
    if (it.opts.length > 0) {
      const opts = q.querySelectorAll(".q-opt");
      opts.forEach((o, j) => {
        o.classList.remove("correct","wrong");
        if (j === it.ans) o.classList.add("correct");
      });
      const chosen = q.querySelector(".q-opt.selected");
      if (chosen && Number(chosen.dataset.idx) !== it.ans) chosen.classList.add("wrong");
      exp.innerHTML = `💡 ${it.exp}`;
    } else {
      exp.innerHTML = `💡 参考答案：${it.exp}`;
    }
  });
}

// ---------- 作文 ----------
function renderWriting() {
  $("writingList").innerHTML = WRITING.map(w => `
    <div class="w-item">
      <h3>${w.title}</h3>
      <div class="w-tpl">${w.tpl}</div>
      <div class="w-tip">💡 ${w.tip}</div>
    </div>`).join("");
}

// ---------- 打卡日历 ----------
function renderCalendar() {
  const c = getCheckins();
  const now = new Date();
  const year = now.getFullYear(), month = now.getMonth();
  const firstDay = new Date(year, month, 1);
  const daysInMonth = new Date(year, month+1, 0).getDate();
  const startWeekday = firstDay.getDay(); // 0=周日

  const labels = ["日","一","二","三","四","五","六"].map(l => `<div class="c-label">${l}</div>`).join("");
  let cells = labels;
  for (let i=0; i<startWeekday; i++) cells += `<div class="c-day"></div>`;
  for (let d=1; d<=daysInMonth; d++) {
    const ds = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const isDone = !!c[ds];
    const isToday = ds === dateStr(now);
    cells += `<div class="c-day ${isDone?'done':''} ${isToday?'today-b':''}">${isDone?'✓':d}</div>`;
  }
  $("calendar").innerHTML = cells;

  // 连续打卡
  let streak = 0;
  const d = new Date(now);
  if (c[dateStr(d)]) {
    while (c[dateStr(d)]) { streak++; d.setDate(d.getDate()-1); }
  }
  const total = Object.keys(c).length;
  $("streakBox").innerHTML = `
    <div class="s-item"><div class="s-num">${streak}</div><div class="s-label">连续天数</div></div>
    <div class="s-item"><div class="s-num">${total}</div><div class="s-label">累计打卡</div></div>
    <div class="s-item"><div class="s-num">${WORD_DAYS.length}天</div><div class="s-label">词汇课程</div></div>`;
}

// ---------- 导航 ----------
function initTabs() {
  document.querySelectorAll(".tab").forEach(t => {
    t.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach(x => x.classList.remove("active"));
      document.querySelectorAll(".panel").forEach(x => x.classList.remove("active"));
      t.classList.add("active");
      $("tab-" + t.dataset.tab).classList.add("active");
    });
  });
  document.querySelectorAll(".wf").forEach(b => {
    b.addEventListener("click", () => {
      document.querySelectorAll(".wf").forEach(x => x.classList.remove("active"));
      b.classList.add("active");
      wfFilter = b.dataset.wf;
      renderWordsAll();
    });
  });
}

// ---------- 按钮绑定 ----------
$(window).addEventListener("load", () => {
  initTabs();
  renderToday();
  renderWordsAll();
  renderGrammar();
  renderPractice();
  renderWriting();
  renderCalendar();

  $("todaySubmit").addEventListener("click", checkTodayQuiz);
  $("todayDone").addEventListener("click", doCheckin);

  // 恢复进度条
  const today = dateStr(new Date());
  if (getCheckins()[today]) $("pmFill").style.width = "100%";
});
