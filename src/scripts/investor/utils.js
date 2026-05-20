export const esc = (value) =>
  String(value ?? "").replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[ch]);

export const fmt = (n) => Number(n || 0).toLocaleString("zh-CN");

export const maxOf = (items, key = "value") =>
  Math.max(1, ...items.map((item) => Number(item[key] || 0)));

export const tags = (items = []) =>
  `<div class="tags">${items.map((tag) => `<span class="tag">${esc(tag)}</span>`).join("")}</div>`;

export const truncate = (value, max = 18) => {
  const text = String(value ?? "");
  return text.length > max ? `${text.slice(0, max - 1)}...` : text;
};

export function sectionHead(title, subtitle = "") {
  return `<div class="section-head"><div><h2>${esc(title)}</h2>${subtitle ? `<p>${esc(subtitle)}</p>` : ""}</div></div>`;
}

export function metric(label, value, color = "var(--blue)") {
  return `<div class="card metric" style="border-left-color:${color}"><span>${esc(label)}</span><strong>${fmt(value)}</strong></div>`;
}

export function barRows(items) {
  const max = maxOf(items);
  return items.map((item, idx) => `
    <div class="bar-row">
      <div class="bar-name">${esc(item.label)}</div>
      <div class="bar-track"><div class="bar-fill" style="width:${Math.max(3, Number(item.value || 0) / max * 100)}%; background:${idx % 3 === 1 ? "var(--green)" : idx % 3 === 2 ? "var(--gold)" : "var(--blue)"}"></div></div>
      <div class="bar-value">${fmt(item.value)}</div>
    </div>`).join("");
}
