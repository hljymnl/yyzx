/* 辽宁学位英语 · 每日轻松学 — 学习数据 */

// ============ 单词库（按天分组） ============
// level: core核心 / high高频 / adv进阶
const WORD_DAYS = [
  {
    day: 1, level: "core",
    words: [
      { w: "ability", ph: "/əˈbɪləti/", pos: "n.", means: "能力，才能", ex: "She has the ability to solve problems. 她有解决问题的能力。" },
      { w: "access", ph: "/ˈækses/", pos: "n./v.", means: "进入，使用权；接近", ex: "Students have free access to the library. 学生可免费使用图书馆。" },
      { w: "achieve", ph: "/əˈtʃiːv/", pos: "v.", means: "实现，达到", ex: "Work hard to achieve your goals. 努力实现你的目标。" },
      { w: "active", ph: "/ˈæktɪv/", pos: "adj.", means: "积极的，活跃的", ex: "He is active in class. 他在课堂上很活跃。" },
      { w: "advantage", ph: "/ədˈvɑːntɪdʒ/", pos: "n.", means: "优势，好处", ex: "Speaking English is a great advantage. 会说英语是一大优势。" },
      { w: "advice", ph: "/ədˈvaɪs/", pos: "n.", means: "建议（不可数）", ex: "Let me give you some advice. 让我给你一些建议。" },
      { w: "affect", ph: "/əˈfekt/", pos: "v.", means: "影响", ex: "Weather affects our mood. 天气影响我们的心情。" },
      { w: "behavior", ph: "/bɪˈheɪvjə/", pos: "n.", means: "行为，举止", ex: "Good behavior is praised. 良好的行为会受到表扬。" },
      { w: "benefit", ph: "/ˈbenɪfɪt/", pos: "n./v.", means: "利益；使受益", ex: "Exercise benefits our health. 锻炼有益健康。" },
      { w: "choice", ph: "/tʃɔɪs/", pos: "n.", means: "选择", ex: "It is a difficult choice. 这是一个艰难的选择。" }
    ]
  },
  {
    day: 2, level: "core",
    words: [
      { w: "common", ph: "/ˈkɒmən/", pos: "adj.", means: "普通的，共同的", ex: "This is a common mistake. 这是常见的错误。" },
      { w: "compare", ph: "/kəmˈpeə/", pos: "v.", means: "比较", ex: "Compare the two answers. 比较这两个答案。" },
      { w: "complete", ph: "/kəmˈpliːt/", pos: "v./adj.", means: "完成；完整的", ex: "Complete the form, please. 请填完这张表。" },
      { w: "condition", ph: "/kənˈdɪʃn/", pos: "n.", means: "条件，状况", ex: "The condition is getting better. 情况正在好转。" },
      { w: "continue", ph: "/kənˈtɪnjuː/", pos: "v.", means: "继续", ex: "Please continue speaking. 请继续说。" },
      { w: "culture", ph: "/ˈkʌltʃə/", pos: "n.", means: "文化", ex: "I love Chinese culture. 我喜欢中国文化。" },
      { w: "decide", ph: "/dɪˈsaɪd/", pos: "v.", means: "决定", ex: "We decided to go by bus. 我们决定坐公交去。" },
      { w: "develop", ph: "/dɪˈveləp/", pos: "v.", means: "发展，开发", ex: "Cities develop quickly. 城市发展很快。" },
      { w: "different", ph: "/ˈdɪfrənt/", pos: "adj.", means: "不同的", ex: "They have different ideas. 他们有不同想法。" },
      { w: "difficult", ph: "/ˈdɪfɪkəlt/", pos: "adj.", means: "困难的", ex: "The question is difficult. 这个问题很难。" }
    ]
  },
  { day: 3, level: "high",
    words: [
      { w: "efficient", ph: "/ɪˈfɪʃnt/", pos: "adj.", means: "高效的", ex: "This is an efficient method. 这是个高效的方法。" },
      { w: "environment", ph: "/ɪnˈvaɪrənmənt/", pos: "n.", means: "环境", ex: "We should protect the environment. 我们应该保护环境。" },
      { w: "especially", ph: "/ɪˈspeʃəli/", pos: "adv.", means: "尤其", ex: "I like fruit, especially apples. 我喜欢水果，尤其是苹果。" },
      { w: "experience", ph: "/ɪkˈspɪəriəns/", pos: "n./v.", means: "经验；经历", ex: "She has rich teaching experience. 她有丰富的教学经验。" },
      { w: "improve", ph: "/ɪmˈpruːv/", pos: "v.", means: "提高，改善", ex: "Practice improves your English. 练习能提高你的英语。" },
      { w: "important", ph: "/ɪmˈpɔːtnt/", pos: "adj.", means: "重要的", ex: "Education is very important. 教育非常重要。" },
      { w: "increase", ph: "/ɪnˈkriːs/", pos: "v./n.", means: "增加", ex: "The price increased again. 价格又上涨了。" },
      { w: "knowledge", ph: "/ˈnɒlɪdʒ/", pos: "n.", means: "知识", ex: "Knowledge is power. 知识就是力量。" },
      { w: "necessary", ph: "/ˈnesəsəri/", pos: "adj.", means: "必要的", ex: "Sleep is necessary for health. 睡眠对健康是必要的。" },
      { w: "practice", ph: "/ˈpræktɪs/", pos: "n./v.", means: "练习；实践", ex: "Practice makes perfect. 熟能生巧。" }
    ]
  },
  { day: 4, level: "high",
    words: [
      { w: "provide", ph: "/prəˈvaɪd/", pos: "v.", means: "提供", ex: "The company provides good service. 这家公司提供优质服务。" },
      { w: "purpose", ph: "/ˈpɜːpəs/", pos: "n.", means: "目的", ex: "The purpose of the meeting is to plan. 会议的目的是做计划。" },
      { w: "require", ph: "/rɪˈkwaɪə/", pos: "v.", means: "要求，需要", ex: "This job requires patience. 这份工作需要耐心。" },
      { w: "result", ph: "/rɪˈzʌlt/", pos: "n.", means: "结果", ex: "The result was surprising. 结果令人惊讶。" },
      { w: "society", ph: "/səˈsaɪəti/", pos: "n.", means: "社会", ex: "We live in a fast-changing society. 我们生活在一个快速变化的社会。" },
      { w: "success", ph: "/səkˈses/", pos: "n.", means: "成功", ex: "Success comes from hard work. 成功来自努力。" },
      { w: "suggest", ph: "/səˈdʒest/", pos: "v.", means: "建议", ex: "I suggest you study every day. 我建议你每天学习。" },
      { w: "support", ph: "/səˈpɔːt/", pos: "v./n.", means: "支持", ex: "My family supports me. 我的家人支持我。" },
      { w: "traditional", ph: "/trəˈdɪʃənl/", pos: "adj.", means: "传统的", ex: "Traditional culture is valuable. 传统文化很宝贵。" },
      { w: "whether", ph: "/ˈweðə/", pos: "conj.", means: "是否", ex: "I don't know whether he will come. 我不知道他是否会来。" }
    ]
  },
  { day: 5, level: "adv",
    words: [
      { w: "accumulate", ph: "/əˈkjuːmjəleɪt/", pos: "v.", means: "积累", ex: "Knowledge accumulates over time. 知识随时间积累。" },
      { w: "appreciate", ph: "/əˈpriːʃieɪt/", pos: "v.", means: "感激；欣赏", ex: "I appreciate your help. 我感谢你的帮助。" },
      { w: "appropriate", ph: "/əˈprəʊpriət/", pos: "adj.", means: "适当的", ex: "Choose appropriate words. 选择适当的词语。" },
      { w: "commitment", ph: "/kəˈmɪtmənt/", pos: "n.", means: "承诺；投入", ex: "Learning needs commitment. 学习需要投入。" },
      { w: "distribution", ph: "/ˌdɪstrɪˈbjuːʃn/", pos: "n.", means: "分配，分布", ex: "Equal distribution of resources matters. 资源公平分配很重要。" },
      { w: "evaluate", ph: "/ɪˈvæljueɪt/", pos: "v.", means: "评估", ex: "We need to evaluate the plan. 我们需要评估这个计划。" },
      { w: "fundamental", ph: "/ˌfʌndəˈmentl/", pos: "adj.", means: "基本的，根本的", ex: "Reading is fundamental to learning. 阅读是学习的基础。" },
      { w: "inevitable", ph: "/ɪnˈevɪtəbl/", pos: "adj.", means: "不可避免的", ex: "Change is inevitable. 变化是不可避免的。" },
      { w: "priority", ph: "/praɪˈɒrəti/", pos: "n.", means: "优先事项", ex: "Health should be a priority. 健康应是优先事项。" },
      { w: "significant", ph: "/sɪɡˈnɪfɪkənt/", pos: "adj.", means: "重要的，显著的", ex: "This is a significant change. 这是一个显著的变化。" }
    ]
  },
  { day: 6, level: "adv",
    words: [
      { w: "acquire", ph: "/əˈkwaɪə/", pos: "v.", means: "获得，学到", ex: "Children acquire language quickly. 孩子学语言很快。" },
      { w: "approximately", ph: "/əˈprɒksɪmətli/", pos: "adv.", means: "大约", ex: "It costs approximately 100 yuan. 大约花费100元。" },
      { w: "capacity", ph: "/kəˈpæsəti/", pos: "n.", means: "能力，容量", ex: "He has great capacity for work. 他工作能力很强。" },
      { w: "contribute", ph: "/kənˈtrɪbjuːt/", pos: "v.", means: "贡献，促成", ex: "Everyone can contribute to the team. 每个人都能为团队做贡献。" },
      { w: "distinguish", ph: "/dɪˈstɪŋɡwɪʃ/", pos: "v.", means: "区分，辨别", ex: "Learn to distinguish good from bad. 学会分清好坏。" },
      { w: "emphasis", ph: "/ˈemfəsɪs/", pos: "n.", means: "强调，重点", ex: "The school puts emphasis on practice. 学校强调实践。" },
      { w: "flexible", ph: "/ˈfleksəbl/", pos: "adj.", means: "灵活的", ex: "My schedule is flexible. 我的时间安排很灵活。" },
      { w: "generally", ph: "/ˈdʒenərəli/", pos: "adv.", means: "通常，大体上", ex: "It is generally believed that... 人们普遍认为……" },
      { w: "obstacle", ph: "/ˈɒbstəkl/", pos: "n.", means: "障碍", ex: "Language is not an obstacle now. 现在语言不是障碍。" },
      { w: "reinforce", ph: "/ˌriːɪnˈfɔːs/", pos: "v.", means: "加强，巩固", ex: "Review reinforces memory. 复习能巩固记忆。" }
    ]
  }
];

// ============ 语法库 ============
const GRAMMAR = [
  {
    title: "1. 名词的数（单复数）",
    body: "名词分为可数名词和不可数名词。\n· 可数名词有单复数：book→books, box→boxes, city→cities\n· 不可数名词无复数：water, information, advice（注意：information 和 advice 不可数，不能说 informations / advices）\n· 常考：many + 可数复数；much + 不可数",
    ex: "There is a lot of information on the Internet.（信息不可数，用 is）\nHe gave me some useful advice.（advice 不可数）"
  },
  {
    title: "2. 冠词 a / an / the",
    body: "· a/an 表示'一个'（泛指），the 表示'特指'或前面提过的东西。\n· 元音音素开头的词用 an：an apple, an hour（hour 的 h 不发音）\n· 固定搭配常考：in the morning, on the left, at night",
    ex: "I have a book. The book is interesting.\nShe is an honest girl.（honest 的 h 不发音，用 an）"
  },
  {
    title: "3. 代词（主格/宾格/物主代词）",
    body: "主格作主语：I, you, he, she, it, we, they\n宾格作宾语：me, you, him, her, it, us, them\n形容词性物主代词后接名词：my book, your name\n名词性物主代词相当于名词：mine, yours, his, hers, ours, theirs",
    ex: "She gave the book to me.（to + 宾格 me）\nThis is my pen. That pen is yours.（yours = your pen）"
  },
  {
    title: "4. 时态之一：一般现在时",
    body: "表示经常性动作、客观事实、习惯。\n· 主语第三人称单数（he/she/it）动词加 -s/-es\n· 否定用 doesn't/doesn't：He doesn't like coffee.\n· 常与频度副词连用：always, usually, often, sometimes, never",
    ex: "She goes to work by bus every day.\nThe earth goes around the sun.（客观事实）"
  },
  {
    title: "5. 一般过去时",
    body: "表示过去发生的动作或状态。\n· 规则动词加 -ed：work→worked, play→played\n· 不规则动词需记忆：go→went, come→came, see→saw, do→did\n· 常见时间词：yesterday, last week, ago, in 2020",
    ex: "I went to Beijing last summer.\nThey worked hard yesterday."
  },
  {
    title: "6. 一般将来时",
    body: "表示将来发生的动作。\n· will + 动词原形\n· be going to + 动词原形（打算、计划）\n· 常见时间词：tomorrow, next week, soon, in the future",
    ex: "I will call you tomorrow.\nWe are going to have a meeting next week."
  },
  {
    title: "7. 现在完成时",
    body: "表示过去发生且对现在有影响，或持续到现在的动作。\n· have/has + 过去分词（不规则需记忆：buy→bought, eat→eaten）\n· 常与 already, yet, ever, never, just, since, for 连用\n· since + 时间点；for + 时间段",
    ex: "I have already finished my homework.\nShe has lived here since 2018."
  },
  {
    title: "8. 被动语态",
    body: "be + 过去分词。当动作的承受者作主语时用被动。\n· 一般现在被动：is/are + done\n· 一般过去被动：was/were + done\n· 一般将来被动：will be + done",
    ex: "English is spoken all over the world.\nThe bridge was built in 2000."
  },
  {
    title: "9. 比较级与最高级",
    body: "比较级：两者比较。最高级：三者以上比较。\n· 单音节词加 -er/-est：tall → taller → tallest\n· 多音节词用 more/most：important → more important\n· 常见结构：much/even + 比较级（更……得多）",
    ex: "This book is more interesting than that one.\nShe is the tallest girl in her class."
  },
  {
    title: "10. 非谓语动词（ing / to do）",
    body: "· enjoy, finish, mind, keep 等后接动词 -ing\n· want, decide, hope, plan, would like 等后接 to do\n· stop doing（停止做）/ stop to do（停下来去做另一件事）",
    ex: "I enjoy reading English every day.\nShe decided to study harder."
  }
];

// ============ 每日阅读（带翻译） ============
const READINGS = [
  {
    en: "Learning English is like building a house. You need to lay a strong foundation first. Words are the bricks, and grammar is the cement. If you learn a little every day, the house will finally stand tall. Do not be afraid of making mistakes. Mistakes help you improve.",
    cn: "学英语就像盖房子。首先要打好坚实的基础。单词是砖块，语法是水泥。如果每天学一点点，房子终会拔地而起。不要害怕犯错，错误能帮你进步。"
  },
  {
    en: "Many adults want to get a bachelor's degree but worry about the English exam. The key is not talent but persistence. Studying 20 minutes every day is better than studying 3 hours once a week. Keep a small notebook for new words and review them before sleeping.",
    cn: "许多成年人想获得学士学位，却担心英语考试。关键不在于天赋，而在于坚持。每天学习20分钟，好过每周一次学3小时。准备一个小本子记新单词，睡前复习它们。"
  },
  {
    en: "Reading is the fastest way to enlarge your vocabulary. When you meet an unknown word, guess its meaning from the sentence first, then check a dictionary. Do not stop and look up every word, or you will lose interest. Focus on the main idea first.",
    cn: "阅读是扩大词汇量最快的方法。遇到不认识的词，先根据句子猜测词义，再查字典。不要停下来每个词都查，否则你会失去兴趣。先抓住大意。"
  }
];

// ============ 每日练习（学位英语常见题型：选择/完形） ============
// 每日练习从 PRACTICE 题库按天取
const TODAY_QUIZ = [
  {
    q: "I have lived in Shenyang ______ 2019.",
    opts: ["A. since", "B. for", "C. at", "D. in"],
    ans: 0,
    exp: "考查现在完成时搭配：since + 时间点（2019），for + 时间段。故选 A."
  },
  {
    q: "______ English well, you need to practice every day.",
    opts: ["A. Speak", "B. To speak", "C. Speaking", "D. Spoken"],
    ans: 1,
    exp: "不定式作目的状语：\"为了把英语说好\"。To speak 表示目的，故选 B."
  },
  {
    q: "The teacher told us ______ late for class.",
    opts: ["A. not be", "B. not to be", "C. don't be", "D. not being"],
    ans: 1,
    exp: "tell sb. to do sth. 的否定形式是 tell sb. not to do sth.，故选 B."
  }
];

// ============ 真题练习库 ============
const PRACTICE = [
  {
    type: "单项选择",
    items: [
      { q: "There are ______ students in our class.", opts: ["A. much", "B. many", "C. a few of", "D. a little"], ans: 1, exp: "students 是可数名词复数，用 many；much 修饰不可数。故选 B." },
      { q: "He ______ his homework before going to bed last night.", opts: ["A. finishes", "B. is finishing", "C. finished", "D. has finished"], ans: 2, exp: "last night 是一般过去时标志，用过去式 finished。故选 C." },
      { q: "This is the most beautiful place ______ I have ever visited.", opts: ["A. which", "B. where", "C. that", "D. what"], ans: 2, exp: "先行词被最高级 most beautiful 修饰时，关系代词只能用 that。故选 C." },
      { q: "I'm looking forward to ______ you again.", opts: ["A. see", "B. seeing", "C. saw", "D. seen"], ans: 1, exp: "look forward to + doing（to 是介词），后接动名词 seeing。故选 B." },
      { q: "It is important ______ English every morning.", opts: ["A. read", "B. reading", "C. to read", "D. reads"], ans: 2, exp: "it is important to do sth. 固定句型，不定式作真正主语。故选 C." }
    ]
  },
  {
    type: "完形填空",
    passage: "Many people want to learn English well. The first step is to build up your vocabulary. If you know enough (1)____, you can understand most sentences. (2)____, knowing words is not enough. You also need grammar, which helps you put words (3)____ order.",
    items: [
      { q: "(1)", opts: ["A. words", "B. money", "C. time", "D. food"], ans: 0, exp: "根据上下文，积累词汇即知道足够多的\"单词\"，故选 A." },
      { q: "(2)", opts: ["A. Therefore", "B. However", "C. Finally", "D. So"], ans: 1, exp: "前后是转折关系：知道单词还不够，\"然而\"还需要语法，故选 B." },
      { q: "(3)", opts: ["A. in", "B. on", "C. at", "D. by"], ans: 0, exp: "put...in order 意为\"按顺序排列\"，固定搭配，故选 A." }
    ]
  },
  {
    type: "阅读理解",
    passage: "The Internet has changed the way we study. Students can now find information online at any time. They can watch videos, read articles, and even take courses from famous universities. However, not everything on the Internet is correct. We should learn to judge what is useful and what is not.",
    items: [
      { q: "What is the passage mainly about?", opts: ["A. The Internet is bad.", "B. The Internet changes the way we study.", "C. Students should not use the Internet.", "D. Universities are online."], ans: 1, exp: "首句点明主旨：网络改变了我们的学习方式，故选 B." },
      { q: "According to the passage, what should we do on the Internet?", opts: ["A. Believe everything we see.", "B. Stop using it.", "C. Judge what is useful.", "D. Only watch videos."], ans: 2, exp: "文章结尾说 should learn to judge what is useful，故选 C." }
    ]
  },
  {
    type: "翻译（英译汉）",
    items: [
      { q: "Translate: Practice makes perfect.", opts: [], ans: -1, exp: "熟能生巧。" },
      { q: "Translate: Reading is the key to learning." , opts: [], ans: -1, exp: "阅读是学习的关键。" }
    ]
  }
];

// ============ 作文模板 ============
const WRITING = [
  {
    title: "观点类议论文（最常考）——万能模板",
    tpl: "标题：On (话题)\n\n开头段：\nAs we all know, (话题) has become a hot topic in our daily life. Different people hold different opinions about it.\n\n主体段（正方/反方）：\nSome people are in favor of the idea that (观点A). They think that (理由1). What's more, (理由2).\nHowever, others argue that (观点B). They believe (理由1). Moreover, (理由2).\n\n结尾段：\nIn my opinion, I am on the side of (你的观点). We should (建议). Only in this way can we (好处). In short, (总结).",
    tip: "把 (话题) 这类括号内容换成具体题目就行。开头、结尾背熟直接套，主体段填两三条理由即可保底得分。"
  },
  {
    title: "观点句万能句型（背熟套用）",
    tpl: "引出观点：\n· As far as I am concerned, ...（就我而言）\n· In my opinion, ...（在我看来）\n· It is widely believed that ...（人们普遍认为）\n\n给出理由：\n· First of all, ...（首先）\n· In addition, ...（此外）\n· What's more, ...（更重要的是）\n· Last but not least, ...（最后但同样重要）\n\n总结：\n· In a word, ...（总之）\n· To sum up, ...（总结）\n· Only in this way can we ...（只有这样才能）",
    tip: "连接词是加分点，能把简单句串成有逻辑的段落，背诵这组句型就能明显提分。"
  },
  {
    title: "常见话题素材：教育",
    tpl: "常用表达：\n· Lifelong learning 终身学习\n· acquire knowledge 获取知识\n· broaden one's horizons 开阔眼界\n· be beneficial to 对……有益\n\n例句：\nLearning is not limited to school. Lifelong learning helps adults keep up with the times. It is beneficial to both personal growth and career development.",
    tip: "学位英语作文常考\"教育、科技、环保、健康、大学生活\"这几个话题，把这些主题词背熟，写作就有话说。"
  },
  {
    title: "常见话题素材：科技与手机",
    tpl: "常用表达：\n· modern technology 现代科技\n· bring convenience 带来便利\n· on the other hand 另一方面\n· be addicted to 沉迷于\n\n例句：\nSmartphones bring great convenience to our life. We can chat, study and shop online anytime. However, some people are addicted to their phones and ignore family and work. We should use technology wisely.",
    tip: "\"利弊类\"话题很常考：先说好处，再说过度使用的坏处，结尾给出建议\"合理使用\"，结构完整即可。"
  }
];

// ============ 自然拼读 ============
const PHONICS_INTRO = [
  { t: "什么是自然拼读？", d: "英语单词由「音」组成。自然拼读教你：看到字母或字母组合，就知道发什么音，从而「见词能读、听音能写」。" },
  { t: "26个字母的读音", d: "先熟练 ABC…Z 的读音，这是基础。点下方喇叭可听示范。" },
  { t: "元音 vs 辅音", d: "元音字母：a、e、i、o、u（发音响亮）；辅音字母：其余21个（发音受阻）。单词里的「元音」就像汉字里的声母韵母，是核心。" },
  { t: "学习建议", d: "每天学1-2个发音规律，配合当天的单词练习，边学边用，最有效。" }
];

const PHONICS_VOWELS = [
  { sym: "a", phon: "/æ/", ex: "apple 苹果, cat 猫, hat 帽子", sound: "apple" },
  { sym: "e", phon: "/e/", ex: "egg 蛋, pen 钢笔, red 红色", sound: "egg" },
  { sym: "i", phon: "/ɪ/", ex: "it 它, fish 鱼, big 大的", sound: "fish" },
  { sym: "o", phon: "/ɒ/", ex: "box 盒子, dog 狗, hot 热", sound: "box" },
  { sym: "u", phon: "/ʌ/", ex: "up 向上, cup 杯子, bus 公交车", sound: "cup" }
];

const PHONICS_COMBOS = [
  { sym: "ee / ea", phon: "/iː/", ex: "see 看见, tea 茶, three 三", sound: "see" },
  { sym: "oo", phon: "/uː/", ex: "book 书, good 好, food 食物", sound: "book" },
  { sym: "sh", phon: "/ʃ/", ex: "she 她, fish 鱼, shop 商店", sound: "she" },
  { sym: "ch", phon: "/tʃ/", ex: "chair 椅子, much 许多, China 中国", sound: "chair" },
  { sym: "th", phon: "/θ/ 或 /ð/", ex: "three 三, this 这, thank 谢谢", sound: "three" },
  { sym: "ck", phon: "/k/", ex: "back 后面, black 黑色, clock 钟", sound: "black" },
  { sym: "ai / ay", phon: "/eɪ/", ex: "rain 雨, play 玩, day 天", sound: "rain" },
  { sym: "ou / ow", phon: "/aʊ/", ex: "house 房子, cow 牛, now 现在", sound: "house" }
];

const PHONICS_QUIZ = [
  { q: "字母组合 'sh' 发什么音？", opts: ["A. /ʃ/ (像\"嘘\")", "B. /k/", "C. /iː/"], ans: 0, exp: "sh 发 /ʃ/，如 she、fish、shop。" },
  { q: "哪个单词里的 'a' 发 /æ/？", opts: ["A. cat 猫", "B. cake 蛋糕", "C. name 名字"], ans: 0, exp: "cat 的 a 发短音 /æ/；cake/name 的 a 发 /eɪ/（因为有字母 e 结尾）。" },
  { q: "字母组合 'ee' 发什么音？", opts: ["A. /uː/", "B. /iː/", "C. /tʃ/"], ans: 1, exp: "ee 发长音 /iː/，如 see、three。" },
  { q: "哪个单词里的 'oo' 读 /ʊ/？", opts: ["A. book 书", "B. food 食物", "C. zoo 动物园"], ans: 0, exp: "food/zoo 的 oo 发 /uː/，而 book/good 的 oo 发短音 /ʊ/。" },
  { q: "字母组合 'ch' 发什么音？", opts: ["A. /ʃ/", "B. /tʃ/", "C. /θ/"], ans: 1, exp: "ch 发 /tʃ/，如 chair、China。" }
];

// ============ 基础练习（从零开始） ============
const BASIC_LEVELS = [
  {
    title: "第1级 · 认识26个字母",
    intro: "先认识字母的大小写，这是所有英语的基础。",
    items: [
      { q: "字母'A'的小写是？", opts: ["a", "b", "c", "e"], ans: 0 },
      { q: "字母'G'的小写是？", opts: ["g", "j", "y", "h"], ans: 0 },
      { q: "字母'B'的小写是？", opts: ["d", "b", "p", "q"], ans: 1 },
      { q: "字母'M'的小写是？", opts: ["n", "w", "m", "v"], ans: 2 },
      { q: "字母'R'的小写是？", opts: ["r", "p", "s", "t"], ans: 0 }
    ]
  },
  {
    title: "第2级 · 数字和颜色",
    intro: "学会这些最常用的基础词，见到就能认。",
    items: [
      { q: "'一' 用英语怎么说？", opts: ["one", "two", "three", "four"], ans: 0 },
      { q: "'红色' 是？", opts: ["green", "blue", "red", "black"], ans: 2 },
      { q: "'三' 是？", opts: ["one", "three", "two", "ten"], ans: 1 },
      { q: "'黄色' 是？", opts: ["white", "yellow", "purple", "grey"], ans: 1 },
      { q: "'五' 是？", opts: ["four", "five", "six", "seven"], ans: 1 }
    ]
  },
  {
    title: "第3级 · 常用问候语",
    intro: "这些句子你每天都能用，背熟非常实用。",
    items: [
      { q: "'你好' 是？", opts: ["Goodbye", "Hello / Hi", "Thank you", "Sorry"], ans: 1 },
      { q: "'谢谢' 是？", opts: ["please", "sorry", "thank you", "you're welcome"], ans: 2 },
      { q: "'再见' 是？", opts: ["Hello", "Goodbye / Bye", "Morning", "Good night"], ans: 1 },
      { q: "'对不起' 是？", opts: ["Thank you", "Sorry", "Excuse me", "Please"], ans: 1 },
      { q: "'请' 是？", opts: ["Please", "Thanks", "Sorry", "Hi"], ans: 0 }
    ]
  },
  {
    title: "第4级 · 常用动词（动作）",
    intro: "句子里的动作词，学会这些就能说简单句子。",
    items: [
      { q: "'吃' 是？", opts: ["drink", "eat", "run", "walk"], ans: 1 },
      { q: "'喝' 是？", opts: ["eat", "sleep", "drink", "read"], ans: 2 },
      { q: "'跑' 是？", opts: ["walk", "run", "jump", "sit"], ans: 1 },
      { q: "'读' 是？", opts: ["write", "listen", "read", "speak"], ans: 2 },
      { q: "'看'（看书） 是？", opts: ["read", "look", "see", "watch"], ans: 0 }
    ]
  },
  {
    title: "第5级 · 常见名词（东西）",
    intro: "身边常见的东西，见面就能认出来。",
    items: [
      { q: "'书' 是？", opts: ["book", "pen", "bag", "desk"], ans: 0 },
      { q: "'水' 是？", opts: ["milk", "tea", "water", "juice"], ans: 2 },
      { q: "'杯子' 是？", opts: ["box", "cup", "cap", "can"], ans: 1 },
      { q: "'桌子' 是？", opts: ["chair", "table/desk", "bed", "door"], ans: 1 },
      { q: "'人' 是？", opts: ["man", "people/person", "woman", "child"], ans: 1 }
    ]
  },
  {
    title: "第6级 · 简单句子",
    intro: "用学过的词组成最简单的句子，迈出说英语第一步。",
    items: [
      { q: "'我吃一个苹果' 正确说法？", opts: ["I apple eat.", "I eat an apple.", "Apple I eat.", "Eat I apple."], ans: 1 },
      { q: "'她每天读书' 正确说法？", opts: ["She reads every day.", "Reads she every day.", "She every day read.", "Every day she read."], ans: 0 },
      { q: "'他喜欢水' 正确说法？", opts: ["He water likes.", "He like water.", "He likes water.", "Likes he water."], ans: 2 },
      { q: "'我们是一家人' 正确说法？", opts: ["We are a family.", "We is a family.", "We am a family.", "A family we are."], ans: 0 }
    ]
  }
];
