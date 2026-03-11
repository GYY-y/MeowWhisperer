# MeowWhisperer（猫语观察器）

一款移动端优先的纯前端 Web 工具：通过多选输入猫咪行为信号，基于本地规则引擎输出情绪解读、拟人化独白与可执行建议。

## 特性

- 无需下载、无需登录、无云端 AI 调用
- 纯规则引擎推理，结果可解释（含命中明细）
- 初学者 / 专家模式切换
- 维度权重调参（本地保存）
- 观察时间线（本地保存，最多 20 条）
- 历史筛选（关键词 / 风险 / 情绪 / 日期）
- JSON/CSV 导出与 JSON 导入
- 配置文件加载失败时自动回退内置规则

## 技术栈

- 原生 HTML + CSS + JavaScript（无构建工具）
- 浏览器 `localStorage` 持久化

## 快速开始

> 注意：项目会通过 `fetch("./config/rule-engine.json")` 读取配置。请用本地 HTTP 服务启动，不要直接双击 `index.html`。

1. 进入项目目录：

```bash
cd /Users/edy/Downloads/workspace/people/web/MeowWhisperer
```

2. 启动本地静态服务（示例端口 `4173`）：

```bash
python3 -m http.server 4173
```

3. 浏览器访问：

```text
http://localhost:4173
```

## 使用说明

1. 在各维度勾选你观察到的信号（耳朵、尾巴、眼部、姿态、声音、场景、健康）。
2. 点击「生成猫咪解读」。
3. 查看：
- 主要情绪（含匹配度）
- 猫咪内心独白
- 即时行为建议
- 周边问题解决方案
- 次要可能状态
- 规则命中解释
4. 历史会自动写入本地时间线，可筛选、导入、导出。

## 目录结构

```text
MeowWhisperer/
├── index.html                 # 页面结构
├── styles.css                 # 样式
├── app.js                     # 规则匹配、渲染、历史管理
├── config/
│   └── rule-engine.json       # 外部规则配置
├── docs/
│   └── 需求文档-猫语观察器.md  # 产品需求文档
└── favicon.svg
```

## 配置说明

规则配置文件：`config/rule-engine.json`

核心字段：

- `weights`：维度权重（1-5）
- `options`：每个维度的可选项
- `rules[]`：规则数组，单条规则包含 `id`、`emotion`、`monologue`、`match`、`advice`、`surrounding`、`risk`（`low` / `medium` / `high`）

当配置加载失败时，应用会自动使用 `app.js` 内置的 `FALLBACK_CONFIG`。

## 本地存储

- `meow-whisperer.history.v1`：历史记录
- `meow-whisperer.weights.v1`：权重配置
- `meow-whisperer.option-mode.v1`：观察模式

## 产品边界

- 本工具用于行为观察与风险提示，不替代兽医诊断。
- 若出现持续食欲下降、明显跛行、急性呕吐腹泻、异常叫声持续等情况，请及时线下就医。
