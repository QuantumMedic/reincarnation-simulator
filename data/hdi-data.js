// 定義全局變量
const HDI_DATA = {
  // 極高人類發展指數國家 (HDI >= 0.9)
  CHE: { hdi: 0.962, rank: 1, life: 84.0, gni: 66933, gii: 0.018, population: 8654622 },  // 瑞士聯邦
  NOR: { hdi: 0.961, rank: 2, life: 83.2, gni: 64660, gii: 0.016, population: 5379475 },  // 挪威
  ISL: { hdi: 0.959, rank: 3, life: 82.7, gni: 54682, gii: 0.058, population: 366425 },   // 冰島
  HKG: { hdi: 0.952, rank: 4, life: 85.5, gni: 62607, gii: null, population: 7500700 },   // 香港
  AUS: { hdi: 0.951, rank: 5, life: 83.3, gni: 49238, gii: 0.073, population: 25687041 }, // 澳大利亞聯邦
  DNK: { hdi: 0.948, rank: 6, life: 81.4, gni: 60365, gii: 0.013, population: 5831404 },  // 丹麥王國
  SWE: { hdi: 0.947, rank: 7, life: 82.8, gni: 54489, gii: 0.023, population: 10353442 }, // 瑞典王國
  IRL: { hdi: 0.945, rank: 8, life: 82.5, gni: 76169, gii: 0.069, population: 4994724 },  // 愛爾蘭
  DEU: { hdi: 0.942, rank: 9, life: 80.6, gni: 54534, gii: 0.073, population: 83240525 }, // 德意志聯邦共和國
  NLD: { hdi: 0.941, rank: 10, life: 81.7, gni: 55979, gii: 0.025, population: 16655799 },// 荷蘭
  FIN: { hdi: 0.940, rank: 11, life: 82.2, gni: 49452, gii: 0.033, population: 5530719 }, // 芬蘭共和國
  SGP: { hdi: 0.939, rank: 12, life: 82.8, gni: 90919, gii: 0.040, population: 5685807 }, // 新加坡
  BEL: { hdi: 0.937, rank: 13, life: 81.9, gni: 52085, gii: 0.043, population: 11555997 },// 比利時王國
  NZL: { hdi: 0.937, rank: 14, life: 82.5, gni: 44057, gii: 0.088, population: 5084300 }, // 紐西蘭
  CAN: { hdi: 0.936, rank: 15, life: 82.7, gni: 46808, gii: 0.069, population: 38005238 },// 加拿大
  LIE: { hdi: 0.935, rank: 16, life: 83.3, gni: 146830, gii: null, population: 38137 },   // 列支敦士登公國
  LUX: { hdi: 0.934, rank: 17, life: 82.6, gni: 84649, gii: 0.044, population: 632275 },  // 盧森堡大公國
  GBR: { hdi: 0.932, rank: 18, life: 80.7, gni: 45225, gii: 0.098, population: 67215293 },// 大不列顛及北愛爾蘭聯合王國
  TWN: { hdi: 0.926, rank: 19, life: 81.0, gni: 55078, gii: null, population: 23503349 }, // 臺灣
  KOR: { hdi: 0.925, rank: 20, life: 83.7, gni: 44501, gii: 0.067, population: 51780579 },// 大韓民國
  JPN: { hdi: 0.925, rank: 21, life: 84.8, gni: 42274, gii: 0.083, population: 125836021 },// 日本國
  USA: { hdi: 0.921, rank: 22, life: 76.1, gni: 64765, gii: 0.179, population: 329484123 },// 美利堅合眾國
  ISR: { hdi: 0.919, rank: 23, life: 83.3, gni: 41524, gii: 0.093, population: 9216900 }, // 以色列國
  SVN: { hdi: 0.918, rank: 24, life: 81.3, gni: 39746, gii: 0.071, population: 2100126 }, // 斯洛文尼亞共和國
  MLT: { hdi: 0.918, rank: 25, life: 83.8, gni: 38884, gii: 0.175, population: 525285 },  // 馬耳他共和國
  MAC: { hdi: 0.915, rank: 26, life: 84.7, gni: 115647, gii: null, population: 649342 },  // 澳門
  AUT: { hdi: 0.914, rank: 27, life: 81.6, gni: 53619, gii: 0.053, population: 8917205 }, // 奧地利共和國
  ESP: { hdi: 0.905, rank: 28, life: 83.0, gni: 38354, gii: 0.057, population: 47351567 },// 西班牙王國
  FRA: { hdi: 0.903, rank: 29, life: 82.5, gni: 45937, gii: 0.083, population: 67391582 },// 法蘭西共和國

  // 高人類發展指數國家 (0.8 <= HDI < 0.9)
  ITA: { hdi: 0.895, rank: 30, life: 83.5, gni: 42840, gii: 0.069, population: 59554023 },// 意大利共和國
  EST: { hdi: 0.890, rank: 31, life: 77.1, gni: 38048, gii: 0.086, population: 1331057 }, // 愛沙尼亞共和國
  CZE: { hdi: 0.889, rank: 32, life: 77.8, gni: 38745, gii: 0.136, population: 10698896 },// 捷克共和國
  GRC: { hdi: 0.887, rank: 33, life: 80.1, gni: 28517, gii: 0.119, population: 10715549 },// 希臘共和國
  CYP: { hdi: 0.887, rank: 34, life: 81.2, gni: 38188, gii: 0.123, population: 1207361 }, // 塞浦路斯共和國
  POL: { hdi: 0.876, rank: 35, life: 76.5, gni: 33034, gii: 0.109, population: 37950802 },// 波蘭共和國
  PRI: { hdi: 0.875, rank: 36, life: 79.3, gni: 30276, gii: null, population: 3194034 },  // 波多黎各自由邦
  SAU: { hdi: 0.875, rank: 37, life: 75.1, gni: 46753, gii: 0.247, population: 34813867 },// 沙特阿拉伯王國
  BHR: { hdi: 0.875, rank: 38, life: 77.3, gni: 39497, gii: 0.181, population: 1701583 }, // 巴林王國
  LTU: { hdi: 0.875, rank: 39, life: 75.1, gni: 37931, gii: 0.105, population: 2794700 }, // 立陶宛共和國
  AND: { hdi: 0.868, rank: 40, life: 81.9, gni: 51167, gii: null, population: 77265 },    // 安道爾公國

  // 高人類發展水平 (0.8-0.899)
  AUS: { hdi: 0.951, rank: 5, life: 83.3, gni: 49238, gii: 0.073 },  // 澳大利亞
  DNK: { hdi: 0.948, rank: 6, life: 81.4, gni: 60365, gii: 0.038 },  // 丹麥
  SWE: { hdi: 0.947, rank: 7, life: 82.8, gni: 54489, gii: 0.039 },  // 瑞典
  IRL: { hdi: 0.945, rank: 8, life: 82.5, gni: 76169, gii: 0.083 },  // 愛爾蘭
  DEU: { hdi: 0.942, rank: 9, life: 80.6, gni: 54534, gii: 0.073 },  // 德國
  NLD: { hdi: 0.941, rank: 10, life: 81.7, gni: 55979, gii: 0.043 }, // 荷蘭
  FIN: { hdi: 0.940, rank: 11, life: 82.2, gni: 49452, gii: 0.047 }, // 芬蘭
  SGP: { hdi: 0.939, rank: 12, life: 82.8, gni: 88155, gii: 0.040 }, // 新加坡
  BEL: { hdi: 0.937, rank: 13, life: 81.9, gni: 52085, gii: 0.048 }, // 比利時
  NZL: { hdi: 0.937, rank: 14, life: 82.5, gni: 40799, gii: 0.112 }, // 紐西蘭
  CAN: { hdi: 0.936, rank: 15, life: 82.7, gni: 46808, gii: 0.081 }, // 加拿大
  LIE: { hdi: 0.935, rank: 16, life: 83.3, gni: 146830, gii: null }, // 列支敦斯登
  LUX: { hdi: 0.934, rank: 17, life: 82.6, gni: 84649, gii: 0.044 }, // 盧森堡
  GBR: { hdi: 0.932, rank: 18, life: 80.7, gni: 45225, gii: 0.098 }, // 英國
  TWN: { hdi: 0.926, rank: 19, life: 81.0, gni: 55078, gii: 0.045 }, // 台灣
  JPN: { hdi: 0.925, rank: 20, life: 84.8, gni: 42274, gii: 0.083 }, // 日本
  KOR: { hdi: 0.925, rank: 21, life: 83.7, gni: 44501, gii: 0.067 }, // 韓國
  ISR: { hdi: 0.919, rank: 22, life: 83.3, gni: 41524, gii: 0.093 }, // 以色列
  SVN: { hdi: 0.918, rank: 23, life: 81.3, gni: 38080, gii: 0.071 }, // 斯洛維尼亞
  MLT: { hdi: 0.918, rank: 23, life: 83.8, gni: 39555, gii: 0.175 }, // 馬爾他
  MAC: { hdi: 0.915, rank: 24, life: 84.7, gni: 72056, gii: null },  // 澳門
  AUT: { hdi: 0.914, rank: 25, life: 81.6, gni: 53619, gii: 0.069 }, // 奧地利
  FRA: { hdi: 0.903, rank: 26, life: 82.5, gni: 45937, gii: 0.083 }, // 法國
  ESP: { hdi: 0.905, rank: 27, life: 83.0, gni: 38354, gii: 0.074 }, // 西班牙

  // 中人類發展水平 (0.7-0.799)
  ALB: { hdi: 0.796, rank: 67, life: 76.5, gni: 14131, gii: 0.181 }, // 阿爾巴尼亞
  BGR: { hdi: 0.795, rank: 68, life: 71.8, gni: 23079, gii: 0.206 }, // 保加利亞
  GRD: { hdi: 0.795, rank: 68, life: 74.9, gni: 13484, gii: null },  // 格瑞那達
  BRB: { hdi: 0.790, rank: 70, life: 77.6, gni: 14084, gii: 0.269 }, // 巴貝多
  ATG: { hdi: 0.788, rank: 71, life: 76.9, gni: 15684, gii: null },  // 安地卡及巴布達
  SYC: { hdi: 0.785, rank: 72, life: 72.8, gni: 25831, gii: null },  // 塞席爾
  LKA: { hdi: 0.782, rank: 73, life: 77.0, gni: 12578, gii: 0.383 }, // 斯里蘭卡
  BIH: { hdi: 0.780, rank: 74, life: 75.3, gni: 14872, gii: 0.149 }, // 波士尼亞與赫塞哥維納
  VEN: { hdi: 0.778, rank: 75, life: 70.6, gni: 4810, gii: 0.492 },  // 委內瑞拉
  MNE: { hdi: 0.776, rank: 76, life: 74.2, gni: 19827, gii: 0.119 }, // 蒙特內哥羅
  UKR: { hdi: 0.773, rank: 77, life: 71.6, gni: 13256, gii: 0.200 }, // 烏克蘭
  KAZ: { hdi: 0.771, rank: 78, life: 69.4, gni: 22857, gii: 0.161 }, // 哈薩克
  CHN: { hdi: 0.768, rank: 79, life: 78.2, gni: 17504, gii: 0.192 }, // 中國
  GEO: { hdi: 0.767, rank: 80, life: 71.7, gni: 14664, gii: 0.280 }, // 喬治亞
  MUS: { hdi: 0.764, rank: 81, life: 73.6, gni: 25266, gii: 0.376 }, // 模里西斯
  THA: { hdi: 0.764, rank: 82, life: 77.7, gni: 17030, gii: 0.360 }, // 泰國
  SUR: { hdi: 0.762, rank: 83, life: 71.7, gni: 13984, gii: 0.427 }, // 蘇利南
  PER: { hdi: 0.762, rank: 84, life: 76.5, gni: 12246, gii: 0.380 }, // 秘魯
  ARM: { hdi: 0.759, rank: 85, life: 72.0, gni: 13158, gii: 0.216 }, // 亞美尼亞
  MEX: { hdi: 0.758, rank: 86, life: 75.1, gni: 17896, gii: 0.309 }, // 墨西哥
  BRA: { hdi: 0.754, rank: 87, life: 72.8, gni: 14370, gii: 0.390 }, // 巴西
  COL: { hdi: 0.752, rank: 88, life: 72.8, gni: 14384, gii: 0.424 }, // 哥倫比亞
  AZE: { hdi: 0.745, rank: 89, life: 69.4, gni: 14257, gii: 0.294 }, // 亞塞拜然
  JOR: { hdi: 0.745, rank: 90, life: 74.5, gni: 9924, gii: 0.471 },  // 約旦
  ECU: { hdi: 0.740, rank: 91, life: 76.8, gni: 10312, gii: 0.362 }, // 厄瓜多
  DZA: { hdi: 0.745, rank: 91, life: 76.4, gni: 10800, gii: 0.499 }, // 阿爾及利亞
  LBN: { hdi: 0.743, rank: 92, life: 78.9, gni: 9526, gii: 0.432 },  // 黎巴嫩
  FJI: { hdi: 0.740, rank: 93, life: 67.1, gni: 13231, gii: null },  // 斐濟
  DOM: { hdi: 0.739, rank: 94, life: 73.9, gni: 17990, gii: 0.429 }, // 多明尼加
  MNG: { hdi: 0.739, rank: 95, life: 69.8, gni: 10588, gii: 0.313 }, // 蒙古
  TUN: { hdi: 0.731, rank: 96, life: 76.7, gni: 10258, gii: 0.259 }, // 突尼西亞
  EGY: { hdi: 0.731, rank: 97, life: 72.0, gni: 11732, gii: 0.443 }, // 埃及
  UZB: { hdi: 0.727, rank: 98, life: 71.6, gni: 7917, gii: 0.227 },  // 烏茲別克
  ZAF: { hdi: 0.713, rank: 99, life: 64.9, gni: 12948, gii: 0.405 }, // 南非
  JAM: { hdi: 0.709, rank: 100, life: 74.5, gni: 8834, gii: 0.335 }, // 牙買加
  VNM: { hdi: 0.703, rank: 115, life: 75.4, gni: 7867, gii: 0.296 }, // 越南
  IDN: { hdi: 0.705, rank: 114, life: 71.7, gni: 11466, gii: 0.444 }, // 印尼
  PHL: { hdi: 0.699, rank: 116, life: 71.2, gni: 9778, gii: 0.419 }, // 菲律賓

  // 低人類發展水平 (<0.7)
  BTN: { hdi: 0.666, rank: 127, life: 71.8, gni: 10141, gii: 0.415 }, // 不丹
  NAM: { hdi: 0.615, rank: 139, life: 64.0, gni: 8634, gii: 0.445 },  // 納米比亞
  KIR: { hdi: 0.624, rank: 134, life: 68.4, gni: 4063, gii: null },   // 吉里巴斯
  IND: { hdi: 0.633, rank: 132, life: 67.2, gni: 6590, gii: 0.490 },  // 印度
  VUT: { hdi: 0.607, rank: 140, life: 70.4, gni: 3085, gii: null },   // 萬那杜
  TLS: { hdi: 0.607, rank: 141, life: 69.5, gni: 4461, gii: null },   // 東帝汶
  NPL: { hdi: 0.602, rank: 143, life: 70.8, gni: 3877, gii: 0.452 },  // 尼泊爾
  KEN: { hdi: 0.601, rank: 144, life: 67.0, gni: 4474, gii: 0.506 },  // 肯亞
  MMR: { hdi: 0.585, rank: 149, life: 67.1, gni: 3851, gii: 0.478 },  // 緬甸
  CMR: { hdi: 0.576, rank: 151, life: 60.3, gni: 3621, gii: 0.565 },  // 喀麥隆
  ZWE: { hdi: 0.571, rank: 153, life: 61.5, gni: 3810, gii: 0.532 },  // 辛巴威
  PAK: { hdi: 0.544, rank: 161, life: 67.8, gni: 4624, gii: 0.465 },  // 巴基斯坦
  TZA: { hdi: 0.549, rank: 160, life: 65.5, gni: 2664, gii: 0.537 },  // 坦尚尼亞
  SEN: { hdi: 0.511, rank: 170, life: 67.9, gni: 3344, gii: 0.530 },  // 塞內加爾
  AFG: { hdi: 0.478, rank: 180, life: 64.8, gni: 1824, gii: 0.678 },  // 阿富汗
  ETH: { hdi: 0.498, rank: 175, life: 67.0, gni: 2361, gii: 0.520 },  // 衣索比亞
  MLI: { hdi: 0.428, rank: 186, life: 59.3, gni: 2133, gii: 0.613 },  // 馬利
  BDI: { hdi: 0.426, rank: 187, life: 61.7, gni: 732, gii: 0.505 },   // 蒲隆地
  NER: { hdi: 0.400, rank: 189, life: 62.4, gni: 1240, gii: 0.642 },  // 尼日
  CAF: { hdi: 0.397, rank: 188, life: 53.9, gni: 993, gii: 0.680 },   // 中非共和國
  TCD: { hdi: 0.394, rank: 190, life: 54.2, gni: 1364, gii: 0.652 },  // 查德
  SSD: { hdi: 0.385, rank: 191, life: 57.9, gni: 768, gii: 0.680 },   // 南蘇丹

  // 特殊行政區和其他地區
  GUM: { hdi: 0.830, rank: 51, life: 76.4, gni: 32358, gii: null },   // 關島
  VIR: { hdi: 0.825, rank: 52, life: 79.4, gni: 29651, gii: null },   // 美屬維京群島
  NCL: { hdi: 0.810, rank: 58, life: 77.5, gni: 28335, gii: null },   // 新喀里多尼亞

  // 補充以下國家的數據（使用繁體字）
  RUS: { hdi: 0.822, rank: 52, life: 72.6, gni: 27166, gii: 0.203 },  // 俄羅斯
  KHM: { hdi: 0.593, rank: 146, life: 70.2, gni: 4246, gii: 0.473 },  // 柬埔寨
  BGD: { hdi: 0.661, rank: 129, life: 72.4, gni: 5472, gii: 0.530 },  // 孟加拉
  IRN: { hdi: 0.774, rank: 76, life: 76.7, gni: 12447, gii: 0.459 },  // 伊朗
  IRQ: { hdi: 0.686, rank: 121, life: 70.4, gni: 10801, gii: 0.577 }, // 伊拉克
  PRY: { hdi: 0.717, rank: 105, life: 74.3, gni: 12349, gii: 0.445 }, // 巴拉圭
  URY: { hdi: 0.809, rank: 58, life: 77.8, gni: 20064, gii: 0.235 },  // 烏拉圭
  BLR: { hdi: 0.808, rank: 60, life: 74.8, gni: 18849, gii: 0.104 },  // 白俄羅斯
  SRB: { hdi: 0.802, rank: 63, life: 76.0, gni: 19123, gii: 0.132 },  // 塞爾維亞
  MDA: { hdi: 0.767, rank: 80, life: 71.9, gni: 13664, gii: 0.205 },  // 摩爾多瓦
  NGA: { hdi: 0.535, rank: 163, life: 52.7, gni: 4790, gii: 0.680 },  // 奈及利亞
  GHA: { hdi: 0.632, rank: 133, life: 64.1, gni: 5745, gii: 0.529 },  // 加納
  CUB: { hdi: 0.764, rank: 83, life: 78.8, gni: 8621, gii: 0.303 },   // 古巴
  HTI: { hdi: 0.535, rank: 163, life: 64.0, gni: 2848, gii: 0.636 },  // 海地
  LAO: { hdi: 0.607, rank: 140, life: 67.9, gni: 7700, gii: 0.478 },  // 寮國
  UGA: { hdi: 0.525, rank: 166, life: 63.4, gni: 2181, gii: 0.530 },  // 烏干達
  LBY: { hdi: 0.718, rank: 104, life: 72.9, gni: 15688, gii: 0.259 }, // 利比亞
  GAB: { hdi: 0.706, rank: 112, life: 66.5, gni: 13367, gii: 0.537 }, // 加彭
  MKD: { hdi: 0.770, rank: 78, life: 76.5, gni: 15918, gii: 0.143 },  // 北馬其頓
  YEM: { hdi: 0.455, rank: 183, life: 66.1, gni: 1314, gii: 0.820 },  // 葉門
  PSE: { hdi: 0.715, rank: 106, life: 74.2, gni: 6583, gii: 0.445 },  // 巴勒斯坦
  ZMB: { hdi: 0.565, rank: 154, life: 63.9, gni: 3217, gii: 0.540 },  // 尚比亞
  PRK: { hdi: 0.615, rank: 139, life: 72.3, gni: 1620, gii: null },   // 北韓
  MAR: { hdi: 0.683, rank: 123, life: 76.9, gni: 7303, gii: 0.425 },  // 摩洛哥
  SDN: { hdi: 0.508, rank: 172, life: 65.3, gni: 3575, gii: 0.545 },  // 蘇丹
  BWA: { hdi: 0.693, rank: 117, life: 69.6, gni: 16198, gii: 0.417 }, // 波札那
  PNG: { hdi: 0.558, rank: 156, life: 64.5, gni: 4009, gii: 0.725 },  // 巴布亞紐幾內亞
  MDG: { hdi: 0.501, rank: 173, life: 67.0, gni: 1484, gii: 0.556 },  // 馬達加斯加
  SYR: { hdi: 0.577, rank: 150, life: 72.7, gni: 3613, gii: 0.482 },  // 敘利亞
  SWZ: { hdi: 0.597, rank: 144, life: 60.2, gni: 7679, gii: 0.540 },  // 史瓦帝尼
  SLV: { hdi: 0.675, rank: 125, life: 73.3, gni: 8296, gii: 0.383 },  // 薩爾瓦多
  KGZ: { hdi: 0.692, rank: 118, life: 71.5, gni: 4864, gii: 0.370 },  // 吉爾吉斯
  RWA: { hdi: 0.534, rank: 164, life: 69.0, gni: 2210, gii: 0.402 },  // 盧安達
  TTO: { hdi: 0.810, rank: 57, life: 73.5, gni: 26231, gii: 0.323 },  // 千里達及托巴哥
  GUY: { hdi: 0.714, rank: 108, life: 69.9, gni: 22465, gii: 0.454 }, // 蓋亞那
  TKM: { hdi: 0.745, rank: 91, life: 68.2, gni: 14909, gii: null },   // 土庫曼
  MOZ: { hdi: 0.446, rank: 185, life: 60.9, gni: 1198, gii: 0.537 },  // 莫三比克
  PAN: { hdi: 0.805, rank: 61, life: 78.5, gni: 29558, gii: 0.407 },  // 巴拿馬

  // 非主權國家和特殊地區（按字母順序排列）
  SGS: { hdi: null, rank: null, life: null, gni: null, gii: null },  // 南喬治亞與南桑威奇群島
  SLE: { hdi: 0.477, rank: 181, life: 60.1, gni: 1622, gii: 0.644 }, // 獅子山共和國
  WLF: { hdi: null, rank: null, life: 79.1, gni: null, gii: null },  // 瓦利斯和富圖納群島
  PCN: { hdi: null, rank: null, life: null, gni: null, gii: null },  // 皮特凱恩群島
  CIV: { hdi: 0.550, rank: 159, life: 57.8, gni: 5217, gii: 0.638 }, // 象牙海岸
  BEN: { hdi: 0.545, rank: 163, life: 61.8, gni: 3409, gii: 0.602 }, // 貝南
  CPV: { hdi: 0.662, rank: 128, life: 73.0, gni: 7019, gii: 0.397 }, // 維德角
  KNA: { hdi: 0.777, rank: 75, life: 74.1, gni: 25038, gii: null },  // 聖克里斯多福及尼維斯
  BES: { hdi: null, rank: null, life: 77.9, gni: null, gii: null },  // 荷蘭加勒比區
  MNP: { hdi: null, rank: null, life: 76.7, gni: null, gii: null },  // 北馬利安納群島
  BLM: { hdi: null, rank: null, life: 79.9, gni: null, gii: null },  // 聖巴泰勒米
  GGY: { hdi: null, rank: null, life: 83.0, gni: null, gii: null },  // 根西島
  SLB: { hdi: 0.564, rank: 155, life: 70.3, gni: 2482, gii: null },  // 所羅門群島
  SJM: { hdi: null, rank: null, life: 81.9, gni: null, gii: null },  // 斯瓦爾巴特和揚馬延島
  FRO: { hdi: null, rank: null, life: 82.3, gni: null, gii: null },  // 法羅群島
  ABW: { hdi: null, rank: null, life: 76.1, gni: null, gii: null },  // 阿魯巴
  COK: { hdi: null, rank: null, life: 76.0, gni: null, gii: null },  // 庫克群島
  CXR: { hdi: null, rank: null, life: null, gni: null, gii: null },  // 聖誕島
  TKL: { hdi: null, rank: null, life: null, gni: null, gii: null },  // 托克勞
  GNB: { hdi: 0.483, rank: 177, life: 58.3, gni: 1908, gii: 0.627 }, // 幾內亞比索
  REU: { hdi: null, rank: null, life: 80.2, gni: null, gii: null },  // 留尼旺
  DJI: { hdi: 0.509, rank: 171, life: 67.1, gni: 5025, gii: null },  // 吉布地
  MSR: { hdi: null, rank: null, life: 74.6, gni: null, gii: null },  // 蒙特塞拉特
  ATA: { hdi: null, rank: null, life: null, gni: null, gii: null },  // 南極洲
  MCO: { hdi: null, rank: null, life: 85.9, gni: null, gii: null },  // 摩納哥
  MYT: { hdi: null, rank: null, life: 77.0, gni: null, gii: null },  // 馬約特
  NFK: { hdi: null, rank: null, life: null, gni: null, gii: null },  // 諾福克島
  BVT: { hdi: null, rank: null, life: null, gni: null, gii: null },  // 布韋島

  // 主權國家（補充）
  LSO: { hdi: 0.514, rank: 168, life: 54.3, gni: 3151, gii: 0.553 }, // 賴索托
  MHL: { hdi: 0.639, rank: 131, life: 74.1, gni: 4620, gii: null },  // 馬紹爾群島
  SXM: { hdi: null, rank: null, life: 76.5, gni: null, gii: null },  // 荷屬聖馬丁
  TCA: { hdi: null, rank: null, life: 80.0, gni: null, gii: null },  // 特克斯和凱科斯群島
  NRU: { hdi: 0.630, rank: 135, life: 67.4, gni: 14230, gii: null }, // 諾魯
  CCK: { hdi: null, rank: null, life: null, gni: null, gii: null },  // 科科斯（基林）群島
  ESH: { hdi: null, rank: null, life: 70.2, gni: null, gii: null },  // 西撒哈拉
  DMA: { hdi: 0.720, rank: 102, life: 78.2, gni: 11488, gii: null }, // 多米尼克
  TUV: { hdi: 0.641, rank: 130, life: 67.2, gni: 6351, gii: null },  // 圖瓦盧
  HND: { hdi: 0.621, rank: 137, life: 75.3, gni: 5298, gii: 0.479 }, // 宏都拉斯
  GNQ: { hdi: 0.596, rank: 145, life: 58.4, gni: 13944, gii: null }, // 赤道幾內亞
  LCA: { hdi: 0.715, rank: 106, life: 76.2, gni: 12048, gii: null }, // 聖露西亞

  // 繼續添加其他國家（使用繁體字）
  NIC: { hdi: 0.667, rank: 126, life: 74.5, gni: 5624, gii: 0.424, population: 6624554 },     // 尼加拉瓜
  AIA: { hdi: null, rank: null, life: 81.9, gni: null, gii: null, population: 13452 },        // 安圭拉
  ASM: { hdi: null, rank: null, life: 73.8, gni: null, gii: null, population: 55197 },        // 美屬薩摩亞
  COG: { hdi: 0.571, rank: 153, life: 64.6, gni: 2879, gii: 0.570, population: 5657000 },     // 剛果共和國
  SMR: { hdi: null, rank: null, life: 84.9, gni: null, gii: null, population: 33938 },        // 聖馬利諾
  STP: { hdi: 0.618, rank: 138, life: 70.4, gni: 4021, gii: null, population: 219161 },       // 聖多美普林西比
  MWI: { hdi: 0.512, rank: 169, life: 64.8, gni: 1466, gii: 0.554, population: 19129955 },    // 馬拉威
  SPM: { hdi: null, rank: null, life: 80.3, gni: null, gii: null, population: 6069 },         // 聖皮埃與密克隆群島
};

// 定義國家名稱對照表
const zhNames = {
    "Switzerland": "瑞士聯邦",
    "Norway": "挪威",
    "Iceland": "冰島",
    "Hong Kong": "香港",
    "Australia": "澳大利亞聯邦",
    "Denmark": "丹麥王國",
    "Sweden": "瑞典王國",
    "Ireland": "愛爾蘭",
    "Germany": "德意志聯邦共和國",
    "Netherlands": "荷蘭",
    "Finland": "芬蘭共和國",
    "Singapore": "新加坡",
    "Belgium": "比利時王國",
    "New Zealand": "紐西蘭",
    "Canada": "加拿大",
    "Liechtenstein": "列支敦士登公國",
    "Luxembourg": "盧森堡大公國",
    "United Kingdom": "大不列顛及北愛爾蘭聯合王國",
    "Taiwan": "臺灣",
    "South Korea": "大韓民國",
    "Japan": "日本國",
    "United States": "美利堅合眾國",
    "Israel": "以色列國",
    "Slovenia": "斯洛文尼亞共和國",
    "Malta": "馬耳他共和國",
    "Macau": "澳門",
    "Austria": "奧地利共和國",
    "Spain": "西班牙王國",
    "France": "法蘭西共和國",
    "Italy": "意大利共和國",
    "Estonia": "愛沙尼亞共和國",
    "Czechia": "捷克共和國",
    "Greece": "希臘共和國",
    "Cyprus": "塞浦路斯共和國",
    "Poland": "波蘭共和國",
    "Puerto Rico": "波多黎各聯邦",
    "Saudi Arabia": "沙特阿拉伯王國",
    "Bahrain": "巴林王國",
    "Lithuania": "立陶宛共和國",
    "Andorra": "安道爾公國",
    "United Arab Emirates": "阿拉伯聯合酋長國",
    "Portugal": "葡萄牙共和國",
    "Latvia": "拉脫維亞共和國",
    "Croatia": "克羅地亞共和國",
    "Qatar": "卡塔爾國",
    "Chile": "智利共和國",
    "Slovakia": "斯洛伐克共和國",
    "Hungary": "匈牙利",
    "Argentina": "阿根廷共和國",
    "Turkey": "土耳其共和國",
    "Kuwait": "科威特國",
    "Guam": "關島",
    "Brunei": "文萊和平之國",
    "United States Virgin Islands": "美屬維爾京群島",
    "Russia": "俄羅斯聯邦",
    "Romania": "羅馬尼亞",
    "Oman": "阿曼蘇丹國",
    "Bahamas": "巴哈馬聯邦",
    "New Caledonia": "新喀里多尼亞",
    "Trinidad and Tobago": "特立尼達和多巴哥共和國",
    "Costa Rica": "哥斯大黎加共和國",
    "Uruguay": "烏拉圭東岸共和國",
    "Belarus": "白俄羅斯共和國",
    "Panama": "巴拿馬共和國",
    "Malaysia": "馬來西亞",
    "Serbia": "塞爾維亞共和國",
    "Albania": "阿爾巴尼亞共和國",
    "Grenada": "格林納達",
    "Bulgaria": "保加利亞共和國",
    "Barbados": "巴巴多斯",
    "Antigua and Barbuda": "安提瓜和巴布達",
    "Seychelles": "塞舌爾共和國",
    "Sri Lanka": "斯里蘭卡民主社會主義共和國",
    "Bosnia and Herzegovina": "波士尼亞和黑塞哥維那",
    "Venezuela": "委內瑞拉玻利瓦爾共和國",
    "Saint Kitts and Nevis": "聖克里斯多福及尼維斯聯邦",
    "Montenegro": "黑山",
    "Iran": "伊朗伊斯蘭共和國",
    "Ukraine": "烏克蘭",
    "Kazakhstan": "哈薩克斯坦共和國",
    "North Macedonia": "北馬其頓共和國",
    "China": "中國",
    "Georgia": "喬治亞",
    "Palau": "帕勞共和國",
    "Moldova": "摩爾多瓦共和國",
    "Mauritius": "毛里求斯共和國",
    "Cuba": "古巴共和國",
    "Thailand": "泰王國",
    "Peru": "秘魯共和國",
    "Suriname": "蘇里南共和國",
    "Armenia": "亞美尼亞共和國",
    "Mexico": "墨西哥合眾國",
    "Brazil": "巴西聯邦共和國",
    "Colombia": "哥倫比亞共和國",
    "Saint Vincent and the Grenadines": "聖文森特和格林納丁斯",
    "Maldives": "馬爾代夫共和國",
    "Azerbaijan": "阿塞拜疆共和國",
    "Algeria": "阿爾及利亞人民民主共和國",
    "Turkmenistan": "土庫曼斯坦",
    "Jordan": "約旦哈希姆王國",
    "Tonga": "湯加王國",
    "Lebanon": "黎巴嫩共和國",
    "Fiji": "斐濟共和國",
    "Ecuador": "厄瓜多爾共和國",
    "Dominican Republic": "多明尼加共和國",
    "Mongolia": "蒙古",
    "Tunisia": "突尼斯共和國",
    "Egypt": "阿拉伯埃及共和國",
    "Uzbekistan": "烏茲別克斯坦共和國",
    "Dominica": "多米尼克",
    "Libya": "利比亞國",
    "Paraguay": "巴拉圭共和國",
    "Palestine": "巴勒斯坦國",
    "Saint Lucia": "聖盧西亞",
    "Guyana": "圭亞那共和國",
    "South Africa": "南非共和國",
    "Jamaica": "牙買加",
    "Samoa": "薩摩亞獨立國",
    "Gabon": "加蓬共和國",
    "Indonesia": "印度尼西亞共和國",
    "Vietnam": "越南社會主義共和國",
    "Philippines": "菲律賓共和國",
    "Botswana": "博茨瓦納共和國",
    "Kyrgyzstan": "吉爾吉斯斯坦共和國",
    "Bolivia": "多民族玻利維亞國",
    "Iraq": "伊拉克共和國",
    "Tajikistan": "塔吉克斯坦共和國",
    "Morocco": "摩洛哥王國",
    "Belize": "伯利茲",
    "El Salvador": "薩爾瓦多共和國",
    "Bhutan": "不丹王國",
    "Cape Verde": "佛得角共和國",
    "Bangladesh": "孟加拉人民共和國",
    "Tuvalu": "圖瓦盧",
    "Marshall Islands": "馬紹爾群島共和國",
    "India": "印度共和國",
    "Ghana": "加納共和國",
    "Nauru": "瑙魯共和國",
    "Micronesia": "密克羅尼西亞聯邦",
    "Guatemala": "危地馬拉共和國",
    "Kiribati": "吉里巴斯共和國",
    "Honduras": "洪都拉斯共和國",
    "North Korea": "朝鮮人民民主共和國",
    "Namibia": "納米比亞共和國",
    "Laos": "老撾人民民主共和國",
    "Vanuatu": "瓦努阿圖共和國",
    "Timor-Leste": "東帝汶民主共和國",
    "Nepal": "尼泊爾聯邦民主共和國",
    "Kenya": "肯亞共和國",
    "Eswatini": "史瓦濟蘭王國",
    "Equatorial Guinea": "赤道幾內亞共和國",
    "Cambodia": "柬埔寨王國",
    "Angola": "安哥拉共和國",
    "Myanmar": "緬甸聯邦共和國",
    "Syria": "敘利亞阿拉伯共和國",
    "Cameroon": "喀麥隆共和國",
    "Zimbabwe": "津巴布韋共和國",
    "Zambia": "贊比亞共和國",
    "Solomon Islands": "所羅門群島",
    "Papua New Guinea": "巴布亞新幾內亞",
    "Mozambique": "莫桑比克共和國",
    "Comoros": "科摩羅聯盟",
    "Ivory Coast": "科特迪瓦共和國",
    "Tanzania": "坦桑尼亞聯合共和國",
    "Benin": "貝寧共和國",
    "Pakistan": "巴基斯坦伊斯蘭共和國",
    "Togo": "多哥共和國",
    "Haiti": "海地共和國",
    "Nigeria": "奈及利亞聯邦共和國",
    "Rwanda": "盧旺達共和國",
    "Uganda": "烏干達共和國",
    "Lesotho": "萊索托王國",
    "Senegal": "塞內加爾共和國",
    "Djibouti": "吉布堤共和國",
    "Sudan": "蘇丹共和國",
    "Madagascar": "馬達加斯加共和國",
    "Gambia": "岡比亞共和國",
    "Ethiopia": "埃塞俄比亞聯邦民主共和國",
    "Eritrea": "厄立特里亞",
    "Guinea-Bissau": "幾內亞比紹共和國",
    "Liberia": "利比里亞共和國",
    "DR Congo": "剛果民主共和國",
    "Afghanistan": "阿富汗伊斯蘭共和國",
    "Sierra Leone": "塞拉利昂共和國",
    "Guinea": "幾內亞共和國",
    "Yemen": "也門共和國",
    "Burkina Faso": "布基納法索",
    "Mali": "馬里共和國",
    "Burundi": "布隆迪共和國",
    "Niger": "尼日爾共和國",
    "Central African Republic": "中非共和國",
    "Chad": "乍得共和國",
    "South Sudan": "南蘇丹共和國",
    "Somalia": "索馬里共和國",
    "South Georgia": "南喬治亞島和南桑威奇群島",
    "Wallis and Futuna": "瓦利斯和富圖納群島",
    "Pitcairn Islands": "皮特凱恩群島",
    "Caribbean Netherlands": "荷蘭加勒比區",
    "Northern Mariana Islands": "北馬里亞納群島",
    "Saint Barthélemy": "聖巴泰勒米集體",
    "Guernsey": "根西島",
    "Svalbard and Jan Mayen": "斯瓦爾巴特",
    "Faroe Islands": "法羅群島",
    "Aruba": "阿魯巴",
    "Cook Islands": "庫克群島",
    "Christmas Island": "聖誕島",
    "Tokelau": "托克勞",
    "Réunion": "留尼旺島",
    "Montserrat": "蒙特塞拉特",
    "Antarctica": "南極洲",
    "Monaco": "摩納哥公國",
    "Mayotte": "馬約特",
    "Norfolk Island": "諾福克島",
    "Bouvet Island": "布維島",
    "Isle of Man": "馬恩島",
    "Greenland": "格陵蘭",
    "French Southern and Antarctic Lands": "法國南部和南極土地",
    "São Tomé and Príncipe": "聖多美和普林西比民主共和國",
    "Malawi": "馬拉威共和國",
    "Saint Pierre and Miquelon": "聖皮埃爾和密克隆",
    "San Marino": "聖馬力諾共和國",
    "Sint Maarten": "聖馬丁島",
    "Turks and Caicos Islands": "特克斯和凱科斯群島",
    "Cocos (Keeling) Islands": "科科斯",
    "Western Sahara": "阿拉伯撒哈拉民主共和國",
    "French Polynesia": "法屬波利尼西亞",
    "Guadeloupe": "瓜德羅普島",
    "Gibraltar": "直布羅陀",
    "Saint Helena, Ascension and Tristan da Cunha": "聖赫勒拿、阿森松和特里斯坦-達庫尼亞",
    "British Virgin Islands": "英屬維爾京群島",
    "Niue": "紐埃",
    "Heard Island and McDonald Islands": "赫德島和麥當勞群島",
    "Vatican City": "梵蒂岡城國",
    "Curaçao": "庫拉索",
    "French Guiana": "法屬圭亞那",
    "Åland Islands": "奧蘭群島",
    "United States Minor Outlying Islands": "美國本土外小島嶼",
    "Falkland Islands": "福克蘭群島",
    "Jersey": "澤西島",
    "Bermuda": "百慕大",
    "British Indian Ocean Territory": "英屬印度洋領地",
    "Martinique": "馬提尼克",
    "Kosovo": "科索沃共和國",
    "Cayman Islands": "開曼群島",
    "Saint Martin": "聖馬丁",
    "American Samoa": "美屬薩摩亞",
    "Republic of the Congo": "剛果共和國",
    "Nicaragua": "尼加拉瓜共和國",
    "Anguilla": "安圭拉"
  };

// 導出變量
window.HDI_DATA = HDI_DATA;
window.zhNames = zhNames;

// 更新 getLocalizedName 函數
function getLocalizedName(country) {
  const name = zhNames[country.name.common];
  if (name) {
    return `${name}（${country.name.common}）`;
  }
  return `${country.translations.zho?.official || country.name.common}（${country.name.common}）`;
} 
