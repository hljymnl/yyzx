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
    ex: "There is a lot of information on the Internet.|互联网上有很多信息。（information 不可数，用 is）\\nHe gave me some useful advice.|他给了我一些有用的建议。（advice 不可数）"
  },
  {
    title: "2. 冠词 a / an / the",
    body: "· a/an 表示'一个'（泛指），the 表示'特指'或前面提过的东西。\n· 元音音素开头的词用 an：an apple, an hour（hour 的 h 不发音）\n· 固定搭配常考：in the morning, on the left, at night",
    ex: "I have a book. The book is interesting.|我有一本书。这本书很有趣。\\nShe is an honest girl.|她是一个诚实的女孩。（honest 的 h 不发音，用 an）"
  },
  {
    title: "3. 代词（主格/宾格/物主代词）",
    body: "主格作主语：I, you, he, she, it, we, they\n宾格作宾语：me, you, him, her, it, us, them\n形容词性物主代词后接名词：my book, your name\n名词性物主代词相当于名词：mine, yours, his, hers, ours, theirs",
    ex: "She gave the book to me.|她把这本书给了我。（to + 宾格 me）\\nThis is my pen. That pen is yours.|这是我的钢笔。那支钢笔是你的。（yours = your pen）"
  },
  {
    title: "4. 时态之一：一般现在时",
    body: "表示经常性动作、客观事实、习惯。\n· 主语第三人称单数（he/she/it）动词加 -s/-es\n· 否定用 doesn't/doesn't：He doesn't like coffee.\n· 常与频度副词连用：always, usually, often, sometimes, never",
    ex: "She goes to work by bus every day.|她每天坐公交车去上班。\\nThe earth goes around the sun.|地球绕着太阳转。（客观事实）"
  },
  {
    title: "5. 一般过去时",
    body: "表示过去发生的动作或状态。\n· 规则动词加 -ed：work→worked, play→played\n· 不规则动词需记忆：go→went, come→came, see→saw, do→did\n· 常见时间词：yesterday, last week, ago, in 2020",
    ex: "I went to Beijing last summer.|去年夏天我去了北京。\\nThey worked hard yesterday.|他们昨天工作很努力。"
  },
  {
    title: "6. 一般将来时",
    body: "表示将来发生的动作。\n· will + 动词原形\n· be going to + 动词原形（打算、计划）\n· 常见时间词：tomorrow, next week, soon, in the future",
    ex: "I will call you tomorrow.|我明天会给你打电话。\\nWe are going to have a meeting next week.|我们下周要开一个会议。"
  },
  {
    title: "7. 现在完成时",
    body: "表示过去发生且对现在有影响，或持续到现在的动作。\n· have/has + 过去分词（不规则需记忆：buy→bought, eat→eaten）\n· 常与 already, yet, ever, never, just, since, for 连用\n· since + 时间点；for + 时间段",
    ex: "I have already finished my homework.|我已经完成了作业。\\nShe has lived here since 2018.|她从 2018 年起就住在这里。"
  },
  {
    title: "8. 被动语态",
    body: "be + 过去分词。当动作的承受者作主语时用被动。\n· 一般现在被动：is/are + done\n· 一般过去被动：was/were + done\n· 一般将来被动：will be + done",
    ex: "English is spoken all over the world.|全世界都在说英语。\\nThe bridge was built in 2000.|这座桥建于 2000 年。"
  },
  {
    title: "9. 比较级与最高级",
    body: "比较级：两者比较。最高级：三者以上比较。\n· 单音节词加 -er/-est：tall → taller → tallest\n· 多音节词用 more/most：important → more important\n· 常见结构：much/even + 比较级（更……得多）",
    ex: "This book is more interesting than that one.|这本书比那本更有趣。\\nShe is the tallest girl in her class.|她是班上最高的女孩。"
  },
  {
    title: "10. 非谓语动词（ing / to do）",
    body: "· enjoy, finish, mind, keep 等后接动词 -ing\n· want, decide, hope, plan, would like 等后接 to do\n· stop doing（停止做）/ stop to do（停下来去做另一件事）",
    ex: "I enjoy reading English every day.|我喜欢每天读英语。\\nShe decided to study harder.|她决定更加努力学习。"
  }
];

// ============ 每日阅读（带翻译） ============
const READINGS = [
  {
    en: "Learning English is like building a house. You need to lay a strong foundation first. Words are the bricks, and grammar is the cement. If you learn a little every day, the house will finally stand tall. Do not be afraid of making mistakes. Mistakes help you improve.",
    cn: "学英语就像盖房子。首先要打好坚实的基础。单词是砖块，语法是水泥。如果每天学一点点，房子终会拔地而起。不要害怕犯错，错误能帮你进步。",
    sents: [
      { en: "Learning English is like building a house.", cn: "学英语就像盖房子。" },
      { en: "You need to lay a strong foundation first.", cn: "首先要打好坚实的基础。" },
      { en: "Words are the bricks, and grammar is the cement.", cn: "单词是砖块，语法是水泥。" },
      { en: "If you learn a little every day, the house will finally stand tall.", cn: "如果每天学一点点，房子终会拔地而起。" },
      { en: "Do not be afraid of making mistakes.", cn: "不要害怕犯错。" },
      { en: "Mistakes help you improve.", cn: "错误能帮你进步。" }
    ]
  },
  {
    en: "Many adults want to get a bachelor's degree but worry about the English exam. The key is not talent but persistence. Studying 20 minutes every day is better than studying 3 hours once a week. Keep a small notebook for new words and review them before sleeping.",
    cn: "许多成年人想获得学士学位，却担心英语考试。关键不在于天赋，而在于坚持。每天学习20分钟，好过每周一次学3小时。准备一个小本子记新单词，睡前复习它们。",
    sents: [
      { en: "Many adults want to get a bachelor's degree but worry about the English exam.", cn: "许多成年人想获得学士学位，却担心英语考试。" },
      { en: "The key is not talent but persistence.", cn: "关键不在于天赋，而在于坚持。" },
      { en: "Studying 20 minutes every day is better than studying 3 hours once a week.", cn: "每天学习20分钟，好过每周一次学3小时。" },
      { en: "Keep a small notebook for new words and review them before sleeping.", cn: "准备一个小本子记新单词，睡前复习它们。" }
    ]
  },
  {
    en: "Reading is the fastest way to enlarge your vocabulary. When you meet an unknown word, guess its meaning from the sentence first, then check a dictionary. Do not stop and look up every word, or you will lose interest. Focus on the main idea first.",
    cn: "阅读是扩大词汇量最快的方法。遇到不认识的词，先根据句子猜测词义，再查字典。不要停下来每个词都查，否则你会失去兴趣。先抓住大意。",
    sents: [
      { en: "Reading is the fastest way to enlarge your vocabulary.", cn: "阅读是扩大词汇量最快的方法。" },
      { en: "When you meet an unknown word, guess its meaning from the sentence first, then check a dictionary.", cn: "遇到不认识的词，先根据句子猜测词义，再查字典。" },
      { en: "Do not stop and look up every word, or you will lose interest.", cn: "不要停下来每个词都查，否则你会失去兴趣。" },
      { en: "Focus on the main idea first.", cn: "先抓住大意。" }
    ]
  }
];

// ============ 每日练习（学位英语常见题型：选择/完形） ============
// 每日练习从 PRACTICE 题库按天取
const TODAY_QUIZ = [
  {
    q: "I have lived in Shenyang ______ 2019.",
    qc: "我自 2019 年起就一直住在沈阳 ______。",
    opts: ["A. since", "B. for", "C. at", "D. in"],
    ans: 0,
    exp: "考查现在完成时搭配：since + 时间点（2019），for + 时间段。故选 A."
  },
  {
    q: "______ English well, you need to practice every day.",
    qc: "要想 ______ 好英语，你需要每天练习。",
    opts: ["A. Speak", "B. To speak", "C. Speaking", "D. Spoken"],
    ans: 1,
    exp: "不定式作目的状语：\"为了把英语说好\"。To speak 表示目的，故选 B."
  },
  {
    q: "The teacher told us ______ late for class.",
    qc: "老师告诉我们上课 ______ 迟到。",
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
      { q: "There are ______ students in our class.",
      qc: "我们班有 ______ 名学生。", opts: ["A. much", "B. many", "C. a few of", "D. a little"], ans: 1, exp: "students 是可数名词复数，用 many；much 修饰不可数。故选 B." },
      { q: "He ______ his homework before going to bed last night.",
      qc: "他昨晚睡觉前 ______ 了作业。", opts: ["A. finishes", "B. is finishing", "C. finished", "D. has finished"], ans: 2, exp: "last night 是一般过去时标志，用过去式 finished。故选 C." },
      { q: "This is the most beautiful place ______ I have ever visited.",
      qc: "这是我所游览过的最美的地方 ______。", opts: ["A. which", "B. where", "C. that", "D. what"], ans: 2, exp: "先行词被最高级 most beautiful 修饰时，关系代词只能用 that。故选 C." },
      { q: "I'm looking forward to ______ you again.",
      qc: "我盼望着再次 ______ 你。", opts: ["A. see", "B. seeing", "C. saw", "D. seen"], ans: 1, exp: "look forward to + doing（to 是介词），后接动名词 seeing。故选 B." },
      { q: "It is important ______ English every morning.",
      qc: "每天早上 ______ 英语很重要。", opts: ["A. read", "B. reading", "C. to read", "D. reads"], ans: 2, exp: "it is important to do sth. 固定句型，不定式作真正主语。故选 C." }
    ]
  },
  {
    type: "完形填空",
    passage: "Many people want to learn English well. The first step is to build up your vocabulary. If you know enough (1)____, you can understand most sentences. (2)____, knowing words is not enough. You also need grammar, which helps you put words (3)____ order.",
    passageCn: "很多人想把英语学好。第一步是积累词汇。如果你认识足够多的单词(1)＿＿，就能看懂大部分句子。(2)＿＿，光认识单词还不够。你还需要语法，它帮你把单词(3)＿＿顺序排列起来。",
    items: [
      { q: "(1)",
      qc: "空(1)：应填一个名词，指积累「单词」。", opts: ["A. words", "B. money", "C. time", "D. food"], ans: 0, exp: "根据上下文，积累词汇即知道足够多的\"单词\"，故选 A." },
      { q: "(2)",
      qc: "空(2)：此处表转折。", opts: ["A. Therefore", "B. However", "C. Finally", "D. So"], ans: 1, exp: "前后是转折关系：知道单词还不够，\"然而\"还需要语法，故选 B." },
      { q: "(3)",
      qc: "空(3)：考查 put...in order（按顺序排列）。", opts: ["A. in", "B. on", "C. at", "D. by"], ans: 0, exp: "put...in order 意为\"按顺序排列\"，固定搭配，故选 A." }
    ]
  },
  {
    type: "阅读理解",
    passage: "The Internet has changed the way we study. Students can now find information online at any time. They can watch videos, read articles, and even take courses from famous universities. However, not everything on the Internet is correct. We should learn to judge what is useful and what is not.",
    passageCn: "互联网改变了我们的学习方式。学生现在随时都能在网上查找信息。他们可以看视频、读文章，甚至学习著名大学的课程。然而，网上的内容并非全是对的。我们应该学会判断哪些有用、哪些没用。",
    items: [
      { q: "What is the passage mainly about?",
      qc: "这篇文章主要讲什么？", opts: ["A. The Internet is bad.", "B. The Internet changes the way we study.", "C. Students should not use the Internet.", "D. Universities are online."], ans: 1, exp: "首句点明主旨：网络改变了我们的学习方式，故选 B." },
      { q: "According to the passage, what should we do on the Internet?",
      qc: "根据文章，我们在互联网上应该怎么做？", opts: ["A. Believe everything we see.", "B. Stop using it.", "C. Judge what is useful.", "D. Only watch videos."], ans: 2, exp: "文章结尾说 should learn to judge what is useful，故选 C." }
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
    cn: "整篇中文意思：众所周知，（话题）已成为我们日常生活中的热门话题，不同的人对此看法不同。一些人赞同（观点A），他们认为（理由1），更重要的是（理由2）。然而，另一些人认为（观点B），他们相信（理由1），而且（理由2）。在我看来，我支持（你的观点）。我们应该（建议）。只有这样我们才能（好处）。总之，（总结）。",
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
    cn: "学习不只限于学校。终身学习帮助成年人跟上时代。它对个人成长和职业发展都有益。",
    tip: "学位英语作文常考\"教育、科技、环保、健康、大学生活\"这几个话题，把这些主题词背熟，写作就有话说。"
  },
  {
    title: "常见话题素材：科技与手机",
    tpl: "常用表达：\n· modern technology 现代科技\n· bring convenience 带来便利\n· on the other hand 另一方面\n· be addicted to 沉迷于\n\n例句：\nSmartphones bring great convenience to our life. We can chat, study and shop online anytime. However, some people are addicted to their phones and ignore family and work. We should use technology wisely.",
    cn: "智能手机给我们的生活带来巨大便利。我们可以随时在线聊天、学习和购物。然而，有些人沉迷于手机，忽视了家人和工作。我们应该明智地使用科技。",
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

// ============ 单音基础（示范音） ============
// sound: 示范音（读单个音标）, tip: 中文谐音+口型口诀, word: 例词(读单词)
// 用逗趣中文谐音，让零基础也能秒懂发音
const SOUNDS_SHORT = [
  { sym: "/i/", tip: "😜 像说'衣服'的衣，嘴角咧开", word: "it 它, big 大, sit 坐", sound: "it" },
  { sym: "/e/", tip: "😬 像说'诶哎'，嘴扁扁的", word: "egg 蛋, red 红, pen 笔", sound: "egg" },
  { sym: "/æ/", tip: "😮 张大嘴喊'啊'，像被吓到", word: "cat 猫, hat 帽, apple 苹果", sound: "cat" },
  { sym: "/ɒ/", tip: "🅾️ 圆嘴说'哦'，像恍然大悟", word: "box 盒, dog 狗, hot 热", sound: "box" },
  { sym: "/ʌ/", tip: "😲 短促的'阿'，像被轻撞一下", word: "cup 杯, bus 公交, up 向上", sound: "cup" },
  { sym: "/ʊ/", tip: "😯 短'呜'，像脚被踩到", word: "book 书, good 好, foot 脚", sound: "book" }
];

const SOUNDS_LONG = [
  { sym: "/iː/", tip: "🙂 长'一'，像笑得很开", word: "see 看见, tea 茶, three 三", sound: "see" },
  { sym: "/ɑː/", tip: "😧 张大嘴长'啊'，像看牙医", word: "car 车, far 远, are 是", sound: "car" },
  { sym: "/ɔː/", tip: "🤔 圆嘴长'哦'，像想事情", word: "door 门, four 四, more 更多", sound: "door" },
  { sym: "/uː/", tip: "🙃 嘟嘴长'呜'，像吹口哨", word: "school 学校, food 食物, blue 蓝", sound: "school" },
  { sym: "/ɜː/", tip: "😆 卷舌长'饿'，像很饿", word: "her 她的, work 工作, girl 女孩", sound: "girl" },
  { sym: "/eɪ/", tip: "😄 '诶→衣'连起来，像'妹'的尾音", word: "day 天, play 玩, rain 雨", sound: "day" },
  { sym: "/aɪ/", tip: "😜 '啊→衣'连起来，像说'爱'", word: "my 我的, fly 飞, time 时间", sound: "my" },
  { sym: "/aʊ/", tip: "😲 '啊→屋'连起来，像说'傲'", word: "now 现在, cow 牛, house 房子", sound: "now" },
  { sym: "/əʊ/", tip: "😊 '饿→屋'轻轻滑，像说'欧'", word: "go 去, no 不, home 家", sound: "go" }
];

const SOUNDS_VOICELESS = [
  { sym: "/p/", tip: "💨 像'吹蜡烛'的'普'（不振动）", word: "pen 笔, map 地图, top 顶部", sound: "pen" },
  { sym: "/t/", tip: "💨 像'特'，舌尖弹上牙", word: "tea 茶, ten 十, hot 热", sound: "tea" },
  { sym: "/k/", tip: "💨 像'克'，像喉咙咳痰", word: "cat 猫, black 黑, key 钥匙", sound: "key" },
  { sym: "/f/", tip: "💨 像'夫'，上牙咬下唇吹气", word: "fish 鱼, four 四, off 离开", sound: "fish" },
  { sym: "/s/", tip: "💨 像'丝'，像蛇吐信", word: "see 看, six 六, bus 公交", sound: "six" },
  { sym: "/ʃ/", tip: "😴 像'嘘'，让别人安静", word: "she 她, fish 鱼, shop 商店", sound: "she" },
  { sym: "/θ/", tip: "😝 吐舌头说'思'，像大舌头", word: "three 三, thank 谢谢, thin 瘦", sound: "three" },
  { sym: "/tʃ/", tip: "😋 像'吃'！简单直接", word: "chair 椅子, China 中国, much 多", sound: "chair" }
];

const SOUNDS_VOICED = [
  { sym: "/b/", tip: "🎵 像'波'，声带会震(跟p对照)", word: "box 盒, baby 婴儿, big 大", sound: "big" },
  { sym: "/d/", tip: "🎵 像'得'，声带会震(跟t对照)", word: "dog 狗, day 天, red 红", sound: "dog" },
  { sym: "/ɡ/", tip: "🎵 像'鸽'，声带会震(跟k对照)", word: "go 去, get 得到, big 大", sound: "go" },
  { sym: "/v/", tip: "🎵 像'夫'但声带震，上牙咬下唇", word: "very 很, five 五, love 爱", sound: "very" },
  { sym: "/z/", tip: "🎵 像'兹'，像蜜蜂嗡嗡", word: "zoo 动物园, zero 零, is 是", sound: "zoo" },
  { sym: "/ʒ/", tip: "🎵 像'日'，声带震得像含热糖", word: "usually 通常, pleasure 愉快", sound: "usually" },
  { sym: "/ð/", tip: "🎵 吐舌头说'则'，跟θ对照", word: "this 这, that 那, they 他们", sound: "this" },
  { sym: "/dʒ/", tip: "🎵 像'知'，'之'加一点振动", word: "job 工作, orange 桔子, jump 跳", sound: "job" },
  { sym: "/m/", tip: "😗 闭上嘴'嗯'，像吃好吃的东西", word: "my 我的, mother 妈妈, time 时间", sound: "my" },
  { sym: "/n/", tip: "😌 舌尖顶上牙'嗯'，像思考", word: "no 不, name 名字, ten 十", sound: "name" },
  { sym: "/l/", tip: "😛 舌尖顶上牙后'乐'，像舔到糖", word: "like 喜欢, love 爱, school 学校", sound: "like" },
  { sym: "/r/", tip: "😜 卷舌'日'，像外国人说中文", word: "red 红, run 跑, right 右", sound: "red" }
];

// 单音听辨练习：听音辨词（更简单，带中文提示）
const SOUND_QUIZ = [
  { q: "哪个词里有长音'一'（像笑开的iː）？", opts: ["A. big 大", "B. see 看见", "C. it 它", "D. sit 坐"], ans: 1, exp: "see 发 /siː/ 长音；big/it/sit 都发短音 /ɪ/。" },
  { q: "哪个词里有短音'啊'(æ)？", opts: ["A. cat 猫", "B. cake 蛋糕", "C. name 名字", "D. day 天"], ans: 0, exp: "cat 的 a 发短音 /æ/；cake/name/day 发 /eɪ/。" },
  { q: "哪个词里有'嘘'音(ʃ)？", opts: ["A. three 三", "B. ship 船", "C. this 这", "D. dog 狗"], ans: 1, exp: "ship 的 sh 发 /ʃ/（嘘）。" },
  { q: "哪个词里有'则'音(ð,吐舌)？", opts: ["A. thank 谢谢", "B. three 三", "C. this 这", "D. thin 瘦"], ans: 2, exp: "this 的 th 发浊音 /ð/；thank/three/thin 发清音 /θ/。" },
  { q: "哪个词里有长音'呜'(uː)？", opts: ["A. book 书", "B. foot 脚", "C. food 食物", "D. good 好"], ans: 2, exp: "food 的 oo 发长音 /uː/；book/foot/good 发短音 /ʊ/。" },
  { q: "哪个词里有'诶衣'(eɪ)？", opts: ["A. egg 蛋", "B. red 红", "C. day 天", "D. pen 笔"], ans: 2, exp: "day 的 ay 发 /eɪ/；egg/red/pen 发短音 /e/。" },
  { q: "哪个词里有'思'(θ,吐舌)？", opts: ["A. this 这", "B. three 三", "C. they 他们", "D. father 父亲"], ans: 1, exp: "three 的 th 发清音 /θ/；this/they/father 发浊音 /ð/。" },
  { q: "哪个词里有'知'(dʒ)？", opts: ["A. chair 椅子", "B. China 中国", "C. job 工作", "D. much 多"], ans: 2, exp: "job 的 j 发浊音 /dʒ/；chair/China/much 发清音 /tʃ/。" },
  { q: "哪个词里有长音'啊'(ɑː)？", opts: ["A. cat 猫", "B. car 汽车", "C. cup 杯", "D. cut 切"], ans: 1, exp: "car 的 ar 发 /ɑː/；cat/cup/cut 发短音。" },
  { q: "哪个词里有'波'音(b)？", opts: ["A. pen 笔", "B. tap 轻敲", "C. big 大", "D. tip 小费"], ans: 2, exp: "big 的 b 发浊音 /b/；pen/tap/tip 发清音 /p/。" }
];

// ============ 从零学英文：口语对话 ============
const SPOKEN = [
  { topic: "① 打招呼", lines: [
    { en: "Hello! How are you?", cn: "你好！你好吗？" },
    { en: "I'm fine, thank you. And you?", cn: "我很好，谢谢。你呢？" },
    { en: "Nice to meet you.", cn: "很高兴认识你。" },
    { en: "How's it going?", cn: "最近怎么样？" },
    { en: "Long time no see!", cn: "好久不见！" }
  ]},
  { topic: "② 自我介绍", lines: [
    { en: "My name is Li Ming.", cn: "我叫李明。" },
    { en: "I am from China.", cn: "我来自中国。" },
    { en: "I am a student.", cn: "我是一名学生。" },
    { en: "I like reading and music.", cn: "我喜欢阅读和音乐。" },
    { en: "I am happy to meet you all.", cn: "很高兴认识大家。" }
  ]},
  { topic: "③ 问路", lines: [
    { en: "Excuse me, where is the station?", cn: "打扰一下，车站在哪里？" },
    { en: "Go straight, then turn left.", cn: "直走，然后左转。" },
    { en: "Is it far from here?", cn: "离这里远吗？" },
    { en: "It's about ten minutes on foot.", cn: "步行大约十分钟。" },
    { en: "Thank you very much!", cn: "非常感谢！" }
  ]},
  { topic: "④ 点餐", lines: [
    { en: "May I have the menu, please?", cn: "请给我菜单。" },
    { en: "I would like some noodles.", cn: "我想要一些面条。" },
    { en: "What would you like to drink?", cn: "你想喝点什么？" },
    { en: "A cup of tea, please.", cn: "请来一杯茶。" },
    { en: "The food is delicious.", cn: "这食物很好吃。" }
  ]},
  { topic: "⑤ 购物", lines: [
    { en: "How much is this?", cn: "这个多少钱？" },
    { en: "It's too expensive.", cn: "太贵了。" },
    { en: "Do you have a bigger size?", cn: "有大一点的尺码吗？" },
    { en: "Can I pay by card?", cn: "可以刷卡吗？" },
    { en: "I'll take it. Here you are.", cn: "我要了，给你钱。" }
  ]},
  { topic: "⑥ 打电话", lines: [
    { en: "Hello, may I speak to Tom?", cn: "你好，请找汤姆接电话。" },
    { en: "This is Tom speaking.", cn: "我就是汤姆。" },
    { en: "Can you call back later?", cn: "你能晚点再打来吗？" },
    { en: "Sorry, wrong number.", cn: "对不起，打错了。" },
    { en: "I'll call you back.", cn: "我待会回你电话。" }
  ]}
];

// ============ 从零学英文：生活英语 ============
const LIFE_EN = [
  { topic: "🏥 看病", lines: [
    { en: "I don't feel well.", cn: "我感觉不舒服。" },
    { en: "I have a headache.", cn: "我头疼。" },
    { en: "Where is the hospital?", cn: "医院在哪里？" },
    { en: "Take this medicine three times a day.", cn: "这个药一天吃三次。" },
    { en: "You'll get better soon.", cn: "你很快就会好起来。" }
  ]},
  { topic: "🏦 银行", lines: [
    { en: "I'd like to open an account.", cn: "我想开一个账户。" },
    { en: "I want to withdraw some money.", cn: "我想取一些钱。" },
    { en: "What's your name, please?", cn: "请问你的名字？" },
    { en: "Please fill in this form.", cn: "请填写这张表格。" },
    { en: "Sign your name here.", cn: "在这里签名。" }
  ]},
  { topic: "🚌 出行交通", lines: [
    { en: "Where can I take a bus?", cn: "我在哪里可以坐公交？" },
    { en: "How much is the ticket?", cn: "车票多少钱？" },
    { en: "Which bus goes downtown?", cn: "哪路公交去市中心？" },
    { en: "Please stop at the next station.", cn: "请在下一站停一下。" },
    { en: "Can I get a taxi here?", cn: "我可以在这里打车吗？" }
  ]},
  { topic: "🏠 租房", lines: [
    { en: "I'm looking for a room.", cn: "我在找一间房。" },
    { en: "How much is the rent per month?", cn: "每月租金多少？" },
    { en: "Is the room furnished?", cn: "房间带家具吗？" },
    { en: "Does it include water and electricity?", cn: "包含水电费吗？" },
    { en: "When can I move in?", cn: "我什么时候可以搬进来？" }
  ]},
  { topic: "🛍️ 超市", lines: [
    { en: "Where is the fruit section?", cn: "水果区在哪里？" },
    { en: "Do you have fresh milk?", cn: "有新鲜牛奶吗？" },
    { en: "I need a shopping bag.", cn: "我需要一个购物袋。" },
    { en: "It's on sale this week.", cn: "这周在打折。" },
    { en: "Can I have a receipt, please?", cn: "请给我一张收据。" }
  ]},
  { topic: "🌤️ 日常闲聊", lines: [
    { en: "It's a nice day today.", cn: "今天天气真好。" },
    { en: "It's raining outside.", cn: "外面在下雨。" },
    { en: "What do you do for fun?", cn: "你平时喜欢做什么？" },
    { en: "I usually go for a walk.", cn: "我通常去散步。" },
    { en: "Have a nice day!", cn: "祝你今天愉快！" }
  ]}
];

// ============ 从零学英文：商务英语 ============
const BIZ_EN = [
  { topic: "🤝 自我介绍(职场)", lines: [
    { en: "Good morning, everyone.", cn: "大家早上好。" },
    { en: "Let me introduce myself.", cn: "让我自我介绍一下。" },
    { en: "I work in the sales department.", cn: "我在销售部工作。" },
    { en: "I have five years of experience.", cn: "我有五年的工作经验。" },
    { en: "I'm glad to work with you.", cn: "很高兴与你们共事。" }
  ]},
  { topic: "📞 商务电话", lines: [
    { en: "This is Lily from ABC Company.", cn: "我是ABC公司的莉莉。" },
    { en: "I'm calling about the meeting.", cn: "我打电话是关于会议的事。" },
    { en: "Could you put me through to Mr. Wang?", cn: "能帮我接王先生吗？" },
    { en: "He is in a meeting right now.", cn: "他现在正在开会。" },
    { en: "I'll call you back tomorrow.", cn: "我明天再给你回电。" }
  ]},
  { topic: "📧 商务邮件", lines: [
    { en: "I am writing to you about the order.", cn: "我写信是为了订单的事。" },
    { en: "Please find the attached file.", cn: "请查收附件。" },
    { en: "Thank you for your quick reply.", cn: "感谢你的快速回复。" },
    { en: "Looking forward to your reply.", cn: "期待你的回复。" },
    { en: "Best regards, John.", cn: "此致敬意，约翰。" }
  ]},
  { topic: "📊 开会", lines: [
    { en: "Shall we start the meeting?", cn: "我们开始开会吧？" },
    { en: "Let's go over the plan.", cn: "我们过一遍计划。" },
    { en: "What's your opinion?", cn: "你的意见是什么？" },
    { en: "I agree with you.", cn: "我同意你的看法。" },
    { en: "Let's move on to the next topic.", cn: "我们进入下一个主题。" }
  ]},
  { topic: "🛫 接待客户", lines: [
    { en: "Welcome to our company.", cn: "欢迎来到我们公司。" },
    { en: "Did you have a good flight?", cn: "你旅途顺利吗？" },
    { en: "Let me show you around.", cn: "让我带你参观一下。" },
    { en: "Would you like some coffee or tea?", cn: "你想喝咖啡还是茶？" },
    { en: "Feel free to ask any questions.", cn: "有问题尽管问。" }
  ]},
  { topic: "🤝 谈判与合作", lines: [
    { en: "We'd like to cooperate with you.", cn: "我们想与你们合作。" },
    { en: "What's your best price?", cn: "你们的最低价是多少？" },
    { en: "Can we make a deal?", cn: "我们能谈成这笔生意吗？" },
    { en: "Let's sign the contract.", cn: "我们来签合同。" },
    { en: "It's a win-win situation.", cn: "这是一个双赢的局面。" }
  ]}
];

// ============ 口语练习补充场景（扩到500句用） ============
SPOKEN.push(
  { topic: "⑦ 道歉", lines: [
    { en: "I am so sorry.", cn: "我非常抱歉。" },
    { en: "I apologize for being late.", cn: "我为迟到道歉。" },
    { en: "It's my fault.", cn: "这是我的错。" },
    { en: "Please forgive me.", cn: "请原谅我。" },
    { en: "No problem. It's all right.", cn: "没关系，不要紧。" }
  ]},
  { topic: "⑧ 感谢", lines: [
    { en: "Thank you so much.", cn: "非常感谢你。" },
    { en: "I really appreciate your help.", cn: "我真的很感激你的帮助。" },
    { en: "You are very kind.", cn: "你真好。" },
    { en: "Thanks a lot for your time.", cn: "非常感谢你花时间。" },
    { en: "You're welcome.", cn: "不客气。" }
  ]},
  { topic: "⑨ 请求帮助", lines: [
    { en: "Could you help me, please?", cn: "你能帮我一下吗？" },
    { en: "Can you do me a favor?", cn: "你能帮我个忙吗？" },
    { en: "Would you mind opening the door?", cn: "你介意开一下门吗？" },
    { en: "I need a hand with this bag.", cn: "我需要帮忙拿这个包。" },
    { en: "Sure, no problem.", cn: "当然，没问题。" }
  ]},
  { topic: "⑩ 表达喜好", lines: [
    { en: "I like playing basketball.", cn: "我喜欢打篮球。" },
    { en: "Do you like coffee or tea?", cn: "你喜欢咖啡还是茶？" },
    { en: "I prefer tea to coffee.", cn: "比起咖啡我更喜欢茶。" },
    { en: "I don't like spicy food.", cn: "我不喜欢辣的食物。" },
    { en: "What's your favorite movie?", cn: "你最喜欢的电影是什么？" }
  ]},
  { topic: "⑪ 天气", lines: [
    { en: "How is the weather today?", cn: "今天天气怎么样？" },
    { en: "It's sunny and warm.", cn: "天气晴朗又温暖。" },
    { en: "It may rain this afternoon.", cn: "今天下午可能会下雨。" },
    { en: "It's cold outside, put on a coat.", cn: "外面冷，穿件外套。" },
    { en: "The weather is nice today.", cn: "今天天气真好。" }
  ]},
  { topic: "⑫ 时间日期", lines: [
    { en: "What time is it now?", cn: "现在几点了？" },
    { en: "It's half past eight.", cn: "现在是八点半。" },
    { en: "What day is it today?", cn: "今天星期几？" },
    { en: "Today is Monday.", cn: "今天是星期一。" },
    { en: "What's the date today?", cn: "今天几号？" }
  ]},
  { topic: "⑬ 预订餐厅", lines: [
    { en: "I'd like to book a table for two.", cn: "我想预订一张双人桌。" },
    { en: "For what time, please?", cn: "请问什么时间？" },
    { en: "At seven o'clock tonight.", cn: "今晚七点。" },
    { en: "A table by the window, please.", cn: "请给我靠窗的桌子。" },
    { en: "May I have your name?", cn: "请问您的名字？" }
  ]},
  { topic: "⑭ 找厕所", lines: [
    { en: "Excuse me, where is the restroom?", cn: "不好意思，洗手间在哪里？" },
    { en: "It's on the second floor.", cn: "在二楼。" },
    { en: "Go down the hall and turn right.", cn: "沿着走廊走然后右转。" },
    { en: "Is it near here?", cn: "离这里近吗？" },
    { en: "Yes, just around the corner.", cn: "是的，就在拐角处。" }
  ]},
  { topic: "⑮ 表示同意不同意", lines: [
    { en: "I agree with you.", cn: "我同意你的看法。" },
    { en: "You are right.", cn: "你说得对。" },
    { en: "I'm afraid I disagree.", cn: "恐怕我不同意。" },
    { en: "I don't think so.", cn: "我不这么认为。" },
    { en: "That sounds good to me.", cn: "这听起来不错。" }
  ]},
  { topic: "⑯ 表示惊讶", lines: [
    { en: "Oh my god!", cn: "我的天啊！" },
    { en: "That's amazing!", cn: "太令人惊叹了！" },
    { en: "Really? I can't believe it.", cn: "真的吗？我不敢相信。" },
    { en: "Are you kidding me?", cn: "你在开玩笑吗？" },
    { en: "What a surprise!", cn: "真是个惊喜！" }
  ]},
  { topic: "⑰ 旅行", lines: [
    { en: "I'd like to book a flight to Beijing.", cn: "我想订一张去北京的机票。" },
    { en: "I need a single room.", cn: "我需要一个单人间。" },
    { en: "How long will you stay?", cn: "你会住多久？" },
    { en: "I'll stay for three nights.", cn: "我会住三个晚上。" },
    { en: "Can I have a wake-up call at six?", cn: "早上六点能叫醒我吗？" }
  ]},
  { topic: "⑱ 身体健康", lines: [
    { en: "I feel tired today.", cn: "我今天感觉累。" },
    { en: "Are you feeling better?", cn: "你感觉好点了吗？" },
    { en: "I got a cold last night.", cn: "我昨晚着凉了。" },
    { en: "You should rest more.", cn: "你应该多休息。" },
    { en: "Drink more water, please.", cn: "请多喝水。" }
  ]},
  { topic: "⑲ 家庭", lines: [
    { en: "How many people are in your family?", cn: "你家有几口人？" },
    { en: "I have one brother and one sister.", cn: "我有一个哥哥和一个妹妹。" },
    { en: "My father is a teacher.", cn: "我父亲是老师。" },
    { en: "I live with my parents.", cn: "我和父母住在一起。" },
    { en: "We love each other very much.", cn: "我们彼此很相爱。" }
  ]},
  { topic: "⑳ 兴趣爱好", lines: [
    { en: "What do you do in your free time?", cn: "你空闲时间做什么？" },
    { en: "I enjoy listening to music.", cn: "我喜欢听音乐。" },
    { en: "I go hiking on weekends.", cn: "我周末去远足。" },
    { en: "Do you play any instruments?", cn: "你会玩什么乐器吗？" },
    { en: "I'm interested in photography.", cn: "我对摄影感兴趣。" }
  ]},
  { topic: "㉑ 运动", lines: [
    { en: "Do you do any sports?", cn: "你做什么运动吗？" },
    { en: "I play football every week.", cn: "我每周踢足球。" },
    { en: "Swimming is good for health.", cn: "游泳对健康有好处。" },
    { en: "Let's go for a run together.", cn: "我们一起去跑步吧。" },
    { en: "I'm not good at sports.", cn: "我不擅长运动。" }
  ]},
  { topic: "㉒ 道别", lines: [
    { en: "I have to go now.", cn: "我现在得走了。" },
    { en: "See you tomorrow.", cn: "明天见。" },
    { en: "See you later.", cn: "待会儿见。" },
    { en: "Goodbye, take care.", cn: "再见，保重。" },
    { en: "Keep in touch!", cn: "保持联系！" }
  ]},
  { topic: "㉓ 迟到", lines: [
    { en: "Sorry, I'm late.", cn: "对不起，我迟到了。" },
    { en: "I got stuck in traffic.", cn: "我被堵在路上了。" },
    { en: "The bus was late this morning.", cn: "今早公交晚点了。" },
    { en: "I overslept this morning.", cn: "我今早睡过头了。" },
    { en: "It won't happen again.", cn: "不会再发生了。" }
  ]},
  { topic: "㉔ 生日", lines: [
    { en: "Happy birthday to you!", cn: "祝你生日快乐！" },
    { en: "How old are you?", cn: "你多大了？" },
    { en: "Make a wish and blow out the candles.", cn: "许个愿，吹灭蜡烛。" },
    { en: "Here is a gift for you.", cn: "这是给你的礼物。" },
    { en: "Wish you all the best.", cn: "祝你一切顺利。" }
  ]},
  { topic: "㉕ 学校生活", lines: [
    { en: "What subjects do you study?", cn: "你学哪些科目？" },
    { en: "I'm good at English.", cn: "我英语学得好。" },
    { en: "I have math class at nine.", cn: "我九点有数学课。" },
    { en: "When is the exam?", cn: "考试是什么时候？" },
    { en: "The homework is hard.", cn: "作业很难。" }
  ]},
  { topic: "㉖ 电影", lines: [
    { en: "Let's go to the movies tonight.", cn: "我们今晚去看电影吧。" },
    { en: "What kind of film do you like?", cn: "你喜欢哪种电影？" },
    { en: "I like action movies.", cn: "我喜欢动作片。" },
    { en: "The film was really exciting.", cn: "这部电影很刺激。" },
    { en: "Do you want some popcorn?", cn: "你想要点爆米花吗？" }
  ]},
  { topic: "㉗ 地铁", lines: [
    { en: "Where is the subway station?", cn: "地铁站在哪里？" },
    { en: "Which line goes to the airport?", cn: "哪条线去机场？" },
    { en: "You need to change at the next stop.", cn: "你需要在下一站换乘。" },
    { en: "How often does the train come?", cn: "地铁多久来一趟？" },
    { en: "Every five minutes.", cn: "每五分钟一趟。" }
  ]},
  { topic: "㉘ 理发店", lines: [
    { en: "I want a haircut, please.", cn: "我想理个发。" },
    { en: "How would you like your hair?", cn: "你想要什么发型？" },
    { en: "Just a trim, please.", cn: "稍微修剪一下就好。" },
    { en: "Please make it shorter.", cn: "请剪短一些。" },
    { en: "How much does it cost?", cn: "多少钱？" }
  ]},
  { topic: "㉙ 宠物", lines: [
    { en: "Do you have any pets?", cn: "你养宠物吗？" },
    { en: "I have a cute dog.", cn: "我有一只可爱的狗。" },
    { en: "What's your pet's name?", cn: "你的宠物叫什么名字？" },
    { en: "I take my dog for a walk daily.", cn: "我每天遛狗。" },
    { en: "The cat likes to sleep.", cn: "这只猫喜欢睡觉。" }
  ]},
  { topic: "㉚ 点外卖", lines: [
    { en: "I'd like to order some food.", cn: "我想点一些食物。" },
    { en: "Can I order online?", cn: "我可以在线点吗？" },
    { en: "How long will the delivery take?", cn: "外卖要多久送到？" },
    { en: "About thirty minutes.", cn: "大约三十分钟。" },
    { en: "Please deliver it to my office.", cn: "请送到我的办公室。" }
  ]},
  { topic: "㉛ 讲价", lines: [
    { en: "Can you give me a discount?", cn: "你能给我打个折吗？" },
    { en: "Is this the best price?", cn: "这是最低价吗？" },
    { en: "It's a little expensive.", cn: "有点贵。" },
    { en: "Can you make it cheaper?", cn: "能便宜点吗？" },
    { en: "OK, I'll take two.", cn: "好，我拿两个。" }
  ]},
  { topic: "㉜ 快递", lines: [
    { en: "I have a package to send.", cn: "我有一个包裹要寄。" },
    { en: "I want to send this by express mail.", cn: "我想用快递寄这个。" },
    { en: "Where do you want to send it?", cn: "你想寄到哪里？" },
    { en: "To Guangzhou, please.", cn: "寄到广州。" },
    { en: "Please fill in the address.", cn: "请填写地址。" }
  ]},
  { topic: "㉝ 网约车", lines: [
    { en: "Can I get a ride to the airport?", cn: "我能叫车去机场吗？" },
    { en: "I booked a taxi online.", cn: "我在网上叫了车。" },
    { en: "Where is your location?", cn: "你在什么位置？" },
    { en: "The car is on its way.", cn: "车正在路上。" },
    { en: "Please wait at the gate.", cn: "请在门口等。" }
  ]},
  { topic: "㉞ 夸奖", lines: [
    { en: "You did a great job!", cn: "你做得太棒了！" },
    { en: "You look great today.", cn: "你今天看起来很好。" },
    { en: "Well done, keep it up!", cn: "做得好，继续加油！" },
    { en: "I'm proud of you.", cn: "我为你感到骄傲。" },
    { en: "You are the best!", cn: "你是最棒的！" }
  ]}
);

// ============ 生活英语补充场景 ============
LIFE_EN.push(
  { topic: "🛂 办理证件", lines: [
    { en: "I need to renew my passport.", cn: "我需要续办护照。" },
    { en: "Please bring your ID card.", cn: "请带上你的身份证。" },
    { en: "Fill out this application form.", cn: "填写这张申请表。" },
    { en: "How long will it take to get it?", cn: "办理需要多长时间？" },
    { en: "About two weeks.", cn: "大约两周。" }
  ]},
  { topic: "📞 报修水电", lines: [
    { en: "The water pipe is broken.", cn: "水管坏了。" },
    { en: "There is no hot water.", cn: "没有热水。" },
    { en: "Can you send a repairman?", cn: "你能派个维修人员来吗？" },
    { en: "The power went out.", cn: "停电了。" },
    { en: "I'll be there this afternoon.", cn: "我今天下午过去。" }
  ]},
  { topic: "💊 买药", lines: [
    { en: "Do you have medicine for a cold?", cn: "你们有感冒药吗？" },
    { en: "I have a fever and a sore throat.", cn: "我发烧喉咙痛。" },
    { en: "Take two pills after each meal.", cn: "每餐饭后吃两片。" },
    { en: "How often should I take it?", cn: "我应该多久吃一次？" },
    { en: "Three times a day.", cn: "一天三次。" }
  ]},
  { topic: "👕 干洗衣服", lines: [
    { en: "I'd like to dry clean this suit.", cn: "我想干洗这套西装。" },
    { en: "There is a stain on the shirt.", cn: "衬衫上有个污渍。" },
    { en: "Can you get it out?", cn: "你能去掉它吗？" },
    { en: "When can I pick it up?", cn: "我什么时候能取？" },
    { en: "Tomorrow afternoon.", cn: "明天下午。" }
  ]},
  { topic: "📷 拍照冲洗", lines: [
    { en: "I want to print these photos.", cn: "我想打印这些照片。" },
    { en: "How many copies do you need?", cn: "你需要几张？" },
    { en: "Two copies of each, please.", cn: "每张两份。" },
    { en: "What size do you want?", cn: "你要什么尺寸？" },
    { en: "Six inches, please.", cn: "六寸的。" }
  ]},
  { topic: "🚗 加油", lines: [
    { en: "Fill up the tank, please.", cn: "请把油箱加满。" },
    { en: "What kind of gas do you use?", cn: "你加什么油？" },
    { en: "Regular, please.", cn: "普通汽油。" },
    { en: "Can you check the tires too?", cn: "能也检查一下轮胎吗？" },
    { en: "The tire pressure is low.", cn: "胎压偏低了。" }
  ]},
  { topic: "🚲 修自行车", lines: [
    { en: "My bike has a flat tire.", cn: "我的自行车轮胎瘪了。" },
    { en: "Can you fix the brake?", cn: "你能修一下刹车吗？" },
    { en: "The chain keeps coming off.", cn: "链条老是掉。" },
    { en: "How much will the repair cost?", cn: "修理要多少钱？" },
    { en: "Twenty yuan, please.", cn: "二十元。" }
  ]},
  { topic: "🏪 便利店", lines: [
    { en: "I'll just have a bottle of water.", cn: "我只要一瓶水。" },
    { en: "Do you accept mobile payment?", cn: "接受手机支付吗？" },
    { en: "Please scan the QR code.", cn: "请扫二维码。" },
    { en: "Do you want a bag?", cn: "需要袋子吗？" },
    { en: "No, thank you.", cn: "不用了，谢谢。" }
  ]},
  { topic: "📖 图书馆", lines: [
    { en: "Can I borrow this book?", cn: "我可以借这本书吗？" },
    { en: "How long can I keep it?", cn: "我可以借多久？" },
    { en: "Two weeks, please return on time.", cn: "两周，请按时归还。" },
    { en: "The book is due today.", cn: "这本书今天到期。" },
    { en: "I want to renew it online.", cn: "我想在线续借。" }
  ]},
  { topic: "🎬 电影院", lines: [
    { en: "Two tickets for the seven o'clock show.", cn: "两张七点的票。" },
    { en: "Which seats would you like?", cn: "你想要哪些座位？" },
    { en: "Middle row, please.", cn: "中间排。" },
    { en: "Is there a discount for students?", cn: "学生有优惠吗？" },
    { en: "Please show your student card.", cn: "请出示学生证。" }
  ]},
  { topic: "🌦️ 看天气预告", lines: [
    { en: "What's the weather forecast?", cn: "天气预报怎么说？" },
    { en: "It will be cloudy tomorrow.", cn: "明天多云。" },
    { en: "There will be a strong wind tonight.", cn: "今晚会有大风。" },
    { en: "The temperature will drop.", cn: "气温会下降。" },
    { en: "Better bring an umbrella.", cn: "最好带把伞。" }
  ]},
  { topic: "💇 剪头发", lines: [
    { en: "I'd like a new hairstyle.", cn: "我想要个新发型。" },
    { en: "Do you have a photo as reference?", cn: "你有照片做参考吗？" },
    { en: "Please wash my hair first.", cn: "请先帮我洗头。" },
    { en: "Don't cut it too short.", cn: "别剪太短。" },
    { en: "It looks great, thank you.", cn: "看起来很棒，谢谢。" }
  ]},
  { topic: "🚿 健身房", lines: [
    { en: "I want to join the gym.", cn: "我想加入健身房。" },
    { en: "How much is the monthly fee?", cn: "每月费用多少？" },
    { en: "What are your opening hours?", cn: "你们几点开门？" },
    { en: "We open from seven to ten.", cn: "我们七点到十点营业。" },
    { en: "Where is the locker room?", cn: "更衣室在哪里？" }
  ]},
  { topic: "🛠️ 五金店", lines: [
    { en: "I need a hammer.", cn: "我需要一把锤子。" },
    { en: "Do you sell light bulbs?", cn: "你们卖灯泡吗？" },
    { en: "I'm looking for some screws.", cn: "我在找一些螺丝。" },
    { en: "This one is too big.", cn: "这个太大了。" },
    { en: "Do you have a smaller size?", cn: "有小一点的尺寸吗？" }
  ]},
  { topic: "🏥 药房取药", lines: [
    { en: "Here is my prescription.", cn: "这是我的处方。" },
    { en: "The pharmacist will prepare it.", cn: "药剂师会配药。" },
    { en: "Please wait about ten minutes.", cn: "请等大约十分钟。" },
    { en: "It's ready now.", cn: "药已经配好了。" },
    { en: "Thank you for your patience.", cn: "谢谢你的耐心。" }
  ]},
  { topic: "🌳 公园", lines: [
    { en: "This park is beautiful.", cn: "这个公园很美。" },
    { en: "Let's take a walk by the lake.", cn: "我们去湖边走走。" },
    { en: "The flowers are in bloom.", cn: "花开了。" },
    { en: "Can we have a picnic here?", cn: "我们能在这里野餐吗？" },
    { en: "The air is fresh here.", cn: "这里空气新鲜。" }
  ]},
  { topic: "🛒 退货", lines: [
    { en: "I'd like to return this item.", cn: "我想退掉这件商品。" },
    { en: "Do you have the receipt?", cn: "你有收据吗？" },
    { en: "Yes, here it is.", cn: "有，在这里。" },
    { en: "There is a problem with it.", cn: "它有问题。" },
    { en: "We will refund your money.", cn: "我们会退你钱。" }
  ]},
  { topic: "🚾 问洗手间", lines: [
    { en: "Is there a bathroom nearby?", cn: "附近有洗手间吗？" },
    { en: "It's right over there.", cn: "就在那边。" },
    { en: "Is it free to use?", cn: "使用免费吗？" },
    { en: "Yes, it's free.", cn: "是的，免费。" },
    { en: "Thanks for telling me.", cn: "谢谢你告诉我。" }
  ]},
  { topic: "📮 邮局", lines: [
    { en: "I want to mail this letter.", cn: "我想寄这封信。" },
    { en: "I need some stamps.", cn: "我需要一些邮票。" },
    { en: "How much is the postage?", cn: "邮费多少钱？" },
    { en: "Please weigh this parcel.", cn: "请称一下这个包裹。" },
    { en: "The parcel will arrive in a week.", cn: "包裹一周内到。" }
  ]},
  { topic: "🏧 取款机", lines: [
    { en: "Where is the ATM?", cn: "取款机在哪里？" },
    { en: "The ATM is out of service.", cn: "取款机故障了。" },
    { en: "I got a cash card.", cn: "我办了一张取款卡。" },
    { en: "Please enter your password.", cn: "请输入你的密码。" },
    { en: "Here is your cash.", cn: "这是你的现金。" }
  ]},
  { topic: "🚕 打的", lines: [
    { en: "Please take me to the city center.", cn: "请送我去市中心。" },
    { en: "Could you turn up the air conditioning?", cn: "能把空调开大吗？" },
    { en: "How much is the fare?", cn: "车费多少钱？" },
    { en: "Please stop here.", cn: "请在这里停车。" },
    { en: "Keep the change.", cn: "不用找零了。" }
  ]},
  { topic: "🎂 生日聚会", lines: [
    { en: "I'm having a birthday party tonight.", cn: "我今晚办生日聚会。" },
    { en: "Would you like to come?", cn: "你愿意来吗？" },
    { en: "Where is the party held?", cn: "聚会在哪里举行？" },
    { en: "At my home at eight.", cn: "在我家，八点。" },
    { en: "I'll bring a cake.", cn: "我会带个蛋糕。" }
  ]},
  { topic: "🏠 搬家", lines: [
    { en: "I'm moving to a new apartment.", cn: "我要搬到新公寓。" },
    { en: "Can you help me move the boxes?", cn: "你能帮我搬箱子吗？" },
    { en: "The movers will come at ten.", cn: "搬家工人十点到。" },
    { en: "Where should I put these?", cn: "这些放哪里？" },
    { en: "The apartment is well lit.", cn: "这公寓采光很好。" }
  ]},
  { topic: "🥗 健康饮食", lines: [
    { en: "I'm on a diet.", cn: "我在节食。" },
    { en: "Vegetables are good for you.", cn: "蔬菜对你有好处。" },
    { en: "I try to eat more fruit.", cn: "我尽量多吃水果。" },
    { en: "Don't eat too much junk food.", cn: "别吃太多垃圾食品。" },
    { en: "Drink at least eight glasses of water.", cn: "每天至少喝八杯水。" }
  ]},
  { topic: "🛡️ 安全提醒", lines: [
    { en: "Be careful when crossing the road.", cn: "过马路要小心。" },
    { en: "Lock the door before you leave.", cn: "离开前锁门。" },
    { en: "Don't forget your keys.", cn: "别忘了带钥匙。" },
    { en: "Watch your step.", cn: "小心脚下。" },
    { en: "Safety comes first.", cn: "安全第一。" }
  ]},
  { topic: "💧 停水停电", lines: [
    { en: "The water is cut off today.", cn: "今天停水。" },
    { en: "The electricity will be off tomorrow.", cn: "明天停电。" },
    { en: "Please store some water.", cn: "请储存一些水。" },
    { en: "Charge your phone beforehand.", cn: "提前给手机充电。" },
    { en: "When will it be restored?", cn: "什么时候恢复？" }
  ]},
  { topic: "🧾 开发票", lines: [
    { en: "Can I have an invoice, please?", cn: "能给我开发票吗？" },
    { en: "What should the invoice say?", cn: "发票抬头怎么写？" },
    { en: "The company name, please.", cn: "写公司名称。" },
    { en: "Here is your invoice.", cn: "这是你的发票。" },
    { en: "Thank you for your business.", cn: "感谢惠顾。" }
  ]},
  { topic: "🏫 家长会", lines: [
    { en: "The parent meeting is on Friday.", cn: "家长会在周五。" },
    { en: "My child is doing well in class.", cn: "我的孩子上课表现很好。" },
    { en: "He needs to work harder.", cn: "他需要更努力。" },
    { en: "How can I help him study?", cn: "我怎样帮他学习？" },
    { en: "Encourage him to read more.", cn: "鼓励他多阅读。" }
  ]}
);

// ============ 商务英语补充场景 ============
BIZ_EN.push(
  { topic: "📅 安排会议", lines: [
    { en: "Let's schedule a meeting for Monday.", cn: "我们安排周一开个会。" },
    { en: "What time works for you?", cn: "你什么时间方便？" },
    { en: "I'm available at two o'clock.", cn: "我两点有空。" },
    { en: "Please send the meeting invitation.", cn: "请发会议邀请。" },
    { en: "The meeting has been confirmed.", cn: "会议已确认。" }
  ]},
  { topic: "📝 汇报工作", lines: [
    { en: "Let me report on this week's work.", cn: "我汇报一下这周的工作。" },
    { en: "We have finished the project on time.", cn: "我们按时完成了项目。" },
    { en: "The sales have increased by ten percent.", cn: "销售额增长了百分之十。" },
    { en: "We faced some difficulties this week.", cn: "这周我们遇到了一些困难。" },
    { en: "We solved the main problem yesterday.", cn: "我们昨天解决了主要问题。" }
  ]},
  { topic: "🗣️ 提出建议", lines: [
    { en: "May I make a suggestion?", cn: "我可以提个建议吗？" },
    { en: "I suggest we try a new plan.", cn: "我建议我们试试新方案。" },
    { en: "What if we reduce the price?", cn: "如果我们降价怎么样？" },
    { en: "We could improve the design.", cn: "我们可以改进设计。" },
    { en: "Let's consider this option first.", cn: "我们先考虑这个方案。" }
  ]},
  { topic: "✅ 确认信息", lines: [
    { en: "Let me confirm the details.", cn: "我来确认一下细节。" },
    { en: "Can you confirm the delivery date?", cn: "你能确认交货日期吗？" },
    { en: "Is the order confirmed?", cn: "订单确认了吗？" },
    { en: "Please confirm by email.", cn: "请通过邮件确认。" },
    { en: "I have confirmed with the client.", cn: "我已和客户确认过了。" }
  ]},
  { topic: "🧾 处理订单", lines: [
    { en: "We received your order yesterday.", cn: "我们昨天收到了你的订单。" },
    { en: "The order will be shipped tomorrow.", cn: "订单明天发货。" },
    { en: "The total is two thousand yuan.", cn: "总价是两千元。" },
    { en: "Do you want to place another order?", cn: "你还想再下一单吗？" },
    { en: "We will keep you updated.", cn: "我们会随时通知你。" }
  ]},
  { topic: "📦 物流发货", lines: [
    { en: "When will the goods arrive?", cn: "货物什么时候到？" },
    { en: "The package was sent yesterday.", cn: "包裹昨天已寄出。" },
    { en: "Please track the shipment online.", cn: "请在线跟踪物流。" },
    { en: "The delivery has been delayed.", cn: "发货延迟了。" },
    { en: "We apologize for the delay.", cn: "我们对延迟表示歉意。" }
  ]},
  { topic: "💡 头脑风暴", lines: [
    { en: "Let's think about new ideas.", cn: "我们想想新点子。" },
    { en: "Any suggestions from the team?", cn: "团队有什么建议吗？" },
    { en: "That's a great idea.", cn: "这是个好主意。" },
    { en: "Let's brainstorm together.", cn: "我们一起头脑风暴。" },
    { en: "We can write down all ideas first.", cn: "我们先把所有想法写下来。" }
  ]},
  { topic: "⏰ 时间管理", lines: [
    { en: "I have a busy schedule today.", cn: "我今天日程很满。" },
    { en: "Please prioritize the urgent tasks.", cn: "请优先处理紧急任务。" },
    { en: "I need to finish this by Friday.", cn: "我需要在周五前完成。" },
    { en: "We are running out of time.", cn: "我们时间不够了。" },
    { en: "Let's make a to-do list.", cn: "我们列个待办清单。" }
  ]},
  { topic: "👥 招聘面试", lines: [
    { en: "Tell me about your work experience.", cn: "聊聊你的工作经验。" },
    { en: "Why do you want this job?", cn: "你为什么想要这份工作？" },
    { en: "What are your strengths?", cn: "你的优势是什么？" },
    { en: "I work well in a team.", cn: "我擅长团队合作。" },
    { en: "We will contact you next week.", cn: "我们下周联系你。" }
  ]},
  { topic: "🖥️ 视频会议", lines: [
    { en: "Can you hear me clearly?", cn: "你能听清我说话吗？" },
    { en: "Please turn on your camera.", cn: "请打开摄像头。" },
    { en: "I'm sharing my screen now.", cn: "我现在共享屏幕。" },
    { en: "You are on mute.", cn: "你静音了。" },
    { en: "Let's end the meeting here.", cn: "会议就到这里。" }
  ]},
  { topic: "✍️ 合同签订", lines: [
    { en: "We need to sign the contract.", cn: "我们需要签合同。" },
    { en: "Please review the terms carefully.", cn: "请仔细看条款。" },
    { en: "Both parties agree on these terms.", cn: "双方同意这些条款。" },
    { en: "The contract is valid for two years.", cn: "合同有效期两年。" },
    { en: "It's a binding agreement.", cn: "这是一份有约束力的协议。" }
  ]},
  { topic: "📉 处理投诉", lines: [
    { en: "We received your complaint.", cn: "我们收到了你的投诉。" },
    { en: "We are sorry for the inconvenience.", cn: "给您带来不便我们很抱歉。" },
    { en: "We will solve it as soon as possible.", cn: "我们会尽快解决。" },
    { en: "A solution will be provided today.", cn: "今天会给出解决方案。" },
    { en: "We value your feedback.", cn: "我们重视你的反馈。" }
  ]},
  { topic: "💼 职场礼仪", lines: [
    { en: "It's polite to greet first.", cn: "先打招呼是礼貌的。" },
    { en: "Please knock before entering.", cn: "进门前请敲门。" },
    { en: "Thank the colleague for his help.", cn: "感谢同事的帮助。" },
    { en: "Be punctual for the meeting.", cn: "开会要准时。" },
    { en: "Dress properly for work.", cn: "上班穿着要得体。" }
  ]},
  { topic: "🏷️ 产品介绍", lines: [
    { en: "Let me introduce our new product.", cn: "让我介绍我们的新产品。" },
    { en: "It has many useful functions.", cn: "它有很多实用功能。" },
    { en: "The quality is very good.", cn: "质量非常好。" },
    { en: "It is easy to use.", cn: "它很容易使用。" },
    { en: "Here is a sample for you.", cn: "这是给你的样品。" }
  ]},
  { topic: "📊 数据分析", lines: [
    { en: "The data shows a clear trend.", cn: "数据显示了明显的趋势。" },
    { en: "Sales are rising steadily.", cn: "销售额稳步上升。" },
    { en: "The chart is easy to read.", cn: "这个图表很容易看懂。" },
    { en: "We need more information.", cn: "我们需要更多信息。" },
    { en: "Let's analyze the results.", cn: "我们分析一下结果。" }
  ]},
  { topic: "📚 参加培训", lines: [
    { en: "There is a training course next month.", cn: "下个月有培训课程。" },
    { en: "Everyone should attend.", cn: "每个人都应参加。" },
    { en: "The training is very useful.", cn: "这次培训很有用。" },
    { en: "Let's take notes during the class.", cn: "上课时记笔记。" },
    { en: "I learned a lot today.", cn: "我今天学到了很多。" }
  ]},
  { topic: "🤝 建立关系", lines: [
    { en: "I'm glad to cooperate with your company.", cn: "很高兴与贵公司合作。" },
    { en: "Let's build a long-term relationship.", cn: "我们建立长期合作关系。" },
    { en: "Trust is important in business.", cn: "在生意中信任很重要。" },
    { en: "We look forward to working together.", cn: "我们期待一起合作。" },
    { en: "Communication is the key.", cn: "沟通是关键。" }
  ]},
  { topic: "🎓 职业发展", lines: [
    { en: "I want to improve my skills.", cn: "我想提升我的技能。" },
    { en: "There is room for promotion.", cn: "有晋升空间。" },
    { en: "Set clear career goals.", cn: "设定清晰的职业目标。" },
    { en: "Keep learning new things.", cn: "持续学习新东西。" },
    { en: "A good attitude matters.", cn: "良好的态度很重要。" }
  ]}
);

// ============ 口语补充场景2 ============
SPOKEN.push(
  { topic: "㉟ 网上聊天", lines: [
    { en: "Are you online now?", cn: "你现在在线吗？" },
    { en: "Let's chat later.", cn: "我们待会聊。" },
    { en: "I'll send you a message.", cn: "我会给你发消息。" },
    { en: "Did you receive my message?", cn: "你收到我的消息了吗？" },
    { en: "See you online tonight.", cn: "今晚网上见。" }
  ]},
  { topic: "㊱ 兴趣社团", lines: [
    { en: "I joined a reading club.", cn: "我加入了一个读书会。" },
    { en: "We meet every Saturday.", cn: "我们每周六见面。" },
    { en: "Would you like to join us?", cn: "你想加入我们吗？" },
    { en: "The club has many members.", cn: "这个社团有很多成员。" },
    { en: "It's fun to be together.", cn: "在一起很有趣。" }
  ]},
  { topic: "㊲ 旅游计划", lines: [
    { en: "I'm planning a trip to Dalian.", cn: "我在计划去大连旅行。" },
    { en: "When will you leave?", cn: "你什么时候出发？" },
    { en: "I'll go next month.", cn: "我下个月去。" },
    { en: "How will you get there?", cn: "你怎么去那里？" },
    { en: "By high-speed train.", cn: "坐高铁。" }
  ]},
  { topic: "㊳ 评价食物", lines: [
    { en: "The food here is great.", cn: "这里的食物很棒。" },
    { en: "It's a little salty.", cn: "有点咸。" },
    { en: "I like the taste.", cn: "我喜欢这个味道。" },
    { en: "Could you pass the salt?", cn: "能把盐递给我吗？" },
    { en: "This is my favorite dish.", cn: "这是我最喜欢的菜。" }
  ]},
  { topic: "㊴ 睡眠话题", lines: [
    { en: "I couldn't sleep well last night.", cn: "我昨晚没睡好。" },
    { en: "You look tired today.", cn: "你今天看起来很累。" },
    { en: "I went to bed late.", cn: "我睡得很晚。" },
    { en: "Have a good rest.", cn: "好好休息。" },
    { en: "Sweet dreams!", cn: "做个好梦！" }
  ]},
  { topic: "㊵ 看医生预约", lines: [
    { en: "I'd like to make an appointment.", cn: "我想预约。" },
    { en: "The doctor is free at four.", cn: "医生四点有空。" },
    { en: "What is your symptom?", cn: "你什么症状？" },
    { en: "I have a stomachache.", cn: "我肚子疼。" },
    { en: "Take care of yourself.", cn: "照顾好自己。" }
  ]}
);

// ============ 生活补充场景2 ============
LIFE_EN.push(
  { topic: "📱 手机维修", lines: [
    { en: "My phone screen is broken.", cn: "我的手机屏幕破了。" },
    { en: "Can you fix it here?", cn: "你能在这里修吗？" },
    { en: "How long will it take?", cn: "要多久？" },
    { en: "About an hour.", cn: "大约一小时。" },
    { en: "The battery is also weak.", cn: "电池也不太行了。" }
  ]},
  { topic: "🎧 买耳机", lines: [
    { en: "I'm looking for earphones.", cn: "我在找耳机。" },
    { en: "What's your price range?", cn: "你的预算多少？" },
    { en: "Under two hundred yuan.", cn: "两百元以内。" },
    { en: "These sound good.", cn: "这些听起来不错。" },
    { en: "I'll take this pair.", cn: "我买这副。" }
  ]}
);
