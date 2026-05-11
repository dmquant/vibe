---
source: ai-institute
resource_type: whiteboard-card
card_index: 1
status: completed
analyst_level: "ESG与主题"
---

# AI CapEx 物理化的估值避风港在地面(SMR + 电网 + 液冷 + 先进封装),轨道数据中心只是被高估的尾部期权,不是'唯一'。

Analyst: **Thematic Researcher**
Status: **completed**
Stance: **initial**
Completed: **01/05/2026, 06:05:29**

## Links

- Whiteboard topic: [[The Physicalization of CapEx From Cloud to Orbit]]
- Card topic: [[AI CapEx 物理化的估值避风港在地面(SMR 电网 液冷 先进封装),轨道数据中心只是被高估的尾部期权,不是 唯一 。]]
- Analyst: [[Thematic Researcher]]
- Analyst level: [[ESG与主题]]

## Topic

AI CapEx 物理化的估值避风港在地面(SMR + 电网 + 液冷 + 先进封装),轨道数据中心只是被高估的尾部期权,不是'唯一'。

## Question

Investigate the topic "AI CapEx 物理化的估值避风港在地面(SMR + 电网 + 液冷 + 先进封装),轨道数据中心只是被高估的尾部期权,不是'唯一'。" and make the strongest evidence-based judgment you can.

## Summary

对'轨道数据中心是唯一估值避风港'的命题做压力测试,结论是否定。地面侧三道墙(电力、主权、水/许可)确实真实——PJM 2025/26 容量拍卖出清 269.92 美元/MW-day(约 9 倍于上届),Microsoft–Constellation Three Mile Island 重启 PPA 约 110 美元/MWh,美国并网队列 2.6 TW——但'唯有上天'忽略了轨道在延迟、带宽、散热、辐照与每 MW CapEx(约地面 100 倍)上的硬约束。真正的估值避风港是地面物理化产业链:SMR/核电 PPA、电网与输电(GEV/ETN/PWR)、液冷(VRT)、HBM 与 CoWoS。轨道(RKLB/ASTS/LUNR/IRDM)应作为 3–7% 的风投型期权,而非核心对冲。

## Report

# 第 01 张卡片 — CapEx 的物理化:从云端到轨道

**分析师:** 主题研究员(AI / 量子 / 生物科技 / 太空经济 / Web3)
**议题:** *当地面 AI 算力撞上能源与主权双重高墙,"轨道数据中心"是否成为唯一剩下的估值避风港?*
**立场:** 压力测试(对"唯一"倾向 **否定**,对"物理化是估值新范式"倾向 **支持**)

---

## 1. 核心判断(一句话)

"轨道数据中心"是一个真实存在、但属于 **长尾期权** 性质的方向,**绝非**——也远未成为——AI CapEx 的唯一甚至主要估值避风港。2025–2030 年真正的估值避风港是 **地面物理化产业链**:SMR/核电 PPA、电网与输电设备、液冷/浸没式散热、HBM 内存、以及 CoWoS 先进封装。轨道算力在组合中应作为风险投资型期权占 3–7% 的仓位,而非核心对冲。

## 2. "撞墙"的方向是对的

过去 12 个月里,地面侧的三道约束已经从分析师 PPT 变成了财报里的现金流事实:

| 约束 | 硬数据 | 出处 / 最新读数 |
|---|---|---|
| **电力稀缺** | 美国数据中心负荷预计 2028 年占全美用电 8–12%,2023 年仅约 4% | DOE LBNL、EPRI 2025 更新 |
| **容量电价** | PJM 2025/26 基础容量拍卖出清价 **269.92 美元/MW-day**,约为上届 9 倍 | PJM Interconnection,2024 年 7 月 |
| **主权 PPA 溢价** | Microsoft 与 Constellation 重启 Three Mile Island,签 20 年 PPA,约 110–115 美元/MWh | Constellation (CEG) 公告,2024 年 9 月 |
| **接入排队** | 美国发电与储能并网队列约 **2.6 TW**,中位等待约 5 年 | LBNL *Queued Up 2024* |
| **数据主权** | 欧盟 AI Act 执法(2025 年 8 月)、美国 BIS AI Diffusion 框架(2025 年 1 月)、中国数据本地化 | 多国监管 |
| **水与社区阻力** | xAI Memphis Colossus 燃机许可争议、Loudoun County 提议数据中心暂缓 | 当地公开文件 2024–25 |

这些不是叙事,而是已经反映在 PPA 溢价、容量市场暴涨、以及超大规模厂商签订的核电合同里(MSFT/CEG、GOOG/Kairos、AMZN/Talen)。**这堵墙是真的。**

## 3. "唯有上天"为什么是错的

轨道数据中心(Starcloud 2025 年 11 月的 *Starcloud-1* GPU 在轨演示、Google 2025 年 11 月发布的 **Project Suncatcher** TPU 星座、Lonestar 月球备份、Axiom/NVIDIA 在 ISS 的 H100 测试)讲了一个非常干净的故事:真空散热、24/7 太阳能(1361 W/m² vs 地面平均约 200 W/m²)、不依赖地面电网、不属于任何主权辖区。但每一项主张在 **训练级、规模级** 工作负载上都通不过第一性原理审视:

- **延迟:** 交互式 AI 推理需要 RTT < 100 ms。LEO 端到端 20–50 ms,但星座切换与地面站调度会把尾延迟推到 200 ms 以上。GEO 约 600 ms,从开始就出局。
- **带宽:** 前沿模型训练需要在算力网内做 PB 级 all-reduce。星间光链当前上限约 200 Gbps(Starlink Gen3 级别),星地下行单光学网关亚 Tbps。**根本无法在轨完成 10 万卡级训练同步。**
- **散热:** 真空是 **绝热**,不是制冷。在 300 K 排掉 1 MW 热量需要约 3,000 m² 散热面板。GW 级轨道 DC 意味着平方公里级可展开热结构——目前没人解决。
- **辐照:** 商用 GPU(H100/B200)非抗辐照器件。LEO 单粒子翻转率使无屏蔽 MTBF 仅以月计;加屏蔽质量则发射经济性崩溃。
- **每 MW CapEx:** 即便 Starship 在 2027 年后达到 200–500 美元/kg 入轨,1 MW 在轨机柜全成本约 **10–20 亿美元**,地面同等容量约 1,000–1,500 万美元——**100 倍溢价**。这个数字只在地面"物理上不合法"的场景下才划算(主权数据托管、机密国防、跨辖区受监管推理)。

因此轨道是 **细分赛道**——主权数据冷备、国防 ISR 边缘推理、行星际科学计算、对 Starship 节奏突破的期权——并不是 2030 年前 1–2 万亿美元物理化 CapEx 的主航道。

## 4. 物理化 CapEx 真正的去向(真正的避风港)

| 方向 | 受益标的 | 2024–25 数据点 |
|---|---|---|
| **存量核电基荷** | Constellation (CEG)、Vistra (VST)、Talen (TLN) | 2025 年 CEG 年内涨幅 >100%,主因数据中心 PPA |
| **SMR / 下一代核能** | NuScale (SMR)、Oklo (OKLO)、BWX (BWXT)、Cameco (CCJ) | GOOG–Kairos 500 MW SMR 合作(2024 年 10 月);AMZN–X-energy |
| **电网与输电** | GE Vernova (GEV)、Eaton (ETN)、Siemens Energy、Quanta (PWR) | GEV 变压器订单交期 >2 年;ETN 数据中心收入 +25% |
| **液冷 / 浸没式** | Vertiv (VRT)、Schneider Electric、Submer | VRT 在 2025 年两次上调订单指引 |
| **HBM / 先进封装** | SK 海力士(000660 KS)、Micron (MU)、TSMC CoWoS | HBM3E 售罄至 2026;CoWoS 2025 年底产能翻倍 |
| **数据中心 REIT** | Equinix (EQIX)、Digital Realty (DLR)、Iron Mountain (IRM) | EQIX/DLR 预租已锁定未来 18 个月以上 |
| **燃机过桥** | GE Vernova、三菱 Power | GE Vernova 重型燃机机位售罄至 2028 |

这些是 **有订单、有盈利支撑** 的标的,而非纯叙事。估值避风港在 **这里**,不在轨道上。

## 5. 轨道算力作为组合仓位的合理定价

- **仓位大小:** AI 物理化篮子的 3–7%,定位为风投型期权,而非核心对冲。
- **已上市/临近上市的暴露:** Rocket Lab (RKLB)、AST SpaceMobile (ASTS) 提供轨道通信主干;Intuitive Machines (LUNR) 以及未来可能 SPAC 的 Lonestar/Starcloud 是月球/轨道 DC 纯股;Iridium (IRDM) 提供主权卫星通信。
- **间接受益:** NVIDIA (NVDA) 通吃地面与在轨;SpaceX(未上市,可经 Destiny Tech100 DXYZ 间接持有)是发射端瓶颈,所有轨道 DC 经济性都被它定价。
- **加仓触发条件:** Starship 实现 ≥1 次/月运营节奏且 $/kg < 500 美元,**并且** 至少一个轨道 DC 实现 >100 kW 连续算力在轨运行 >12 个月。两者均不可能在 2027 年前出现。

## 6. 立场与所否定的内容

我 **否定** "唯一剩下的估值避风港"这一表述。该表述把 **叙事稀缺**(地外算力)与 **基本面稀缺**(光纤旁边的 firm baseload 电力)混为一谈。基本面稀缺仍然在地面。

我 **支持** 背后的范式判断:AI 估值锚点已从软件/SaaS 倍数迁移到 **实物资产倍数**——电力、铜、变压器、冷却水、封装产能。这个范式迁移才是耐用的洞见;轨道楔子是其中最上镜、却最不承重的尾部。

## 7. 留给下一张卡片的关键问题

1. SMR/核电 PPA 这一波是否真的能 **填平** 2027–2030 超大规模厂商的电力缺口,还是最终只是把电网/输电存量(GEV、ETN、PWR)重新定价,SMR 实际落地滑到 2030 年代?
2. 超大规模厂商在触发需求破坏(限制模型规模、推理下沉到端侧)之前,愿意为电力支付的边际 $/MWh 上限是多少?
3. 2030 年之前,除了美/英/欧/日防务部门外,轨道算力是否存在任何具有公用事业级支付能力的客户?

问题 1 是杠杆最高的下一步,正落在 utilities-analyst 的能力圈中。

---

## 引用 / 数据锚点

- DOE 劳伦斯伯克利国家实验室,*2024 年美国数据中心能源使用报告*(2024 年 12 月)
- EPRI,*Powering Intelligence*(2024 年 5 月,2025 年更新)
- PJM Interconnection,2025/26 基础容量拍卖结果(2024 年 7 月 30 日)
- LBNL,*Queued Up 2024*(2024 年 4 月)
- Constellation Energy 8-K,Three Mile Island 1 号机组 PPA 披露(2024 年 9 月 20 日)
- Google 博客,*Project Suncatcher*(2025 年 11 月)
- Starcloud / Lumen Orbit,*Starcloud-1* 任务更新(2025 年 11 月)
- NVIDIA × Axiom Space,ISS H100 在轨演示(2024–25)
- 美国 BIS,AI Diffusion 临时最终规则(2025 年 1 月 13 日)
- TSMC,CoWoS 产能指引(2025 年二季度业绩说明会)

## Follow-up

- Analyst: utilities-analyst
- Topic: SMR 与核电 PPA 浪潮:能否真正填平 2027–2030 超大规模算力的电力缺口
- Question: 在排除轨道方案后,SMR/核电 PPA 这一波是否真的能填平 2027–2030 超大规模厂商的电力缺口,还是最终主要把电网/输电存量(GEV、ETN、PWR)重新定价,而 SMR 实际投运滑到 2030 年代?
