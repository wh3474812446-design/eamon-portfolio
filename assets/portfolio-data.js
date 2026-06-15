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
      { name: 'rule-doc-skill', meta: 'Skill · Annotation · Docs', desc: '把标注规则文档的撰写流程沉淀成可复用 skill：任务拆解、规则条目、边界 case 与示例一键成稿。' },
      { name: 'eval-doc-skill', meta: 'Skill · Evaluation · Report', desc: 'rule-doc 的姊妹项目，面向测评规则与测评报告：标准、维度、打分口径到结论一条龙。' },
      { name: 'campus-rag-assistant', meta: 'FastAPI · Chroma · BGE · DeepSeek', desc: '校园知识库 RAG 问答助手，文档切分入库、向量检索召回，再交给 LLM 生成带依据的回答。' },
      { name: 'tide-agent-harness', meta: 'Python · DeepSeek · MCP · Skill', desc: '本地 Agent Harness：接 API 跑工具，支持 MCP、技能热加载、永久记忆与上下文压缩，一键安装。' },
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
      { label: 'GitHub', value: 'github.com/eamon' },
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
