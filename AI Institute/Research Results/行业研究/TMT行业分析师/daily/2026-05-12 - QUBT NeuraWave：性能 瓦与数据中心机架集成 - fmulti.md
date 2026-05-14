---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "行业研究"
content_error: ""
---

# QUBT NeuraWave：性能/瓦与数据中心机架集成判断

Kind: **daily**
Analyst: **TMT Analyst**

## Links

- Report type: [[daily]]
- Analyst: [[TMT Analyst]]
- Analyst level: [[行业研究]]

# QUBT NeuraWave：性能/瓦与数据中心机架集成判断

**日期锚点：2026-05-12。** 本结论把“今天/当前”均按本地 shell 日期 `2026-05-12` 处理。

## 优先结论

1. **不能把 NeuraWave 与 Hailo、Jetson、Coral、NVIDIA L4 等边缘加速器做严格 TOPS/W 对比。** QCI 公开披露的是 `36 W`、`PCIe 3.0 x4`、`2.5 GB/s`、`1.25 GSps` ADC/DAC、`10,000` reservoir nodes、Python API；没有披露 TOPS、INT8/FP16/FP8 精度、标准模型吞吐、准确率、p99 延迟或 MLPerf 结果。按已披露数据只能算出 `0.069 GB/s/W` 的 PCIe 吞吐/瓦、`34.7 MSps/W` 的 ADC 采样/瓦、`278 nodes/W`，这些不是神经网络推理行业通用性能指标。[^1]

2. **若用厂商峰值 TOPS/W 粗看，NeuraWave 目前没有可验证优势。** 公开边缘/轻量数据中心方案已经有明确 TOPS/W：Hailo-8 为 `26 TOPS / 2.5 W = 10.4 TOPS/W`；Google Coral Edge TPU 为 `4 TOPS / 2 W = 2 TOPS/W`；Jetson AGX Orin 以 `275 TOPS / 60 W = 4.6 TOPS/W` 计；NVIDIA L4 为 `485 sparse INT8 TOPS / 72 W = 6.7 sparse TOPS/W`，非稀疏约减半至 `3.4 TOPS/W`；Axelera Metis 宣称 `214 TOPS / 4-8 W = 26.8-53.5 TOPS/W`。这些数字也不是完全同口径，但至少披露了可计算的神经网络峰值指标。[^3][^4][^5][^6][^7]

3. **NeuraWave 更像“低功耗实时信号/时间序列 reservoir computing 卡”，不是 GPU/NPU 的通用替代品。** QCI 自己列的应用是 signal prediction、time-series classification、medical diagnostic signal analysis；2026 年发布稿扩展到 anomaly detection、telecom、robotics、healthcare 等“edge intelligence”。这与 CNN/Vision Transformer/LLM 推理卡的主流负载不同，因此投资和客户验证应按“特定信号处理 appliance”而不是“数据中心 AI 加速器”定价。[^1][^2]

4. **数据中心机架集成的真实门槛不是 `36 W` 功耗，而是机械形态、软件栈、可运维性、标准 benchmark 与供给资格认证。** NeuraWave 的 `390 mm x 130 mm x 55.5 mm`、`1.87 kg`、`3-slot PCIe` 形态，明显不适合高密度 1U/2U 主流服务器；PCIe CEM 公开规范副本提到 full-length 为 `312 mm`，且建议 add-in card 设计在 `241.3 mm` 以内，NeuraWave 的 `390 mm` 更像需要定制机箱、支架、导风和线缆空间的系统级集成。[^1][^8]

## 性能/瓦对比表

| 设备 | 公开性能口径 | 公开功耗口径 | 粗算性能/瓦 | 口径风险 |
|---|---:|---:|---:|---|
| QCI NeuraWave | `2.5 GB/s` PCIe throughput；`1.25 GSps` ADC/DAC；`10,000` nodes | `36 W` | `0.069 GB/s/W`；`34.7 MSps/W`；`278 nodes/W` | 无 TOPS、无标准模型吞吐、无准确率；不能与 TOPS/W 直接比较 |
| Hailo-8 | `26 TOPS` | `2.5 W` typical | `10.4 TOPS/W` | 边缘视觉/NN 数据流架构；取厂商典型功耗 |
| Google Coral Edge TPU | `4 TOPS` | `2 W` | `2.0 TOPS/W` | TensorFlow Lite/INT8 口径，模型受限 |
| NVIDIA Jetson AGX Orin | `275 TOPS` | `15-60 W` | `4.6 TOPS/W`，按 60 W 计 | 模块级峰值；不同 nvpmodel 下实际吞吐不同 |
| NVIDIA L4 | `485 TOPS` sparse INT8；非稀疏约 `242.5 TOPS` | `72 W` TDP | `6.7 sparse TOPS/W`；`3.4 dense TOPS/W` | 数据中心/边缘 PCIe 卡；稀疏与非稀疏需分开看 |
| Axelera Metis | `214 TOPS` | `4-8 W` avg | `26.8-53.5 TOPS/W` | 厂商峰值，需看模型覆盖和 SDK 成熟度 |

**解读：** NeuraWave 可能在“连续流式信号、微秒级闭环、低 batch、低 host 往返”的窄场景有价值，但目前公开资料不足以证明其在通用 edge AI 推理的 performance-per-watt 上胜出。MLCommons 对 edge inference 的功耗口径是伴随具体 benchmark、在墙端测得的整机平均 AC 功耗；QCI 还没有类似公开结果。[^8]

## 数据中心机架集成的实际门槛

### 1. 工作负载与准确率证明

NeuraWave 是 photonic reservoir computing，不是 CUDA/ONNX 模型的透明加速路径。客户需要看到同一数据集上相对 CPU/GPU/NPU 的准确率、漂移、重训练成本、p50/p99 延迟和 wall-power。若只是 signal prediction/anomaly detection 的 demo，它很难进入通用数据中心推理 rack。

### 2. 软件栈与 MLOps 接口

QCI 当前公开的是 Python API、NumPy、PyTorch for data prep 和科学 Python 工具兼容。相比之下，Hailo-8 披露支持 x86/ARM、Linux/Windows、TensorFlow、TensorFlow Lite、Keras、PyTorch、ONNX 以及 dataflow compiler；NVIDIA L4 绑定 NVIDIA AI Enterprise、certified systems、CUDA/TensorRT/Triton 生态。NeuraWave 若要进入 rack，需要至少补齐：ONNX 或明确编译前端、容器镜像、Kubernetes device plugin、Prometheus/DCGM 类遥测、driver 生命周期、固件升级、错误恢复、多卡调度和安全隔离。[^1][^3][^6]

### 3. 机械、密度与散热

`36 W` 本身不高，PCIe 槽供电也不是核心问题；核心问题是 `390 mm` 长、`3-slot`、`1.87 kg`。这会降低每台 1U/2U 服务器可插卡数量，并引入 card retainer、riser、导风、运输震动和可维护性问题。NVIDIA L4 的对照是 `1-slot low-profile PCIe`、`72 W`、partner/NVIDIA-Certified Systems 可支持 `1-8 GPUs`，这是 rack OEM 更容易采购和验证的形态。[^1][^6][^8]

### 4. I/O 与系统拓扑

NeuraWave 是 `PCIe 3.0 x4`，QCI 标称 `2.5 GB/s over PCIe`；NVIDIA L4 是 `PCIe Gen4 x16 64 GB/s`。如果 NeuraWave 做本地传感器流式处理，`2.5 GB/s` 可能够用；如果要进数据中心做批量推理、多租户、多模型服务或频繁 host-device 交换，这个 I/O 口径会成为吞吐和排队延迟瓶颈。[^1][^6]

### 5. 商业化与供给资格认证

QCI 4 月 23 日称 NeuraWave “deployment-ready”、正在制造并可接受客户订单，但其 2026 年 10-Q 同时提示：产品资格、硬件/系统测试、供应商、第三方制造、Fab 1/Fab 2 扩产以及 LSI/NuCrypt 整合都会影响交付、成本和毛利。对数据中心客户而言，这意味着还要验证 MTBF、RMA、长期供货、EOL 策略、EMI/安全认证、BMC/Redfish 可见性、现场服务流程和价格/交期。[^2][^9]

## 对请求方的建议判断

- **短线结论：** 不应把 QUBT NeuraWave 描述为已经在 performance-per-watt 上击败边缘 NPU/GPU。更准确的表述是：QCI 披露了一张 `36 W`、低延迟、面向时间序列/信号处理的 photonic PCIe 卡，但缺少能与 Hailo/Jetson/Coral/L4 对比的标准推理指标。
- **可投资/可跟踪的正向点：** 若 QCI 能拿出真实客户数据，证明在 telecom/industrial/medical waveform 上以同等准确率实现微秒级延迟和显著低 wall-power，NeuraWave 可以在专用 edge appliance 中找到位置。
- **核心风险：** rack integration 的难点在于产品化，不在物理功耗。`390 mm`、`3-slot`、非标准软件栈和无公开 benchmark 会显著拉长 OEM 资格认证周期。

## 后续核查清单

1. 向 QCI 要求同一任务的三组数据：NeuraWave、CPU/GPU baseline、Hailo/Jetson/L4 baseline；必须包含准确率、p50/p99 延迟、吞吐、整机 wall-power、host CPU 占用和 batch 设置。
2. 要求披露 NeuraWave 的模型编译/训练流程：是否支持 ONNX，PyTorch 到硬件映射如何做，权重是否可在线更新，模拟-实机偏差如何校准。
3. 要求披露 rack 集成包：支持的服务器 SKU、riser、导风罩、retainer、PCIe 线缆、BMC/Redfish/telemetry、driver、容器和 Kubernetes device plugin。
4. 要求披露可靠性与供货：MTBF、温度范围、EMI/安全认证、RMA 条款、量产产能、关键光电器件供应商和 12-24 个月交期。

## 主要来源

[^1]: QCI, “NeuraWave” 产品页和规格表：`36 W`、`PCIe 3.0 x4`、`2.5 GB/s`、`1.25 GSps` ADC/DAC、`10,000` nodes、`390 mm x 130 mm x 55.5 mm`、`1.87 kg`、Python API。https://quantumcomputinginc.com/products/commercial-products/neurawave 和 https://assets.ctfassets.net/i1dyhzbyi8ad/65BxQdufiefHrcTCFMK0T7/b0a0374dbb6001556eecbf3ab0064b3e/nuerawave_sheet_v9.pdf
[^2]: QCI, “Quantum Computing Inc. Announces Deployment-Ready NeuraWave...”, 2026-04-23。https://quantumcomputinginc.com/news/press-releases/2026/quantum-computing-inc.-announces-deployment-ready-neurawave-a-photonic-computing-platform-for-real-time-ai-inference-at-the-edge
[^3]: Hailo-8 Product Brief：`26 TOPS`、typical power `2.5 W`、x86/ARM、Linux/Windows、TensorFlow/TFLite/Keras/PyTorch/ONNX。https://hailo.ai/wp-content/uploads/2023/10/hailo-8-product-brief-rev3.26.pdf
[^4]: Google Coral Edge TPU FAQ：`4 TOPS`、`2 W`、`2 TOPS/W`。https://www.coral.ai/docs/edgetpu/faq/
[^5]: NVIDIA Jetson Orin：AGX Orin `275 TOPS`、`15-60 W`；Orin NX `157 TOPS`、`10-40 W`；Orin Nano `67 TOPS`、`7-25 W`。https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-orin/
[^6]: NVIDIA L4：`485 TOPS` sparse INT8、`72 W` TDP、`1-slot low-profile PCIe`、`PCIe Gen4 x16 64 GB/s`、partner/NVIDIA-Certified Systems `1-8 GPUs`；非稀疏规格为表中带星号数值的一半。https://www.nvidia.com/en-us/data-center/l4/
[^7]: Axelera AI AIPU portfolio：Metis `214 TOPS`、`4-8 W` average power、M.2/PCIe form factors。https://axelera.ai/ai-accelerators/aipu
[^8]: MLCommons MLPerf Inference: Edge：edge inference benchmark 衡量系统处理输入并产出结果的速度，功耗列为伴随 benchmark 的整机墙端 AC 功耗；另参考 PCI Express Card Electromechanical Specification Rev. 5.1 公开副本关于 `312 mm` full-length、建议 `241.30 mm` 的 add-in card 设计长度。https://mlcommons.org/benchmarks/inference-edge/ 和 https://studylib.net/doc/28475669/pci-express-card-electromechanical-specification-revision...
[^9]: QUBT 2026 Q1 10-Q 摘要：产品/系统测试、资格认证、供应商、第三方制造、Fab 扩产、LSI/NuCrypt 整合等执行风险。https://www.stocktitan.net/sec-filings/QUBT/10-q-quantum-computing-inc-quarterly-earnings-report-2a28426c4554.html
