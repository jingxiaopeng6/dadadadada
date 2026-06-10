const chapters = [
  {
    id: "ch1",
    title: "第1章 GIS 基本概念",
    subtitle: "信息、数据、地理信息、GIS 定义、特点、组成与发展",
    focus: [
      "信息与数据的区别和联系",
      "地理信息的特点",
      "GIS 的定义、类型和功能",
      "GIS 与 DBMS / MIS / CAD 的区别",
      "GIS 的组成、硬件、软件和人员",
      "GIS 发展简史与未来趋势"
    ],
    details: {
      definitions: [
        { term: "数据", definition: "客观事物的符号表示，是未经加工的原始材料。" },
        { term: "信息", definition: "经过加工处理后、能够影响决策的数据。" },
        { term: "地理信息", definition: "与地理实体的位置、属性、关系和变化有关的信息。" },
        { term: "地理信息系统（GIS）", definition: "在计算机软硬件支持下，对空间数据及其属性数据进行采集、存储、管理、运算、分析、显示和描述的技术系统。" }
      ],
      comparisons: [
        {
          title: "信息与数据的区别与联系",
          points: [
            "数据是原始记录，信息是加工后的结果。",
            "数据偏形式，信息偏意义。",
            "数据是信息的载体，信息是数据的内在价值。"
          ]
        },
        {
          title: "GIS 与 DBMS 的区别",
          points: [
            "DBMS 主要管理一般数据，GIS 还要处理空间关系。",
            "GIS 支持空间查询、空间分析和地图表达。",
            "GIS 需要空间索引与拓扑关系支持。"
          ]
        },
        {
          title: "GIS 与 CAD 的区别",
          points: [
            "CAD 偏工程设计，GIS 偏空间信息管理。",
            "GIS 更强调属性、拓扑和分析。",
            "CAD 适合几何绘制，GIS 适合地理表达。"
          ]
        },
        {
          title: "GIS 与 MIS 的区别",
          points: [
            "MIS 偏事务处理，GIS 偏空间分析。",
            "MIS 不强调空间位置，GIS 强调空间位置。",
            "GIS 输出专题地图，MIS 输出表格报表。"
          ]
        }
      ],
      algorithms: [
        { name: "信息熵", formula: "H(X) = -∑P(xi)log₂P(xi)", description: "衡量信息不确定性的指标。" }
      ],
      applications: [
        "资源调查与管理",
        "城市规划与管理",
        "环境保护与监测",
        "灾害监测与预警",
        "交通分析与选址"
      ]
    },
    note: "提纲和 PPT 中最基础的一章，定义题和对比题很容易出。"
  },
  {
    id: "ch2",
    title: "第2章 地理认知与抽象",
    subtitle: "现实世界、概念世界、空间世界、OGC 九层模型",
    focus: [
      "对现实世界的地理认知",
      "OGC 九层模型",
      "现实世界到比特世界的抽象过程",
      "数据建模与数据模型"
    ],
    note: "重点看“认知 - 抽象 - 建模”的逻辑链条。"
  },
  {
    id: "ch3",
    title: "第3章 空间数据模型",
    subtitle: "场模型、要素模型、网络模型、时空模型和三维模型",
    focus: [
      "空间数据模型概念",
      "场模型与要素模型",
      "网络模型",
      "时空数据模型",
      "三维空间数据模型",
      "分布式空间数据模型"
    ],
    details: {
      definitions: [
        { term: "空间数据模型", definition: "描述空间数据组织、结构及其关系的概念集合，是 GIS 的理论基础。" },
        { term: "场模型", definition: "把地理空间看作连续属性场，适合表达温度、降水、海拔等连续现象。" },
        { term: "要素模型", definition: "把地理空间看作离散对象集合，适合表达道路、河流、建筑物等对象。" },
        { term: "网络模型", definition: "用节点和边描述连通系统，适合道路网、管线网等分析。" }
      ],
      comparisons: [
        {
          title: "场模型与要素模型的对比",
          points: [
            "场模型适合连续现象，要素模型适合离散对象。",
            "场模型偏函数描述，要素模型偏几何对象描述。",
            "两者在分析方法和数据结构上不同。"
          ]
        },
        {
          title: "矢量模型与栅格模型的对比",
          points: [
            "矢量精度高，栅格分析直观。",
            "矢量适合离散对象，栅格适合连续现象。",
            "矢量拓扑清晰，栅格计算简单。"
          ]
        },
        {
          title: "TIN 与格网 DEM 的对比",
          points: [
            "TIN 用不规则三角形表示地形，格网 DEM 用规则网格表示。",
            "TIN 保留特征点，格网 DEM 采样均匀。",
            "TIN 适合复杂地形，格网 DEM 适合规则计算。"
          ]
        }
      ],
      algorithms: [
        { name: "Delaunay 三角网", formula: "任意三角形外接圆内不应包含其他点。", description: "构建 TIN 的常用准则。" },
        { name: "Voronoi 图", formula: "空间中每点到某生成点的距离小于到其他生成点的距离。", description: "常用于自然邻域分析和空间分区。" }
      ],
      applications: [
        "地形分析",
        "城市建模",
        "交通网络分析",
        "时空轨迹分析",
        "分布式 GIS"
      ]
    },
    note: "模型类题目通常要求会对比、会举例、会说明适用场景。"
  },
  {
    id: "ch5",
    title: "第5章 空间数据",
    subtitle: "数据类型、质量、误差和元数据",
    focus: ["空间数据类型", "空间数据质量", "空间数据误差", "元数据"],
    note: "这章很适合出名词解释和简答题。"
  },
  {
    id: "ch6",
    title: "第6章 数据获取与处理",
    subtitle: "数据来源、输入方法、数字化、坐标变换、Douglas、DIME",
    focus: ["数据来源与输入方法", "手扶跟踪数字化仪工作原理", "扫描和矢量化", "Douglas 算法", "坐标变换", "DIME 编码"],
    note: "算法和流程题很常见，尤其是矢量化、坐标变换与编码。"
  },
  {
    id: "ch7",
    title: "第7章 空间数据库与数据结构",
    subtitle: "栅格、矢量、编码方式和转换",
    focus: ["空间数据库概念", "栅格和矢量数据的优缺点比较", "栅格编码方式", "矢量编码方式", "栅格 - 矢量转换"],
    note: "对比题高频：栅格 vs 矢量、编码方式、数据结构。"
  },
  {
    id: "ch8",
    title: "第8章 空间查询与空间分析",
    subtitle: "空间查询、地理编码、量算、分析方法、网络分析",
    focus: ["空间查询与地理编码", "空间量算与质询", "各种空间分析方法", "网络分析路径与 Dijkstra 算法"],
    note: "这章常和实际应用结合，回答时记得带“用途”和“步骤”。"
  },
  {
    id: "ch9",
    title: "第9章 数字地形模型",
    subtitle: "DEM / DTM / TIN、插值、通视、流域、地形属性",
    focus: ["DTM 与 DEM 概念及关系", "DEM 主要表示模型", "不规则点集生成 TIN", "格网 DEM 与 TIN 转换", "通视分析", "流域结构与自动分割", "坡度、坡向、表面积等地形属性"],
    note: "第9章内容最多，适合先记“模型 - 构建 - 分析 - 应用”的四段式结构。"
  }
];

const quickCards = [
  { title: "GIS 一句话定义", body: "在计算机软硬件支持下，对空间数据及其属性数据进行采集、存储、管理、运算、分析、显示和描述的技术系统。" },
  { title: "信息与数据", body: "数据是记录客观世界的符号；信息是经过加工后、能影响决策的数据。考试常问“区别 + 联系”。" },
  { title: "OGC 九层模型", body: "现实世界可以抽象为概念世界、地理空间世界、尺度世界、项目世界等多个层次。" },
  { title: "Delaunay 关键准则", body: "三角形外接圆内不能包含其他点；局部优化时常用最大化最小角原则。" },
  { title: "Douglas 算法", body: "常用于折线简化，处理数字化和矢量化时的冗余点。" },
  { title: "Dijkstra 算法", body: "经典最短路径算法，常用于网络分析的路径规划题。" },
  { title: "DEM 常用分析", body: "通视、流域提取、坡度坡向、表面积、体积、等高线追踪都很常见。" },
  { title: "栅格 vs 矢量", body: "栅格适合连续现象，矢量适合离散对象；前者计算直观，后者表达精确。" }
];

const studyUnitsSeed = [
  { chapter: "第1章", topic: "GIS 的定义", core: "GIS 是面向空间数据的采集、存储、管理、分析与可视化系统。", keywords: ["定义", "功能", "空间数据"], example: "专题地图制作", pitfall: "不要只写成地图制图软件" },
  { chapter: "第1章", topic: "信息与数据", core: "数据是记录，信息是加工后的知识。", keywords: ["区别", "联系", "加工"], example: "气象观测数据和天气预报信息", pitfall: "别把数据和信息混为一谈" },
  { chapter: "第2章", topic: "现实世界到 GIS", core: "现实世界经过抽象进入概念世界，再映射到 GIS 表达。", keywords: ["抽象", "映射", "模型"], example: "地物抽象为点线面", pitfall: "抽象层次要讲清楚" },
  { chapter: "第2章", topic: "OGC 九层模型", core: "从现实到对象再到表达接口的多层抽象框架。", keywords: ["OGC", "层次", "接口"], example: "现实世界 - 概念世界 - 数据世界", pitfall: "不要把层次顺序说乱" },
  { chapter: "第3章", topic: "场模型", core: "用连续函数描述空间现象，强调连续变化。", keywords: ["连续", "函数", "属性场"], example: "温度场", pitfall: "适合连续现象，不适合离散对象" },
  { chapter: "第3章", topic: "要素模型", core: "以对象为中心，强调边界、属性和关系。", keywords: ["离散", "对象", "属性"], example: "道路、建筑物", pitfall: "不要忽略拓扑关系" },
  { chapter: "第5章", topic: "空间数据类型", core: "常见有点、线、面、栅格、TIN、属性数据等。", keywords: ["点", "线", "面", "栅格"], example: "行政区边界", pitfall: "区分几何数据和属性数据" },
  { chapter: "第5章", topic: "空间数据质量", core: "数据质量看准确性、完整性、一致性、现势性和精度。", keywords: ["质量", "精度", "现势性"], example: "地图更新周期", pitfall: "别只说精度" },
  { chapter: "第6章", topic: "数字化", core: "把纸质地图或图形转成可入库的空间数据。", keywords: ["扫描", "矢量化", "输入"], example: "手扶跟踪数字化", pitfall: "别遗漏质量控制" },
  { chapter: "第6章", topic: "Douglas 算法", core: "用于折线简化，保留关键点并删除冗余点。", keywords: ["简化", "阈值", "折线"], example: "道路折线简化", pitfall: "阈值太大会失真" },
  { chapter: "第7章", topic: "栅格数据", core: "用规则网格单元表达空间现象。", keywords: ["网格", "连续", "单元"], example: "DEM", pitfall: "分辨率和存储要一起考虑" },
  { chapter: "第7章", topic: "矢量数据", core: "用点、线、面表达离散空间对象。", keywords: ["点", "线", "面"], example: "道路网", pitfall: "别忘了拓扑" },
  { chapter: "第8章", topic: "空间查询", core: "按位置、条件或二者结合检索空间对象。", keywords: ["查询", "条件", "位置"], example: "查询某区域内学校", pitfall: "把查询和分析混淆" },
  { chapter: "第8章", topic: "Dijkstra 算法", core: "从源点出发逐步扩展，求最短路径。", keywords: ["最短路", "网络", "路径"], example: "导航路径规划", pitfall: "需要权重非负" },
  { chapter: "第9章", topic: "DEM", core: "数字高程模型，用于表达地形表面高程。", keywords: ["高程", "地形", "分析"], example: "坡度坡向分析", pitfall: "DEM 与 DTM 要区分" },
  { chapter: "第9章", topic: "TIN", core: "不规则三角网，适合保留地形特征点。", keywords: ["三角网", "特征点", "地形"], example: "地形建模", pitfall: "注意与格网 DEM 的差异" }
];
const questionBank = {
  choice: [
    {
      id: "mc1",
      chapter: "第1章",
      focus: true,
      prompt: "���й��� GIS ��˵������ȷ������һ�",
      options: [
        "GIS ֻ�����ͼ���ƣ����������ݷ�??",
        "GIS �ǶԿռ����ݽ��вɼ����洢���������������ʾ�ļ���ϵ??",
        "GIS �����ݿ�����޹�",
        "GIS ���ܴ���������??"
      ],
      answer: 1,
      explain: "GIS �ĺ��Ĳ����Ǵ洢����������������ʾ�����֧��??"
    },
    {
      id: "mc2",
      chapter: "第1章",
      focus: true,
      prompt: "������һ���������֡���Ϣ���͡����ݡ��Ĺ�ϵ??",
      options: [
        "����һ������Ϣ���м�??",
        "��Ϣ�����ݾ����ӹ���Ľ������Ӱ���??",
        "��Ϣ��������ȫ��??",
        "����ֻ�������֣�������ͼ??"
      ],
      answer: 1,
      explain: "����е��ص���ǡ������Ǳ�����ʽ����Ϣ�������߼���ϵ�����֡�??"
    },
    {
      id: "mc3",
      chapter: "第1章",
      focus: true,
      prompt: "GIS ??DBMS ��ȣ���ͻ��������֮һ�ǣ�",
      options: [
        "GIS ֻ�������ԣ�������ռ���??",
        "GIS ���жԿռ����ݽ��н��ͺͿռ��������??",
        "DBMS ���Զ����ɵ�ͼ���ţ�??GIS ����",
        "DBMS ??GIS ���������˽�??"
      ],
      answer: 1,
      explain: "GIS ��ֻ�����ݿ�������Ҫ����ռ��ϵ�����˺ͷ���??"
    },
    {
      id: "mc4",
      chapter: "第3章",
      focus: true,
      prompt: "���й��ڳ�ģ�ͺ�Ҫ��ģ�͵�˵������ȷ����??",
      options: [
        "��ģ�͸��ʺ����������仯����??",
        "Ҫ��ģ��ֻ�ʺ��������·ֲ�",
        "��ģ�ͱ�����ʸ����ʾ",
        "Ҫ��ģ�Ͳ��ܽ����κοռ����"
      ],
      answer: 0,
      explain: "��ģ���ʺ������Ϳռ�����Ҫ��ģ���ʺ���ɢ����??"
    },
    {
      id: "mc5",
      chapter: "第7章",
      focus: true,
      prompt: "դ������ģ�����ʺϱ��������һ�����",
      options: [
        "�����߽�",
        "��·����??",
        "�¶ȳ��ͽ�������??",
        "��������??"
      ],
      answer: 2,
      explain: "��������ͨ�����ʺ�դ����??"
    },
    {
      id: "mc6",
      chapter: "第9章",
      focus: true,
      prompt: "Delaunay �����������г��õ���Ҫ׼����??",
      options: [
        "����������������",
        "��һ���������Բ�ڲ�������������",
        "���������α߳���ȫ��ͬ",
        "������ֻ�ܰ������������"
      ],
      answer: 1,
      explain: "���� TIN / Delaunay �ĺ����о�??"
    },
    {
      id: "mc7",
      chapter: "第8章",
      focus: true,
      prompt: "Dijkstra �㷨��Ҫ����??",
      options: [
        "����������??",
        "���·����??",
        "����ѹ��",
        "�ȸ�����??"
      ],
      answer: 1,
      explain: "�������������͵�·���㷨??"
    },
    {
      id: "mc8",
      chapter: "第2章",
      focus: true,
      prompt: "OGC �Ų�ģ�͵ĺ������ø��ӽ��ڣ�",
      options: [
        "����ʵ�����𼶳�����Ŀ���������Ҫ�صȲ��",
        "ֻ�����ͼ��??",
        "ֻ������ݿⱸ��",
        "ֻ����������??"
      ],
      answer: 0,
      explain: "��ǿ����ʵ���絽��Ϣϵͳ�ĳ�����??"
    },
    {
      id: "mc9",
      chapter: "第5章",
      focus: true,
      prompt: "������������ϡ�Ԫ���ݡ��ĺ���??",
      options: [
        "��ͼͼ���е���ɫ",
        "�������ݵ����ݣ������������ݵ���Դ������",
        "���ݿ��еļ��ζ�??",
        "һ�ֿռ��ֵ��??"
      ],
      answer: 1,
      explain: "Ԫ���ݾ��ǡ��������ݵ����ݡ�??"
    },
    {
      id: "mc10",
      chapter: "第6章",
      focus: true,
      prompt: "ɨ���ʸ���������е���ҪĿ���ǣ�",
      options: [
        "��ֽ�ʵ�ͼ���ͼ���ļ�������ȡ������??",
        "����ͼ����ת��Ϊ�����Ŀռ�����",
        "ֻ�ı��ͼ��??",
        "ֻѹ���ļ���??"
      ],
      answer: 1,
      explain: "ʸ�����ı����ǰ�ͼ������ת�ɽṹ���ռ�����??"
    },
    {
      id: "mc11",
      chapter: "第7章",
      focus: true,
      prompt: "դ��������ʸ�����ݵıȽ��У������׼ȷ��",
      options: [
        "դ����ʺϱ����ɢ�߽磬ʸ�����ʺ������ֲ�",
        "դ����ʺ������ֲ���ʸ�����ʺ���ɢ����",
        "����û���κ���??",
        "ʸ�����ݲ��ܽ��пռ����"
      ],
      answer: 1,
      explain: "��������ƫդ����ɢ����ƫʸ�����Ǹ�Ƶ�Աȵ�??"
    },
    {
      id: "mc12",
      chapter: "第9章",
      focus: true,
      prompt: "���� DEM ��һ����Ҫ����������??",
      options: [
        "��ֱ�ӽ����¶ȡ������դ������",
        "������ת���� CAD ����ʹ��",
        "���ܱ�ʾ��������",
        "��������ͨ�ӷ���"
      ],
      answer: 0,
      explain: "���� DEM �ڵ��η����Ϸǳ�����??"
    }
  ],
  fill: [
    {
      id: "fi1",
      chapter: "第1章",
      focus: true,
      prompt: "GIS ��Ӣ��ȫ���� ________??",
      answer: ["geographicinformationsystem", "geographicinformationsystems"],
      explain: "��������һ��Ҫ��дȫ��??"
    },
    {
      id: "fi2",
      chapter: "第1章",
      focus: true,
      prompt: "��Ϣ�صĳ������ʽ��дΪ H(x)= ________ ??",
      answer: ["-��P(Xi)log2P(Xi)", "-sum(P(Xi)log2P(Xi))", "-��P(Xi)log2P(Xi)"],
      explain: "��ס����Ϣ������ = ��Ϣ�ء�??"
    },
    {
      id: "fi3",
      chapter: "第3章",
      focus: true,
      prompt: "��ģ��ͨ�����ڱ�� ________ �Ϳռ�����??",
      answer: ["????", "??????"],
      explain: "���¶ȡ����ꡢ���ε�??"
    },
    {
      id: "fi4",
      chapter: "第6章",
      focus: true,
      prompt: "Douglas �㷨����??________ ??",
      answer: ["?????", "???", "?????"],
      explain: "��ʸ�����͵�ͼ�ۺ��г����ļ򻯷���??"
    },
    {
      id: "fi5",
      chapter: "第7章",
      focus: true,
      prompt: "դ�������ʺϱ�� ________ ������ʸ�������ʺϱ����ɢ����??",
      answer: ["????", "??????"],
      explain: "����һ���ǳ����͵ıȽ����??"
    },
    {
      id: "fi6",
      chapter: "第9章",
      focus: true,
      prompt: "Delaunay �����������Բ�ڲ���Ӧ������??________ ??",
      answer: ["??"],
      explain: "���� Delaunay �ĺ����о�??"
    },
    {
      id: "fi7",
      chapter: "第8章",
      focus: true,
      prompt: "�������Ҳ������??________??",
      answer: ["��ַƥ��"],
      explain: "���ݵ�ַ��λ���ռ�����??"
    },
    {
      id: "fi8",
      chapter: "第9章",
      focus: true,
      prompt: "DEM �ĵ������Է����У��¶Ⱥ� ________ ���������������ָ��??",
      answer: ["����"],
      explain: "�ܶ��������¶ȡ��������һ��??"
    },
    {
      id: "fi9",
      chapter: "第2章",
      focus: true,
      prompt: "��ʵ���硢�������硢����ռ�����֮��Ĺ�ϵ��ͨ������Ϊ��� ________ �Ĺ���??",
      answer: ["����"],
      explain: "����ʵ��ģ�ͣ��������ǳ���??"
    },
    {
      id: "fi10",
      chapter: "第3章",
      focus: true,
      prompt: "����ģ��ǿ�����ǿռ����֮��??________ ��ϵ??",
      answer: ["???", "????", "????"],
      explain: "����ĺ��ľ�����ͨ��??"
    },
    {
      id: "fi11",
      chapter: "第8章",
      focus: true,
      prompt: "�������Ҳ�������Ϊ��ַ??________ ��ת��??",
      answer: ["�ռ�λ��", "����", "λ��"],
      explain: "��ַƥ����ǰѵ�ַӳ�䵽����λ��??"
    },
    {
      id: "fi12",
      chapter: "第9章",
      focus: true,
      prompt: "TIN �����ĳ���Ϊ����??________ ��??",
      answer: ["����"],
      explain: "TIN = Triangulated Irregular Network??"
    }
  ],
  term: [
    {
      id: "te1",
      chapter: "第1章",
      focus: true,
      term: "������Ϣ",
      answer: "�йص���ʵ�����ʡ��������˶�״̬�ı�����һ������֪ʶ���ǶԵ������ݵĽ���??"
    },
    {
      id: "te2",
      chapter: "第3章",
      focus: true,
      term: "�ռ�����ģ��",
      answer: "������ʵ����ռ�ʵ�弰���໥��ϵ�ĸ�����������ռ����ݵ���֯����ƿռ����ݿ�ģʽ??"
    },
    {
      id: "te3",
      chapter: "第5章",
      focus: true,
      term: "Ԫ��??",
      answer: "�������ݵ����ݣ�����˵��������Դ�����ȡ����ݡ�����ϵͳ��ʱ�������??"
    },
    {
      id: "te4",
      chapter: "第6章",
      focus: true,
      term: "DIME ����",
      answer: "һ��ʸ�����뷽ʽ�����������ߺ����˹�ϵ�������ڿռ����ݱ������Ҫ����??"
    },
    {
      id: "te5",
      chapter: "第8章",
      focus: true,
      term: "�ռ��ѯ",
      answer: "����λ�á�������������ϣ��Կռ����ݿ��еĶ�����м����Ĺ���??"
    },
    {
      id: "te6",
      chapter: "第9章",
      focus: true,
      term: "TIN",
      answer: "����������������������ɢ�㹹�������������������α���??"
    },
    {
      id: "te7",
      chapter: "第9章",
      focus: true,
      term: "ͨ�ӷ���",
      answer: "??DEM �����ģ�����жϹ۲����Ŀ���֮���Ƿ�ɼ����ɼ���Χ�ж���һ�����??"
    },
    {
      id: "te8",
      chapter: "第7章",
      focus: true,
      term: "դ�����",
      answer: "��դ�����ݽ��д洢��ѹ����һ����뷽������ֱ�ӱ��롢�����??"
    },
    {
      id: "te9",
      chapter: "第2章",
      focus: true,
      term: "������֪",
      answer: "���ǶԵ�����塢�����Ϳռ��ϵ����ʶ���̣��ǵ�����Ϣ�����е���Ҫ����??"
    },
    {
      id: "te10",
      chapter: "第3章",
      focus: true,
      term: "ʱ������ģ��",
      answer: "���ڱ�����ʵ�弰�����ԡ�λ����ʱ��仯��ģ��??"
    },
    {
      id: "te11",
      chapter: "第8章",
      focus: true,
      term: "��������",
      answer: "����ռ���󼸺����Ļ����Լ�Ȩ���ĵ����㷽����������λ�÷���??"
    },
    {
      id: "te12",
      chapter: "第9章",
      focus: true,
      term: "ͨ��",
      answer: "��һ���۲�㵽Ŀ���֮���Ƿ���ڵ����ڵ��Ŀɼ��Թ�ϵ??"
    }
  ],
  short: [
    {
      id: "sh1",
      chapter: "第1章",
      focus: true,
      prompt: "��??GIS ����Ҫ����??",
      answer: "���Դ����ݲɼ����洢������ռ��ѯ���ռ���������ӻ������������������ָ�� GIS �������֧��??"
    },
    {
      id: "sh2",
      chapter: "第1章",
      focus: true,
      prompt: "��??GIS ??MIS��DBMS��CAD ������??",
      answer: "GIS ǿ���ռ����ݺͿռ������DBMS ƫ�����ݴ洢�����MIS ƫ�ع�����Ϣ�����CAD ƫ�ؼ���ͼ�α��ռ������������������??"
    },
    {
      id: "sh3",
      chapter: "第3章",
      focus: true,
      prompt: "�Ƚϳ�ģ�ͺ�Ҫ��ģ�͵����ö���??",
      answer: "��ģ���ʺ������͵����������¶ȡ����ꡢ���Σ�Ҫ��ģ���ʺ���ɢ�������·���������ؿ顢������??"
    },
    {
      id: "sh4",
      chapter: "第7章",
      focus: true,
      prompt: "�Ƚ�դ�����ݺ�ʸ�����ݵ���ȱ��??",
      answer: "դ��ṹ�򵥡��ʺ���������͵��ӷ�����������ϴ󡢾����ֱܷ���Ӱ�죻ʸ����ﾫȷ�����������߽�����ˣ����ṹ���ӡ�������������դ��ֱ��??"
    },
    {
      id: "sh5",
      chapter: "第8章",
      focus: true,
      prompt: "�ռ��������ͨ��������Щ����??",
      answer: "�ɴӿռ��ѯ���ռ����㡢���������������ӷ����������������ֵ�����ȷ���ش𣬲����Ӧ�ó���˵��??"
    },
    {
      id: "sh6",
      chapter: "第9章",
      focus: true,
      prompt: "��??DEM ������һ������??",
      answer: "�Ȳɼ��������ݣ��ٽ������������������֯��Ȼ��ѡ����� DEM ??TIN �ȱ�ʾģ�ͣ����ͨ����ֵ��ת���ͷ����γɿ���??DEM ����??"
    },
    {
      id: "sh7",
      chapter: "第2章",
      focus: true,
      prompt: "������ʵ���絽 GIS ģ�͵ĳ������??",
      answer: "�ɴ���ʵ���硢�������硢����ռ����硢�߶����硢��Ŀ����Ȳ��˵����ǿ����Ϣ���������б�����ͱ��??"
    },
    {
      id: "sh8",
      chapter: "第6章",
      focus: true,
      prompt: "��������任�� GIS ���ݴ����е�����??",
      answer: "����任���ڰѲ�ͬ��Դ����ͬ����ϵͳ������ͳһ��ͬһ�ռ�ο�ϵ�У����ڵ��ӡ���ѯ�ͷ���??"
    },
    {
      id: "sh9",
      chapter: "第8章",
      focus: true,
      prompt: "��??Dijkstra �㷨??GIS ��������еĻ���˼��??",
      answer: "��Դ����������յ�ǰ��̾�������չ�������ڵ㣬��������·�����ۣ����յõ����·����??"
    },
    {
      id: "sh10",
      chapter: "第9章",
      focus: true,
      prompt: "��??TIN �͸�??DEM ����Ҫ����??",
      answer: "TIN �ò���������������Σ��ʺϱ��������ߺ���ɢ�㣻���� DEM �ù����������Σ��ṹ�򵥣�����դ�����??"
    }
  ],
  essay: [
    {
      id: "es1",
      chapter: "第1章",
      focus: true,
      prompt: "���� GIS �ķ�չ���̡���ǰ������δ������??",
      answer: "�ɴ���Դ����չ�׶Ρ���ϵͳ����ѧ�ٵ�������ݽ����Լ����绯����׼����������ҵ�������ܻ���ʱ�մ�����ƽ̨�ȷ���չ��??"
    },
    {
      id: "es2",
      chapter: "第6章",
      focus: true,
      prompt: "�������˵����ԭʼ�ռ����ݵ����� GIS ���ݵĴ������??",
      answer: "��д���ݻ�ȡ�����ֻ�/ɨ��/ң��/GPS ���롢����ת�����������������롢�������ơ����ݿ�����������??"
    },
    {
      id: "es3",
      chapter: "第9章",
      focus: true,
      prompt: "��� DEM ˵�� TIN����??DEM ����ز�ֵ�㷨�Ĺ�ϵ��Ӧ��??",
      answer: "�ɱȽ����ֱ�ʾģ�ͣ�˵��������㼯��??TIN�������� TIN ���໥ת����Delaunay ׼��ͨ�Ӻ�����������¶������Ӧ��??"
    },
    {
      id: "es4",
      chapter: "第8章",
      focus: true,
      prompt: "����������������·�������˼�롢�����Ӧ�ó���??",
      answer: "�ɽ���ͼģ�͡�Ȩֵ��Dijkstra �㷨��·�����������Լ���ͨ����������Ԯ��ʵ��Ӧ��??"
    },
    {
      id: "es5",
      chapter: "第2章",
      focus: true,
      prompt: "��� OGC �Ų�ģ��������ʵ����??GIS ���֮��ĳ����ϵ??",
      answer: "�ɰ���ʵ���硢�������硢����ռ����硢�߶����硢��Ŀ����Ȳ��չ����˵���ռ�ʵ�塢���Ρ�Ҫ�غͽӿ�֮��Ĺ�ϵ������??GIS �ĳ����뻹ԭ����˵��ģ������??"
    },
    {
      id: "es6",
      chapter: "第3章",
      focus: true,
      prompt: "�����ռ�����ģ�͵����ͼ������ó���??",
      answer: "�ɴӳ�ģ�͡�Ҫ��ģ�͡�����ģ�͡�ʱ��ģ�͡���άģ��չ����˵����ͬģ��������������ɢ������ͨ��ϵ����̬�仯����ά����ϵ��ŵ�������??"
    },
    {
      id: "es7",
      chapter: "第7章",
      focus: true,
      prompt: "�����ռ����ݿ���դ���ʸ�����ݽṹ���ص㼰��ת����ϵ??",
      answer: "�ɱȽ϶��ߵ�������֯���洢���������ƺ;��ޣ���˵��դ��ʸ����ʸ����դ���ת��˼·���Լ��ڲ�ͬ GIS �����е�ѡ��ԭ��??"
    },
    {
      id: "es8",
      chapter: "第9章",
      focus: true,
      prompt: "���� DEM �ڵ��η����е����ã������ͨ�ӡ�������������Է�������˵��??",
      answer: "��˵??DEM �ǵ��η����Ļ������ݣ��ֱ�չ��ͨ�ӷ�����������ȡ���¶����򡢱��������������Ӧ�ã�����ܽ� DEM ����Դ�����̺ͻ��������еļ�ֵ??"
    }
  ]
};

const state = {
  currentBank: [],
  currentExam: [],
  answers: new Map(),
  timer: null,
  timeLeft: 0,
  timerRunning: false,
  activeView: "home",
  expandedChapter: null,
  activeFocus: {
    chapterId: chapters[0]?.id || "",
    label: chapters[0]?.focus?.[0] || ""
  }
};

const els = {
  viewPages: document.querySelectorAll("[data-view]"),
  viewButtons: document.querySelectorAll("[data-view-target]"),
  chapterGrid: document.getElementById("chapterGrid"),
  studyMap: document.getElementById("studyMap"),
  focusModal: document.getElementById("focusModal"),
  focusModalBody: document.getElementById("focusModalBody"),
  focusModalTitle: document.getElementById("focusModalTitle"),
  cardGrid: document.getElementById("cardGrid"),
  bankList: document.getElementById("bankList"),
  bankSearch: document.getElementById("bankSearch"),
  bankLimit: document.getElementById("bankLimit"),
  bankCount: document.getElementById("bankCount"),
  bankChapterFilter: document.getElementById("bankChapterFilter"),
  bankTypeFilter: document.getElementById("bankTypeFilter"),
  reshuffleBank: document.getElementById("reshuffleBank"),
  generateExam: document.getElementById("generateExam"),
  startTimer: document.getElementById("startTimer"),
  submitExam: document.getElementById("submitExam"),
  examPaper: document.getElementById("examPaper"),
  examSummary: document.getElementById("examSummary"),
  timerBadge: document.getElementById("timerBadge"),
  focusOnlyToggle: document.getElementById("focusOnlyToggle"),
  compactToggle: document.getElementById("compactToggle"),
  preferFocus: document.getElementById("preferFocus"),
  countChoice: document.getElementById("countChoice"),
  countFill: document.getElementById("countFill"),
  countTerm: document.getElementById("countTerm"),
  countShort: document.getElementById("countShort"),
  countEssay: document.getElementById("countEssay"),
  examMinutes: document.getElementById("examMinutes")
};

const runtimeWindow = typeof window !== "undefined" ? window : globalThis;
const studyUnits = Array.isArray(runtimeWindow.__GIS_STUDY_UNITS__) && runtimeWindow.__GIS_STUDY_UNITS__.length
  ? runtimeWindow.__GIS_STUDY_UNITS__
  : studyUnitsSeed;

function buildCleanQuestionBank() {
  const variants = [
    ["最符合", "最适合", "最能体现"],
    ["主要用于", "常用于", "通常用于"],
    ["核心是", "重点在于", "本质上是"]
  ];

  const clean = { choice: [], fill: [], term: [], short: [], essay: [] };
  let counter = 1;

  for (const unit of studyUnits) {
    const chapter = unit.chapter;
    const topic = unit.topic;
    const core = unit.core;
    const keywords = unit.keywords || [];

    for (const [index, prefix] of variants.entries()) {
      clean.choice.push({
        id: `c_${counter++}`,
        chapter,
        focus: index === 0,
        prompt: `${chapter} 中，${prefix} ${topic} 的说法是？`,
        options: [
          `与 ${topic} 无关`,
          `这是 ${topic} 的核心内容`,
          `只能用于绘图`,
          `只适合统计报表`
        ],
        answer: 1,
        explain: core
      });
    }

    clean.fill.push({
      id: `f_${counter++}`,
      chapter,
      focus: true,
      prompt: `${topic} 通常用于表达 ________。`,
      answer: [keywords[0] || topic, topic],
      explain: core
    });

    clean.term.push({
      id: `t_${counter++}`,
      chapter,
      focus: true,
      term: topic,
      answer: core
    });

    clean.short.push({
      id: `s_${counter++}`,
      chapter,
      focus: true,
      prompt: `简述 ${topic} 的主要内容。`,
      answer: `${core}，并结合 ${unit.example || "教材实例"} 说明其应用。`
    });

    clean.essay.push({
      id: `e_${counter++}`,
      chapter,
      focus: true,
      prompt: `论述 ${topic} 的意义、特点及其在 GIS 复习中的常见考法。`,
      answer: `可从概念定义、核心特点、适用场景和易错点展开，结合 ${unit.example || "典型案例"} 说明。`
    });
  }

  return clean;
}

const cleanBank = runtimeWindow.__GIS_GENERATED_BANK__ || buildCleanQuestionBank();
Object.keys(questionBank).forEach((key) => {
  questionBank[key].length = 0;
  questionBank[key].push(...cleanBank[key]);
});

function normalizeText(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/[\s\u3000,，。．.!！?？;；:：()（）\[\]{}'"'“”‘’`~\-_/\\|]+/g, "")
    .replace(/π/g, "pi")
    .replace(/Σ/g, "sum")
    .replace(/σ/g, "sigma");
}

function shuffle(list) {
  const arr = [...list];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function unique(list) {
  return [...new Set(list.filter((item) => item !== undefined && item !== null && item !== ""))];
}

function safeText(value, fallback = "") {
  const text = String(value ?? fallback);
  if (text === "undefined" || text === "null") return fallback;
  return text.trim() ? text : fallback;
}

function getQuestionTitle(question) {
  if (!question) return "未命名题目";
  if (question.type === "term") return safeText(question.term, "未命名题目");
  return safeText(question.prompt || question.term, "未命名题目");
}

function syncQuestionTitles(questions, selector) {
  const questionMap = new Map((questions || []).map((item) => [item.id, item]));
  document.querySelectorAll(selector).forEach((card) => {
    const id = card.dataset.qid || card.dataset.examQid;
    const question = questionMap.get(id);
    const title = card.querySelector("h3");
    if (question && title) {
      title.textContent = getQuestionTitle(question);
    }
  });
}

function syncRenderedQuestionTitles() {
  syncQuestionTitles(state.currentBank, ".question-card[data-qid]");
  syncQuestionTitles(state.currentExam, ".question-card[data-exam-qid]");
}

function setActiveView(view) {
  const nextView = ["home", "focus", "study", "bank", "exam"].includes(view) ? view : "home";
  state.activeView = nextView;
  closeFocusModal();

  els.viewPages.forEach((page) => {
    const isActive = page.dataset.view === nextView;
    page.classList.toggle("hidden", !isActive);
    page.setAttribute("aria-hidden", String(!isActive));
  });

  els.viewButtons.forEach((button) => {
    const isActive = button.dataset.viewTarget === nextView;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (typeof window !== "undefined" && typeof window.scrollTo === "function") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function takeQuestions(source, count, preferFocus = false) {
  if (!preferFocus) {
    return shuffle(source).slice(0, count);
  }

  const focus = source.filter((item) => item.focus);
  const other = source.filter((item) => !item.focus);
  const picked = [];
  const focusPool = shuffle(focus);
  const otherPool = shuffle(other);

  while (picked.length < count && focusPool.length) {
    picked.push(focusPool.shift());
  }

  while (picked.length < count && otherPool.length) {
    picked.push(otherPool.shift());
  }

  return picked.slice(0, count);
}

function sampleVisibleQuestions(bank, chapterFilter, typeFilter) {
  return bank.filter((item) => {
    const chapterOk = chapterFilter === "all" || item.chapter === chapterFilter;
    const typeOk = typeFilter === "all" || item.type === typeFilter;
    return chapterOk && typeOk;
  });
}

function renderChapters() {
  const focusOnly = els.focusOnlyToggle.checked;
  const compact = els.compactToggle.checked;

  els.chapterGrid.innerHTML = chapters
    .map((chapter) => {
      const tags = chapter.focus
        .map((item) => {
          const active = state.activeFocus.chapterId === chapter.id && state.activeFocus.label === item;
          return `
            <button type="button" class="focus-chip ${active ? "is-active" : ""}" data-focus-chapter="${chapter.id}" data-focus-label="${item}">
              <strong>${item}</strong>
              <small>点击查看</small>
            </button>
          `;
        })
        .join("");
      const styleClass = compact ? "chapter-card compact" : "chapter-card";
      return `
        <article class="${styleClass} fade-in">
          <div class="chapter-head">
            <div>
              <h3>${chapter.title}</h3>
              <div class="chapter-meta">${chapter.subtitle}</div>
            </div>
            <span class="pill pill-soft">${chapter.id.toUpperCase()}</span>
          </div>
          <p class="chapter-meta">${chapter.note}</p>
          <div class="chapter-focus">
            ${
              focusOnly
                ? tags
                : `<span class="tag muted">重点提示 · 共 ${chapter.focus.length} 条</span>${tags}`
            }
          </div>
        </article>
      `;
    })
    .join("");
}

function renderCards() {
  els.cardGrid.innerHTML = quickCards
    .map(
      (card, index) => `
      <article class="info-card fade-in" style="animation-delay:${index * 40}ms">
        <h3>${card.title}</h3>
        <p>${card.body}</p>
      </article>
    `
    )
    .join("");
}

function renderStudyMap() {
  const grouped = new Map();
  for (const unit of studyUnits) {
    if (!grouped.has(unit.chapter)) {
      grouped.set(unit.chapter, []);
    }
    grouped.get(unit.chapter).push(unit);
  }

  els.studyMap.innerHTML = chapters
    .map((chapter) => {
      const chapterKey = chapter.title;
      const units = grouped.get(chapterKey) || [];
      const topicPreview = units.slice(0, 4).map((unit) => unit.topic);
      return `
        <article class="study-chapter fade-in">
          <div class="study-chapter-head">
            <div>
              <h3>${chapter.title}</h3>
              <p class="study-summary">${chapter.note} 建议按“定义 - 关系 - 方法 - 应用”的顺序复习。</p>
            </div>
            <span class="pill pill-soft">${units.length} 个知识点</span>
          </div>
          <div class="study-steps">
            ${topicPreview.map((topic) => `<span class="study-step">${topic}</span>`).join("")}
          </div>
          <div class="study-topic-grid">
            ${units
              .map(
                (unit) => `
                <div class="study-topic">
                  <strong>${unit.topic}</strong>
                  <p>${unit.core}</p>
                </div>
              `
              )
              .join("")}
          </div>
        </article>
      `;
    })
    .join("");
}

function getChapterKey(chapter) {
  return chapter.title;
}

function pickFocusUnits(chapter, label) {
  const chapterKey = getChapterKey(chapter);
  const normalizedLabel = normalizeText(label);
  const chapterUnits = studyUnits.filter((unit) => unit.chapter === chapterKey);
  const matched = chapterUnits.filter((unit) => {
    const topic = normalizeText(unit.topic);
    const core = normalizeText(unit.core);
    const compare = normalizeText(unit.compare || "");
    const example = normalizeText(unit.example || "");
    return (
      normalizedLabel.includes(topic) ||
      topic.includes(normalizedLabel) ||
      normalizedLabel.includes(core.slice(0, Math.min(core.length, 10))) ||
      core.includes(normalizedLabel.slice(0, Math.min(normalizedLabel.length, 10))) ||
      (compare && normalizedLabel.includes(compare)) ||
      (example && normalizedLabel.includes(example.slice(0, Math.min(example.length, 10))))
    );
  });

  const fallback = chapterUnits.slice(0, 4);
  return (matched.length ? matched : fallback).slice(0, 4);
}

function renderListItems(items) {
  return items.length
    ? `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`
    : `<p>暂无相关内容。</p>`;
}

function openFocusModal() {
  if (!els.focusModal) return;
  els.focusModal.classList.remove("hidden");
  els.focusModal.setAttribute("aria-hidden", "false");
  if (document.body?.classList) {
    document.body.classList.add("modal-open");
  }
}

function closeFocusModal() {
  if (!els.focusModal) return;
  els.focusModal.classList.add("hidden");
  els.focusModal.setAttribute("aria-hidden", "true");
  if (document.body?.classList) {
    document.body.classList.remove("modal-open");
  }
}

function buildFocusDetailHtml(chapterId, label) {
  const chapter = chapters.find((item) => item.id === chapterId) || chapters[0];
  if (!chapter) return "";

  const chapterKey = getChapterKey(chapter);
  const units = pickFocusUnits(chapter, label);
  const keywords = unique(units.flatMap((unit) => unit.keywords || [])).slice(0, 10);
  const examples = unique(units.map((unit) => unit.example).filter(Boolean)).slice(0, 3);
  const pitfalls = unique(units.map((unit) => unit.pitfall).filter(Boolean)).slice(0, 3);
  const comparePoints = unique(units.map((unit) => unit.compare).filter(Boolean)).slice(0, 3);
  const summary = units.map((unit) => unit.core).join(" ");
  const questionLabel = String(label || "");
  const questionType = ["区别", "对比", "比较"].some((keyword) => questionLabel.includes(keyword))
    ? "对比类"
    : ["什么", "定义", "解释"].some((keyword) => questionLabel.includes(keyword))
      ? "名词解释"
      : ["算法", "步骤", "流程", "计算"].some((keyword) => questionLabel.includes(keyword))
        ? "算法与流程"
        : ["模型", "结构", "关系"].some((keyword) => questionLabel.includes(keyword))
          ? "模型结构"
          : "综合复习";

  const chapterDetail = chapter.details || {};
  const definitionList = Array.isArray(chapterDetail.definitions)
    ? chapterDetail.definitions
    : [];
  const comparisonList = Array.isArray(chapterDetail.comparisons)
    ? chapterDetail.comparisons
    : [];
  const algorithmList = Array.isArray(chapterDetail.algorithms)
    ? chapterDetail.algorithms
    : [];
  const applicationList = Array.isArray(chapterDetail.applications)
    ? chapterDetail.applications
    : [];

  const focusTopics = chapter.focus.map((item) => {
    const active = item === label;
    return `<button type="button" class="focus-chip ${active ? "is-active" : ""}" data-focus-chapter="${chapter.id}" data-focus-label="${item}"><strong>${item}</strong><small>点击切换</small></button>`;
  }).join("");

  const definitionHtml = definitionList.length
    ? `<div class="focus-detail-card"><h4>概念定义</h4>${definitionList
        .map((item) => `<p><strong>${item.term}</strong>${item.definition}</p>`)
        .join("")}</div>`
    : "";

  const comparisonHtml = comparisonList.length
    ? `<div class="focus-detail-card"><h4>对比要点</h4>${comparisonList
        .map(
          (item) => `
            <div class="focus-detail-card" style="margin-top:10px;">
              <h4>${item.title}</h4>
              ${renderListItems(item.points)}
            </div>
          `
        )
        .join("")}</div>`
    : "";

  const algorithmHtml = algorithmList.length
    ? `<div class="focus-detail-card"><h4>算法 / 公式</h4>${algorithmList
        .map((item) => `
          <p><strong>${item.name}</strong>${item.formula}</p>
          <p>${item.description}</p>
        `)
        .join("")}</div>`
    : "";

  const applicationHtml = applicationList.length
    ? `<div class="focus-detail-card"><h4>应用场景</h4>${renderListItems(applicationList)}</div>`
    : "";

  const unitHtml = units.length
    ? `<div class="focus-unit-grid">${units
        .map(
          (unit) => `
            <div class="focus-unit">
              <strong>${unit.topic}</strong>
              <p>${unit.core}</p>
              <p><strong>关键词：</strong>${(unit.keywords || []).join("、")}</p>
              <p><strong>例子：</strong>${unit.example || "暂无示例"}</p>
              <p><strong>易错点：</strong>${unit.pitfall || "暂无提示"}</p>
            </div>
          `
        )
        .join("")}</div>`
    : `<p>暂无可展开的细化内容，请切换到其他提纲项查看。</p>`;

  const answerTemplate = [
    `1. 先说清定义和核心含义：${summary || chapter.note || "结合教材概括核心概念"}`,
    `2. 再列出关键词：${keywords.length ? keywords.join("、") : "结合章节内容补充关键词"}`,
    `3. 最好举一个典型例子：${examples[0] || "联系教材或课堂案例说明"}`,
    `4. 注意常见易错点：${pitfalls[0] || "区分概念边界和适用场景"}`,
    `5. 如果是${questionType}题，补充对比或步骤说明：${comparePoints[0] || "联系相关概念展开"}`
  ];

  return `
    <div class="focus-detail-head">
      <div>
        <h3>${label}</h3>
        <div class="focus-detail-meta">
          <span class="pill">${chapter.title}</span>
          <span class="pill pill-soft">${chapterKey}</span>
          <span class="pill pill-soft">${questionType}</span>
        </div>
      </div>
      <p class="study-summary">${chapter.note}</p>
    </div>
    <div class="focus-detail-grid">
      <div class="focus-detail-section">
        <div class="focus-detail-card">
          <h4>怎么答</h4>
          <p>${summary || chapter.note}</p>
        </div>
        <div class="focus-detail-card">
          <h4>答题模板</h4>
          ${renderListItems(answerTemplate)}
        </div>
        <div class="focus-detail-card">
          <h4>关键词</h4>
          <div class="chapter-focus">
            ${keywords.length ? keywords.map((item) => `<span class="tag focus">${item}</span>`).join("") : `<span class="tag muted">暂无关键词</span>`}
          </div>
        </div>
        <div class="focus-detail-card">
          <h4>关联单元</h4>
          ${unitHtml}
        </div>
      </div>
      <div class="focus-detail-stack">
        ${definitionHtml}
        ${comparisonHtml}
        ${algorithmHtml}
        ${applicationHtml}
        <div class="focus-detail-card">
          <h4>典型例子</h4>
          ${renderListItems(examples.length ? examples : ["可结合教材中的案例进行说明"])}
        </div>
        <div class="focus-detail-card">
          <h4>易错点</h4>
          ${renderListItems(pitfalls.length ? pitfalls : ["注意概念边界、适用范围和常见混淆点"])}
        </div>
      </div>
    </div>
    <div class="focus-detail-card" style="margin-top:16px;">
      <h4>同类可切换考点</h4>
      <div class="chapter-focus">
        ${focusTopics}
      </div>
    </div>
  `;
}

function renderFocusDetail(chapterId, label, shouldOpen = true) {
  const chapter = chapters.find((item) => item.id === chapterId) || chapters[0];
  if (!chapter || !els.focusModalBody || !els.focusModalTitle) return;
  els.focusModalTitle.textContent = label;
  els.focusModalBody.innerHTML = buildFocusDetailHtml(chapterId, label);
  if (shouldOpen) {
    openFocusModal();
  }
}

function allQuestions() {
  return [
    ...questionBank.choice.map((item) => ({ ...item, type: "choice" })),
    ...questionBank.fill.map((item) => ({ ...item, type: "fill" })),
    ...questionBank.term.map((item) => ({ ...item, type: "term" })),
    ...questionBank.short.map((item) => ({ ...item, type: "short" })),
    ...questionBank.essay.map((item) => ({ ...item, type: "essay" }))
  ];
}

function renderFilters() {
  const chaptersWithAll = [
    "all",
    ...chapters.map((chapter) => chapter.title)
  ];
  const types = ["all", "choice", "fill", "term", "short", "essay"];

  els.bankChapterFilter.innerHTML = chaptersWithAll
    .map((item) => `<option value="${item}">${item === "all" ? "全部章节" : item}</option>`)
    .join("");
  els.bankTypeFilter.innerHTML = types
    .map((item) => `<option value="${item}">${item === "all" ? "全部题型" : item}</option>`)
    .join("");
  els.bankChapterFilter.value = "all";
  els.bankTypeFilter.value = "all";
}

function renderBank() {
  const search = normalizeText(els.bankSearch.value);
  const limit = Math.max(1, Number(els.bankLimit.value || 48));
  const visible = sampleVisibleQuestions(state.currentBank, els.bankChapterFilter.value, els.bankTypeFilter.value).filter((item) => {
    if (!search) return true;
    const haystack = normalizeText([
      item.chapter,
      item.prompt,
      item.term,
      item.explain,
      item.answer,
      Array.isArray(item.options) ? item.options.join(" ") : ""
    ].join(" "));
    return haystack.includes(search);
  });
  const shown = visible.slice(0, limit);
  els.bankCount.textContent = `共 ${visible.length} 题，当前显示 ${shown.length} 题`;
  els.bankList.innerHTML = shown.length
    ? shown
    .map((question) => renderQuestionCard(question, false))
      .join("")
    : `<div class="summary-banner">没有找到符合条件的题目，试试更换章节、题型或关键词。</div>`;
}

function renderQuestionCard(question, examMode = false) {
  const meta = [
    safeText(question.chapter, "第1章"),
    question.focus ? "重点" : "普通",
    question.type === "choice" ? "选择题" :
      question.type === "fill" ? "填空题" :
      question.type === "term" ? "名词解释" :
      question.type === "short" ? "简答题" : "论述题"
  ];

  let body = "";
  if (question.type === "choice") {
    body = `
      <div class="option-list">
        ${question.options
          .map(
            (option, index) => `
            <label class="option">
              <input type="radio" name="${question.id}" value="${index}" ${examMode ? "" : ""} />
              <span>${String.fromCharCode(65 + index)}. ${option}</span>
            </label>
          `
          )
          .join("")}
      </div>
    `;
  } else if (question.type === "fill") {
    body = `<input type="text" data-question-input="${question.id}" placeholder="填写答案" />`;
  } else if (question.type === "term") {
    body = `<textarea data-question-input="${question.id}" placeholder="请写出名词解释"></textarea>`;
  } else if (question.type === "short" || question.type === "essay") {
    body = `<textarea data-question-input="${question.id}" placeholder="请简要作答"></textarea>`;
  }

  return `
    <article class="question-card fade-in" data-qid="${question.id}">
      <div class="question-meta">
        ${meta.map((item) => `<span class="pill pill-soft">${item}</span>`).join("")}
      </div>
      <h3>${getQuestionTitle(question)}</h3>
      ${body}
      ${examMode ? `<div class="answer-block hidden" data-answer-for="${question.id}"></div>` : ""}
    </article>
  `;
}

function renderExamPaper() {
  if (state.timer) {
    clearInterval(state.timer);
    state.timer = null;
  }
  state.timerRunning = false;
  updateTimerBadge();

  const counts = {
    choice: Math.max(0, Number(els.countChoice.value || 0)),
    fill: Math.max(0, Number(els.countFill.value || 0)),
    term: Math.max(0, Number(els.countTerm.value || 0)),
    short: Math.max(0, Number(els.countShort.value || 0)),
    essay: Math.max(0, Number(els.countEssay.value || 0))
  };
  const preferFocus = els.preferFocus.checked;

  const paper = [
    ...takeQuestions(questionBank.choice, counts.choice, preferFocus).map((item) => ({ ...item, type: "choice" })),
    ...takeQuestions(questionBank.fill, counts.fill, preferFocus).map((item) => ({ ...item, type: "fill" })),
    ...takeQuestions(questionBank.term, counts.term, preferFocus).map((item) => ({ ...item, type: "term" })),
    ...takeQuestions(questionBank.short, counts.short, preferFocus).map((item) => ({ ...item, type: "short" })),
    ...takeQuestions(questionBank.essay, counts.essay, preferFocus).map((item) => ({ ...item, type: "essay" }))
  ];

  state.currentExam = shuffle(paper);
  state.answers.clear();

  if (!state.currentExam.length) {
    els.examPaper.innerHTML = "";
    els.examSummary.textContent = "当前没有抽到题目，请先调整题量后重新生成。";
    return;
  }

  els.examPaper.innerHTML = state.currentExam.map((question, index) => {
    return `
      <div class="question-wrap">
        <div class="question-card fade-in" data-exam-qid="${question.id}" style="animation-delay:${index * 35}ms">
          <div class="question-meta">
            <span class="pill">第 ${index + 1} 题</span>
            <span class="pill pill-soft">${safeText(question.chapter, "第1章")}</span>
            <span class="pill pill-soft">${
              question.type === "choice" ? "选择题" :
              question.type === "fill" ? "填空题" :
              question.type === "term" ? "名词解释" :
              question.type === "short" ? "简答题" : "论述题"
            }</span>
          </div>
          <h3>${getQuestionTitle(question)}</h3>
          ${renderExamInput(question)}
          <div class="answer-block hidden" data-answer-for="${question.id}"></div>
        </div>
      </div>
    `;
  }).join("");

  els.examSummary.textContent = `已生成 ${state.currentExam.length} 道试题，请先作答后再提交。`;
  document.getElementById("examHint").textContent = `本次共抽取 ${Object.values(counts).reduce((a, b) => a + b, 0)} 道题，支持选择题、填空题、名词解释、简答题和论述题。`;
  bindInputEvents();
}

function renderExamInput(question) {
  if (question.type === "choice") {
    return `
      <div class="option-list">
        ${question.options
          .map(
            (option, index) => `
            <label class="option">
              <input type="radio" name="${question.id}" value="${index}" />
              <span>${String.fromCharCode(65 + index)}. ${option}</span>
            </label>
          `
          )
          .join("")}
      </div>
    `;
  }
  if (question.type === "fill") {
    return `<input type="text" data-question-input="${question.id}" placeholder="请填写答案" />`;
  }
  if (question.type === "term") {
    return `<textarea data-question-input="${question.id}" placeholder="请写出名词解释"></textarea>`;
  }
  return `<textarea data-question-input="${question.id}" placeholder="请简要作答"></textarea>`;
}

function bindInputEvents() {
  state.currentExam.forEach((question) => {
    if (question.type === "choice") {
      const radios = document.querySelectorAll(`input[name="${question.id}"]`);
      radios.forEach((radio) => {
        radio.addEventListener("change", () => {
          state.answers.set(question.id, radio.value);
        });
      });
      return;
    }

    const input = document.querySelector(`[data-question-input="${question.id}"]`);
    if (input) {
      input.addEventListener("input", () => {
        state.answers.set(question.id, input.value);
      });
    }
  });
}

function gradeExam() {
  if (!state.currentExam.length) {
    els.examSummary.textContent = "请先生成试卷。";
    return;
  }

  if (state.timer) {
    clearInterval(state.timer);
    state.timer = null;
  }
  state.timerRunning = false;
  updateTimerBadge();

  let objectiveTotal = 0;
  let objectiveScore = 0;
  let fillTotal = 0;
  let fillScore = 0;
  let subjectiveTotal = 0;

  state.currentExam.forEach((question) => {
    const block = document.querySelector(`[data-answer-for="${question.id}"]`);
    if (!block) return;

    let result = "";
    let isCorrect = false;
    let userAnswer = state.answers.get(question.id) ?? "";

    if (question.type === "choice") {
      objectiveTotal += 1;
      const right = String(question.answer);
      isCorrect = String(userAnswer) === right;
      if (isCorrect) objectiveScore += 1;
      result = `
        <div class="${isCorrect ? "answer-good" : "answer-bad"}">
          ${isCorrect ? "回答正确" : "回答错误"}，正确答案是 ${String.fromCharCode(65 + Number(question.answer || 0))}
        </div>
        <small>${safeText(question.explain, "暂无解析")}</small>
      `;
    } else if (question.type === "fill") {
      fillTotal += 1;
      const normalized = normalizeText(userAnswer);
      const accepted = question.answer.map(normalizeText);
      isCorrect = accepted.includes(normalized);
      if (isCorrect) fillScore += 1;
      result = `
        <div class="${isCorrect ? "answer-good" : "answer-bad"}">
          ${isCorrect ? "回答正确" : "答案不完整或不正确"}，参考答案：${safeText(question.answer?.[0], "暂无参考答案")}
        </div>
        <small>${safeText(question.explain, "暂无解析")}</small>
      `;
    } else {
      subjectiveTotal += 1;
      result = `
        <div class="answer-good">参考答案</div>
        <div>${safeText(question.answer, question.term || "暂无参考答案")}</div>
        <small>主观题以关键词、概念完整度、逻辑结构和表达清晰度综合评分。</small>
      `;
    }

    block.classList.remove("hidden");
    block.innerHTML = result;
  });

  const totalObjective = objectiveTotal + fillTotal;
  const totalScore = objectiveScore + fillScore;
  const maxScore = totalObjective + subjectiveTotal;
  const subjectiveNotice = subjectiveTotal > 0 ? `，其中主观题 ${subjectiveTotal} 道建议结合老师评分。` : "";

  els.examSummary.textContent = `本次共 ${state.currentExam.length} 题，客观题得分 ${totalScore}/${totalObjective}${subjectiveNotice}`;
}

function formatTime(seconds) {
  const m = String(Math.floor(seconds / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return `${m}:${s}`;
}

function startTimer() {
  if (!state.currentExam.length) {
    els.examSummary.textContent = "请先生成试卷再开始计时。";
    return;
  }

  const minutes = Math.max(5, Number(els.examMinutes.value || 45));
  state.timeLeft = minutes * 60;
  state.timerRunning = true;
  updateTimerBadge();

  if (state.timer) clearInterval(state.timer);
  state.timer = setInterval(() => {
    if (!state.timerRunning) return;
    state.timeLeft -= 1;
    updateTimerBadge();
    if (state.timeLeft <= 0) {
      clearInterval(state.timer);
      state.timer = null;
      state.timerRunning = false;
      updateTimerBadge(true);
      gradeExam();
    }
  }, 1000);
}

function updateTimerBadge(finished = false) {
  if (finished) {
    els.timerBadge.textContent = "时间到";
    els.timerBadge.classList.add("pill-soft");
    return;
  }
  if (!state.timerRunning && state.timeLeft === 0) {
    els.timerBadge.textContent = "未开始";
    els.timerBadge.classList.add("pill-soft");
    return;
  }
  if (state.timerRunning) {
    els.timerBadge.textContent = `计时中 ${formatTime(state.timeLeft)}`;
  } else {
    els.timerBadge.textContent = `暂停 ${formatTime(state.timeLeft)}`;
  }
}

function seedBank() {
  state.currentBank = shuffle(allQuestions());
}

function attachListeners() {
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-view-target]");
    if (!button) return;
    setActiveView(button.dataset.viewTarget);
  });

  els.focusOnlyToggle.addEventListener("change", renderChapters);
  els.compactToggle.addEventListener("change", renderChapters);
  els.chapterGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-focus-label]");
    if (!button) return;
    state.activeFocus = {
      chapterId: button.dataset.focusChapter,
      label: button.dataset.focusLabel
    };
    renderChapters();
    renderFocusDetail(state.activeFocus.chapterId, state.activeFocus.label);
  });
  els.focusModal?.addEventListener("click", (event) => {
    if (event.target.closest("[data-focus-close]")) {
      closeFocusModal();
      return;
    }
    const button = event.target.closest("[data-focus-label]");
    if (!button) return;
    state.activeFocus = {
      chapterId: button.dataset.focusChapter,
      label: button.dataset.focusLabel
    };
    renderChapters();
    renderFocusDetail(state.activeFocus.chapterId, state.activeFocus.label);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeFocusModal();
    }
  });
  els.bankSearch.addEventListener("input", renderBank);
  els.bankLimit.addEventListener("change", renderBank);
  els.bankChapterFilter.addEventListener("change", renderBank);
  els.bankTypeFilter.addEventListener("change", renderBank);
  els.reshuffleBank.addEventListener("click", () => {
    seedBank();
    renderBank();
  });
  els.generateExam.addEventListener("click", () => {
    renderExamPaper();
    els.timerBadge.textContent = "未开始";
  });
  els.startTimer.addEventListener("click", startTimer);
  els.submitExam.addEventListener("click", gradeExam);
}

function initStats() {
  document.getElementById("chapterCount").textContent = String(chapters.length);
  const focusCount = chapters.reduce((sum, chapter) => sum + chapter.focus.length, 0);
  const questionCount =
    questionBank.choice.length +
    questionBank.fill.length +
    questionBank.term.length +
    questionBank.short.length +
    questionBank.essay.length;
  document.getElementById("focusCount").textContent = String(focusCount);
  document.getElementById("questionCount").textContent = String(questionCount);
}

function init() {
  initStats();
  renderChapters();
  renderStudyMap();
  renderCards();
  renderFilters();
  seedBank();
  renderBank();
  attachListeners();
  renderFocusDetail(state.activeFocus.chapterId, state.activeFocus.label, false);
  closeFocusModal();
  setActiveView("home");
  syncRenderedQuestionTitles();
  document.getElementById("examHint").textContent = "请选择题量后点击“生成试卷”，支持勾选优先抽取重点内容。";
  updateTimerBadge();

  els.examPaper.innerHTML = "";
}

document.addEventListener("DOMContentLoaded", init);





