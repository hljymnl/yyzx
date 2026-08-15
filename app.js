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
let fastRound = 0; // 当前速测轮次
let fastScore = 0;  // 得分
let fastWrong = []; // 错题收集

// 全局朗读语速：默认超慢速，方便零基础跟读（如仍嫌快可继续调小）
const SPEAK_RATE = 0.13;

function speak(word) {
  // 页面语音合成，读单词发音
  try {
    if (!window.speechSynthesis) return;
    const u = new SpeechSynthesisUtterance(word);
    u.lang = "en-US";
    u.rate = SPEAK_RATE;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  } catch(e) {}
}

function speakRead() {
  const txt = window._curRead || "";
  try {
    if (!window.speechSynthesis || !txt) return;
    const u = new SpeechSynthesisUtterance(txt);
    u.lang = "en-US";
    u.rate = SPEAK_RATE;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  } catch(e) {}
}

// 通用：从一段“英文 + 中文”混合文本中提取英文并朗读
// 通用：读按钮所在那一段容器里的“英文 + 中文”混合文本，提取英文部分朗读
function sayEx(el) {
  if (!el) return;
  // 读按钮的父级容器（句子所在的那一块），先去掉按钮自身文字
  let cont = el.parentNode;
  if (!cont || !cont.textContent) return;
  let txt = cont.textContent.replace(/🔊\s*(读例句|读句|朗读|读范文)?/g, "").trim();
  // 提取开头连续的英文部分（含标点），中文之前停止
  const m = txt.match(/^[A-Za-z0-9 .,'!?"();:/-]+/);
  const en = (m ? m[0].trim() : "").trim();
  if (!en) return;
  try {
    if (!window.speechSynthesis) return;
    const u = new SpeechSynthesisUtterance(en);
    u.lang = "en-US";
    u.rate = SPEAK_RATE;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  } catch(e) {}
}

function renderToday() {
  const idx = dayIndex() % WORD_DAYS.length;
  const dayData = WORD_DAYS[idx];
  const read = READINGS[idx % READINGS.length];

  // 标题/日期
  $("todayTitle").textContent = `📅 今日学习（第 ${idx+1} 天）`;
  const now = new Date();
  $("todayDate").textContent = `${now.getFullYear()}年${now.getMonth()+1}月${now.getDate()}日 · 组别：${dayData.level==='core'?'核心':dayData.level==='high'?'高频':'进阶'}词`;

  // 单词 → 可翻转卡片（点击正面翻到反面看释义+发音）
  $("todayWords").innerHTML = dayData.words.map(w => `
    <div class="flash" data-word="${w.w}">
      <div class="flash-inner">
        <div class="flash-front" onclick="flipCard(this)">
          <span class="f-word">${w.w}</span>
          <span class="f-phon">${w.ph}</span>
          <button class="f-speak" title="听发音" onclick="event.stopPropagation();speak('${w.w}')">🔊</button>
        </div>
        <div class="flash-back" onclick="flipCard(this)">
          <span class="f-means">${w.means}</span>
          <span class="f-pos">${w.pos}</span>
          <span class="f-ex">${w.ex} <button class="link-speak" title="朗读例句" onclick="event.stopPropagation();sayEx(this)">🔊 读例句</button></span>
        </div>
      </div>
    </div>`).join("");

  // 速测重置
  fastRound = 0; fastScore = 0; fastWrong = [];
  nextQuick(dayData.words);

  // 语法
  const g = GRAMMAR[idx % GRAMMAR.length];
  $("todayGrammar").innerHTML = `<div class="g-title">${g.title}</div><div class="g-exp">${g.body.replace(/\n/g, "<br>")}</div><div class="g-ex">${exLinesHtml(g.ex)}</div>`;

  // 阅读 → 可点击切换“英文/中文”
  $("todayReading").innerHTML = `
    <div class="r-en">${read.en}</div>
    <div class="r-cn">${read.cn}</div>
    <span class="r-btnw"><button class="r-speak" onclick="speakRead()">🔊 朗读整段</button></span>`;
  window._curRead = read.en;
  $("todayReading").querySelector(".r-btnw").onclick = null;


  // 练习
  renderQuiz(TODAY_QUIZ, "todayQuiz", false);

  // 清除上次结果
  $("todayResult").innerHTML = "";
}

// 闪卡翻转
function flipCard(el) {
  el.closest(".flash").classList.toggle("flipped");
}

// 速测：从当日前几个单词出题（看中文选英文）
let quickWords = [];
function nextQuick(words) {
  quickWords = words;
  if (fastRound >= 5) {
    // 结束
    const el = $("quickGame");
    el.innerHTML = fastWrong.length === 0
      ? `<div class="quick-done">🏆 完美！5/5 全对，今天的词掌握得很牢！</div>`
      : `<div class="quick-done warn">你答对了 ${fastScore}/${fastRound} 题，这些词再记一下：<br><b>${fastWrong.join("、")}</b></div>`;
    $("quickScore").innerHTML = `得分：${fastScore}/5`;
    $("quickNext").style.display = "none";
    $("quickNext").textContent = "再测一轮";
    $("quickNext").onclick = () => { fastRound=0; fastScore=0; fastWrong=[]; nextQuick(words); };
    return;
  }
  const w = words[fastRound % words.length];
  const others = words.filter(x => x.w !== w.w);
  // 随机3个干扰项
  const shuf = others.sort(() => Math.random()-0.5).slice(0,3);
  const opts = [{w:w.w,means:w.means,correct:true}, ...shuf.map(x=>({w:x.w,means:x.means,correct:false}))].sort(()=>Math.random()-0.5);
  $("quickGame").innerHTML = `
    <div class="quick-q">
      <div class="quick-mean">${w.means}</div>
      <div class="quick-opts">
        ${opts.map((o,i) => `<button class="qo" data-correct="${o.correct}" data-word="${o.w}" onclick="answerQuick(this, ${fastRound})">${o.w}</button>`).join("")}
      </div>
      <div id="quickFeedback" class="quick-fb"></div>
    </div>`;
  $("quickScore").innerHTML = `得分：${fastScore}/${fastRound}`;
  $("quickNext").style.display = "none";
}

function answerQuick(btn, round) {
  const fb = $("quickFeedback");
  const correct = btn.dataset.correct === "true";
  [...btn.closest(".quick-opts").children].forEach(b => b.disabled = true);
  if (correct) {
    fastScore++;
    btn.classList.add("qo-right");
    fb.innerHTML = `✅ 答对了！${btn.dataset.word} 就是这个意思。`;
  } else {
    btn.classList.add("qo-wrong");
    // 标出正确答案
    [...btn.closest(".quick-opts").children].forEach(b => { if(b.dataset.correct==="true") b.classList.add("qo-right"); });
    fastWrong.push(btn.dataset.word);
    fb.innerHTML = `❌ 答错了，正确答案是 <b>${[...btn.closest(".quick-opts").children].find(b=>b.dataset.correct==="true").dataset.word}</b>`;
  }
  fastRound++;
  $("quickScore").innerHTML = `得分：${fastScore}/${fastRound}`;
  const nb = $("quickNext");
  nb.style.display = "block";
  nb.textContent = fastRound >= 5 ? "看结果" : "下一题";
  nb.onclick = () => nextQuick(quickWords);
}

function resetQuick() {
  // 从整个单词库随机选10个新词重新开始速测
  const allWords = WORD_DAYS.flatMap(d => d.words);
  const picked = allWords.sort(() => Math.random() - 0.5).slice(0, 10);
  fastRound = 0; fastScore = 0; fastWrong = [];
  nextQuick(picked);
  alert("🔄 已换一波新单词，继续测！");
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

// 音标 → 中文近似音 + 口型提示 映射
const IPA_HINT = {
  // 长元音
  "iː": { zh: "一(长)", tip: "咧嘴笑，拖长" },
  "ɑː": { zh: "啊(长)", tip: "张大嘴，拖长" },
  "ɔː": { zh: "哦(长)", tip: "圆嘴，拖长" },
  "uː": { zh: "呜(长)", tip: "嘟嘴，拖长" },
  "ɜː": { zh: "饿(长)", tip: "卷舌，拖长" },
  "ɝ":  { zh: "儿(长)", tip: "美音卷舌" },
  // 短元音
  "ɪ": { zh: "衣(短)", tip: "嘴角打开，短促" },
  "e": { zh: "诶(短)", tip: "嘴扁，短促" },
  "æ": { zh: "啊(短)", tip: "张大嘴，短促" },
  "ɒ": { zh: "哦(短)", tip: "圆嘴，短促" },
  "ʌ": { zh: "阿(短)", tip: "放松，短促" },
  "ʊ": { zh: "乌(短)", tip: "放松，短促" },
  "ə": { zh: "饿(轻)", tip: "最轻，像「额」" },
  "ɚ": { zh: "儿(轻)", tip: "美音卷舌轻音" },
  // 双元音
  "eɪ": { zh: "诶衣", tip: "由诶滑向衣" },
  "aɪ": { zh: "爱", tip: "由啊滑向衣" },
  "ɔɪ": { zh: "哦衣", tip: "由哦滑向衣" },
  "aʊ": { zh: "傲", tip: "由啊滑向乌" },
  "əʊ": { zh: "欧", tip: "由饿滑向乌" },
  "ɪə": { zh: "衣饿", tip: "由衣滑向饿" },
  "eə": { zh: "诶饿", tip: "由诶滑向饿" },
  "ʊə": { zh: "乌饿", tip: "由乌滑向饿" },
  // 清辅音
  "p": { zh: "普", tip: "不振动，像吹蜡烛" },
  "t": { zh: "特", tip: "不振动，舌尖弹上牙" },
  "k": { zh: "克", tip: "不振动，喉部" },
  "f": { zh: "夫", tip: "不振动，上牙咬下唇" },
  "s": { zh: "丝", tip: "不振动，像蛇吐信" },
  "ʃ": { zh: "嘘", tip: "不振动，让安静" },
  "θ": { zh: "思", tip: "吐舌，不振动" },
  "tʃ": { zh: "吃", tip: "不振动" },
  "h": { zh: "喝(轻)", tip: "轻呼气" },
  // 浊辅音
  "b": { zh: "波", tip: "振动，跟p对照" },
  "d": { zh: "得", tip: "振动，跟t对照" },
  "ɡ": { zh: "鸽", tip: "振动，跟k对照" },
  "g": { zh: "鸽", tip: "振动，跟k对照" },
  "v": { zh: "夫(振动)", tip: "上牙咬下唇" },
  "z": { zh: "兹", tip: "振动，像蜜蜂" },
  "ʒ": { zh: "日", tip: "振动" },
  "ð": { zh: "则", tip: "吐舌，振动" },
  "dʒ": { zh: "知", tip: "振动" },
  "m": { zh: "嗯(闭唇)", tip: "鼻音" },
  "n": { zh: "嗯(舌抵上齿)", tip: "鼻音" },
  "ŋ": { zh: "嗯(喉部)", tip: "鼻音" },
  "l": { zh: "乐", tip: "舌抵上齿后" },
  "r": { zh: "日(卷舌)", tip: "卷舌" },
  "w": { zh: "屋", tip: "圆唇滑音" },
  "j": { zh: "耶", tip: "滑音，像「也」" }
};

// 把音标拆成可读音素序列
function splitIpa(ph) {
  let s = String(ph||"").replace(/[\/]/g, "");
  const out = [];
  let i = 0;
  while (i < s.length) {
    let got = null;
    // 先试双字符音标（双元音/长元音后置colon）
    for (let n = 3; n >= 2 && !got; n--) {
      const sub = s.substr(i, n);
      if (IPA_HINT[sub]) { got = { sym: sub, ...IPA_HINT[sub] }; i += n; }
    }
    if (!got) {
      // 处理长音符号 : 或 ː
      const c = s[i];
      if (c === ":" || c === "ː") {
        if (out.length) out[out.length-1] = { ...out[out.length-1], long: true };
        i++;
      } else if (IPA_HINT[c]) {
        out.push({ sym: c, ...IPA_HINT[c] });
        i++;
      } else {
        i++; // 忽略无法识别字符
      }
    } else {
      out.push(got);
    }
  }
  return out;
}

// 拼读展开面板 HTML
function spellPanel(ph, word) {
  const parts = splitIpa(ph);
  if (!parts.length) return `<div class="spell-none">未找到可拆解的拼读（可点🔊听原音）</div>`;
  const chips = parts.map((p, idx) => `
    <span class="spell-chip" title="点此听这个音">
      <b>${p.sym}${p.long ? "ː" : ""}</b>
      <em>${p.zh}</em>
      <i>${p.tip}</i>
      <button class="spell-say" onclick="speak('${p.sym}')">🔊</button>
    </span>`).join("");
  return `<div class="spell-wrap">
    <div class="spell-whole">🔤 整体音标：<b>${ph}</b> <button class="link-speak" onclick="speak('${word}')">🔊 连读单词</button></div>
    <div class="spell-tip">☝️ 逐个音拼起来，就是「${word}」的读音</div>
    <div class="spell-chips">${chips}</div>
  </div>`;
}

function toggleSpell(btn) {
  const item = btn.closest(".word-item");
  const panel = item.querySelector(".w-spell");
  const wi = Number(item.getAttribute("data-wi"));
  if (panel.style.display === "none" || !panel.innerHTML) {
    const w = WiFiWords[wi];
    if (w) panel.innerHTML = spellPanel(w.ph, w.w);
    panel.style.display = "block";
    btn.textContent = "🔇 收起";
  } else {
    panel.style.display = "none";
    btn.textContent = "🔈 拼读";
  }
}

function renderWordsAll() {
  let items = [];
  WORD_DAYS.forEach(d => {
    (d.level === wfFilter || wfFilter === "all") && items.push(...d.words);
  });
  window.WiFiWords = items;
  $("wordsAll").innerHTML = items.map((w, wi) => `
    <div class="word-item" data-wi="${wi}">
      <div class="w-head">
        <span class="w-word">${w.w}</span>
        <span class="w-phon">${w.ph}</span>
        <span class="w-pos">${w.pos}</span>
        <button class="f-speak" title="听发音" onclick="speak('${w.w}')">🔊</button>
        <button class="link-speak" title="拼读音标" onclick="toggleSpell(this)">🔈 拼读</button>
      </div>
      <div class="w-spell" style="display:none"></div>
      <div class="w-means">${w.means}</div>
      <div class="w-example">${w.ex} <button class="link-speak" title="朗读例句" onclick="sayEx(this)">🔊 读例句</button></div>
    </div>`).join("");
}

// ---------- 从零学英文 ----------
function renderFromZero() {
  const sceneHtml = group => group.map(sc => `
    <div class="fz-scene">
      <div class="fz-topic">${sc.topic}</div>
      ${sc.lines.map((ln, i) => `
        <div class="fz-line">
          <span class="fz-en">${ln.en}</span>
          <span class="fz-cn">${ln.cn}</span>
          <button class="link-speak" onclick="sayExFromData(this)" data-en="${ln.en}">🔊</button>
        </div>`).join("")}
    </div>`).join("");
  $("fromZeroSpoken").innerHTML = sceneHtml(SPOKEN);
  $("fromZeroLife").innerHTML = sceneHtml(LIFE_EN);
  $("fromZeroBiz").innerHTML = sceneHtml(BIZ_EN);
}

// 朗读：从 data-en 属性读英文（避免中文干扰）
function sayExFromData(el) {
  const en = el && el.getAttribute && el.getAttribute("data-en");
  if (!en) return;
  try {
    if (!window.speechSynthesis) return;
    const u = new SpeechSynthesisUtterance(en);
    u.lang = "en-US";
    u.rate = SPEAK_RATE;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  } catch(e) {}
}

// ---------- 语法库 ----------
function renderGrammar() {
  $("grammarList").innerHTML = GRAMMAR.map(g => `
    <div class="g-item">
      <h3>${g.title}</h3>
      <div class="g-body">${g.body.replace(/\n/g,"<br>")}</div>
      <div class="g-ex">${exLinesHtml(g.ex)}</div>
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

function shufflePractice() {
  // 每组：随机重排题目顺序 + 选项顺序
  const holderSel = document.querySelectorAll("[data-practice]");
  PRACTICE.forEach((p, pi) => {
    const holder = document.querySelector(`[data-practice="${pi}"]`);
    if (!holder) return;
    const shuffled = [...p.items].sort(() => Math.random() - 0.5);
    holder.innerHTML = shuffled.map((it, i) => {
      const optsHtml = it.opts.length > 0
        ? `<div class="q-opts">${it.opts.map((o, j) => `<div class="q-opt" data-idx="${j}" onclick="selectOpt(this)">${o}</div>`).join("")}</div>`
        : `<div class="q-opts"></div>`;
      return `<div class="quiz-q" data-idx="${i}">
        <div class="q-text">${it.q}</div>
        ${optsHtml}
        <div class="q-explain"></div>
      </div>`;
    }).join("");
  });
  alert("🔄 已随机重排题目，重新做一遍巩固吧！");
}

// ---------- 作文 ----------
function renderWriting() {
  $("writingList").innerHTML = WRITING.map(w => `
    <div class="w-item">
      <h3>${w.title}
        <button class="link-speak" title="朗读范文" onclick="sayTpl(this)" data-i="${WRITING.indexOf(w)}">🔊 朗读</button>
      </h3>
      <div class="w-tpl">${w.tpl}</div>
      ${w.cn ? `<details class="w-cn"><summary>👁 查看中文翻译</summary><div class="w-cn-body">${w.cn.replace(/\n/g,"<br>")}</div></details>` : ""}
      <div class="w-tip">💡 ${w.tip}</div>
    </div>`).join("");
}

// 朗读作文范文：提取模板中的英文句连读
function sayTpl(el) {
  const i = Number(el.getAttribute && el.getAttribute("data-i"));
  const w = WRITING[i];
  if (!w) return;
  try {
    if (!window.speechSynthesis) return;
    const u = new SpeechSynthesisUtterance(w.tpl.replace(/[\u4e00-\u9fff·…\d（）]/g, " "));
    u.lang = "en-US"; u.rate = SPEAK_RATE;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  } catch(e) {}
}

// ---------- 自然拼读 ----------
function renderPhonics() {
  $("phonicsIntro").innerHTML = PHONICS_INTRO.map(p => `
    <div class="ph-intro"><b>${p.t}</b> — ${p.d}</div>`).join("");

  // ---- 单音基础：示范音 ----
  const soundCard = v => `
    <div class="ph-card sound-card">
      <div class="ph-sym">${v.sym}</div>
      <div class="ph-tip">${v.tip}</div>
      <div class="ph-ex">${v.word}</div>
      <button class="ph-speak" onclick="speakSound('${v.sound}','${v.sym}')">🔊 听示范</button>
    </div>`;
  $("phShort").innerHTML = SOUNDS_SHORT.map(soundCard).join("");
  $("phLong").innerHTML = SOUNDS_LONG.map(soundCard).join("");
  $("phVoiceless").innerHTML = SOUNDS_VOICELESS.map(soundCard).join("");
  $("phVoiced").innerHTML = SOUNDS_VOICED.map(soundCard).join("");
  renderSoundQuiz();

  // 元音
  $("phonicsVowels").innerHTML = PHONICS_VOWELS.map(v => `
    <div class="ph-card">
      <div class="ph-sym">${v.sym}</div>
      <div class="ph-phon">${v.phon}</div>
      <div class="ph-ex">${v.ex}</div>
      <button class="ph-speak" onclick="speak('${v.sound}')">🔊 听发音</button>
    </div>`).join("");

  // 组合
  $("phonicsCombos").innerHTML = PHONICS_COMBOS.map(v => `
    <div class="ph-card">
      <div class="ph-sym">${v.sym}</div>
      <div class="ph-phon">${v.phon}</div>
      <div class="ph-ex">${v.ex}</div>
      <button class="ph-speak" onclick="speak('${v.sound}')">🔊 听发音</button>
    </div>`).join("");

  // 练习（交互）
  $("phonicsQuiz").innerHTML = PHONICS_QUIZ.map((it, i) => `
    <div class="quiz-q" data-idx="${i}">
      <div class="q-text">${it.q}</div>
      <div class="q-opts">
        ${it.opts.map((o, j) => `<div class="q-opt" data-idx="${j}" onclick="selectOpt(this)">${o}</div>`).join("")}
      </div>
      <div class="q-explain"></div>
    </div>`).join("");
}

// 读单个示范音（先读音标音，再读例词）
function speakSound(word, sym) {
  try {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const u1 = new SpeechSynthesisUtterance(sym);
    u1.lang = "en-US"; u1.rate = 0.12;
    const u2 = new SpeechSynthesisUtterance(word);
    u2.lang = "en-US"; u2.rate = 0.13;
    u1.onend = () => { try { window.speechSynthesis.speak(u2); } catch(e){} };
    window.speechSynthesis.speak(u1);
  } catch(e) {}
}

// ---- 单音听辨练习 ----
function renderSoundQuiz() {
  $("soundQuiz").innerHTML = SOUND_QUIZ.map((it, i) => `
    <div class="quiz-q" data-idx="${i}">
      <div class="q-text">${it.q}</div>
      <div class="q-opts">
        ${it.opts.map((o, j) => `<div class="q-opt" data-idx="${j}" onclick="selectOpt(this)">${o}</div>`).join("")}
      </div>
      <div class="q-explain"></div>
    </div>`).join("");
}

function checkSoundQuiz() {
  document.querySelectorAll("#soundQuiz .quiz-q").forEach((q, i) => {
    const it = SOUND_QUIZ[i];
    const exp = q.querySelector(".q-explain");
    exp.style.display = "block";
    const opts = q.querySelectorAll(".q-opt");
    opts.forEach((o, j) => { o.classList.remove("correct","wrong"); if (j === it.ans) o.classList.add("correct"); });
    const chosen = q.querySelector(".q-opt.selected");
    if (chosen && Number(chosen.dataset.idx) !== it.ans) chosen.classList.add("wrong");
    exp.innerHTML = `💡 ${it.exp}`;
  });
}

function shuffleSoundQuiz() {
  const shuffled = [...SOUND_QUIZ].sort(() => Math.random() - 0.5);
  $("soundQuiz").innerHTML = shuffled.map((it, i) => `
    <div class="quiz-q" data-idx="${i}">
      <div class="q-text">${it.q}</div>
      <div class="q-opts">
        ${it.opts.map((o, j) => `<div class="q-opt" data-idx="${j}" onclick="selectOpt(this)">${o}</div>`).join("")}
      </div>
      <div class="q-explain"></div>
    </div>`).join("");
}

function checkPhonics() {
  document.querySelectorAll("#phonicsQuiz .quiz-q").forEach((q, i) => {
    const it = PHONICS_QUIZ[i];
    const exp = q.querySelector(".q-explain");
    exp.style.display = "block";
    const opts = q.querySelectorAll(".q-opt");
    opts.forEach((o, j) => { o.classList.remove("correct","wrong"); if (j === it.ans) o.classList.add("correct"); });
    const chosen = q.querySelector(".q-opt.selected");
    if (chosen && Number(chosen.dataset.idx) !== it.ans) chosen.classList.add("wrong");
    exp.innerHTML = `💡 ${it.exp}`;
  });
}

function shufflePhonics() {
  // 重排题目顺序
  const shuffled = [...PHONICS_QUIZ].sort(() => Math.random() - 0.5);
  $("phonicsQuiz").innerHTML = shuffled.map((it, i) => `
    <div class="quiz-q" data-idx="${i}">
      <div class="q-text">${it.q}</div>
      <div class="q-opts">
        ${it.opts.map((o, j) => `<div class="q-opt" data-idx="${j}" onclick="selectOpt(this)">${o}</div>`).join("")}
      </div>
      <div class="q-explain"></div>
    </div>`).join("");
}

// ---------- 基础练习 ----------
// 把例句按行拆分，英文开头的行自动加“🔊 读句”按钮
function exLinesHtml(ex) {
  return String(ex).split(/\n/).map(line => {
    const t = line.trim();
    if (!t) return "";
    if (/^[A-Za-z0-9]/.test(t) && /[A-Za-z]{2}/.test(t)) {
      return `<div class="exline">${t} <button class="link-speak" onclick="sayEx(this)">🔊 读句</button></div>`;
    }
    return `<div class="exline">${t}</div>`;
  }).join("");
}

// 补充题库（换一批时随机从中抽取，增加词汇量）
const BASIC_EXTRA = [
  // 字母
  { lv: 0, q: "字母'D'的小写是？", opts: ["d", "b", "p", "q"], ans: 0 },
  { lv: 0, q: "字母'P'的小写是？", opts: ["b", "p", "d", "q"], ans: 1 },
  { lv: 0, q: "字母'Q'的小写是？", opts: ["p", "d", "b", "q"], ans: 3 },
  { lv: 0, q: "字母'T'的小写是？", opts: ["f", "t", "l", "i"], ans: 1 },
  { lv: 0, q: "字母'Y'的小写是？", opts: ["v", "w", "y", "x"], ans: 2 },
  // 数字颜色
  { lv: 1, q: "'二' 是？", opts: ["two", "one", "three", "ten"], ans: 0 },
  { lv: 1, q: "'蓝色' 是？", opts: ["red", "blue", "black", "green"], ans: 1 },
  { lv: 1, q: "'七' 是？", opts: ["six", "seven", "eight", "nine"], ans: 1 },
  { lv: 1, q: "'绿色' 是？", opts: ["green", "grey", "purple", "orange"], ans: 0 },
  { lv: 1, q: "'黑色' 是？", opts: ["white", "black", "brown", "pink"], ans: 1 },
  { lv: 1, q: "'十' 是？", opts: ["nine", "ten", "eleven", "twelve"], ans: 1 },
  { lv: 1, q: "'白色' 是？", opts: ["black", "white", "purple", "pink"], ans: 1 },
  // 问候
  { lv: 2, q: "'早上好' 是？", opts: ["Good morning", "Good night", "Good evening", "Hi"], ans: 0 },
  { lv: 2, q: "'晚安' 是？", opts: ["Good morning", "Good night", "Hello", "Bye"], ans: 1 },
  { lv: 2, q: "'请问'（打扰一下） 是？", opts: ["Sorry", "Thank you", "Excuse me", "Please"], ans: 2 },
  { lv: 2, q: "'不客气' 是？", opts: ["You're welcome", "Sorry", "Goodbye", "Please"], ans: 0 },
  // 动词
  { lv: 3, q: "'写' 是？", opts: ["read", "write", "speak", "listen"], ans: 1 },
  { lv: 3, q: "'听' 是？", opts: ["write", "listen", "speak", "read"], ans: 1 },
  { lv: 3, q: "'说'（说话） 是？", opts: ["speak", "hear", "walk", "run"], ans: 0 },
  { lv: 3, q: "'走' 是？", opts: ["run", "walk", "jump", "sit"], ans: 1 },
  { lv: 3, q: "'睡' 是？", opts: ["eat", "drink", "sleep", "read"], ans: 2 },
  { lv: 3, q: "'坐' 是？", opts: ["sit", "stand", "jump", "run"], ans: 0 },
  { lv: 3, q: "'站' 是？", opts: ["sit", "stand", "jump", "run"], ans: 1 },
  // 名词
  { lv: 4, q: "'笔' 是？", opts: ["book", "pen", "pencil", "ruler"], ans: 1 },
  { lv: 4, q: "'包' 是？", opts: ["bag", "box", "cup", "cap"], ans: 0 },
  { lv: 4, q: "'椅子' 是？", opts: ["chair", "table", "bed", "desk"], ans: 0 },
  { lv: 4, q: "'床' 是？", opts: ["chair", "bed", "desk", "door"], ans: 1 },
  { lv: 4, q: "'门' 是？", opts: ["door", "window", "wall", "floor"], ans: 0 },
  { lv: 4, q: "'窗' 是？", opts: ["door", "window", "wall", "floor"], ans: 1 },
  { lv: 4, q: "'猫' 是？", opts: ["dog", "cat", "bird", "fish"], ans: 1 },
  { lv: 4, q: "'狗' 是？", opts: ["dog", "cat", "bird", "fish"], ans: 0 },
  // 句子
  { lv: 5, q: "'我喜欢读书' 正确说法？", opts: ["I like reading.", "I reading like.", "Like I reading.", "Reading I like."], ans: 0 },
  { lv: 5, q: "'这是一本书' 正确说法？", opts: ["This a book is.", "This is a book.", "A book this is.", "Is this a book."], ans: 1 },
  { lv: 5, q: "'我想喝水' 正确说法？", opts: ["I want to drink water.", "I drink want water.", "Water want I drink.", "Drink water want I."], ans: 0 }
];

function shuffleBasic() {
  // 每个级别：原题 + 补充题合并，随机抽5题
  BASIC_LEVELS.forEach((lv, li) => {
    const extras = BASIC_EXTRA.filter(e => e.lv === li).map(e => ({ q: e.q, opts: e.opts, ans: e.ans }));
    const pool = [...lv.items, ...extras];
    const picked = pool.sort(() => Math.random() - 0.5).slice(0, 5);
    const holder = document.querySelector(`[data-basic="${li}"]`);
    if (holder) {
      holder.innerHTML = picked.map((it, i) => `
        <div class="quiz-q" data-idx="${i}">
          <div class="q-text">${it.q}</div>
          <div class="q-opts">
            ${it.opts.map((o, j) => `<div class="q-opt" data-idx="${j}" onclick="selectOpt(this)">${o}</div>`).join("")}
          </div>
          <div class="q-explain" style="display:none"></div>
        </div>`).join("");
    }
  });
}

function renderBasic() {
  $("basicList").innerHTML = BASIC_LEVELS.map((lv, li) => `
    <div class="card basic-level">
      <h3>${lv.title}</h3>
      <p class="muted">${lv.intro}</p>
      <div data-basic="${li}"></div>
      <button class="btn primary" onclick="checkBasic(${li})">查看答案</button>
    </div>`).join("");

  BASIC_LEVELS.forEach((lv, li) => {
    const holder = document.querySelector(`[data-basic="${li}"]`);
    holder.innerHTML = lv.items.map((it, i) => `
      <div class="quiz-q" data-idx="${i}">
        <div class="q-text">${it.q}</div>
        <div class="q-opts">
          ${it.opts.map((o, j) => `<div class="q-opt" data-idx="${j}" onclick="selectOpt(this)">${o}</div>`).join("")}
        </div>
        <div class="q-explain" style="display:${it.exp?"none":"none"}"></div>
      </div>`).join("");
  });
}

function checkBasic(li) {
  const lv = BASIC_LEVELS[li];
  document.querySelectorAll(`[data-basic="${li}"] .quiz-q`).forEach((q, i) => {
    const it = lv.items[i];
    const opts = q.querySelectorAll(".q-opt");
    opts.forEach((o, j) => { o.classList.remove("correct","wrong"); if (j === it.ans) o.classList.add("correct"); });
    const chosen = q.querySelector(".q-opt.selected");
    if (chosen && Number(chosen.dataset.idx) !== it.ans) chosen.classList.add("wrong");
  });
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
window.addEventListener("DOMContentLoaded", () => {
  initTabs();
  renderToday();
  renderWordsAll();
  renderPhonics();
  renderBasic();
  renderGrammar();
  renderPractice();
  renderWriting();
  renderFromZero();
  renderCalendar();

  $("todaySubmit").addEventListener("click", checkTodayQuiz);
  $("todayDone").addEventListener("click", doCheckin);

  // 恢复进度条
  const today = dateStr(new Date());
  if (getCheckins()[today]) $("pmFill").style.width = "100%";
});
