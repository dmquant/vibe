---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "行业研究"
content_error: ""
---

# QUBT NeuraWave: Performance-per-Watt and Data-Center Rack Integration View

Kind: **daily**
Analyst: **TMT Analyst**

## Links

- Report type: [[daily]]
- Analyst: [[TMT Analyst]]
- Analyst level: [[行业研究]]

# QUBT NeuraWave: Performance-per-Watt and Data-Center Rack Integration View

**Date anchor: 2026-05-12.** All “today/current” references in this handoff are resolved against the local shell date `2026-05-12`.

## Prioritized Conclusions

1. **NeuraWave cannot be fairly compared with Hailo, Jetson, Coral, NVIDIA L4 and similar edge accelerators on TOPS/W.** QCI discloses `36 W`, `PCIe 3.0 x4`, `2.5 GB/s`, `1.25 GSps` ADC/DAC, `10,000` reservoir nodes, and a Python API; it does not disclose TOPS, INT8/FP16/FP8 precision, standard model throughput, accuracy, p99 latency, or MLPerf results. From disclosed data, we can only derive `0.069 GB/s/W` of PCIe throughput per watt, `34.7 MSps/W` of ADC sampling per watt, and `278 nodes/W`; these are not standard neural-network inference efficiency metrics.[^1]

2. **On manufacturer peak TOPS/W disclosures, NeuraWave has no verifiable advantage today.** Existing edge/light data-center options publish computable TOPS/W: Hailo-8 is `26 TOPS / 2.5 W = 10.4 TOPS/W`; Google Coral Edge TPU is `4 TOPS / 2 W = 2 TOPS/W`; Jetson AGX Orin is `275 TOPS / 60 W = 4.6 TOPS/W` using max power; NVIDIA L4 is `485 sparse INT8 TOPS / 72 W = 6.7 sparse TOPS/W`, with non-sparse roughly half at `3.4 TOPS/W`; Axelera Metis claims `214 TOPS / 4-8 W = 26.8-53.5 TOPS/W`. These figures are not perfectly apples-to-apples either, but they at least provide neural-network peak metrics that can be calculated.[^3][^4][^5][^6][^7]

3. **NeuraWave looks more like a low-power real-time signal/time-series reservoir-computing card than a general GPU/NPU replacement.** QCI’s listed applications are signal prediction, time-series classification, and medical diagnostic signal analysis; the 2026 launch release adds anomaly detection, telecom, robotics, healthcare and other “edge intelligence” use cases. That differs materially from mainstream CNN/Vision Transformer/LLM accelerator workloads, so customer and investment diligence should treat it as a specialized signal-processing appliance, not a data-center AI accelerator.[^1][^2]

4. **The real barriers to rack integration are not the `36 W` power draw; they are mechanical fit, software stack, operability, standard benchmarks, and supply qualification.** NeuraWave’s `390 mm x 130 mm x 55.5 mm`, `1.87 kg`, `3-slot PCIe` form factor is poorly matched to high-density 1U/2U mainstream servers. A public copy of the PCIe CEM specification references `312 mm` full-length cards and recommends add-in cards be designed within `241.3 mm`; NeuraWave’s `390 mm` length points toward custom chassis, retention, airflow, and cabling work.[^1][^8]

## Performance-per-Watt Comparison

| Device | Published performance basis | Published power basis | Rough efficiency | Comparability risk |
|---|---:|---:|---:|---|
| QCI NeuraWave | `2.5 GB/s` PCIe throughput; `1.25 GSps` ADC/DAC; `10,000` nodes | `36 W` | `0.069 GB/s/W`; `34.7 MSps/W`; `278 nodes/W` | No TOPS, no standard model throughput, no accuracy; cannot be directly compared with TOPS/W |
| Hailo-8 | `26 TOPS` | `2.5 W` typical | `10.4 TOPS/W` | Edge vision/NN dataflow architecture; uses vendor typical power |
| Google Coral Edge TPU | `4 TOPS` | `2 W` | `2.0 TOPS/W` | TensorFlow Lite/INT8 basis with model constraints |
| NVIDIA Jetson AGX Orin | `275 TOPS` | `15-60 W` | `4.6 TOPS/W`, using 60 W | Module-level peak; real throughput varies by nvpmodel setting |
| NVIDIA L4 | `485 TOPS` sparse INT8; roughly `242.5 TOPS` non-sparse | `72 W` TDP | `6.7 sparse TOPS/W`; `3.4 dense TOPS/W` | Data-center/edge PCIe card; sparse and non-sparse must be separated |
| Axelera Metis | `214 TOPS` | `4-8 W` average | `26.8-53.5 TOPS/W` | Vendor peak metric; model coverage and SDK maturity still matter |

**Interpretation:** NeuraWave may have value in continuous streaming signals, microsecond closed-loop latency, low batch sizes, and low host round-trips, but the public record is not enough to prove better performance-per-watt in general edge AI inference. MLCommons measures edge inference power as system-level wall AC power tied to a specific benchmark; QCI has not published a comparable result.[^8]

## Actual Barriers to Data-Center Rack Integration

### 1. Workload Fit and Accuracy Proof

NeuraWave is photonic reservoir computing, not a transparent acceleration path for CUDA/ONNX models. Customers need side-by-side accuracy, drift, retraining cost, p50/p99 latency, and wall-power on the same dataset against CPU/GPU/NPU baselines. If evidence remains limited to signal prediction or anomaly-detection demos, it will struggle to enter general-purpose data-center inference racks.

### 2. Software Stack and MLOps Interfaces

QCI currently publishes a Python API plus compatibility with NumPy, PyTorch for data prep, and standard scientific Python tools. By comparison, Hailo-8 discloses x86/ARM, Linux/Windows, TensorFlow, TensorFlow Lite, Keras, PyTorch, ONNX, and a dataflow compiler; NVIDIA L4 sits inside NVIDIA AI Enterprise, certified systems, CUDA/TensorRT/Triton. For rack deployment, NeuraWave needs at least: ONNX or a clear compiler frontend, container images, a Kubernetes device plugin, Prometheus/DCGM-like telemetry, driver lifecycle management, firmware updates, error recovery, multi-card scheduling, and security isolation.[^1][^3][^6]

### 3. Mechanics, Density, and Cooling

`36 W` is low and slot power is not the main issue. The issue is `390 mm` length, `3-slot` width, and `1.87 kg` weight. That reduces card count per 1U/2U server and creates card-retainer, riser, airflow, shipping shock, and serviceability work. NVIDIA L4 is a useful contrast: `1-slot low-profile PCIe`, `72 W`, and partner/NVIDIA-Certified Systems support for `1-8 GPUs`, which is a much easier procurement and validation shape for rack OEMs.[^1][^6][^8]

### 4. I/O and System Topology

NeuraWave uses `PCIe 3.0 x4`, with QCI quoting `2.5 GB/s over PCIe`; NVIDIA L4 uses `PCIe Gen4 x16 64 GB/s`. For local sensor-stream processing, `2.5 GB/s` may be adequate. For data-center batch inference, multi-tenant serving, multi-model services, or frequent host-device transfers, that I/O profile can become a throughput and queueing-latency bottleneck.[^1][^6]

### 5. Commercialization and Supply Qualification

QCI said on April 23 that NeuraWave is “deployment-ready,” is being manufactured, and is available for customer orders. But its 2026 10-Q also flags product qualification, hardware and system testing, suppliers, third-party manufacturing, Fab 1/Fab 2 scaling, and LSI/NuCrypt integration as factors that can affect deliveries, costs, and gross margins. For data-center customers, that means additional diligence on MTBF, RMA, long-term supply, EOL policy, EMI/safety certification, BMC/Redfish visibility, field-service process, pricing, and lead times.[^2][^9]

## Recommended Framing for the Requesting Analyst

- **Near-term conclusion:** Do not describe QUBT NeuraWave as having already beaten edge NPUs/GPUs on performance-per-watt. The accurate statement is that QCI has disclosed a `36 W`, low-latency, photonic PCIe card for time-series/signal processing, but has not disclosed standard inference metrics that allow comparison with Hailo/Jetson/Coral/L4.
- **Positive tracking point:** If QCI can publish customer data showing equal accuracy, microsecond-level latency, and materially lower wall-power on telecom/industrial/medical waveforms, NeuraWave could have a place in specialized edge appliances.
- **Core risk:** Rack integration is a productization problem, not a power problem. The `390 mm`, `3-slot` form factor, non-standard software stack, and lack of public benchmarks are likely to lengthen OEM qualification cycles.

## Follow-up Checklist

1. Ask QCI for three-way benchmark data on the same task: NeuraWave, CPU/GPU baseline, and Hailo/Jetson/L4 baseline; require accuracy, p50/p99 latency, throughput, system wall-power, host CPU utilization, and batch settings.
2. Ask for the NeuraWave model compilation/training flow: whether ONNX is supported, how PyTorch maps to hardware, whether weights can be updated online, and how simulation-to-hardware mismatch is calibrated.
3. Ask for the rack integration package: supported server SKUs, risers, air shrouds, retainers, PCIe cabling, BMC/Redfish/telemetry, drivers, containers, and Kubernetes device plugin.
4. Ask for reliability and supply details: MTBF, temperature range, EMI/safety certifications, RMA terms, production capacity, key optoelectronic component suppliers, and 12-24 month lead times.

## Key Sources

[^1]: QCI, “NeuraWave” product page and spec sheet: `36 W`, `PCIe 3.0 x4`, `2.5 GB/s`, `1.25 GSps` ADC/DAC, `10,000` nodes, `390 mm x 130 mm x 55.5 mm`, `1.87 kg`, Python API. https://quantumcomputinginc.com/products/commercial-products/neurawave and https://assets.ctfassets.net/i1dyhzbyi8ad/65BxQdufiefHrcTCFMK0T7/b0a0374dbb6001556eecbf3ab0064b3e/nuerawave_sheet_v9.pdf
[^2]: QCI, “Quantum Computing Inc. Announces Deployment-Ready NeuraWave...”, 2026-04-23. https://quantumcomputinginc.com/news/press-releases/2026/quantum-computing-inc.-announces-deployment-ready-neurawave-a-photonic-computing-platform-for-real-time-ai-inference-at-the-edge
[^3]: Hailo-8 Product Brief: `26 TOPS`, typical power `2.5 W`, x86/ARM, Linux/Windows, TensorFlow/TFLite/Keras/PyTorch/ONNX. https://hailo.ai/wp-content/uploads/2023/10/hailo-8-product-brief-rev3.26.pdf
[^4]: Google Coral Edge TPU FAQ: `4 TOPS`, `2 W`, `2 TOPS/W`. https://www.coral.ai/docs/edgetpu/faq/
[^5]: NVIDIA Jetson Orin: AGX Orin `275 TOPS`, `15-60 W`; Orin NX `157 TOPS`, `10-40 W`; Orin Nano `67 TOPS`, `7-25 W`. https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-orin/
[^6]: NVIDIA L4: `485 TOPS` sparse INT8, `72 W` TDP, `1-slot low-profile PCIe`, `PCIe Gen4 x16 64 GB/s`, partner/NVIDIA-Certified Systems support for `1-8 GPUs`; non-sparse specifications are half of starred values in the table. https://www.nvidia.com/en-us/data-center/l4/
[^7]: Axelera AI AIPU portfolio: Metis `214 TOPS`, `4-8 W` average power, M.2/PCIe form factors. https://axelera.ai/ai-accelerators/aipu
[^8]: MLCommons MLPerf Inference: Edge: edge inference benchmarks measure how fast systems process inputs and produce results; power columns are full-system wall AC power tied to a specific benchmark. Also see a public copy of PCI Express Card Electromechanical Specification Rev. 5.1 for `312 mm` full-length and the recommended `241.30 mm` add-in-card design length. https://mlcommons.org/benchmarks/inference-edge/ and https://studylib.net/doc/28475669/pci-express-card-electromechanical-specification-revision...
[^9]: QUBT 2026 Q1 10-Q summary: execution risks around product/system testing, qualification, suppliers, third-party manufacturing, Fab scaling, and LSI/NuCrypt integration. https://www.stocktitan.net/sec-filings/QUBT/10-q-quantum-computing-inc-quarterly-earnings-report-2a28426c4554.html
