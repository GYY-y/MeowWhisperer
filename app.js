const FALLBACK_CONFIG = {
  "weights": {
    "ears": 2,
    "tail": 2,
    "eyes": 2,
    "posture": 2,
    "voice": 1,
    "scene": 1,
    "health": 3
  },
  "options": {
    "ears": [
      "竖起朝前",
      "轻微前倾",
      "向侧后方转",
      "完全贴平",
      "一边高一边低",
      "单耳来回转动",
      "耳尖轻颤",
      "频繁抖耳",
      "持续后压",
      "固定不动"
    ],
    "tail": [
      "高举末端微弯",
      "尾尖轻颤",
      "快速甩动",
      "膨大炸毛",
      "轻绕身体",
      "平直下垂",
      "夹在两腿间",
      "拍打地面",
      "低位左右摆",
      "直立微抖"
    ],
    "eyes": [
      "缓慢眨眼",
      "瞳孔放大",
      "瞳孔细长",
      "目光闪躲",
      "持续盯视",
      "半眯放松",
      "频繁眨眼",
      "第三眼睑露出",
      "眼神警觉扫视",
      "眯眼回避"
    ],
    "posture": [
      "侧躺翻肚",
      "弓背夹尾",
      "压低身体",
      "蹭人转圈",
      "僵直不动",
      "躲藏不出",
      "高处观察",
      "来回踱步",
      "趴伏收爪",
      "伸展打滚"
    ],
    "voice": [
      "短促喵",
      "拉长喵",
      "咕噜声",
      "低吼",
      "嘶声",
      "持续嚎叫",
      "颤音喵",
      "高频尖叫",
      "低频呜咽",
      "几乎无声"
    ],
    "scene": [
      "饭点前后",
      "陌生人到访",
      "新环境/搬家",
      "刚玩逗猫棒",
      "猫砂盆附近",
      "夜间独处",
      "多猫同处",
      "刚就医回家",
      "高噪音环境",
      "洗澡/剪指甲后"
    ],
    "health": [
      "食欲下降",
      "频繁舔毛",
      "抓挠耳朵",
      "呕吐腹泻",
      "跛行",
      "排尿异常",
      "呼吸急促",
      "精神萎靡",
      "体重变化明显",
      "无明显异常"
    ]
  },
  "rules": [
    {
      "id": "content-trusting",
      "emotion": "安心信任",
      "monologue": "这里很安全，我愿意靠近你，也想和你继续互动。",
      "match": {
        "ears": [
          "竖起朝前",
          "轻微前倾"
        ],
        "tail": [
          "高举末端微弯",
          "轻绕身体",
          "尾尖轻颤",
          "直立微抖"
        ],
        "eyes": [
          "缓慢眨眼",
          "半眯放松"
        ],
        "posture": [
          "侧躺翻肚",
          "蹭人转圈",
          "趴伏收爪",
          "伸展打滚"
        ],
        "voice": [
          "咕噜声",
          "短促喵",
          "颤音喵"
        ],
        "scene": [
          "刚玩逗猫棒",
          "饭点前后"
        ]
      },
      "advice": [
        "用慢速眨眼和轻声回应，强化安全感。",
        "趁状态好进行 5-10 分钟互动玩耍，避免过度刺激。",
        "可结合正向奖励训练，如呼名回应、进笼练习。"
      ],
      "surrounding": [
        "若突然从亲人变回回避，留意环境变化或潜在疼痛。",
        "稳定作息和固定喂食时间有助于维持信任关系。"
      ],
      "risk": "low"
    },
    {
      "id": "alert-anxious",
      "emotion": "警惕不安",
      "monologue": "我还不确定这里是否安全，请先别逼近我。",
      "match": {
        "ears": [
          "向侧后方转",
          "一边高一边低",
          "单耳来回转动",
          "固定不动"
        ],
        "tail": [
          "平直下垂",
          "低位左右摆",
          "快速甩动"
        ],
        "eyes": [
          "瞳孔放大",
          "目光闪躲",
          "眼神警觉扫视",
          "眯眼回避"
        ],
        "posture": [
          "压低身体",
          "僵直不动",
          "高处观察",
          "躲藏不出"
        ],
        "scene": [
          "陌生人到访",
          "新环境/搬家",
          "高噪音环境",
          "多猫同处"
        ]
      },
      "advice": [
        "先增加距离，不要直视或直接伸手触碰。",
        "提供可躲藏点（纸箱/高处）并减少噪音。",
        "使用熟悉气味的毯子，帮助猫咪建立安全锚点。"
      ],
      "surrounding": [
        "如果 24-48 小时持续高警惕，建议排查慢性疼痛或应激源。",
        "多猫家庭可增加资源点，减少竞争。"
      ],
      "risk": "medium"
    },
    {
      "id": "fear-defensive",
      "emotion": "恐惧防御",
      "monologue": "我很害怕，再靠近我可能会采取自我保护。",
      "match": {
        "ears": [
          "完全贴平",
          "持续后压"
        ],
        "tail": [
          "膨大炸毛",
          "快速甩动",
          "拍打地面",
          "夹在两腿间"
        ],
        "eyes": [
          "瞳孔放大",
          "持续盯视",
          "眼神警觉扫视"
        ],
        "posture": [
          "弓背夹尾",
          "压低身体",
          "躲藏不出",
          "僵直不动"
        ],
        "voice": [
          "低吼",
          "嘶声",
          "高频尖叫"
        ],
        "scene": [
          "陌生人到访",
          "高噪音环境",
          "洗澡/剪指甲后"
        ]
      },
      "advice": [
        "立即停止接触，留出撤离通道，避免围堵。",
        "关闭高刺激源（陌生声响、追逐行为）。",
        "待恢复后用玩具建立间接互动，不做强制抱起。"
      ],
      "surrounding": [
        "反复出现该状态需排查疼痛、环境冲突或创伤触发。",
        "若出现攻击升级，优先联系执业兽医或行为咨询师。"
      ],
      "risk": "high"
    },
    {
      "id": "social-demand",
      "emotion": "社交/资源需求",
      "monologue": "我有需求，想让你立刻注意我。",
      "match": {
        "ears": [
          "竖起朝前",
          "轻微前倾"
        ],
        "tail": [
          "高举末端微弯",
          "直立微抖",
          "尾尖轻颤"
        ],
        "voice": [
          "拉长喵",
          "持续嚎叫",
          "颤音喵",
          "短促喵"
        ],
        "scene": [
          "饭点前后",
          "夜间独处",
          "多猫同处"
        ],
        "posture": [
          "蹭人转圈",
          "来回踱步"
        ]
      },
      "advice": [
        "先排除基础需求：食物、水、猫砂清洁。",
        "给明确可预测的回应节奏，避免“叫一次就喂一次”。",
        "夜间嚎叫可用白天高质量消耗和睡前互动缓解。"
      ],
      "surrounding": [
        "突发性的高频嚎叫也可能与甲状腺、认知老化相关。",
        "建议记录时间段与触发场景，便于后续医疗排查。"
      ],
      "risk": "medium"
    },
    {
      "id": "possible-pain",
      "emotion": "不适/疼痛可疑",
      "monologue": "我不太舒服，现在更需要安静和被理解。",
      "match": {
        "posture": [
          "僵直不动",
          "压低身体",
          "躲藏不出",
          "弓背夹尾"
        ],
        "tail": [
          "平直下垂",
          "夹在两腿间",
          "低位左右摆"
        ],
        "voice": [
          "低吼",
          "持续嚎叫",
          "高频尖叫",
          "低频呜咽"
        ],
        "health": [
          "食欲下降",
          "呕吐腹泻",
          "跛行",
          "排尿异常",
          "呼吸急促",
          "精神萎靡",
          "体重变化明显"
        ],
        "eyes": [
          "第三眼睑露出",
          "频繁眨眼"
        ],
        "scene": [
          "刚就医回家"
        ]
      },
      "advice": [
        "优先减少搬动与触碰，保持温暖安静。",
        "记录进食、排泄、活动与叫声变化。",
        "如症状持续或加重，尽快进行线下就诊。"
      ],
      "surrounding": [
        "持续食欲下降超过 24 小时应尽快就医。",
        "急性呕吐腹泻、明显跛行属于健康预警信号。"
      ],
      "risk": "high"
    }
  ]
};

const STORAGE_KEY_HISTORY = "meow-whisperer.history.v1";
const STORAGE_KEY_WEIGHTS = "meow-whisperer.weights.v1";
const STORAGE_KEY_MODE = "meow-whisperer.option-mode.v1";
const BEGINNER_LIMIT = 6;

const formEl = document.querySelector("#observation-form");
const resultCardEl = document.querySelector("#result-card");
const resetBtnEl = document.querySelector("#reset-btn");
const historyListEl = document.querySelector("#history-list");
const clearHistoryBtnEl = document.querySelector("#clear-history-btn");
const importJsonBtnEl = document.querySelector("#import-json-btn");
const importJsonInputEl = document.querySelector("#import-json-input");
const exportJsonBtnEl = document.querySelector("#export-json-btn");
const exportCsvBtnEl = document.querySelector("#export-csv-btn");
const historySearchInputEl = document.querySelector("#history-search-input");
const historyRiskFilterEl = document.querySelector("#history-risk-filter");
const historyEmotionFilterEl = document.querySelector("#history-emotion-filter");
const historyDateFromEl = document.querySelector("#history-date-from");
const historyDateToEl = document.querySelector("#history-date-to");
const weightControlsEl = document.querySelector("#weight-controls");
const saveWeightsBtnEl = document.querySelector("#save-weights-btn");
const resetWeightsBtnEl = document.querySelector("#reset-weights-btn");
const modeBeginnerBtnEl = document.querySelector("#mode-beginner-btn");
const modeExpertBtnEl = document.querySelector("#mode-expert-btn");
const modeTipEl = document.querySelector("#mode-tip");

let OPTIONS = {};
let RULES = [];
let BASE_WEIGHTS = {};
let WEIGHTS = {};
let currentMode = "beginner";

const historyFilters = {
  search: "",
  risk: "all",
  emotion: "all",
  dateFrom: "",
  dateTo: ""
};

init();

async function init() {
  const config = await loadConfig();
  OPTIONS = config.options;
  RULES = config.rules;
  BASE_WEIGHTS = config.weights;
  WEIGHTS = mergeWeightOverride(BASE_WEIGHTS, readWeightOverride());
  currentMode = readMode();

  renderWeightControls();
  renderModeSwitch();
  renderChips();
  syncEmotionFilter();
  renderHistory();

  formEl.addEventListener("submit", handleSubmit);
  resetBtnEl.addEventListener("click", handleReset);
  clearHistoryBtnEl.addEventListener("click", clearHistory);
  importJsonBtnEl.addEventListener("click", () => importJsonInputEl.click());
  importJsonInputEl.addEventListener("change", importHistoryFromJson);
  exportJsonBtnEl.addEventListener("click", exportHistoryAsJson);
  exportCsvBtnEl.addEventListener("click", exportHistoryAsCsv);
  saveWeightsBtnEl.addEventListener("click", saveWeights);
  resetWeightsBtnEl.addEventListener("click", resetWeights);
  modeBeginnerBtnEl.addEventListener("click", () => setMode("beginner"));
  modeExpertBtnEl.addEventListener("click", () => setMode("expert"));

  historySearchInputEl.addEventListener("input", handleHistoryFilterChange);
  historyRiskFilterEl.addEventListener("change", handleHistoryFilterChange);
  historyEmotionFilterEl.addEventListener("change", handleHistoryFilterChange);
  historyDateFromEl.addEventListener("input", handleHistoryFilterChange);
  historyDateToEl.addEventListener("input", handleHistoryFilterChange);
  historyDateFromEl.addEventListener("change", handleHistoryFilterChange);
  historyDateToEl.addEventListener("change", handleHistoryFilterChange);

  enhanceDatePicker(historyDateFromEl);
  enhanceDatePicker(historyDateToEl);
}

async function loadConfig() {
  try {
    const response = await fetch("./config/rule-engine.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`config load failed: ${response.status}`);

    const config = await response.json();
    if (!config?.options || !config?.rules || !config?.weights) {
      throw new Error("config schema invalid");
    }

    return config;
  } catch (error) {
    console.warn("配置文件加载失败，已切换内置规则：", error);
    return FALLBACK_CONFIG;
  }
}

function mergeWeightOverride(baseWeights, overrideWeights) {
  const merged = { ...baseWeights };
  Object.keys(baseWeights).forEach((key) => {
    const raw = overrideWeights?.[key];
    const value = Number(raw);
    if (Number.isFinite(value) && value >= 1 && value <= 5) {
      merged[key] = value;
    }
  });
  return merged;
}

function renderWeightControls() {
  weightControlsEl.innerHTML = Object.entries(BASE_WEIGHTS)
    .map(([group]) => {
      const current = WEIGHTS[group] ?? BASE_WEIGHTS[group];
      return `
        <label class="weight-row" for="weight-${group}">
          <span class="weight-label">${groupLabel(group)}</span>
          <input
            id="weight-${group}"
            class="weight-slider"
            type="range"
            min="1"
            max="5"
            step="1"
            value="${current}"
            data-group="${group}"
          />
          <span class="weight-value" id="weight-value-${group}">${current}</span>
        </label>
      `;
    })
    .join("");

  const sliders = [...weightControlsEl.querySelectorAll(".weight-slider")];
  sliders.forEach((slider) => {
    slider.addEventListener("input", (event) => {
      const target = event.currentTarget;
      const group = target.dataset.group;
      const value = Number(target.value);
      WEIGHTS[group] = value;

      const valueEl = document.querySelector(`#weight-value-${group}`);
      if (valueEl) valueEl.textContent = String(value);
    });
  });
}

function groupLabel(key) {
  const map = {
    ears: "耳朵",
    tail: "尾巴",
    eyes: "眼部",
    posture: "姿态",
    voice: "声音",
    scene: "场景",
    health: "健康"
  };
  return map[key] || key;
}

function readWeightOverride() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_WEIGHTS);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (error) {
    console.warn("权重配置读取失败：", error);
    return {};
  }
}

function saveWeights() {
  localStorage.setItem(STORAGE_KEY_WEIGHTS, JSON.stringify(WEIGHTS));
}

function readMode() {
  const mode = localStorage.getItem(STORAGE_KEY_MODE);
  return mode === "expert" ? "expert" : "beginner";
}

function setMode(mode) {
  if (!["beginner", "expert"].includes(mode) || currentMode === mode) return;
  currentMode = mode;
  localStorage.setItem(STORAGE_KEY_MODE, mode);
  renderModeSwitch();
  renderChips();
}

function renderModeSwitch() {
  modeBeginnerBtnEl.classList.toggle("selected", currentMode === "beginner");
  modeExpertBtnEl.classList.toggle("selected", currentMode === "expert");
  modeTipEl.textContent =
    currentMode === "expert"
      ? "专家模式：显示完整选项库，适合精细观察和行为分析。"
      : "初学者模式：每个维度显示核心选项，适合快速上手。";
}

function getVisibleOptions() {
  if (currentMode === "expert") return OPTIONS;

  const limited = {};
  Object.entries(OPTIONS).forEach(([group, values]) => {
    limited[group] = values.slice(0, BEGINNER_LIMIT);
  });
  return limited;
}

function resetWeights() {
  localStorage.removeItem(STORAGE_KEY_WEIGHTS);
  WEIGHTS = { ...BASE_WEIGHTS };
  renderWeightControls();
}

function renderChips() {
  const previousSelected = collectSelection();
  const visibleOptions = getVisibleOptions();

  Object.entries(visibleOptions).forEach(([group, values]) => {
    const groupEl = document.querySelector(`.chip-group[data-group="${group}"]`);
    if (!groupEl) return;

    groupEl.innerHTML = "";
    values.forEach((value) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chip";
      btn.dataset.group = group;
      btn.dataset.value = value;
      btn.textContent = value;
      if ((previousSelected[group] || []).includes(value)) {
        btn.classList.add("selected");
      }
      btn.addEventListener("click", () => {
        btn.classList.toggle("selected");
      });
      groupEl.appendChild(btn);
    });
  });
}

function collectSelection() {
  const selected = {};
  Object.keys(OPTIONS).forEach((group) => {
    const items = [...document.querySelectorAll(`.chip.selected[data-group="${group}"]`)];
    selected[group] = items.map((item) => item.dataset.value);
  });
  return selected;
}

function scoreRule(rule, selected) {
  let score = 0;
  let maxScore = 0;
  const breakdown = [];

  Object.entries(rule.match).forEach(([group, expected]) => {
    const weight = WEIGHTS[group] ?? 1;
    maxScore += weight;

    const selectedItems = selected[group] || [];
    const matchedItems = expected.filter((item) => selectedItems.includes(item));
    const hit = matchedItems.length > 0;

    if (hit) score += weight;

    breakdown.push({
      group,
      expected,
      selected: selectedItems,
      matchedItems,
      hit,
      weight
    });
  });

  const confidence = maxScore ? Math.round((score / maxScore) * 100) : 0;
  return { score, confidence, breakdown };
}

function inferResult(selected) {
  const ranked = RULES.map((rule) => {
    const { score, confidence, breakdown } = scoreRule(rule, selected);
    return { rule, score, confidence, breakdown };
  }).sort((a, b) => b.score - a.score || b.confidence - a.confidence);

  const best = ranked[0];
  if (!best || best.score === 0) {
    return {
      fallback: true,
      text: "当前信号不足以完成可靠解读，请至少补充 3 个维度（例如耳+尾+姿态）。"
    };
  }

  const next = ranked[1];
  return {
    fallback: false,
    best,
    alt: next
  };
}

function renderResult(result) {
  if (result.fallback) {
    resultCardEl.innerHTML = `
      <h2>解读结果</h2>
      <p class="placeholder">${escapeHtml(result.text)}</p>
    `;
    return;
  }

  const { rule, confidence, breakdown } = result.best;
  const riskLabel =
    rule.risk === "high"
      ? '<span class="tag warn">健康预警优先</span>'
      : '<span class="tag good">常规观察</span>';

  const altText =
    result.alt && result.alt.score > 0
      ? `${escapeHtml(result.alt.rule.emotion)}（${result.alt.confidence}%）`
      : "暂无";

  const explainRows = breakdown
    .map((item) => {
      const status = item.hit ? '<span class="tag good">命中</span>' : '<span class="tag warn">未命中</span>';
      const expected = item.expected.map(escapeHtml).join("、");
      const selected = item.selected.length ? item.selected.map(escapeHtml).join("、") : "无";
      const matched = item.matchedItems.length ? item.matchedItems.map(escapeHtml).join("、") : "无";

      return `
        <li>
          <p><strong>${escapeHtml(groupLabel(item.group))}</strong>（权重 ${item.weight}）${status}</p>
          <p>规则期望：${expected}</p>
          <p>你的选择：${selected}</p>
          <p>实际命中：${matched}</p>
        </li>
      `;
    })
    .join("");

  resultCardEl.innerHTML = `
    <h2>解读结果</h2>
    <div class="result-grid">
      <article class="result-item">
        <h4>主要情绪</h4>
        <p><strong>${escapeHtml(rule.emotion)}</strong>（匹配度 ${confidence}%）${riskLabel}</p>
      </article>

      <article class="result-item">
        <h4>猫咪内心独白</h4>
        <p>“${escapeHtml(rule.monologue)}”</p>
      </article>

      <article class="result-item">
        <h4>即时行为建议</h4>
        <ul>${rule.advice.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </article>

      <article class="result-item">
        <h4>周边问题解决方案</h4>
        <ul>${rule.surrounding.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </article>

      <article class="result-item">
        <h4>次要可能状态</h4>
        <p>${altText}</p>
      </article>

      <article class="result-item">
        <h4>规则命中解释</h4>
        <ul class="explain-list">${explainRows}</ul>
      </article>
    </div>
  `;
}

function saveHistory(result, selected) {
  if (result.fallback) return;

  const payload = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    timestamp: new Date().toISOString(),
    emotion: result.best.rule.emotion,
    confidence: result.best.confidence,
    risk: result.best.rule.risk,
    selected
  };

  const history = readHistory();
  history.unshift(payload);
  const trimmed = history.slice(0, 20);
  localStorage.setItem(STORAGE_KEY_HISTORY, JSON.stringify(trimmed));
}

function readHistory() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_HISTORY);
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.warn("历史记录读取失败：", error);
    return [];
  }
}

function renderHistory() {
  const history = readHistory();
  const filtered = history.filter(matchHistoryFilters);

  syncEmotionFilter(history);

  if (history.length === 0) {
    historyListEl.innerHTML = '<p class="placeholder">暂无记录。每次生成解读后会自动保存在本机。</p>';
    return;
  }

  if (filtered.length === 0) {
    historyListEl.innerHTML =
      '<p class="placeholder">没有符合筛选条件的记录，请调整筛选项或先生成新解读。</p>';
    return;
  }

  historyListEl.innerHTML = filtered
    .map((entry) => {
      const time = new Date(entry.timestamp).toLocaleString("zh-CN", { hour12: false });
      const selectedCount = Object.values(entry.selected || {}).reduce((sum, items) => {
        return sum + (Array.isArray(items) ? items.length : 0);
      }, 0);

      const riskTag =
        entry.risk === "high"
          ? '<span class="tag warn">需健康关注</span>'
          : '<span class="tag good">常规观察</span>';

      const details = Object.entries(entry.selected || {})
        .filter(([, items]) => Array.isArray(items) && items.length > 0)
        .map(([group, items]) => `<li><strong>${escapeHtml(groupLabel(group))}：</strong>${items.map(escapeHtml).join("、")}</li>`)
        .join("");

      return `
        <article class="history-item">
          <p class="history-meta">${escapeHtml(time)} · 观察项 ${selectedCount} 个</p>
          <p class="history-main"><strong>${escapeHtml(entry.emotion || "未知")}</strong>（${Number(entry.confidence) || 0}%）${riskTag}</p>
          <details class="history-details">
            <summary>查看当次勾选详情</summary>
            <ul>${details || "<li>无详细选择项</li>"}</ul>
          </details>
        </article>
      `;
    })
    .join("");
}

function syncEmotionFilter(history = readHistory()) {
  const current = historyEmotionFilterEl.value || "all";
  const emotions = [...new Set(history.map((item) => item.emotion).filter(Boolean))];

  historyEmotionFilterEl.innerHTML = "";
  const allOption = document.createElement("option");
  allOption.value = "all";
  allOption.textContent = "全部情绪";
  historyEmotionFilterEl.appendChild(allOption);

  emotions.forEach((emotion) => {
    const option = document.createElement("option");
    option.value = String(emotion);
    option.textContent = String(emotion);
    historyEmotionFilterEl.appendChild(option);
  });

  if (emotions.includes(current)) {
    historyEmotionFilterEl.value = current;
  } else {
    historyEmotionFilterEl.value = "all";
    historyFilters.emotion = "all";
  }
}

function matchHistoryFilters(entry) {
  const riskOk = historyFilters.risk === "all" || entry.risk === historyFilters.risk;
  const emotionOk = historyFilters.emotion === "all" || entry.emotion === historyFilters.emotion;

  const entryDate = entry.timestamp ? entry.timestamp.slice(0, 10) : "";
  const fromOk = !historyFilters.dateFrom || entryDate >= historyFilters.dateFrom;
  const toOk = !historyFilters.dateTo || entryDate <= historyFilters.dateTo;

  const keyword = historyFilters.search;
  const haystack = [
    entry.emotion,
    entry.risk,
    ...(Object.values(entry.selected || {}).flatMap((items) => (Array.isArray(items) ? items : []))
  )]
    .join(" ")
    .toLowerCase();

  const searchOk = !keyword || haystack.includes(keyword);

  return riskOk && emotionOk && fromOk && toOk && searchOk;
}

function handleHistoryFilterChange() {
  historyFilters.search = historySearchInputEl.value.trim().toLowerCase();
  historyFilters.risk = historyRiskFilterEl.value;
  historyFilters.emotion = historyEmotionFilterEl.value;
  historyFilters.dateFrom = historyDateFromEl.value;
  historyFilters.dateTo = historyDateToEl.value;

  renderHistory();
}

function enhanceDatePicker(inputEl) {
  const openPicker = () => {
    if (typeof inputEl.showPicker === "function") {
      try {
        inputEl.showPicker();
      } catch (_error) {
        // Ignore; some browsers restrict showPicker calls.
      }
    }
  };

  inputEl.addEventListener("click", openPicker);
  inputEl.addEventListener("focus", openPicker);
}

function clearHistory() {
  localStorage.removeItem(STORAGE_KEY_HISTORY);
  renderHistory();
}

function exportHistoryAsJson() {
  const history = readHistory();
  if (history.length === 0) return;

  const content = JSON.stringify(history, null, 2);
  downloadFile(`meow-history-${Date.now()}.json`, "application/json;charset=utf-8", content);
}

function exportHistoryAsCsv() {
  const history = readHistory();
  if (history.length === 0) return;

  const headers = ["timestamp", "emotion", "confidence", "risk", "selected"];
  const lines = history.map((entry) => {
    const selectedText = Object.entries(entry.selected || {})
      .filter(([, items]) => Array.isArray(items) && items.length > 0)
      .map(([group, items]) => `${groupLabel(group)}:${items.join("/")}`)
      .join(" | ");

    return [entry.timestamp, entry.emotion, String(entry.confidence), entry.risk, selectedText]
      .map(csvEscape)
      .join(",");
  });

  const csv = [headers.join(","), ...lines].join("\n");
  downloadFile(`meow-history-${Date.now()}.csv`, "text/csv;charset=utf-8", csv);
}

async function importHistoryFromJson(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  try {
    const text = await file.text();
    const parsed = JSON.parse(text);

    if (!Array.isArray(parsed)) throw new Error("格式错误：JSON 需要是数组");

    const imported = parsed
      .map(normalizeHistoryEntry)
      .filter(Boolean)
      .slice(0, 100);

    if (imported.length === 0) throw new Error("没有可用记录");

    const merged = mergeHistory(readHistory(), imported).slice(0, 20);
    localStorage.setItem(STORAGE_KEY_HISTORY, JSON.stringify(merged));
    renderHistory();
  } catch (error) {
    console.warn("导入失败：", error);
  } finally {
    event.target.value = "";
  }
}

function normalizeHistoryEntry(entry) {
  if (!entry || typeof entry !== "object") return null;

  const timestamp = typeof entry.timestamp === "string" ? entry.timestamp : new Date().toISOString();
  const emotion = typeof entry.emotion === "string" ? entry.emotion : "未知情绪";
  const confidence = Number.isFinite(Number(entry.confidence)) ? Number(entry.confidence) : 0;
  const risk = ["high", "medium", "low"].includes(entry.risk) ? entry.risk : "medium";
  const selected = normalizeSelected(entry.selected);

  return {
    id: typeof entry.id === "string" ? entry.id : `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    timestamp,
    emotion,
    confidence,
    risk,
    selected
  };
}

function normalizeSelected(selected) {
  if (!selected || typeof selected !== "object") return {};

  const normalized = {};
  Object.entries(selected).forEach(([key, value]) => {
    if (!Array.isArray(value)) return;
    normalized[key] = value
      .map((item) => String(item || "").trim())
      .filter(Boolean)
      .slice(0, 20);
  });
  return normalized;
}

function mergeHistory(existing, imported) {
  const map = new Map();
  [...existing, ...imported]
    .sort((a, b) => String(b.timestamp).localeCompare(String(a.timestamp)))
    .forEach((entry) => {
      const key = `${entry.timestamp}|${entry.emotion}|${entry.confidence}`;
      if (!map.has(key)) map.set(key, entry);
    });

  return [...map.values()];
}

function csvEscape(value) {
  const text = String(value ?? "");
  return `"${text.replaceAll('"', '""')}"`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function downloadFile(filename, mimeType, content) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();

  URL.revokeObjectURL(url);
}

function handleSubmit(event) {
  event.preventDefault();
  const selected = collectSelection();
  const result = inferResult(selected);

  renderResult(result);
  saveHistory(result, selected);
  renderHistory();

  resultCardEl.scrollIntoView({ behavior: "smooth", block: "start" });
}

function handleReset() {
  const chips = document.querySelectorAll(".chip.selected");
  chips.forEach((chip) => chip.classList.remove("selected"));

  resultCardEl.innerHTML = `
    <h2>解读结果</h2>
    <p class="placeholder">完成上方选择后，这里会显示猫咪的情绪画像和建议。</p>
  `;
}
