(function () {
  const data = {
    brand: {
      name: 'Eamon',
      mark: '©',
    },
    nav: [
      { label: '简历', href: '#resume' },
      { label: '关于', href: '#about' },
      { label: '联系', href: '#contact' },
    ],
    hero: {
      eyebrow: 'Eamon · 作品集 · 2026',
      headline: '决定·我',
      copy: [
        '这并非偶然。Eamon 会思考——把 ',
        { bold: '大模型标注与测评' },
        ' 做成手艺，让模型在更干净、更有依据的数据上成长；也用 ',
        { bold: 'vibe coding' },
        ' 把规则、提示词与想法连夜跑成趁手的工具。把隐性标准写成可执行的 SOP，再和 LLM 一起把灵感落地。个人计算的未来已经到来，而且它就摆在你的浏览器里。',
      ],
      cta: '进入作品集',
      edition: '2026',
      specs: [
        { label: '方向', value: '大模型标注 · 测评' },
        { label: '文档', value: '规则 · SOP · Prompt' },
        { label: '工程', value: 'Claude Code · MCP' },
        { label: '创作', value: 'AIGC · 生图 · 徽章' },
      ],
    },
    projects: [
      {
        name: 'rule-doc-skill',
        repo: 'ai-annotation-rule-doc-skill',
        meta: 'Claude Skill · 标注规则 · SOP',
        url: 'https://github.com/wh3474812446-design/ai-annotation-rule-doc-skill',
        desc: '把 AI 训练数据标注规则写成一线可执行的 SOP，覆盖文本对话与多模态 11 类任务。',
        detail: '一个用于撰写 AI 模型训练数据标注规则文档的 Claude skill。它不套固定模板，而是先结构化问询，把项目目标、样本边界、交付形式和评分口径问清楚，再生成可直接交给标注员使用的作业规范。',
        stack: ['Claude Skill', 'SKILL.md', 'Markdown', 'AI Training Data'],
        highlights: [
          '覆盖单轮问答、多轮对话、CoT、RAG、Reward、Agent 与文生图/视频、VQA、ASR、TTS 等 11 种标注类型。',
          '流程固定为“信息问询 → 起草文档 → 定向迭代”，避免在关键信息缺失时直接动笔。',
          '强调正例、负例、量化阈值和边界 case，让一线标注员能按规则稳定执行。',
          '提供 .skill 打包成品和 references 模板，便于导入 Claude / Claude Code 或在团队内复用。',
        ],
        deliverable: 'rule-doc.skill + 文本对话类 / 多模态类规则模板库',
        source: 'GitHub README · 更新于 2026-06-08',
      },
      {
        name: 'eval-doc-skill',
        repo: 'eval-doc-skill',
        meta: 'Claude Skill · Evaluation · Report',
        url: 'https://github.com/wh3474812446-design/eval-doc-skill',
        desc: '为 AI 模型 / Agent 评测生成“评测规则文档”和“评测报告文档”两类正式交付物。',
        detail: 'rule-doc 的姊妹项目，专注模型和 Agent 评测。它把评测前的标准定义做成“契约”，把评测后的结果整理成“体检报告”，帮助团队在开评前对齐维度、样本、方法、统计口径与质检方式。',
        stack: ['Claude Skill', 'Benchmark', 'Evaluation Docs', 'Markdown'],
        highlights: [
          '面向内容生成、功能性、性能三大评测体系，覆盖图像、视频、Agent、文本、语音、RAG 等专项。',
          '需求承接阶段用 5W2H 问清背景目标、评测对象、数据口径、方法与排期。',
          '规则文档负责定标准，报告文档负责给结论，能输出标准版或简化版。',
          '写作强调“先量化、再质化”，用表格、评分档位和典型 case 支撑判断。',
        ],
        deliverable: 'eval-doc.skill + 评测规则文档 / 评测报告文档参考结构',
        source: 'GitHub README · 更新于 2026-06-08',
      },
      {
        name: 'local-rag-qa',
        repo: 'local-rag-qa',
        meta: 'FastAPI · Streamlit · Chroma · DeepSeek',
        url: 'https://github.com/wh3474812446-design/local-rag-qa',
        desc: '本地 RAG 知识库问答网站：上传文档自动建库，混合检索并基于原文引用作答。',
        detail: '一个通用本地知识库问答系统。用户上传 PDF、Word、TXT、Markdown 后，系统自动解析、切分、向量化并写入 Chroma；提问时用 BM25 关键词、BGE 向量和标题命中多路召回，再交给 DeepSeek 基于原文生成答案并标注来源。',
        stack: ['Python', 'FastAPI', 'Streamlit', 'Chroma', 'BGE', 'DeepSeek'],
        highlights: [
          '支持多格式上传、文件夹分区、按知识库范围提问和按文件夹删除资料。',
          '混合检索使用 BM25 + 向量语义 + 标题路召回，并用 RRF 融合排序。',
          '可选 bge-reranker-base 对候选段落精排，提升送给大模型的上下文质量。',
          '带流式输出、逐句溯源、原文高亮、网页内配置 DeepSeek Key 和一键安装脚本。',
        ],
        deliverable: '可本地运行的 RAG 网站 + API + Windows 一键安装 / 启动脚本',
        source: 'GitHub README · 更新于 2026-06-06',
      },
      {
        name: 'tide-agent-harness',
        repo: 'tide-agent-harness',
        meta: 'TypeScript · DeepSeek · MCP · Skill',
        url: 'https://github.com/wh3474812446-design/tide-agent-harness',
        desc: '本地 Agent Harness：把大模型、工具、MCP、技能、记忆和浏览器控制台连成一套可运行智能体。',
        detail: '一个跑在本地的轻量 Agent Harness。它用浏览器控制台承载对话、工具列表、模型配置和实时事件流；后端负责连接 DeepSeek、文件工具、shell、HTTP API、MCP server、技能系统与会话持久化。',
        stack: ['TypeScript', 'Node.js', 'DeepSeek', 'MCP', 'Skills', 'Memory'],
        highlights: [
          '支持本地读写文件、执行命令、代码库搜索、HTTP API 调用，并有 read/write/network/execute 风险权限模型。',
          '集成 MCP 协议与 Skill 系统，技能可从本地目录或 git URL 安装，热加载后无需重启。',
          '提供永久记忆、两段式上下文压缩、编辑容错级联、读后改契约和 API 自愈重试。',
          '一键安装后可在网页里配置 DeepSeek Key，单窗口启动，支持会话持久化和可中断运行。',
        ],
        deliverable: '本地 Agent 控制台 + CLI 启动方式 + MCP / Skill 可视化管理',
        source: 'GitHub README · 更新于 2026-06-13',
      },
    ],
    badges: [
      { name: 'Meta Badge', tag: '金属浮雕 · 黑银', status: 'Prompt + Refine' },
      { name: 'Pet Club Mark', tag: '宠物社群 · 圆章', status: 'Ready' },
      { name: 'AI Agent Seal', tag: '未来终端 · 认证章', status: 'Iteration' },
      { name: 'Creator Patch', tag: '贴纸徽章 · 高饱和', status: 'Export' },
      { name: 'Brand Coin', tag: '品牌纪念币 · 3D', status: 'Render' },
      { name: 'Event Pin', tag: '活动胸针 · 透明底', status: 'Batch' },
    ],
    modules: [
      {
        id: 'github',
        from: 'left',
        num: '// 01 · GITHUB',
        title: ['GitHub', '项目盘'],
        desc: ['四个真实在跑的项目：', { bold: '两套撰写 skill' }, '、', { bold: 'RAG 知识库' }, ' 与 ', { bold: 'Tide Agent' }, '，覆盖标注 / 测评文档自动化、检索增强问答与本地智能体。'],
        stats: [
          { label: '仓库', metric: 'githubCount' },
          { label: '方向', value: 'Skill / RAG / Agent' },
          { label: '技术', value: 'Python · FastAPI · MCP' },
          { label: '状态', value: '持续更新' },
        ],
      },
      {
        id: 'video-tide',
        from: 'right',
        num: '// 02 · TIDE',
        title: ['Tide', '本地 Agent'],
        desc: ['一个我接管改造的本地 ', { bold: 'Agent Harness' }, '：接 DeepSeek API 跑工具，支持 ', { bold: 'MCP 与技能热加载' }, '、永久记忆和上下文自动压缩，一键安装、整机权限、思考过程可见。'],
        stats: [
          { label: '类型', value: 'Agent Harness' },
          { label: '模型', value: 'DeepSeek v4-pro' },
          { label: '能力', value: 'MCP · Skill · Memory' },
          { label: '仓库', value: 'tide-agent-harness' },
        ],
      },
      {
        id: 'video-rag',
        from: 'left',
        num: '// 03 · RAG',
        title: ['RAG', '知识库问答'],
        desc: ['校园知识库 ', { bold: 'RAG 问答助手' }, '：文档切分入库、向量检索召回，再交给 LLM 生成带依据的回答。', { bold: 'FastAPI + Chroma + BGE + DeepSeek' }, '，前端托管后端单窗口部署。'],
        stats: [
          { label: '检索', value: 'Chroma · BGE' },
          { label: '生成', value: 'DeepSeek' },
          { label: '技术栈', value: 'FastAPI · Streamlit' },
          { label: '部署', value: '单窗口托管' },
        ],
      },
      {
        id: 'badge',
        from: 'right',
        num: '// 04 · BADGE',
        title: ['AIGC', '徽章图像'],
        desc: ['「天地缓缓」釉瓷徽章套装——从 ', { bold: 'AIGC 生图' }, ' 到打样落地的一组实物作品。书页山河、溪边白马、火光眼眸、牧羊与羔羊，把意象做成可佩戴的 ', { bold: '金属硬珐琅徽章' }, '。'],
        stats: [
          { label: '系列', value: '天地缓缓 · 四枚' },
          { label: '流程', value: 'Prompt · 生图 · 打样' },
          { label: '工艺', value: '金属 / 硬珐琅釉' },
          { label: '形态', value: '徽章 / 胸针 / 礼盒' },
        ],
      },
    ],
    moduleDetails: {
      'video-tide': {
        name: 'Tide 本地 Agent Harness',
        repo: 'tide-agent-harness',
        meta: 'TypeScript · DeepSeek · MCP · Skill',
        url: 'https://github.com/wh3474812446-design/tide-agent-harness',
        source: 'GitHub README · 更新于 2026-06-13',
        detail: 'Tide 是一个跑在本地的轻量 Agent Harness：把大模型、工具权限、上下文、会话、MCP、技能系统和浏览器控制台连成一套可运行的智能体。它不是单纯的聊天网页，而是一个能在本机读写文件、执行命令、调用 CLI / HTTP API，并通过网页实时展示思考过程和工具事件的本地工作台。',
        stack: ['TypeScript', 'Node.js', 'DeepSeek', 'MCP SDK', 'Skill System', 'Memory'],
        deliverable: '可本地安装启动的 Agent 控制台 + CLI 入口 + MCP / Skill 面板 + 一键安装脚本',
        highlights: [
          '浏览器控制台承载聊天、模型配置、工具列表、实时事件流和思考过程可视化。',
          '本地工具覆盖文件读写、复制移动删除、shell 命令、代码库搜索、HTTP API 调用，并通过 read/write/network/execute 分级管理风险。',
          '接入 MCP 协议，可把任意 MCP server 的工具桥接成 mcp__server__tool；技能系统支持本地目录或 git URL 安装，热加载后无需重启。',
          '提供永久记忆、两段式上下文压缩、编辑容错级联、读后改契约、API 429/5xx 自愈重试和子代理探索能力。',
          'Windows 下支持一键安装、隐藏后端托管、单窗口启动、网页填 API Key、会话持久化和一键退出。',
        ],
        sections: [
          {
            title: '运行链路',
            items: [
              '双击安装脚本检测 Node.js、安装依赖、生成 .env，并创建“一键启动 Tide”。',
              '前后端由同一个 Node 服务托管，浏览器只打开控制台，后端在后台静默运行。',
              '网页里保存 DeepSeek Key 后即可开始对话，Key 只保存在本地 .env。',
            ],
          },
          {
            title: '工程亮点',
            items: [
              'microcompact 先压缩旧工具结果，再用模型摘要较早对话，长任务不会丢早期决策。',
              'replace_in_file 失败时按空白、智能引号、行号前缀逐级容错，降低自动编辑失败率。',
              '读后改契约要求修改前先读取文件，检测外部改动后重读，避免覆盖用户或编辑器刚做的变化。',
            ],
          },
        ],
      },
      'video-rag': {
        name: 'RAG 本地知识库问答',
        repo: 'local-rag-qa',
        meta: 'Python · FastAPI · Streamlit · Chroma · BGE · DeepSeek',
        url: 'https://github.com/wh3474812446-design/local-rag-qa',
        source: 'GitHub README · 更新于 2026-06-06',
        detail: 'local-rag-qa 是一个通用本地知识库问答网站：上传 PDF、Word、TXT、Markdown 后自动解析、切分、向量化并写入 Chroma。提问时先用多路召回找原文，再让 DeepSeek 基于原文组织答案，回答带来源与逐句溯源，适合把校园政策、产品手册、公司制度等文档变成可问答的知识库。',
        stack: ['Python', 'FastAPI', 'Streamlit', 'Chroma', 'BGE', 'BM25', 'DeepSeek'],
        deliverable: '本地 RAG 问答网站 + 上传/聊天/溯源 API + Windows 一键安装与启动脚本',
        highlights: [
          '支持 PDF、Word、TXT、Markdown 多格式上传，文件夹分区管理，可限定在某个知识库范围内提问。',
          '检索采用 BGE 语义向量 + BM25 关键词 + 标题路三路召回，再用 RRF 融合排序。',
          '可选 bge-reranker-base 交叉编码器对候选段落精排，把更准的原文送给大模型。',
          '回答支持流式输出、来源标注、逐句溯源和原文高亮，降低大模型“编答案”的风险。',
          '网页右上角可直接配置 DeepSeek Key、切换模型；内置学校政策示例文件，便于快速体验。',
        ],
        sections: [
          {
            title: '建库流程',
            items: [
              '上传文档后由 loader.py 解析纯文字，splitter.py 做中文递归切分。',
              'embeddings.py 用本地 BGE 中文向量模型向量化，再由 vectorstore.py 持久化到 Chroma。',
              '文件夹模块负责知识库分区，不同资料可以分开管理和提问。',
            ],
          },
          {
            title: '问答流程',
            items: [
              'retriever.py 同时走向量、关键词和标题三路召回，RRF 把三路排名融合。',
              'reranker.py 用交叉编码器精排候选段落，chain.py 拼接原文和问题后交给 DeepSeek。',
              'tracer.py 做句子级语义比对，把答案每句话定位到具体原文依据。',
            ],
          },
        ],
      },
    },
    capabilities: [
      {
        no: '01',
        name: 'AI 工具提效',
        body: '熟练使用 Claude Code 等命令行 / AI IDE 工具，在模型辅助下具备代码能力，曾自制自动化插件为团队赋能提效。在 GitHub 发布可复用 skill、本地终端工具 tide、音乐咨询 agent、校园手册问答 RAG 知识库并配前端可视化。了解 LangGraph、Harness、工作流、MCP、RAG 原理与大模型训练过程。',
      },
      {
        no: '02',
        name: '标注与测评',
        body: '一年模型训练标注经验，覆盖文本、图像多模态、音乐多领域，交付准确率稳定 95%+，对规则文档的理解与执行一致性强。',
      },
      {
        no: '03',
        name: 'Prompt Engineering',
        body: '能按不同场景设计提示词，沉淀了可复用提示词模板与个人提示词库；理解大模型行为机理与能力边界。',
      },
      {
        no: '04',
        name: '创作经验',
        body: '大学生广告比赛国家级二等奖；地域精神徽章 AI 生图项目被内蒙古文旅采纳出版，线下作为活动赠品发行 20 套。',
      },
      {
        no: '05',
        name: '审美与落地力',
        body: '兼具审美判断与内容评估能力，能对生成结果的风格、质量与合规快速给出取舍；问题拆解与自驱力强，习惯把一个想法从构思一路推到可用成品，并沉淀成可复用流程。',
      },
    ],
    about: {
      title: ['大模型方向，', '重度实践者。'],
      body: '大模型方向重度实践者，已积累一年跨领域标注与规则文档经验，注重细节、严谨与规则执行一致性；擅长把隐性标准显性化为可执行 SOP，能在算法、产品、标注团队间高效协同。对 AI 行业保持高热情，持续跟踪前沿资讯、理解大模型能力边界，坚持高强度动手实践。兼具审美判断、内容评估、问题拆解能力与自驱力，能够推动想法从构思到落地。',
    },
    skills: [
      { name: '模型标注 / 测评', value: '文本 · 图像 · 音乐' },
      { name: '规则文档 / SOP', value: '隐性标准显性化' },
      { name: 'Prompt Engineering', value: '模板 / 个人词库' },
      { name: 'AI 工具提效', value: 'Claude Code · 自制插件' },
      { name: 'Vibe Coding', value: 'tide · RAG · skill' },
      { name: 'AIGC 创作', value: '徽章 · 文旅采纳' },
      { name: '生图 / 视频', value: '可灵 · 即梦 · Veo' },
    ],
    contacts: [
      { label: 'EMAIL', value: '18868131846@163.com', href: 'mailto:18868131846@163.com' },
      { label: 'PHONE', value: '188 6813 1846', href: 'tel:18868131846' },
      { label: '教育', value: '浙江传媒大学 · 本科' },
      { label: 'GitHub', value: 'github.com/wh3474812446-design', href: 'https://github.com/wh3474812446-design' },
      { label: '状态', value: '可随时到岗 · 杭州' },
    ],
    tweaks: {
      palettes: [
        { value: 'onyx', label: '纯黑 Onyx' },
        { value: 'ember', label: '深灰 Graphite' },
        { value: 'cobalt', label: '浅灰 Pewter' },
        { value: 'terminal', label: '反相 Bone' },
      ],
      typefaces: [
        { value: 'serif', label: '衬线' },
        { value: 'sans', label: '无衬线' },
        { value: 'mono', label: '等宽' },
      ],
      layouts: [
        { value: 'bento', label: 'Bento' },
        { value: 'scroll', label: '长滚动' },
      ],
    },
    footer: ['© 2026 EAMON · ALL RIGHTS RESERVED', 'VIBE-CODED · BUILT WITH CLAUDE'],
  };

  data.metrics = {
    githubCount: `${data.projects.length} 个项目`,
  };

  window.PORTFOLIO_DATA = data;
}());
