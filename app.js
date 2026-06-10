const chapters = [
  {
    id: "ch1",
    title: "第 1 章  GIS 基本概念",
    subtitle: "信息、数据、地理信息、GIS 定义、特点、组成与发展",
    focus: [
      "信息与数据的区别和联系",
      "地理信息的特点",
      "GIS 的定义、类型和功能",
      "GIS 与 DBMS / MIS / CAD 的区别",
      "GIS 的组成、硬件、软件和人员",
      "GIS 发展简史与未来趋势"
    ],
    // 详细复习内容
    details: {
      definitions: [
        {
          term: "数据",
          definition: "数据是客观事物的符号表示，是未经加工的原始材料。数据是对客观事物的性质、状态、相互关系等进行记录的物理符号序列，可以是数字、文字、图像、声音等形式。数据本身没有意义，只有被解释后才具有意义。"
        },
        {
          term: "信息",
          definition: "信息是加工后的数据，是数据处理的结果。信息具有知识属性，能够消除认识上的不确定性，影响人们的决策和行为。信息的本质是物质存在的方式和运动状态，以及这种方式和运动状态对外的表述。"
        },
        {
          term: "地理信息",
          definition: "有关地理实体性质、特征和运动状态的表征，是对地理数据的解释。地理信息具有地域性、多维性、时序性等特点，能够反映地理实体空间分布、属性特征及时空变化规律。"
        },
        {
          term: "地理信息系统（GIS）",
          definition: "在计算机软硬件支持下，对空间数据及其属性数据进行采集、存储、管理、运算、分析、显示和描述的技术系统。GIS由计算机系统、空间数据、用户和应用模型四部分组成，核心功能是空间分析。"
        }
      ],
      comparisons: [
        {
          title: "信息与数据的区别与联系",
          points: [
            "区别：数据是原始事实的记录，信息是加工处理后有逻辑的数据",
            "区别：数据形式简单，信息具有知识性和有用性",
            "区别：数据是具体的物理符号，信息是认识论层面的概念",
            "联系：数据是信息的载体，信息是数据加工的产物",
            "联系：信息可以转化为数据（如编码传输），数据可以还原为信息（如解译）",
            "联系：信息熵可用数据量度量，信息量 = 熵的减少量"
          ]
        },
        {
          title: "GIS 与 DBMS 的区别",
          points: [
            "DBMS管理普通数据，GIS管理空间数据",
            "DBMS不具有空间分析能力，GIS具备空间查询、分析功能",
            "GIS需要特殊的空间索引机制（如R树、四叉树），DBMS用B树",
            "GIS需要考虑拓扑关系，DBMS一般不考虑空间拓扑",
            "GIS需要空间数据可视化模块，DBMS主要输出表格数据"
          ]
        },
        {
          title: "GIS 与 CAD 的区别",
          points: [
            "CAD主要用于工程设计，GIS主要用于地理空间信息管理",
            "CAD几何对象简单（点线面），GIS空间对象复杂且具有属性",
            "CAD拓扑关系简单，GIS需要完整的拓扑结构",
            "CAD比例尺概念弱，GIS严格遵循地图投影和坐标系统",
            "CAD分析功能有限，GIS具有强大的空间分析能力"
          ]
        },
        {
          title: "GIS 与 MIS 的区别",
          points: [
            "MIS管理商务信息，GIS管理空间信息",
            "MIS不涉及空间位置，GIS处理具有空间位置的数据",
            "MIS以事务处理为主，GIS以空间分析为主",
            "MIS数据模型简单，GIS需要矢量/栅格等复杂数据模型",
            "MIS输出图表报表，GIS输出专题地图"
          ]
        }
      ],
      algorithms: [
        {
          name: "信息熵计算",
          formula: "H(X) = -∑P(xᵢ)log₂P(xᵢ)",
          description: "信息熵是信息量的度量，表示信源的平均信息量。熵值越大，不确定性越大，信息量越丰富。"
        }
      ],
      applications: [
        "资源调查与管理：土地利用现状调查、森林资源监测",
        "城市规划与管理：城市用地分析、设施选址优化",
        "环境保护：生态功能区划、环境质量评价",
        "灾害监测：洪水淹没分析、火灾蔓延预测",
        "交通管理：路径规划、交通流量分析",
        "商业选址：市场覆盖分析、消费者分布研究"
      ]
    },
    note: "提纲与 PPT 中最基础的一章，定义题和对比题很容易出。"
  },
  {
    id: "ch2",
    title: "第 2 章  地理认知与抽象",
    subtitle: "现实世界、概念世界、空间世界、OGC 九层模型",
    focus: [
      "对现实世界的地理认知",
      "OGC 九层模型",
      "现实世界到比特世界的抽象过程",
      "数据建模与数据模型"
    ],
    note: '重点看“认知 - 抽象 - 建模”的逻辑链条。'
  },
  {
    id: "ch3",
    title: "第 3 章  空间数据模型",
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
        {
          term: "空间数据模型",
          definition: "关于现实世界空间实体及其相互联系的概念集合，用于描述空间数据的组织和设计空间数据库模式。空间数据模型是GIS的理论基础，决定了数据表示和空间分析的能力。"
        },
        {
          term: "场模型（Field Model）",
          definition: "将地理空间视为连续的属性函数，用数学函数描述空间上每一点属性值的分布。场模型强调空间位置的连续性和属性值的渐变，适合表达气温、降水、海拔、污染浓度等连续型地理现象。"
        },
        {
          term: "要素模型（Feature Model）",
          definition: "将地理空间视为离散对象的集合，每个对象具有明确的边界、身份和属性。要素模型强调地理实体的独立性和完整性，适合表达建筑物、道路、河流、地块等离散型地理实体。"
        },
        {
          term: "网络模型",
          definition: "由节点和弧段组成的图结构，用于描述地理空间中的线性网络系统，如道路网、管线网、河流网络等。网络模型强调连通性、路径选择和流量优化等网络分析功能。"
        },
        {
          term: "时空数据模型",
          definition: "用于表达地理实体及其属性、位置随时间变化的模型，能够记录和查询空间数据的时间维度，实现空间数据的动态分析和历史回溯。"
        },
        {
          term: "三维空间数据模型",
          definition: "用于表达三维空间中地理实体的模型，包括体元模型、面元模型等，能够描述地形表面、建筑物立体形态、地下管线等具有三维坐标的地理对象。"
        }
      ],
      comparisons: [
        {
          title: "场模型与要素模型的对比",
          points: [
            "场模型表达连续现象，要素模型表达离散对象",
            "场模型用数学函数描述，要素模型用几何对象描述",
            "场模型适合遥感数据处理，要素模型适合CAD和规划数据",
            "场模型便于空间插值和叠加分析，要素模型便于网络分析和边界查询",
            "场模型精度受采样密度影响，要素模型精度受边界测量影响"
          ]
        },
        {
          title: "矢量数据模型与栅格数据模型的对比",
          points: [
            "矢量模型用点、线、面表达空间对象，栅格模型用网格单元表达",
            "矢量模型精度高、存储小，栅格模型精度低、存储大",
            "矢量模型拓扑关系明确，栅格模型空间邻接关系简单",
            "矢量模型适合离散对象，栅格模型适合连续现象",
            "矢量模型分析复杂但精确，栅格模型分析简单但近似"
          ]
        },
        {
          title: "TIN 与格网 DEM 的对比",
          points: [
            "TIN 用不规则三角形表达，格网 DEM 用规则网格表达",
            "TIN 保留地形特征点，格网 DEM 均匀分布采样点",
            "TIN 适合复杂地形，格网 DEM 适合平坦地区",
            "TIN 存储结构复杂，格网 DEM 存储结构简单",
            "TIN 便于等高线生成，格网 DEM 便于坡度坡向计算"
          ]
        }
      ],
      algorithms: [
        {
          name: "Delaunay 三角网构建算法",
          formula: "外接圆准则：任意三角形外接圆内不包含其他点",
          description: "用于从不规则离散点集构建三角网，保证每个三角形尽量接近等边，是TIN构建的标准方法。"
        },
        {
          name: "Voronoi 图生成算法",
          formula: "d(p,Vi) < d(p, Vj)，对所有 j ≠ i 成立",
          description: "用于空间邻域分析和自然邻域插值，每个Voronoi多边形内的点到该多边形生成点的距离比到其他生成点更近。"
        }
      ],
      applications: [
        "地形分析：基于DEM/TIN进行坡度、坡向、曲率计算",
        "土地利用分类：利用场模型进行连续属性分类",
        "城市建模：利用三维模型表达建筑形体",
        "交通网络分析：基于网络模型进行路径规划和流量分配",
        "时空轨迹分析：利用时空模型追踪移动对象",
        "分布式GIS：利用分布式模型进行数据分区和并行处理"
      ]
    },
    note: "模型类题目通常要求会对比、会举例、会说明适用场景。"
  },
  {
    id: "ch5",
    title: "第 5 章  空间数据",
    subtitle: "数据类型、质量、误差和元数据",
    focus: [
      "空间数据类型",
      "空间数据质量",
      "空间数据误差",
      "元数据"
    ],
    note: "这章很适合出名词解释和简答题。"
  },
  {
    id: "ch6",
    title: "第 6 章  数据获取与处理",
    subtitle: "数据来源、输入方法、数字化、坐标变换、Douglas、DIME",
    focus: [
      "数据来源与输入方法",
      "手扶跟踪数字化仪工作原理",
      "扫描和矢量化",
      "Douglas 算法",
      "坐标变换",
      "DIME 编码"
    ],
    note: "算法和流程题很常见，尤其是矢量化、坐标变换与编码。"
  },
  {
    id: "ch7",
    title: "第 7 章  空间数据库与数据结构",
    subtitle: "栅格、矢量、编码方式和转换",
    focus: [
      "空间数据库概念",
      "栅格和矢量数据的优缺点比较",
      "栅格编码方式",
      "矢量编码方式",
      "栅格 - 矢量转换"
    ],
    note: "对比题高频：栅格 vs 矢量、编码方式、数据结构。"
  },
  {
    id: "ch8",
    title: "第 8 章  空间查询与空间分析",
    subtitle: "空间查询、地理编码、量算、分析方法、网络分析",
    focus: [
      "空间查询与地理编码",
      "空间量算与质心",
      "各种空间分析方法",
      "网络分析路径与 Dijkstra 算法"
    ],
    note: "这章常和实际应用结合，回答时记得带“用途”和“步骤”。"
  },
  {
    id: "ch9",
    title: "第 9 章  数字地形模型",
    subtitle: "DEM / DTM / TIN、插值、通视、流域、地形属性",
    focus: [
      "DTM 与 DEM 概念及关系",
      "DEM 主要表示模型",
      "不规则点集生成 TIN",
      "格网 DEM 与 TIN 转换",
      "通视分析",
      "流域结构与自动分割",
      "坡度、坡向、表面积等地形属性"
    ],
    note: "第 9 章内容最多，适合先记“模型 - 构建 - 分析 - 应用”的四段式结构。"
  }
];

const quickCards = [
  {
    title: "GIS 一句话定义",
    body: "在计算机软硬件支持下，对空间数据及其属性数据进行采集、存储、管理、运算、分析、显示和描述的技术系统。"
  },
  {
    title: "信息与数据",
    body: "数据是记录客观世界的符号；信息是经过加工后、能影响决策的数据。考试常问“区别 + 联系”。"
  },
  {
    title: "OGC 九层模型",
    body: "可以把现实世界抽象为概念世界、地理空间世界、尺度世界、项目世界等多个层次，再由多个接口连接起来。"
  },
  {
    title: "Delaunay 关键准则",
    body: "三角形外接圆内不能包含其他点；局部优化时常用最大化最小角原则。"
  },
  {
    title: "Douglas 算法",
    body: "常用于折线简化，处理数字化和矢量化时的冗余点。"
  },
  {
    title: "Dijkstra 算法",
    body: "经典最短路径算法，常用于网络分析的路径规划题。"
  },
  {
    title: "DEM 常用分析",
    body: "通视、流域提取、坡度坡向、表面积、体积、等高线追踪都很常见。"
  },
  {
    title: "栅格 vs 矢量",
    body: "栅格适合连续现象，矢量适合离散对象；前者计算直观，后者表达精确，考试里常让你比较优缺点。"
  }
];

const questionBank = {
  choice: [
    {
      id: "mc1",
      chapter: "第 1 章",
      focus: true,
      prompt: "下列关于 GIS 的说法，正确的是哪一项？",
      options: [
        "GIS 只负责地图绘制，不进行数据分析",
        "GIS 是对空间数据进行采集、存储、管理、分析和显示的技术系统",
        "GIS 与数据库管理无关",
        "GIS 不能处理属性数据"
      ],
      answer: 1,
      explain: "GIS 的核心不仅是存储，还包括分析、显示与决策支持。"
    },
    {
      id: "mc2",
      chapter: "第 1 章",
      focus: true,
      prompt: "下列哪一项最能体现“信息”和“数据”的关系？",
      options: [
        "数据一定比信息更有价值",
        "信息是数据经过加工后的结果，能影响决策",
        "信息与数据完全无关",
        "数据只能是文字，不能是图像"
      ],
      answer: 1,
      explain: "提纲中的重点就是“数据是表现形式，信息是内在逻辑关系的体现”。"
    },
    {
      id: "mc3",
      chapter: "第 1 章",
      focus: true,
      prompt: "GIS 与 DBMS 相比，最突出的区别之一是：",
      options: [
        "GIS 只管理属性，不管理空间数据",
        "GIS 具有对空间数据进行解释和空间分析的能力",
        "DBMS 能自动生成地图符号，而 GIS 不能",
        "DBMS 比 GIS 更重视拓扑结构"
      ],
      answer: 1,
      explain: "GIS 不只是数据库管理，还要处理空间关系、拓扑和分析。"
    },
    {
      id: "mc4",
      chapter: "第 3 章",
      focus: true,
      prompt: "下列关于场模型和要素模型的说法，正确的是：",
      options: [
        "场模型更适合描述连续变化的现象",
        "要素模型只适合描述气温分布",
        "场模型必须用矢量表示",
        "要素模型不能进行任何空间分析"
      ],
      answer: 0,
      explain: "场模型适合连续型空间现象，要素模型适合离散对象。"
    },
    {
      id: "mc5",
      chapter: "第 7 章",
      focus: true,
      prompt: "栅格数据模型最适合表达下列哪一类对象？",
      options: [
        "行政边界",
        "道路中心线",
        "温度场和降雨量分布",
        "建筑物轮廓"
      ],
      answer: 2,
      explain: "连续现象通常更适合栅格表达。"
    },
    {
      id: "mc6",
      chapter: "第 9 章",
      focus: true,
      prompt: "Delaunay 三角网构建中常用的重要准则是：",
      options: [
        "所有三角形面积相等",
        "任一三角形外接圆内部不包含其他点",
        "所有三角形边长完全相同",
        "三角网只能包含锐角三角形"
      ],
      answer: 1,
      explain: "这是 TIN / Delaunay 的核心判据。"
    },
    {
      id: "mc7",
      chapter: "第 8 章",
      focus: true,
      prompt: "Dijkstra 算法主要用于：",
      options: [
        "多边形面积计算",
        "最短路径求解",
        "折线压缩",
        "等高线提取"
      ],
      answer: 1,
      explain: "网络分析中最典型的路径算法。"
    },
    {
      id: "mc8",
      chapter: "第 2 章",
      focus: true,
      prompt: "OGC 九层模型的核心作用更接近于：",
      options: [
        "把现实世界逐级抽象到项目、几何体和要素等层次",
        "只负责地图着色",
        "只解决数据库备份",
        "只描述地形起伏"
      ],
      answer: 0,
      explain: "它强调现实世界到信息系统的抽象层次。"
    },
    {
      id: "mc9",
      chapter: "第 5 章",
      focus: true,
      prompt: "下列哪项最符合“元数据”的含义？",
      options: [
        "地图图例中的颜色",
        "关于数据的数据，用于描述数据的来源和质量",
        "数据库中的几何对象",
        "一种空间插值算法"
      ],
      answer: 1,
      explain: "元数据就是“描述数据的数据”。"
    },
    {
      id: "mc10",
      chapter: "第 6 章",
      focus: true,
      prompt: "扫描和矢量化过程中的主要目标是：",
      options: [
        "把纸质地图变成图像文件但不提取几何信息",
        "将地图内容转换为可入库的空间数据",
        "只改变地图颜色",
        "只压缩文件大小"
      ],
      answer: 1,
      explain: "矢量化的本质是把图形内容转成结构化空间数据。"
    },
    {
      id: "mc11",
      chapter: "第 7 章",
      focus: true,
      prompt: "栅格数据与矢量数据的比较中，哪项更准确？",
      options: [
        "栅格更适合表达离散边界，矢量更适合连续分布",
        "栅格更适合连续分布，矢量更适合离散对象",
        "两者没有任何区别",
        "矢量数据不能进行空间分析"
      ],
      answer: 1,
      explain: "连续现象偏栅格，离散对象偏矢量，是高频对比点。"
    },
    {
      id: "mc12",
      chapter: "第 9 章",
      focus: true,
      prompt: "格网 DEM 的一个重要分析优势是：",
      options: [
        "可直接进行坡度、坡向等栅格运算",
        "必须先转换成 CAD 才能使用",
        "不能表示连续地形",
        "不能用于通视分析"
      ],
      answer: 0,
      explain: "格网 DEM 在地形分析上非常方便。"
    }
  ],
  fill: [
    {
      id: "fi1",
      chapter: "第 1 章",
      focus: true,
      prompt: "GIS 的英文全称是 ________。",
      answer: ["geographicinformationsystem", "geographicinformationsystems"],
      explain: "基础定义一定要会写全称。"
    },
    {
      id: "fi2",
      chapter: "第 1 章",
      focus: true,
      prompt: "信息熵的常见表达式可写为 H(x)= ________ 。",
      answer: ["-∑P(Xi)log2P(Xi)", "-sum(P(Xi)log2P(Xi))", "-ΣP(Xi)log2P(Xi)"],
      explain: "记住“信息量度量 = 信息熵”。"
    },
    {
      id: "fi3",
      chapter: "第 3 章",
      focus: true,
      prompt: "场模型通常用于表达 ________ 型空间现象。",
      answer: ["连续", "连续型"],
      explain: "如温度、降雨、海拔等。"
    },
    {
      id: "fi4",
      chapter: "第 6 章",
      focus: true,
      prompt: "Douglas 算法常用于 ________ 。",
      answer: ["折线简化", "线简化", "线化简"],
      explain: "是矢量化和地图综合中常见的简化方法。"
    },
    {
      id: "fi5",
      chapter: "第 7 章",
      focus: true,
      prompt: "栅格数据适合表达 ________ 型现象，矢量数据适合表达离散对象。",
      answer: ["连续", "连续型"],
      explain: "这是一道非常典型的比较填空。"
    },
    {
      id: "fi6",
      chapter: "第 9 章",
      focus: true,
      prompt: "Delaunay 三角网的外接圆内部不应包含其他 ________ 。",
      answer: ["点"],
      explain: "这是 Delaunay 的核心判据。"
    },
    {
      id: "fi7",
      chapter: "第 8 章",
      focus: true,
      prompt: "地理编码也常被称为 ________。",
      answer: ["地址匹配"],
      explain: "根据地址定位到空间坐标。"
    },
    {
      id: "fi8",
      chapter: "第 9 章",
      focus: true,
      prompt: "DEM 的地形属性分析中，坡度和 ________ 是最常考的两个基本指标。",
      answer: ["坡向"],
      explain: "很多试题会把坡度、坡向放在一起考。"
    },
    {
      id: "fi9",
      chapter: "第 2 章",
      focus: true,
      prompt: "现实世界、概念世界、地理空间世界之间的关系，通常体现为逐层 ________ 的过程。",
      answer: ["抽象"],
      explain: "从现实到模型，本质上是抽象。"
    },
    {
      id: "fi10",
      chapter: "第 3 章",
      focus: true,
      prompt: "网络模型强调的是空间对象之间的 ________ 关系。",
      answer: ["连通", "连接", "拓扑"],
      explain: "网络的核心就是连通性。"
    },
    {
      id: "fi11",
      chapter: "第 8 章",
      focus: true,
      prompt: "地理编码也可以理解为地址到 ________ 的转换。",
      answer: ["空间位置", "坐标", "位置"],
      explain: "地址匹配就是把地址映射到地理位置。"
    },
    {
      id: "fi12",
      chapter: "第 9 章",
      focus: true,
      prompt: "TIN 的中文常译为不规则 ________ 网。",
      answer: ["三角"],
      explain: "TIN = Triangulated Irregular Network。"
    }
  ],
  term: [
    {
      id: "te1",
      chapter: "第 1 章",
      focus: true,
      term: "地理信息",
      answer: "有关地理实体性质、特征和运动状态的表征及一切有用知识，是对地理数据的解释。"
    },
    {
      id: "te2",
      chapter: "第 3 章",
      focus: true,
      term: "空间数据模型",
      answer: "关于现实世界空间实体及其相互联系的概念，用于描述空间数据的组织和设计空间数据库模式。"
    },
    {
      id: "te3",
      chapter: "第 5 章",
      focus: true,
      term: "元数据",
      answer: "关于数据的数据，用来说明数据来源、精度、内容、坐标系统、时间等属性。"
    },
    {
      id: "te4",
      chapter: "第 6 章",
      focus: true,
      term: "DIME 编码",
      answer: "一种矢量编码方式，用于描述线和拓扑关系，是早期空间数据编码的重要方法。"
    },
    {
      id: "te5",
      chapter: "第 8 章",
      focus: true,
      term: "空间查询",
      answer: "按照位置、条件或两者组合，对空间数据库中的对象进行检索的过程。"
    },
    {
      id: "te6",
      chapter: "第 9 章",
      focus: true,
      term: "TIN",
      answer: "不规则三角网，以有限离散点构建相连三角面来表达地形表面。"
    },
    {
      id: "te7",
      chapter: "第 9 章",
      focus: true,
      term: "通视分析",
      answer: "在 DEM 或地形模型上判断观察点与目标点之间是否可见、可见范围有多大的一类分析。"
    },
    {
      id: "te8",
      chapter: "第 7 章",
      focus: true,
      term: "栅格编码",
      answer: "对栅格数据进行存储与压缩的一组编码方法，如直接编码、链码等。"
    },
    {
      id: "te9",
      chapter: "第 2 章",
      focus: true,
      term: "地理认知",
      answer: "人们对地理客体、环境和空间关系的认识过程，是地理信息传输中的重要环节。"
    },
    {
      id: "te10",
      chapter: "第 3 章",
      focus: true,
      term: "时空数据模型",
      answer: "用于表达地理实体及其属性、位置随时间变化的模型。"
    },
    {
      id: "te11",
      chapter: "第 8 章",
      focus: true,
      term: "质心量算",
      answer: "计算空间对象几何中心或属性加权中心的量算方法，常用于位置分析。"
    },
    {
      id: "te12",
      chapter: "第 9 章",
      focus: true,
      term: "通视",
      answer: "从一个观察点到目标点之间是否存在地形遮挡的可见性关系。"
    }
  ],
  short: [
    {
      id: "sh1",
      chapter: "第 1 章",
      focus: true,
      prompt: "简述 GIS 的主要功能。",
      answer: "可以从数据采集、存储管理、空间查询、空间分析、可视化输出五个方面概括，并指出 GIS 面向决策支持。"
    },
    {
      id: "sh2",
      chapter: "第 1 章",
      focus: true,
      prompt: "简述 GIS 与 MIS、DBMS、CAD 的区别。",
      answer: "GIS 强调空间数据和空间分析；DBMS 偏重数据存储管理；MIS 偏重管理信息处理；CAD 偏重几何图形表达，空间分析和拓扑能力较弱。"
    },
    {
      id: "sh3",
      chapter: "第 3 章",
      focus: true,
      prompt: "比较场模型和要素模型的适用对象。",
      answer: "场模型适合连续型地理现象，如温度、降雨、海拔；要素模型适合离散对象，如道路、河流、地块、建筑物。"
    },
    {
      id: "sh4",
      chapter: "第 7 章",
      focus: true,
      prompt: "比较栅格数据和矢量数据的优缺点。",
      answer: "栅格结构简单、适合连续现象和叠加分析，但冗余较大、精度受分辨率影响；矢量表达精确、便于描述边界和拓扑，但结构复杂、连续分析不如栅格直观。"
    },
    {
      id: "sh5",
      chapter: "第 8 章",
      focus: true,
      prompt: "空间分析方法通常包含哪些方面？",
      answer: "可从空间查询、空间量算、缓冲区分析、叠加分析、网络分析、插值分析等方面回答，并结合应用场景说明。"
    },
    {
      id: "sh6",
      chapter: "第 9 章",
      focus: true,
      prompt: "简述 DEM 建立的一般流程。",
      answer: "先采集地形数据，再进行质量控制与采样组织，然后选择格网 DEM 或 TIN 等表示模型，最后通过插值、转换和分析形成可用的 DEM 数据。"
    },
    {
      id: "sh7",
      chapter: "第 2 章",
      focus: true,
      prompt: "简述现实世界到 GIS 模型的抽象过程。",
      answer: "可从现实世界、概念世界、地理空间世界、尺度世界、项目世界等层次说明，强调信息在逐层抽象中被编码和表达。"
    },
    {
      id: "sh8",
      chapter: "第 6 章",
      focus: true,
      prompt: "简述坐标变换在 GIS 数据处理中的作用。",
      answer: "坐标变换用于把不同来源、不同坐标系统的数据统一到同一空间参考系中，便于叠加、查询和分析。"
    },
    {
      id: "sh9",
      chapter: "第 8 章",
      focus: true,
      prompt: "简述 Dijkstra 算法在 GIS 网络分析中的基本思想。",
      answer: "从源点出发，按照当前最短距离逐步扩展到其他节点，反复更新路径代价，最终得到最短路径树。"
    },
    {
      id: "sh10",
      chapter: "第 9 章",
      focus: true,
      prompt: "简述 TIN 和格网 DEM 的主要差异。",
      answer: "TIN 用不规则三角面表达地形，适合保留特征线和离散点；格网 DEM 用规则矩阵表达地形，结构简单，便于栅格分析。"
    }
  ],
  essay: [
    {
      id: "es1",
      chapter: "第 1 章",
      focus: true,
      prompt: "论述 GIS 的发展历程、当前趋势与未来方向。",
      answer: "可从起源、发展阶段、从系统到科学再到服务的演进，以及网络化、标准化、数据商业化、智能化、时空大数据平台等方向展开。"
    },
    {
      id: "es2",
      chapter: "第 6 章",
      focus: true,
      prompt: "结合流程说明从原始空间数据到可用 GIS 数据的处理过程。",
      answer: "可写数据获取、数字化/扫描/遥感/GPS 输入、坐标转换、拓扑修正、编码、质量控制、数据库入库与输出等。"
    },
    {
      id: "es3",
      chapter: "第 9 章",
      focus: true,
      prompt: "结合 DEM 说明 TIN、格网 DEM 和相关插值算法的关系与应用。",
      answer: "可比较两种表示模型，说明不规则点集生成 TIN、格网与 TIN 的相互转换、Delaunay 准则、通视和流域分析、坡度坡向等应用。"
    },
    {
      id: "es4",
      chapter: "第 8 章",
      focus: true,
      prompt: "论述网络分析中最短路径问题的思想、步骤和应用场景。",
      answer: "可介绍图模型、权值、Dijkstra 算法、路径搜索步骤以及交通、物流、救援等实际应用。"
    },
    {
      id: "es5",
      chapter: "第 2 章",
      focus: true,
      prompt: "结合 OGC 九层模型论述现实世界到 GIS 表达之间的抽象关系。",
      answer: "可按现实世界、概念世界、地理空间世界、尺度世界、项目世界等层次展开，说明空间实体、几何、要素和接口之间的关系，并结合 GIS 的抽象与还原过程说明模型意义。"
    },
    {
      id: "es6",
      chapter: "第 3 章",
      focus: true,
      prompt: "论述空间数据模型的类型及其适用场景。",
      answer: "可从场模型、要素模型、网络模型、时空模型、三维模型展开，说明不同模型在连续现象、离散对象、连通关系、动态变化和三维表达上的优点与限制。"
    },
    {
      id: "es7",
      chapter: "第 7 章",
      focus: true,
      prompt: "论述空间数据库中栅格和矢量数据结构的特点及其转换关系。",
      answer: "可比较二者的数据组织、存储、分析优势和局限，再说明栅格到矢量、矢量到栅格的转换思路，以及在不同 GIS 任务中的选择原则。"
    },
    {
      id: "es8",
      chapter: "第 9 章",
      focus: true,
      prompt: "论述 DEM 在地形分析中的作用，并结合通视、流域与地形属性分析加以说明。",
      answer: "可说明 DEM 是地形分析的基础数据，分别展开通视分析、流域提取、坡度坡向、表面积与体积计算等应用，最后总结 DEM 在资源、工程和环境分析中的价值。"
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
  expandedChapter: null,
  activeFocus: {
    chapterId: chapters[0]?.id || "",
    label: chapters[0]?.focus?.[0] || ""
  }
};

const els = {
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
const studyUnits = runtimeWindow.__GIS_STUDY_UNITS__ || [];
const generatedBank = runtimeWindow.__GIS_GENERATED_BANK__ || {
  choice: [],
  fill: [],
  term: [],
  short: [],
  essay: []
};

questionBank.choice.push(...generatedBank.choice);
questionBank.fill.push(...generatedBank.fill);
questionBank.term.push(...generatedBank.term);
questionBank.short.push(...generatedBank.short);
questionBank.essay.push(...generatedBank.essay);

function normalizeText(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/[\s\u3000·,，。！？!？；;:：、()（）\[\]【】"'“”‘’\-_/\\|]/g, "")
    .replace(/π/g, "pi")
    .replace(/[∑Σ]/g, "sum")
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
                : `<span class="tag muted">重点提示：${chapter.focus.length} 项</span>${tags}`
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
      const chapterKey = chapter.title.match(/^第\s*\d+\s*章/)?.[0] ?? chapter.title;
      const units = grouped.get(chapterKey) || [];
      const topicPreview = units.slice(0, 4).map((unit) => unit.topic);
      return `
        <article class="study-chapter fade-in">
          <div class="study-chapter-head">
            <div>
              <h3>${chapter.title}</h3>
              <p class="study-summary">${chapter.note} 建议按“定义 - 关系 - 流程 - 应用”的顺序复习。</p>
            </div>
            <span class="pill pill-soft">${units.length} 个单元</span>
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
  return chapter.title.match(/^第\s*\d+\s*章/)?.[0] ?? chapter.title;
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
    : `<p>暂无补充内容。</p>`;
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
  const questionType = /区别|对比|比较/.test(label)
    ? "比较题"
    : /定义|概念|是什么/.test(label)
      ? "名词解释"
      : /算法|步骤|流程|过程/.test(label)
        ? "步骤题"
        : /模型|结构|组成/.test(label)
          ? "简答题"
          : "高频考点";

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
    ? `<div class="focus-detail-card"><h4>核心概念</h4>${definitionList
        .map((item) => `<p><strong>${item.term}：</strong>${item.definition}</p>`)
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
    ? `<div class="focus-detail-card"><h4>算法/公式</h4>${algorithmList
        .map((item) => `
          <p><strong>${item.name}：</strong>${item.formula}</p>
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
              <p><strong>关键词：</strong>${unit.keywords.join("、")}</p>
              <p><strong>例子：</strong>${unit.example}</p>
              <p><strong>易错点：</strong>${unit.pitfall}</p>
            </div>
          `
        )
        .join("")}</div>`
    : `<p>暂无对应单元，建议回到该章的章节概览继续复习。</p>`;

  const answerTemplate = [
    `1. 先用一句话概括：${summary || chapter.note}`,
    `2. 写出关键词：${keywords.length ? keywords.join("、") : "抓住概念、结构、方法和应用"}`,
    `3. 补一个例子：${examples[0] || "结合教材中的典型案例说明"}`,
    `4. 说明易错点：${pitfalls[0] || "注意与相近概念区分"}`,
    `5. 若是${questionType}，可补充${comparePoints[0] || "相关概念对比"}.`
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
          <h4>怎么理解</h4>
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
          <h4>相关单元</h4>
          ${unitHtml}
        </div>
      </div>
      <div class="focus-detail-stack">
        ${definitionHtml}
        ${comparisonHtml}
        ${algorithmHtml}
        ${applicationHtml}
        <div class="focus-detail-card">
          <h4>例子</h4>
          ${renderListItems(examples.length ? examples : ["可结合教材例题或课堂案例说明"])}
        </div>
        <div class="focus-detail-card">
          <h4>易错点</h4>
          ${renderListItems(pitfalls.length ? pitfalls : ["把相近概念混淆、只背结论不写分析过程"])}
        </div>
      </div>
    </div>
    <div class="focus-detail-card" style="margin-top:16px;">
      <h4>同章可切换的考点</h4>
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
    ...chapters.map((chapter) => chapter.title.match(/^第\s*\d+\s*章/)?.[0] ?? chapter.title)
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
    : `<div class="summary-banner">没有找到匹配的题目，可以换个关键词、章节或题型试试。</div>`;
}

function renderQuestionCard(question, examMode = false) {
  const meta = [
    question.chapter,
    question.focus ? "重点" : "常规",
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
    body = `<input type="text" data-question-input="${question.id}" placeholder="在这里填写答案" />`;
  } else if (question.type === "term") {
    body = `<textarea data-question-input="${question.id}" placeholder="写出名词解释"></textarea>`;
  } else if (question.type === "short" || question.type === "essay") {
    body = `<textarea data-question-input="${question.id}" placeholder="写下你的答案或提纲"></textarea>`;
  }

  return `
    <article class="question-card fade-in" data-qid="${question.id}">
      <div class="question-meta">
        ${meta.map((item) => `<span class="pill pill-soft">${item}</span>`).join("")}
      </div>
      <h3>${question.prompt}</h3>
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
    els.examSummary.textContent = "当前配置没有抽到题目，请增加题目数量。";
    return;
  }

  els.examPaper.innerHTML = state.currentExam.map((question, index) => {
    return `
      <div class="question-wrap">
        <div class="question-card fade-in" data-exam-qid="${question.id}" style="animation-delay:${index * 35}ms">
          <div class="question-meta">
            <span class="pill">第 ${index + 1} 题</span>
            <span class="pill pill-soft">${question.chapter}</span>
            <span class="pill pill-soft">${
              question.type === "choice" ? "选择题" :
              question.type === "fill" ? "填空题" :
              question.type === "term" ? "名词解释" :
              question.type === "short" ? "简答题" : "论述题"
            }</span>
          </div>
          <h3>${question.prompt}</h3>
          ${renderExamInput(question)}
          <div class="answer-block hidden" data-answer-for="${question.id}"></div>
        </div>
      </div>
    `;
  }).join("");

  els.examSummary.textContent = `已抽取 ${state.currentExam.length} 题。建议先独立作答，再点击“交卷评分”核对。`;
  document.getElementById("examHint").textContent = `本卷已按 ${Object.values(counts).reduce((a, b) => a + b, 0)} 题配置抽取，主观题建议先列提纲再展开。`;
  bindInputEvents();
  renderBank();
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
    return `<input type="text" data-question-input="${question.id}" placeholder="请输入答案" />`;
  }
  if (question.type === "term") {
    return `<textarea data-question-input="${question.id}" placeholder="名词解释"></textarea>`;
  }
  return `<textarea data-question-input="${question.id}" placeholder="写下要点或提纲"></textarea>`;
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
          ${isCorrect ? "回答正确" : "回答错误"} · 正确答案：${String.fromCharCode(65 + question.answer)}
        </div>
        <small>${question.explain}</small>
      `;
    } else if (question.type === "fill") {
      fillTotal += 1;
      const normalized = normalizeText(userAnswer);
      const accepted = question.answer.map(normalizeText);
      isCorrect = accepted.includes(normalized);
      if (isCorrect) fillScore += 1;
      result = `
        <div class="${isCorrect ? "answer-good" : "answer-bad"}">
          ${isCorrect ? "填空正确" : "填空未命中"} · 参考答案：${question.answer[0]}
        </div>
        <small>${question.explain}</small>
      `;
    } else {
      subjectiveTotal += 1;
      result = `
        <div class="answer-good">参考答案</div>
        <div>${question.answer}</div>
        <small>主观题建议按“定义 + 结构 + 例子 / 对比 / 应用”自评。</small>
      `;
    }

    block.classList.remove("hidden");
    block.innerHTML = result;
  });

  const totalObjective = objectiveTotal + fillTotal;
  const totalScore = objectiveScore + fillScore;
  const maxScore = totalObjective + subjectiveTotal;
  const subjectiveNotice = subjectiveTotal > 0 ? `，另外有 ${subjectiveTotal} 道主观题请对照参考答案自评` : "";

  els.examSummary.textContent = `本次卷面包含 ${state.currentExam.length} 题，客观题得分 ${totalScore}/${totalObjective}${subjectiveNotice}。`;
}

function formatTime(seconds) {
  const m = String(Math.floor(seconds / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return `${m}:${s}`;
}

function startTimer() {
  if (!state.currentExam.length) {
    els.examSummary.textContent = "请先生成试卷后再开始计时。";
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
    els.timerBadge.textContent = `倒计时 ${formatTime(state.timeLeft)}`;
  } else {
    els.timerBadge.textContent = `暂停 ${formatTime(state.timeLeft)}`;
  }
}

function seedBank() {
  state.currentBank = shuffle(allQuestions());
}

function attachListeners() {
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
  document.getElementById("examHint").textContent = "先设置题量并点击“生成试卷”，系统会自动抽题并按题型混排。";
  updateTimerBadge();

  els.examPaper.innerHTML = "";
}

document.addEventListener("DOMContentLoaded", init);
