const {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo
} = React;
const Icon = ({
  children,
  size = 16,
  color,
  style,
  ...rest
}) => React.createElement('svg', {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color || "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  style,
  ...rest
}, children);
const Plus = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("line", {
  x1: "12",
  y1: "5",
  x2: "12",
  y2: "19"
}), /*#__PURE__*/React.createElement("line", {
  x1: "5",
  y1: "12",
  x2: "19",
  y2: "12"
}));
const X = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}), /*#__PURE__*/React.createElement("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
}));
const Trash2 = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M3 6h18"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 6l-1 14H6L5 6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 11v6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 11v6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2"
}));
const Pencil = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"
}));
const Check = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("polyline", {
  points: "20 6 9 17 4 12"
}));
const Clock = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "12 6 12 12 16 14"
}));
const ChevronsRight = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("polyline", {
  points: "13 17 18 12 13 7"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "6 17 11 12 6 7"
}));
const Copy = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("rect", {
  x: "9",
  y: "9",
  width: "13",
  height: "13",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
}));
const ArrowUp = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("line", {
  x1: "12",
  y1: "19",
  x2: "12",
  y2: "5"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "5 12 12 5 19 12"
}));
const ArrowDown = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("line", {
  x1: "12",
  y1: "5",
  x2: "12",
  y2: "19"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "19 12 12 19 5 12"
}));
const ArrowLeft = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("line", {
  x1: "19",
  y1: "12",
  x2: "5",
  y2: "12"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "12 19 5 12 12 5"
}));
const Lock = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "11",
  width: "18",
  height: "11",
  rx: "2",
  ry: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 11V7a5 5 0 0 1 10 0v4"
}));
const Eye = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "3"
}));
const EyeOff = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
}), /*#__PURE__*/React.createElement("line", {
  x1: "1",
  y1: "1",
  x2: "23",
  y2: "23"
}));
const Sun = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "5"
}), /*#__PURE__*/React.createElement("line", {
  x1: "12",
  y1: "1",
  x2: "12",
  y2: "3"
}), /*#__PURE__*/React.createElement("line", {
  x1: "12",
  y1: "21",
  x2: "12",
  y2: "23"
}), /*#__PURE__*/React.createElement("line", {
  x1: "4.22",
  y1: "4.22",
  x2: "5.64",
  y2: "5.64"
}), /*#__PURE__*/React.createElement("line", {
  x1: "18.36",
  y1: "18.36",
  x2: "19.78",
  y2: "19.78"
}), /*#__PURE__*/React.createElement("line", {
  x1: "1",
  y1: "12",
  x2: "3",
  y2: "12"
}), /*#__PURE__*/React.createElement("line", {
  x1: "21",
  y1: "12",
  x2: "23",
  y2: "12"
}), /*#__PURE__*/React.createElement("line", {
  x1: "4.22",
  y1: "19.78",
  x2: "5.64",
  y2: "18.36"
}), /*#__PURE__*/React.createElement("line", {
  x1: "18.36",
  y1: "5.64",
  x2: "19.78",
  y2: "4.22"
}));
const Moon = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
}));
const RefreshCw = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 3v5h5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 16h5v5"
}));
const ChevronDown = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("polyline", {
  points: "6 9 12 15 18 9"
}));
const ChevronUp = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("polyline", {
  points: "18 15 12 9 6 15"
}));
const LayoutDashboard = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "3",
  width: "7",
  height: "9"
}), /*#__PURE__*/React.createElement("rect", {
  x: "14",
  y: "3",
  width: "7",
  height: "5"
}), /*#__PURE__*/React.createElement("rect", {
  x: "14",
  y: "12",
  width: "7",
  height: "9"
}), /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "16",
  width: "7",
  height: "5"
}));
const Users = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "9",
  cy: "7",
  r: "4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22 21v-2a4 4 0 0 0-3-3.87"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 3.13a4 4 0 0 1 0 7.75"
}));
const Package = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M16.5 9.4 7.5 4.21"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.27 6.96 12 12.01l8.73-5.05"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 22.08V12"
}));
const ClipboardList = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("rect", {
  x: "8",
  y: "2",
  width: "8",
  height: "4",
  rx: "1"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 11h4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 16h4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 11h.01"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 16h.01"
}));
const ListOrdered = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("line", {
  x1: "10",
  y1: "6",
  x2: "21",
  y2: "6"
}), /*#__PURE__*/React.createElement("line", {
  x1: "10",
  y1: "12",
  x2: "21",
  y2: "12"
}), /*#__PURE__*/React.createElement("line", {
  x1: "10",
  y1: "18",
  x2: "21",
  y2: "18"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 6h1v4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 10h2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"
}));
const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

.cw-root {
  --bg: #1b1815;
  --panel: #252119;
  --panel-2: #2f2a21;
  --border: #3d362b;
  --text: #ece4d6;
  --text-muted: #978d7d;
  --gold: #d4a843;
  --copper: #b6713c;
  --green: #7fa37a;
  --red: #c2654f;
  font-family: 'Inter', sans-serif;
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
  width: 100%;
}

.cw-root[data-theme="light"] {
  --bg: #f6f1e7;
  --panel: #ffffff;
  --panel-2: #efe7d8;
  --border: #d9cdb8;
  --text: #2a241b;
  --text-muted: #7a7060;
  --gold: #a9801f;
  --copper: #9c5a28;
  --green: #4f7a48;
  --red: #b23b22;
}

.cw-header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: var(--bg);
  border-bottom: 1px solid var(--border);
  padding: 14px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.cw-title {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 19px;
  letter-spacing: 0.02em;
  display: flex;
  align-items: center;
  gap: 8px;
}
.cw-title small {
  display: block;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 10.5px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-top: 1px;
}
/* TCR mark: golden-ratio badge (inner content ~61.8% of the box, centered) */
.cw-logo-mark {
  width: 30px;
  height: 30px;
  border-radius: 7px;
  display: block;
  object-fit: contain;
  flex-shrink: 0;
}
.cw-logo-full {
  width: 320px; /* logo ratio 360 x 100 */
  max-width: 82%;
  display: block;
  margin: 0 auto;
}

.cw-tabs {
  display: flex;
  gap: 6px;
  overflow-x: auto;
  padding: 10px 16px;
  border-bottom: 1px solid var(--border);
  scrollbar-width: none;
}
.cw-tabs::-webkit-scrollbar { display: none; }
.cw-tab {
  display: flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
  padding: 7px 12px;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: var(--panel);
  color: var(--text-muted);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}
.cw-tab.active {
  background: var(--panel-2);
  color: var(--gold);
  border-color: var(--gold);
}

.cw-content {
  padding: 16px;
  max-width: 720px;
  margin: 0 auto;
}

.cw-section-title {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: 16px;
  margin: 18px 0 10px;
  color: var(--text);
}
.cw-section-title:first-child { margin-top: 0; }

.cw-card {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 14px;
  margin-bottom: 10px;
}

.cw-card-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
}
.cw-card-title {
  font-weight: 600;
  font-size: 14.5px;
}
.cw-card-sub {
  font-size: 12px;
  color: var(--text-muted);
  margin-top: 2px;
}

.cw-row-actions {
  display: flex;
  gap: 6px;
}
.cw-icon-btn {
  background: var(--panel-2);
  border: 1px solid var(--border);
  border-radius: 7px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  cursor: pointer;
}
.cw-icon-btn:hover { color: var(--text); }
.cw-icon-btn.danger:hover { color: var(--red); border-color: var(--red); }

.cw-empty {
  text-align: center;
  padding: 28px 14px;
  color: var(--text-muted);
  font-size: 13px;
  border: 1px dashed var(--border);
  border-radius: 12px;
}
.cw-empty b { color: var(--text); display: block; margin-bottom: 4px; font-size: 14px; }

.cw-form {
  background: var(--panel-2);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 14px;
  margin-bottom: 14px;
}
.cw-form-title {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cw-field {
  margin-bottom: 9px;
}
.cw-field label {
  display: block;
  font-size: 11.5px;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 4px;
}
.cw-field input,
.cw-field select,
.cw-field textarea {
  width: 100%;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 9px 10px;
  color: var(--text);
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;
}
.cw-field input:focus,
.cw-field select:focus,
.cw-field textarea:focus {
  outline: 2px solid var(--gold);
  outline-offset: -1px;
}
.cw-field.mono input { font-family: 'JetBrains Mono', monospace; }
.cw-row2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}
.cw-row {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 11px 12px;
  margin-bottom: 7px;
}
.cw-row.open {
  border-color: var(--gold);
}
.cw-ledger-row {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
}
.cw-ledger-row .cw-chevron {
  color: var(--text-muted);
  flex-shrink: 0;
  display: flex;
}
.cw-ledger-col-date {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: var(--text-muted);
  width: 52px;
  flex-shrink: 0;
}
.cw-ledger-col-item {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 8px;
}
.cw-ledger-col-item .cw-ledger-text {
  min-width: 0;
  overflow: hidden;
}
.cw-ledger-col-item .cw-ledger-name {
  font-size: 13px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.cw-ledger-col-item .cw-ledger-sub {
  font-size: 11px;
  color: var(--text-muted);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.cw-ledger-thumb {
  width: 30px;
  height: 30px;
  border-radius: 6px;
  object-fit: cover;
  border: 1px solid var(--border);
  flex-shrink: 0;
}
.cw-ledger-col-amount {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  text-align: right;
  flex-shrink: 0;
  min-width: 60px;
  white-space: nowrap;
}
.cw-ledger-expanded {
  margin-top: 10px;
}
.cw-lightbox {
  position: fixed;
  inset: 0;
  background: rgba(10, 9, 7, 0.88);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 24px;
  cursor: zoom-out;
}
.cw-lightbox img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 10px;
  object-fit: contain;
  box-shadow: 0 10px 40px rgba(0,0,0,0.5);
}
.cw-ledger-thumb {
  cursor: zoom-in;
}
.cw-row3 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
}

.cw-btn {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 13.5px;
  border-radius: 8px;
  padding: 9px 14px;
  border: 1px solid var(--border);
  cursor: pointer;
  background: var(--panel);
  color: var(--text);
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.cw-btn-primary {
  background: var(--gold);
  border-color: var(--gold);
  color: #211c14;
}
.cw-btn-ghost {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-muted);
}
.cw-btn-block { width: 100%; justify-content: center; }
.cw-btn-sm { padding: 6px 10px; font-size: 12.5px; }

.cw-mono { font-family: 'JetBrains Mono', monospace; }

.cw-code-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 7px;
  padding: 4px 8px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 12.5px;
  letter-spacing: 0.08em;
  color: var(--gold);
  cursor: pointer;
}

.cw-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-bottom: 14px;
}
.cw-stat {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 12px;
}
.cw-stat-label {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  margin-bottom: 6px;
}
.cw-stat-value {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 22px;
  font-weight: 700;
}
.cw-stat-value span {
  font-size: 12px;
  font-weight: 500;
  color: var(--text-muted);
  margin-left: 3px;
}

.cw-yield-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
}
.cw-ring {
  position: relative;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  flex-shrink: 0;
}
.cw-ring-hole {
  position: absolute;
  top: 6px; left: 6px; right: 6px; bottom: 6px;
  border-radius: 50%;
  background: var(--panel);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 500;
  color: var(--text);
}
.cw-legend {
  display: flex;
  flex-direction: column;
  gap: 3px;
  font-size: 11.5px;
  color: var(--text-muted);
}
.cw-legend-item { display: flex; align-items: center; gap: 6px; }
.cw-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }

.cw-stepper {
  display: flex;
  align-items: center;
  margin: 10px 0 2px;
}
.cw-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  font-size: 10px;
  color: var(--text-muted);
  text-align: center;
  position: relative;
}
.cw-step-dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: var(--border);
  margin-bottom: 5px;
  border: 2px solid var(--border);
}
.cw-step.done .cw-step-dot {
  background: var(--gold);
  border-color: var(--gold);
}
.cw-step.done { color: var(--text); }
.cw-step-line {
  position: absolute;
  top: 5px;
  left: -50%;
  width: 100%;
  height: 2px;
  background: var(--border);
  z-index: -1;
}
.cw-step.done .cw-step-line { background: var(--gold); }
.cw-step:first-child .cw-step-line { display: none; }

.cw-pill {
  display: inline-block;
  padding: 3px 9px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  border: 1px solid var(--border);
  color: var(--text-muted);
}
.cw-pill.gold { color: var(--gold); border-color: var(--gold); }

/* Slide-to-verify control */
.cw-slide {
  position: relative;
  height: 46px;
  border-radius: 999px;
  background: var(--panel-2);
  border: 1px solid var(--border);
  overflow: hidden;
  user-select: none;
  touch-action: pan-y;
}
.cw-slide-fill {
  position: absolute;
  top: 0; left: 0; bottom: 0;
  background: linear-gradient(90deg, rgba(212,168,67,0.25), rgba(212,168,67,0.40));
  border-radius: 999px;
  pointer-events: none;
}
.cw-slide-label {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-muted);
  pointer-events: none;
  letter-spacing: 0.3px;
  padding-left: 30px;
}
.cw-slide-handle {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background: linear-gradient(135deg, #f2d079, #d4a843 55%, #a9801f);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1b1815;
  cursor: grab;
  box-shadow: 0 1px 4px rgba(0,0,0,0.35);
}
.cw-slide-handle:active { cursor: grabbing; }
.cw-slide.done {
  background: var(--green);
  border-color: var(--green);
}
.cw-slide.done .cw-slide-label {
  color: #16241a;
  padding-left: 0;
}

.cw-queue-pos {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: var(--gold);
  min-width: 30px;
  text-align: center;
  flex-shrink: 0;
}
.cw-queue-pos small {
  display: block;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 9px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-top: 2px;
}
.cw-queue-row {
  display: flex;
  align-items: center;
  gap: 12px;
}
.cw-queue-reorder {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.cw-divider {
  border: none;
  border-top: 1px solid var(--border);
  margin: 10px 0;
}

.cw-total-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid var(--border);
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 17px;
}
.cw-total-row span {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 12px;
  color: var(--text-muted);
}

.cw-grand-total {
  background: var(--panel-2);
  border: 1px solid var(--gold);
  border-radius: 12px;
  padding: 14px;
  margin-bottom: 14px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.cw-grand-total .label {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
}
.cw-grand-total .value {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 22px;
  color: var(--gold);
}

.cw-portal-entry {
  max-width: 360px;
  margin: 60px auto;
  text-align: center;
  padding: 0 16px;
}
.cw-portal-entry .cw-title { justify-content: center; margin-bottom: 4px; }
.cw-portal-entry p {
  color: var(--text-muted);
  font-size: 13px;
  margin: 10px 0 18px;
  line-height: 1.5;
}
.cw-portal-entry input {
  width: 100%;
  text-align: center;
  letter-spacing: 0.3em;
  font-family: 'JetBrains Mono', monospace;
  font-size: 18px;
  text-transform: uppercase;
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 12px;
  color: var(--text);
  box-sizing: border-box;
  margin-bottom: 12px;
}
.cw-error {
  color: var(--red);
  font-size: 12.5px;
  margin-bottom: 10px;
}

.cw-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
  color: var(--text-muted);
  font-size: 13px;
  font-family: 'JetBrains Mono', monospace;
}
`;
const STATUSES = ["Received", "In Progress", "Completed", "Delivered"];
const CODE_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}
function genCode() {
  let c = "";
  for (let i = 0; i < 6; i++) c += CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)];
  return c;
}
function fmtNum(n) {
  const v = Number(n);
  if (isNaN(v)) return "0";
  return v % 1 === 0 ? v.toString() : v.toFixed(2);
}
function fmtMoney(n) {
  const v = Number(n) || 0;
  return v.toLocaleString("en-IN", {
    maximumFractionDigits: 2
  });
}
function fmtDate(d) {
  if (!d) return "—";
  try {
    return new Date(d).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
  } catch {
    return d;
  }
}

// Compact dd/mm/yy date for tight PDF table columns.
function fmtDateShort(d) {
  if (!d) return "—";
  try {
    const dt = new Date(d);
    const dd = String(dt.getDate()).padStart(2, "0");
    const mm = String(dt.getMonth() + 1).padStart(2, "0");
    const yy = String(dt.getFullYear()).slice(-2);
    return `${dd}/${mm}/${yy}`;
  } catch {
    return String(d);
  }
}
function fmtDateTime(d) {
  if (!d) return "—";
  try {
    return new Date(d).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    });
  } catch {
    return String(d);
  }
}

// Client-facing order timeline: the milestones a client cares about, built from
// the order's stored timestamps and any recorded history. (Excludes internal
// edits the client doesn't need to see.)
function orderHistory(o) {
  if (!o) return [];
  const events = [];
  const created = o.createdAt || (o.date ? new Date(o.date).getTime() : null);
  if (created) events.push({
    at: created,
    action: "created",
    label: "Order received by workshop"
  });
  if (o.workshopDoneAt) events.push({
    at: o.workshopDoneAt,
    action: "done",
    label: "Finished by workshop"
  });
  if (o.clientConfirmedAt) events.push({
    at: o.clientConfirmedAt,
    action: "verified",
    label: "You confirmed you received it"
  });
  if (o.paidAt) events.push({
    at: o.paidAt,
    action: "paid",
    label: "Marked paid"
  });
  if (o.cancelledAt) events.push({
    at: o.cancelledAt,
    action: "cancelled",
    label: "Order cancelled"
  });
  if (Array.isArray(o.history)) {
    o.history.forEach(e => {
      if (!e || !e.at) return;
      // Only surface status changes to the client (skip internal "edited" noise).
      if (e.action === "status") events.push({
        at: e.at,
        action: "status",
        label: e.label
      });
    });
  }
  const seen = new Set();
  const out = [];
  events.sort((a, b) => a.at - b.at).forEach(e => {
    const key = e.action + ":" + Math.round(e.at / 60000);
    if (seen.has(key)) return;
    seen.add(key);
    out.push(e);
  });
  return out;
}
function getQueue(orders) {
  return orders.filter(o => o.status === "Received" || o.status === "In Progress").slice().sort((a, b) => (a.priority ?? 0) - (b.priority ?? 0));
}

// Total cost of the item made on an order: net weight (wire - scrap) valued at the rate per kg.
// Total cost for an order. Base rule: (wireWeight − wireReturned) / 1000 ×
// ratePerKg. When deductScrap is true, scrapWeight is also subtracted. Clamped.
function calcTotalCost(wireWeight, wireReturned, ratePerKg, scrapWeight = 0, deductScrap = false) {
  const wire = Number(wireWeight) || 0;
  const returned = Number(wireReturned) || 0;
  const scrap = deductScrap ? Number(scrapWeight) || 0 : 0;
  const chargeable = Math.max(0, wire - returned - scrap);
  return chargeable / 1000 * (Number(ratePerKg) || 0);
}
function formatOrderId(o) {
  const n = o && o.orderNumber || 0;
  return `ORD-${String(n).padStart(4, "0")}`;
}

// Shows a native Android notification via the AndroidNotify JS bridge
// (added in MainActivity.kt). No-op on other platforms / if not available.
function notifyAndroid(title, body) {
  try {
    if (window.AndroidNotify?.notify) window.AndroidNotify.notify(title, body);
  } catch {
    // best-effort only
  }
}

// Looks up a client's negotiated rate for a specific item+wire size, if any.
function findClientRate(clientRates, clientId, itemId, variantId) {
  const r = clientRates.find(r => r.clientId === clientId && r.itemId === itemId && r.variantId === variantId);
  return r ? r.rate : null;
}

// A compact signature of the catalogue (items + their sizes + descriptions +
// photos) used to detect when the workshop has changed it. Rates are folded in
// separately by the catalogue view, since rates are per-client.
function catalogSignature(items) {
  if (!Array.isArray(items)) return "";
  return items.map(it => {
    const sizes = (it.variants || []).map(v => v.size).join(",");
    return [it.id, it.name, it.code, it.description, it.photo ? "p" : "", sizes, it.updatedAt || 0].join("|");
  }).sort().join("§");
}

// Returns "latest" (added within 7 days), "updated" (edited within 7 days), or
// null. New-ness takes priority over updated-ness.
const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;
function itemBadge(item, now = Date.now()) {
  if (item.addedAt && now - item.addedAt <= SEVEN_DAYS_MS) return "latest";
  if (item.updatedAt && now - item.updatedAt <= SEVEN_DAYS_MS) return "updated";
  return null;
}

// Full code for a specific wire size, e.g. code "RAS" + size "20" -> "RAS20".
function fullItemCode(item, variant) {
  const code = (item?.code || "").toUpperCase();
  const size = (variant?.size || "").replace(/[^a-zA-Z0-9]/g, "");
  return `${code}${size}`;
}

// ---- Sync backend (Google Apps Script Web App over your Drive) ----
// After deploying Code.gs as a Web App, paste the URL here. Both the
// workshop app and the client app MUST use the SAME URL so they share data.
const BACKEND_URL = "https://script.google.com/macros/s/AKfycbwdV73BQf3OcbyylDj4bBDWo_pngbz3cKsSeZ1vpz7tVA6SzQKM1zs_Hjq0oGmp1nulAg/exec";
const SYNC_ENABLED = !BACKEND_URL.startsWith("PASTE_");
const SYNC_QUEUE_KEY = "cw_sync_queue";
function readLocal(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
function writeLocal(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error("local save failed", key, e);
  }
}
async function pushToBackend(key, value) {
  try {
    const res = await fetch(BACKEND_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      cache: "no-store",
      body: JSON.stringify({
        key,
        value: JSON.stringify(value)
      })
    });
    if (!res.ok) return false;
    const data = await res.json().catch(() => null);
    if (data && data.ok === false) {
      console.error("sync save rejected", key, data.error);
      return false;
    }
    return true;
  } catch (e) {
    console.error("sync save failed", key, e);
    return false;
  }
}
function queueWrite(key, value) {
  const queue = readLocal(SYNC_QUEUE_KEY);
  const filtered = (Array.isArray(queue) ? queue : []).filter(q => q.key !== key);
  filtered.push({
    key,
    value,
    queuedAt: Date.now()
  });
  writeLocal(SYNC_QUEUE_KEY, filtered);
}

// Retries any writes that failed earlier (e.g. while offline). Returns true
// if anything was flushed (so the caller can refresh from the server).
async function flushQueue() {
  if (!SYNC_ENABLED) return false;
  const queue = readLocal(SYNC_QUEUE_KEY);
  if (!Array.isArray(queue) || queue.length === 0) return false;
  const remaining = [];
  let flushedAny = false;
  for (const item of queue) {
    const ok = await pushToBackend(item.key, item.value);
    if (ok) flushedAny = true;else remaining.push(item);
  }
  writeLocal(SYNC_QUEUE_KEY, remaining);
  return flushedAny;
}
function pendingSyncCount() {
  const queue = readLocal(SYNC_QUEUE_KEY);
  return Array.isArray(queue) ? queue.length : 0;
}
async function loadKey(key) {
  if (!SYNC_ENABLED) return readLocal(key);
  try {
    const res = await fetch(`${BACKEND_URL}?key=${encodeURIComponent(key)}&_=${Date.now()}`, {
      cache: "no-store"
    });
    const data = await res.json();
    if (data.value != null) {
      const parsed = JSON.parse(data.value);
      writeLocal(key, parsed);
      return parsed;
    }
    return readLocal(key);
  } catch (e) {
    console.error("load failed", key, e);
    return readLocal(key);
  }
}

// ---- Drive item photos ----
// Item photos can optionally live in a Google Drive folder (configured in
// Code.gs), named by item code. Fetch the { CODE: url } map and cache it so
// photos resolve offline once seen. Errors fall back to uploaded/no photo.
const PHOTO_MAP_KEY = "cw_drive_photos";
function readPhotoMap() {
  try {
    const raw = localStorage.getItem(PHOTO_MAP_KEY);
    const obj = raw ? JSON.parse(raw) : {};
    return obj && typeof obj === "object" ? obj : {};
  } catch {
    return {};
  }
}
async function loadDrivePhotos() {
  if (!SYNC_ENABLED) return readPhotoMap();
  try {
    const res = await fetch(`${BACKEND_URL}?action=listPhotos&_=${Date.now()}`, {
      cache: "no-store"
    });
    const data = await res.json();
    if (data && data.photos && typeof data.photos === "object" && !data.photos.error) {
      try {
        localStorage.setItem(PHOTO_MAP_KEY, JSON.stringify(data.photos));
      } catch (e) {/* ignore */}
      return data.photos;
    }
    return readPhotoMap();
  } catch {
    return readPhotoMap();
  }
}
// Uploaded photo wins; else a Drive photo matching the item's code.
function resolveItemPhoto(item, photoMap) {
  if (!item) return "";
  if (item.photo) return item.photo;
  const code = (item.code || "").trim().toUpperCase();
  if (code && photoMap && photoMap[code]) return photoMap[code];
  return "";
}
async function saveKey(key, value) {
  writeLocal(key, value);
  if (!SYNC_ENABLED) return;
  const ok = await pushToBackend(key, value);
  if (!ok) queueWrite(key, value);
}

// jsPDF is loaded on demand (only when the client taps "Share my rate card"
// or "Share ledger as PDF"), so it doesn't slow down opening the app.
let jsPdfLoadPromise = null;
function loadJsPdf() {
  if (window.jspdf) return Promise.resolve(window.jspdf);
  if (jsPdfLoadPromise) return jsPdfLoadPromise;
  jsPdfLoadPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/jspdf@2.5.1/dist/jspdf.umd.min.js";
    script.onload = () => resolve(window.jspdf);
    script.onerror = () => {
      jsPdfLoadPromise = null;
      reject(new Error("Failed to load PDF library"));
    };
    document.head.appendChild(script);
  });
  return jsPdfLoadPromise;
}

// Removes characters that aren't safe in filenames on Android/Windows/etc.
// ---- Shared PDF helpers (colours, watermark, header) ----
const PDF_GOLD = [196, 152, 60];
const PDF_DARK = [37, 33, 27];
const PDF_LIGHTROW = [248, 244, 236];
const PDF_GREEN = [79, 122, 72];
const PDF_COPPER = [156, 90, 40];
const PDF_GREY = [120, 112, 96];
function pdfWatermark(doc, pageW = 595, pageH = 842) {
  const cx = pageW / 2;
  const cy = pageH / 2;
  const rotatedEllipse = (ecx, ecy, rx, ry, angleDeg) => {
    const a = angleDeg * Math.PI / 180,
      cos = Math.cos(a),
      sin = Math.sin(a),
      k = 0.5522847498;
    const rot = (px, py) => ({
      x: ecx + px * cos - py * sin,
      y: ecy + px * sin + py * cos
    });
    const p0 = rot(rx, 0);
    const segs = [[rot(rx, k * ry), rot(k * rx, ry), rot(0, ry)], [rot(-k * rx, ry), rot(-rx, k * ry), rot(-rx, 0)], [rot(-rx, -k * ry), rot(-k * rx, -ry), rot(0, -ry)], [rot(k * rx, -ry), rot(rx, -k * ry), rot(rx, 0)]];
    doc.lines(segs.map((s, i) => {
      const prev = i === 0 ? p0 : segs[i - 1][2];
      return [s[0].x - prev.x, s[0].y - prev.y, s[1].x - prev.x, s[1].y - prev.y, s[2].x - prev.x, s[2].y - prev.y];
    }), p0.x, p0.y, [1, 1], "S", false);
  };
  doc.setDrawColor(228, 216, 188);
  doc.setLineWidth(7);
  const step = 46;
  [[-step, step], [0, 0], [step, -step]].forEach(([dx, dy]) => rotatedEllipse(cx + dx, cy + dy, 30, 50, -40));
  doc.setTextColor(232, 224, 205);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(34);
  doc.text("THE CHAIN ROOM", cx, cy + 150, {
    align: "center"
  });
}
function pdfHeader(doc, subtitle, pageW = 595, marginX = 40) {
  doc.setFillColor(PDF_DARK[0], PDF_DARK[1], PDF_DARK[2]);
  doc.rect(0, 0, pageW, 70, "F");
  doc.setTextColor(PDF_GOLD[0], PDF_GOLD[1], PDF_GOLD[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text("THE CHAIN ROOM", marginX, 34);
  doc.setTextColor(236, 228, 214);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.text(subtitle, marginX, 52);
}
function sanitizeFilename(name) {
  return (name || "").replace(/[\\/:*?"<>|]/g, "").trim();
}

// Shares a jsPDF document via the Web Share sheet (so the client can pick
// WhatsApp etc. directly), falling back to a plain download.
async function sharePdf(doc, filename, shareTitle, shareText) {
  const blob = doc.output("blob");
  if (navigator.canShare && navigator.share) {
    try {
      const file = new File([blob], filename, {
        type: "application/pdf"
      });
      if (navigator.canShare({
        files: [file]
      })) {
        await navigator.share({
          files: [file],
          title: shareTitle,
          text: shareText
        });
        return;
      }
    } catch {
      // fall through to download
    }
  }
  doc.save(filename);
  alert(`"${filename}" downloaded — you can share it from your Files/Downloads via WhatsApp or any app.`);
}
function YieldRing({
  wireIn,
  made,
  scrap,
  size = 56
}) {
  const win = Number(wireIn) || 0;
  const m = Number(made) || 0;
  const scr = Number(scrap) || 0;
  if (win <= 0) {
    return /*#__PURE__*/React.createElement("div", {
      className: "cw-yield-wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "cw-ring",
      style: {
        width: size,
        height: size,
        background: "var(--border)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "cw-ring-hole"
    }, "—")), /*#__PURE__*/React.createElement("div", {
      className: "cw-legend"
    }, /*#__PURE__*/React.createElement("span", null, "No wire weight logged yet")));
  }
  const madePct = Math.min(100, m / win * 100);
  const scrapPct = Math.min(100 - madePct, scr / win * 100);
  const madeDeg = madePct * 3.6;
  const scrapDeg = scrapPct * 3.6;
  const bg = `conic-gradient(var(--gold) 0deg ${madeDeg}deg, var(--copper) ${madeDeg}deg ${madeDeg + scrapDeg}deg, var(--border) ${madeDeg + scrapDeg}deg 360deg)`;
  return /*#__PURE__*/React.createElement("div", {
    className: "cw-yield-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cw-ring",
    style: {
      width: size,
      height: size,
      background: bg
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cw-ring-hole"
  }, madePct.toFixed(0), "%")), /*#__PURE__*/React.createElement("div", {
    className: "cw-legend"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cw-legend-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cw-dot",
    style: {
      background: "var(--border)"
    }
  }), " Total wire: ", fmtNum(win), "g"), /*#__PURE__*/React.createElement("div", {
    className: "cw-legend-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cw-dot",
    style: {
      background: "var(--gold)"
    }
  }), " Item made: ", fmtNum(m), "g"), /*#__PURE__*/React.createElement("div", {
    className: "cw-legend-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cw-dot",
    style: {
      background: "var(--copper)"
    }
  }), " Scrap: ", fmtNum(scr), "g")));
}
function StatusStepper({
  status
}) {
  const idx = STATUSES.indexOf(status);
  return /*#__PURE__*/React.createElement("div", {
    className: "cw-stepper"
  }, STATUSES.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s,
    className: "cw-step" + (i <= idx ? " done" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "cw-step-line"
  }), /*#__PURE__*/React.createElement("div", {
    className: "cw-step-dot"
  }), s)));
}
function App() {
  const [loading, setLoading] = useState(true);
  const [clients, setClients] = useState([]);
  const [orders, setOrders] = useState([]);
  const [items, setItems] = useState([]);
  const [photoMap, setPhotoMap] = useState(() => readPhotoMap());
  const [clientRates, setClientRates] = useState([]);
  const [theme, setTheme] = useState(() => localStorage.getItem("cw_theme") === "light" ? "light" : "dark");
  const ordersRef = useRef([]);
  useEffect(() => {
    if (theme === "light") localStorage.setItem("cw_theme", "light");else localStorage.removeItem("cw_theme");
  }, [theme]);
  useEffect(() => {
    ordersRef.current = orders;
  }, [orders]);
  const itemsRef = useRef([]);
  useEffect(() => {
    itemsRef.current = items;
  }, [items]);
  const refreshFromServer = useCallback(async () => {
    const [c, o, i, cr, photos] = await Promise.all([loadKey("cw_clients"), loadKey("cw_orders"), loadKey("cw_items"), loadKey("cw_client_rates"), loadDrivePhotos()]);
    if (photos && typeof photos === "object") setPhotoMap(photos);

    // Detect status changes / new workshop feedback since the last sync and
    // surface it as a native notification — but ONLY for the order(s) belonging
    // to the client logged in on THIS device. Without this filter, a change to
    // any client's order would notify every client (a privacy leak).
    const myCode = (localStorage.getItem("cw_my_code") || "").toUpperCase();
    const me = myCode ? c.find(cl => (cl.code || "").toUpperCase() === myCode) : null;
    const myId = me ? me.id : null;
    const prevById = new Map(ordersRef.current.map(p => [p.id, p]));
    for (const next of o) {
      if (!myId || next.clientId !== myId) continue; // only my own orders
      const prev = prevById.get(next.id);
      if (!prev) continue;
      if (next.status !== prev.status && !next.cancelled) {
        notifyAndroid("Order status updated", `${formatOrderId(next)} (${next.itemName || "Item"}) is now: ${next.status}`);
      }
      if (next.cancelled && !prev.cancelled) {
        notifyAndroid("Order cancelled", `${formatOrderId(next)} (${next.itemName || "Item"}) was cancelled by the workshop.`);
      }
      if (next.workshopFeedback && next.workshopFeedback !== prev.workshopFeedback) {
        notifyAndroid("New note from the workshop", `${formatOrderId(next)}: ${next.workshopFeedback}`);
      }
    }

    // Detect catalog changes (items added/edited, sizes changed) and fire a
    // native notification. The in-app unread badge is handled separately by
    // comparing the catalog's latest timestamp to the last-viewed time.
    const prevItems = itemsRef.current;
    if (prevItems.length > 0) {
      const prevSig = catalogSignature(prevItems);
      const nextSig = catalogSignature(i);
      if (prevSig !== nextSig) {
        notifyAndroid("Catalogue updated", "The workshop updated the catalogue. Open the app to see what's new.");
      }
    }
    setClients(c);
    setOrders(o);
    setItems(i);
    setClientRates(cr);
  }, []);

  // Flushes any queued offline writes (e.g. a comment or verification that
  // failed to send earlier), then pulls the latest from the server. Used for
  // automatic background sync and the manual "Sync now" button.
  const syncNow = useCallback(async () => {
    if (!SYNC_ENABLED) return;
    await flushQueue();
    await refreshFromServer();
  }, [refreshFromServer]);
  useEffect(() => {
    let cancelled = false;
    setClients(readLocal("cw_clients"));
    setOrders(readLocal("cw_orders"));
    setItems(readLocal("cw_items"));
    setClientRates(readLocal("cw_client_rates"));
    setLoading(false);
    if (!SYNC_ENABLED) return () => {
      cancelled = true;
    };
    refreshFromServer();
    const onVisible = () => {
      if (document.visibilityState === "visible" && !cancelled) syncNow();
    };
    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("online", onVisible);
    window.addEventListener("focus", onVisible);
    // Poll every 2 minutes while the app is open so workshop updates (status
    // changes, new notes) appear almost in real time. flushQueue is a no-op
    // when nothing is queued.
    const interval = setInterval(() => {
      if (document.visibilityState === "visible" && !cancelled) syncNow();
    }, 120000);
    return () => {
      cancelled = true;
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("online", onVisible);
      window.removeEventListener("focus", onVisible);
      clearInterval(interval);
    };
  }, [refreshFromServer, syncNow]);
  if (loading) {
    return /*#__PURE__*/React.createElement("div", {
      className: "cw-root",
      "data-theme": theme
    }, /*#__PURE__*/React.createElement("style", null, STYLES), /*#__PURE__*/React.createElement("div", {
      className: "cw-loading"
    }, "Opening the ledger…"));
  }
  const verifyOrder = async orderId => {
    const base = SYNC_ENABLED ? await loadKey("cw_orders") : orders;
    const next = base.map(o => {
      if (o.id !== orderId) return o;
      const hist = Array.isArray(o.history) ? o.history.slice() : [];
      hist.push({
        at: Date.now(),
        action: "verified",
        label: "You confirmed you received it"
      });
      return {
        ...o,
        clientConfirmed: true,
        clientConfirmedAt: Date.now(),
        history: hist.slice(-50),
        updatedAt: Date.now()
      };
    });
    setOrders(next);
    await saveKey("cw_orders", next);
  };
  const saveComment = async (orderId, text) => {
    const base = SYNC_ENABLED ? await loadKey("cw_orders") : orders;
    const next = base.map(o => o.id === orderId ? {
      ...o,
      clientComment: text,
      updatedAt: Date.now()
    } : o);
    setOrders(next);
    await saveKey("cw_orders", next);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "cw-root",
    "data-theme": theme
  }, /*#__PURE__*/React.createElement("style", null, STYLES), /*#__PURE__*/React.createElement(ClientPortal, {
    clients: clients,
    orders: orders,
    items: items,
    photoMap: photoMap,
    clientRates: clientRates,
    verifyOrder: verifyOrder,
    saveComment: saveComment,
    syncNow: syncNow,
    theme: theme,
    setTheme: setTheme
  }));
}

/* ---------------- ABOUT / LEGAL ---------------- */
const APP_VERSION = "1.0";
const PRIVACY_TEXT = `Your order data is recorded by the workshop and stored locally on their device. If they've set up sync, it's also stored in their own private Google Sheet — not on any server run by the developer.

This app does not use analytics, advertising, or tracking of any kind, and does not share your data with any third party.`;
const TERMS_TEXT = `This app is provided "as is", without warranty of any kind, for viewing your order status and ledger with the workshop.

The developer is not liable for any discrepancy between this app and the workshop's records. Always confirm totals and payments directly with the workshop.`;

// Full-screen preview for item photos. Renders nothing if src is null; tap
// anywhere (including the image) to dismiss.
function PhotoLightbox({
  src,
  onClose
}) {
  if (!src) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "cw-lightbox",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: ""
  }));
}
const CLIENT_HELP_TOPICS = [{
  id: "what",
  title: "What you can see here",
  body: `This portal shows only your own orders with The Chain Room. For each order you can see its status, the wire weight, rate, total cost, and whether it's paid.

Tap any order to expand it for full details.`
}, {
  id: "status",
  title: "Order status & verifying",
  body: `Each order moves through: Received → In Progress → Completed → Delivered.

When your order is finished the workshop status shows "done", and a "Slide to verify" bar appears — slide it left to right to confirm you received the order. You can also leave a comment on any order for the workshop to see.`
}, {
  id: "pdfs",
  title: "Sharing your ledger",
  body: `• "Share my ledger (PDF)" gives you a statement of all your orders with totals.
• "Share my order summary" sends a quick text summary.

Each opens your phone's share sheet so you can save it or send it on WhatsApp. Your rate card is shared with you directly by the workshop.`
}, {
  id: "access",
  title: "Your access code & sync",
  body: `You logged in with the access code from your workshop. It's remembered on this device — use "Switch account" to log out.

Tap "Sync now" to pull the latest updates from the workshop. The app also works offline and refreshes automatically when you reopen it.`
}];

// Tutorial steps shown in the in-app walkthrough. Each step has a simple
// emoji-style illustration, a title, and beginner-friendly text.
const TUTORIAL_STEPS = [{
  art: "🔑",
  title: "1. Log in with your access code",
  body: "Open the app and type the access code the workshop gave you, then tap Continue. The app remembers you, so you only do this once on your phone."
}, {
  art: "📋",
  title: "2. See your orders",
  body: "The “My orders” tab lists every order the workshop has logged for you. Tap any order to open it and see full details — item, sizes, weights, status and amount."
}, {
  art: "📸",
  title: "3. Order details & photos",
  body: "Inside an order you'll see a photo of the item, its description, the weight breakdown, the current status, and whether it's paid or unpaid. Tap a photo to enlarge it."
}, {
  art: "👉",
  title: "4. Confirm you received an order",
  body: "When the workshop finishes an order, a gold “Slide to verify” bar appears. Slide it from left to right to confirm you received the item. That's it — the workshop is notified."
}, {
  art: "💬",
  title: "5. Leave a comment",
  body: "Open any order and use the comment box to send a note to the workshop — a question, a change, or a thank-you. They'll see it on their side."
}, {
  art: "🏷️",
  title: "6. Browse the catalogue",
  body: "The “Catalogue” tab shows every item with its code, description, sizes and your agreed rate per kg. New or changed items are marked “latest” or “updated”. A gold dot on the tab means there's something new to see."
}, {
  art: "🔒",
  title: "7. View your access code safely",
  body: "Tap “My access code”, set a PIN once, and after that you can reveal your code using your PIN or your phone's fingerprint/face unlock. Keep the code private — anyone with it can see your orders."
}, {
  art: "📄",
  title: "8. Share your ledger",
  body: "Use “Share my ledger (PDF)” for a full statement of your orders and balances, or “Share my order summary” for a quick text. Both open your phone's share sheet so you can save them or send them on WhatsApp."
}, {
  art: "🔔",
  title: "9. Stay updated",
  body: "When the workshop updates an order's status or the catalogue, you'll get a notification and an in-app alert. Tap “Sync now” any time to pull the very latest."
}, {
  art: "✅",
  title: "You're all set!",
  body: "That's everything you need. You can reopen this tutorial any time from the Help section. Welcome to The Chain Room."
}];
function TutorialWalkthrough({
  onClose
}) {
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(true);
  const last = TUTORIAL_STEPS.length - 1;
  const step = TUTORIAL_STEPS[i];
  useEffect(() => {
    if (!playing) return;
    if (i >= last) {
      setPlaying(false);
      return;
    }
    const t = setTimeout(() => setI(n => Math.min(n + 1, last)), 5000);
    return () => clearTimeout(t);
  }, [i, playing, last]);
  const next = () => {
    setPlaying(false);
    setI(n => Math.min(n + 1, last));
  };
  const prev = () => {
    setPlaying(false);
    setI(n => Math.max(n - 1, 0));
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.85)",
      zIndex: 1000,
      display: "flex",
      flexDirection: "column",
      padding: 16
    },
    onClick: e => {
      if (e.target === e.currentTarget) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold)",
      fontWeight: 700,
      fontSize: 15
    }
  }, "How to use this app"), /*#__PURE__*/React.createElement("button", {
    className: "cw-btn cw-btn-ghost cw-btn-sm",
    onClick: onClose
  }, "Close ✕")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      marginBottom: 18
    }
  }, TUTORIAL_STEPS.map((_, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    style: {
      flex: 1,
      height: 4,
      borderRadius: 2,
      background: idx <= i ? "var(--gold)" : "var(--border)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 72,
      marginBottom: 20
    }
  }, step.art), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: "var(--text)",
      marginBottom: 12,
      maxWidth: 420
    }
  }, step.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: "var(--text-muted)",
      lineHeight: 1.5,
      maxWidth: 420
    }
  }, step.body)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "cw-btn cw-btn-ghost cw-btn-block",
    onClick: prev,
    disabled: i === 0
  }, "← Back"), i < last ? /*#__PURE__*/React.createElement("button", {
    className: "cw-btn cw-btn-primary cw-btn-block",
    onClick: next
  }, "Next →") : /*#__PURE__*/React.createElement("button", {
    className: "cw-btn cw-btn-primary cw-btn-block",
    onClick: onClose
  }, "Done")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "cw-btn cw-btn-ghost cw-btn-sm",
    onClick: () => setPlaying(p => !p)
  }, playing ? "⏸ Pause auto-play" : "▶ Auto-play")));
}
function HelpGuide() {
  const [open, setOpen] = useState(null);
  const [showTutorial, setShowTutorial] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: "cw-card"
  }, showTutorial && /*#__PURE__*/React.createElement(TutorialWalkthrough, {
    onClose: () => setShowTutorial(false)
  }), /*#__PURE__*/React.createElement("button", {
    className: "cw-btn cw-btn-primary cw-btn-block",
    style: {
      marginBottom: 12
    },
    onClick: () => setShowTutorial(true)
  }, "▶ Watch the tutorial"), /*#__PURE__*/React.createElement("div", {
    className: "cw-card-sub",
    style: {
      marginBottom: 10
    }
  }, "Quick help for using your order portal. Tap a topic to expand it."), CLIENT_HELP_TOPICS.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: t.id
  }, /*#__PURE__*/React.createElement("button", {
    className: "cw-btn cw-btn-ghost cw-btn-sm cw-btn-block",
    style: i > 0 ? {
      marginTop: 8
    } : undefined,
    onClick: () => setOpen(open === t.id ? null : t.id)
  }, open === t.id ? /*#__PURE__*/React.createElement(ChevronUp, {
    size: 14
  }) : /*#__PURE__*/React.createElement(ChevronDown, {
    size: 14
  }), " ", t.title), open === t.id && /*#__PURE__*/React.createElement("div", {
    className: "cw-card-sub",
    style: {
      marginTop: 8,
      whiteSpace: "pre-line"
    }
  }, t.body))));
}
function AboutLegal() {
  const [open, setOpen] = useState(null);
  return /*#__PURE__*/React.createElement("div", {
    className: "cw-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cw-card-title"
  }, "The Chain Room (TCR)"), /*#__PURE__*/React.createElement("div", {
    className: "cw-card-sub",
    style: {
      marginTop: 6
    }
  }, "ERP management. The Chain Room."), /*#__PURE__*/React.createElement("div", {
    className: "cw-card-sub",
    style: {
      marginTop: 10
    }
  }, "Developed by ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--text)"
    }
  }, "Sourav Sharma")), /*#__PURE__*/React.createElement("div", {
    className: "cw-card-sub"
  }, "Version ", APP_VERSION), /*#__PURE__*/React.createElement("hr", {
    className: "cw-divider"
  }), /*#__PURE__*/React.createElement("button", {
    className: "cw-btn cw-btn-ghost cw-btn-sm cw-btn-block",
    onClick: () => setOpen(open === "privacy" ? null : "privacy")
  }, open === "privacy" ? /*#__PURE__*/React.createElement(ChevronUp, {
    size: 14
  }) : /*#__PURE__*/React.createElement(ChevronDown, {
    size: 14
  }), " Privacy Policy"), open === "privacy" && /*#__PURE__*/React.createElement("div", {
    className: "cw-card-sub",
    style: {
      marginTop: 8,
      whiteSpace: "pre-line"
    }
  }, PRIVACY_TEXT), /*#__PURE__*/React.createElement("button", {
    className: "cw-btn cw-btn-ghost cw-btn-sm cw-btn-block",
    style: {
      marginTop: 8
    },
    onClick: () => setOpen(open === "terms" ? null : "terms")
  }, open === "terms" ? /*#__PURE__*/React.createElement(ChevronUp, {
    size: 14
  }) : /*#__PURE__*/React.createElement(ChevronDown, {
    size: 14
  }), " End User Agreement"), open === "terms" && /*#__PURE__*/React.createElement("div", {
    className: "cw-card-sub",
    style: {
      marginTop: 8,
      whiteSpace: "pre-line"
    }
  }, TERMS_TEXT), /*#__PURE__*/React.createElement("hr", {
    className: "cw-divider"
  }), /*#__PURE__*/React.createElement("div", {
    className: "cw-card-sub",
    style: {
      textAlign: "center",
      fontSize: 12
    }
  }, "© ", new Date().getFullYear(), " The Chain Room. All rights reserved."));
}

/* ---------------- CLIENT PORTAL ---------------- */
function CommentBox({
  label,
  initialValue,
  onSave
}) {
  const [value, setValue] = useState(initialValue);
  const [dirty, setDirty] = useState(false);
  useEffect(() => {
    setValue(initialValue);
    setDirty(false);
  }, [initialValue]);
  const handleBlur = () => {
    if (value !== initialValue) onSave(value);
    setDirty(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "cw-field"
  }, /*#__PURE__*/React.createElement("label", null, label), /*#__PURE__*/React.createElement("textarea", {
    rows: 2,
    value: value,
    onChange: e => {
      setValue(e.target.value);
      setDirty(true);
    },
    onBlur: handleBlur,
    placeholder: "Add a note for the workshop…"
  }), dirty && /*#__PURE__*/React.createElement("div", {
    className: "cw-card-sub"
  }, "Tap outside to save…"));
}

// Slide-to-verify: drag the gold handle left→right. Once it passes the
// halfway point it commits (animates to the end and calls onVerify); released
// before halfway, it springs back. Supports both touch and mouse. Once an
// order is confirmed the control shows a static "verified" state.
function SlideToVerify({
  confirmed,
  onVerify
}) {
  const trackRef = useRef(null);
  const [x, setX] = useState(0); // handle offset in px
  const [dragging, setDragging] = useState(false);
  const [committed, setCommitted] = useState(false);
  const startXRef = useRef(0);
  const maxRef = useRef(0);
  const HANDLE = 40;
  const PAD = 3;
  const maxOffset = () => {
    const track = trackRef.current;
    if (!track) return 0;
    return track.clientWidth - HANDLE - PAD * 2;
  };
  const onDown = clientX => {
    if (confirmed || committed) return;
    maxRef.current = maxOffset();
    startXRef.current = clientX - x;
    setDragging(true);
  };
  const onMove = clientX => {
    if (!dragging) return;
    let next = clientX - startXRef.current;
    next = Math.max(0, Math.min(next, maxRef.current));
    setX(next);
  };
  const onUp = () => {
    if (!dragging) return;
    setDragging(false);
    const max = maxRef.current || maxOffset();
    // Commit if dragged past the halfway point.
    if (max > 0 && x >= max / 2) {
      setCommitted(true);
      setX(max);
      onVerify();
    } else {
      setX(0);
    }
  };

  // Mouse listeners attach to window while dragging so the drag continues
  // even if the pointer leaves the track.
  useEffect(() => {
    if (!dragging) return;
    const move = e => onMove(e.clientX);
    const up = () => onUp();
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
  }, [dragging, x]);
  if (confirmed || committed) {
    return /*#__PURE__*/React.createElement("div", {
      className: "cw-slide done",
      "aria-label": "Order verified"
    }, /*#__PURE__*/React.createElement("div", {
      className: "cw-slide-label"
    }, /*#__PURE__*/React.createElement(Check, {
      size: 15
    }), "\xA0You verified this"));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "cw-slide",
    ref: trackRef,
    onMouseDown: e => onDown(e.clientX),
    onTouchStart: e => onDown(e.touches[0].clientX),
    onTouchMove: e => onMove(e.touches[0].clientX),
    onTouchEnd: onUp
  }, /*#__PURE__*/React.createElement("div", {
    className: "cw-slide-fill",
    style: {
      width: x + HANDLE + PAD
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "cw-slide-label"
  }, "Slide to verify — I received this"), /*#__PURE__*/React.createElement("div", {
    className: "cw-slide-handle",
    style: {
      transform: `translateX(${x}px)`,
      transition: dragging ? "none" : "transform 0.25s ease"
    }
  }, /*#__PURE__*/React.createElement(ChevronsRight, {
    size: 18
  })));
}

// Client-facing collapsible order timeline.
function OrderTimeline({
  order
}) {
  const [open, setOpen] = useState(false);
  const events = orderHistory(order);
  const dotColor = action => {
    if (action === "paid") return "var(--green)";
    if (action === "cancelled") return "var(--red)";
    if (action === "done" || action === "verified") return "var(--gold)";
    return "var(--text-muted)";
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    className: "cw-btn cw-btn-ghost cw-btn-sm cw-btn-block",
    onClick: () => setOpen(s => !s)
  }, /*#__PURE__*/React.createElement(Clock, {
    size: 13
  }), " ", open ? "Hide history" : `Order history${events.length ? ` (${events.length})` : ""}`), open && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      paddingLeft: 4
    }
  }, events.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "cw-card-sub"
  }, "No history yet."), events.map((e, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 10,
      alignItems: "flex-start",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      width: 9,
      height: 9,
      borderRadius: "50%",
      background: dotColor(e.action),
      marginTop: 4
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13
    }
  }, e.label), /*#__PURE__*/React.createElement("div", {
    className: "cw-card-sub cw-mono",
    style: {
      fontSize: 11
    }
  }, fmtDateTime(e.at)))))));
}

// Client-facing catalogue: every item with its code, description, photo,
// available sizes, and this client's agreed rate per size. New/changed items
// (within 7 days) carry a "latest"/"updated" superscript badge. Footer carries
// the standard rates disclaimer.
function CatalogView({
  items,
  photoMap,
  clientRates,
  clientId,
  onPhoto
}) {
  const now = Date.now();
  const sorted = [...(items || [])].sort((a, b) => (b.updatedAt || b.addedAt || 0) - (a.updatedAt || a.addedAt || 0));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "cw-section-title",
    style: {
      fontSize: 14
    }
  }, "Catalogue"), sorted.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "cw-empty"
  }, /*#__PURE__*/React.createElement("b", null, "No items yet"), "The workshop's catalogue will appear here."), sorted.map(it => {
    const badge = itemBadge(it, now);
    const photo = resolveItemPhoto(it, photoMap);
    return /*#__PURE__*/React.createElement("div", {
      className: "cw-card",
      key: it.id,
      style: {
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12
      }
    }, photo ? /*#__PURE__*/React.createElement("img", {
      src: photo,
      alt: it.name,
      onClick: () => onPhoto && onPhoto(photo),
      style: {
        width: 64,
        height: 64,
        borderRadius: 10,
        objectFit: "cover",
        flexShrink: 0,
        cursor: "pointer",
        border: "1px solid var(--border)"
      }
    }) : /*#__PURE__*/React.createElement("div", {
      style: {
        width: 64,
        height: 64,
        borderRadius: 10,
        flexShrink: 0,
        background: "var(--panel-2)",
        border: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--text-muted)",
        fontSize: 11
      }
    }, "No photo"), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "cw-card-title"
    }, it.name || "Untitled item", badge && /*#__PURE__*/React.createElement("sup", {
      style: {
        marginLeft: 6,
        fontSize: 9,
        fontWeight: 700,
        letterSpacing: ".4px",
        color: badge === "latest" ? "var(--green)" : "var(--gold)",
        textTransform: "uppercase"
      }
    }, badge)), it.code && /*#__PURE__*/React.createElement("div", {
      className: "cw-card-sub cw-mono"
    }, "Code: ", it.code), it.description && /*#__PURE__*/React.createElement("div", {
      className: "cw-card-sub",
      style: {
        marginTop: 4
      }
    }, it.description))), it.variants && it.variants.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("hr", {
      className: "cw-divider"
    }), /*#__PURE__*/React.createElement("div", {
      className: "cw-card-sub",
      style: {
        marginBottom: 6
      }
    }, "Available sizes & your rate:"), it.variants.map(v => {
      const rate = findClientRate(clientRates, clientId, it.id, v.id);
      return /*#__PURE__*/React.createElement("div", {
        key: v.id,
        style: {
          display: "flex",
          justifyContent: "space-between",
          fontSize: 13,
          padding: "3px 0"
        }
      }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
        className: "cw-mono"
      }, fullItemCode(it, v)), " · Size ", v.size || "—"), /*#__PURE__*/React.createElement("span", {
        className: "cw-mono",
        style: {
          color: rate ? "var(--gold)" : "var(--text-muted)"
        }
      }, rate ? `₹${rate}/kg` : "Rate on request"));
    })));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      padding: "10px 12px",
      borderRadius: 10,
      background: "rgba(212,168,67,0.12)",
      border: "1px solid var(--gold)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: "var(--gold)"
    }
  }, "All rates are subject to change and exclude 1gm/kg Ghatat.")));
}

// Lets the logged-in client view their access code, gated behind a PIN they
// set on this device (and biometric/device unlock via WebAuthn where the
// platform supports it). The code itself is never stored by this component —
// it's passed in and only revealed after a successful unlock.
function AccessCodeReveal({
  code
}) {
  const PIN_KEY = "cw_client_view_pin";
  const [hasPin, setHasPin] = useState(() => !!localStorage.getItem(PIN_KEY));
  const [revealed, setRevealed] = useState(false);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState("");
  // Inline PIN entry: mode is null | "set" | "confirm" | "enter".
  const [pinMode, setPinMode] = useState(null);
  const [pinValue, setPinValue] = useState("");
  const [firstPin, setFirstPin] = useState("");

  // Simple hash so the PIN isn't stored in plain text on the device.
  const hashPin = async pin => {
    try {
      const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode("tcr:" + pin));
      return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("");
    } catch {
      let h = 0;
      const s = "tcr:" + pin;
      for (let i = 0; i < s.length; i++) {
        h = h * 31 + s.charCodeAt(i) | 0;
      }
      return "f" + (h >>> 0).toString(16);
    }
  };
  const onlyDigits = s => (s || "").replace(/[^0-9]/g, "").slice(0, 8);
  const startSetPin = () => {
    setMsg("");
    setFirstPin("");
    setPinValue("");
    setPinMode("set");
  };
  const startEnterPin = () => {
    setMsg("");
    setPinValue("");
    setPinMode("enter");
  };
  const cancelPin = () => {
    setPinMode(null);
    setPinValue("");
    setFirstPin("");
  };
  const submitPin = async () => {
    const pin = onlyDigits(pinValue);
    if (pinMode === "set") {
      if (pin.length < 4) {
        setMsg("PIN must be at least 4 digits.");
        return;
      }
      setFirstPin(pin);
      setPinValue("");
      setPinMode("confirm");
      setMsg("");
      return;
    }
    if (pinMode === "confirm") {
      if (pin !== firstPin) {
        setMsg("PINs didn't match — try again.");
        setPinMode("set");
        setPinValue("");
        setFirstPin("");
        return;
      }
      localStorage.setItem(PIN_KEY, await hashPin(pin));
      setHasPin(true);
      setPinMode(null);
      setPinValue("");
      setFirstPin("");
      setMsg("PIN set. Tap the eye to view your code.");
      return;
    }
    if (pinMode === "enter") {
      const ok = (await hashPin(pin)) === localStorage.getItem(PIN_KEY);
      if (ok) {
        setRevealed(true);
        setPinMode(null);
        setPinValue("");
        setMsg("");
      } else {
        setMsg("Incorrect PIN.");
        setPinValue("");
      }
    }
  };

  // Try a platform biometric / device-unlock via WebAuthn.
  const tryBiometric = async () => {
    try {
      if (!window.PublicKeyCredential || !navigator.credentials) return false;
      const available = await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();
      if (!available) return false;
      const challenge = crypto.getRandomValues(new Uint8Array(32));
      await navigator.credentials.get({
        publicKey: {
          challenge,
          timeout: 30000,
          userVerification: "required",
          rpId: location.hostname || undefined
        }
      });
      return true;
    } catch {
      return false;
    }
  };
  const reveal = async () => {
    setMsg("");
    setBusy(true);
    try {
      const bio = await tryBiometric();
      if (bio) {
        setRevealed(true);
        return;
      }
      startEnterPin(); // fall back to inline numeric PIN entry
    } finally {
      setBusy(false);
    }
  };
  const pinPrompt = pinMode === "set" ? "Set a PIN (4+ digits)" : pinMode === "confirm" ? "Re-enter PIN to confirm" : "Enter your PIN";
  return /*#__PURE__*/React.createElement("div", {
    className: "cw-card",
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cw-card-title",
    style: {
      fontSize: 14
    }
  }, "My access code"), revealed ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "monospace",
      fontSize: 22,
      fontWeight: 700,
      letterSpacing: 3,
      color: "var(--gold)",
      marginTop: 2
    }
  }, code) : /*#__PURE__*/React.createElement("div", {
    className: "cw-card-sub",
    style: {
      marginTop: 2
    }
  }, hasPin ? "Tap to unlock and view" : "Set a PIN to protect it")), !hasPin ? /*#__PURE__*/React.createElement("button", {
    className: "cw-icon-btn",
    title: "Set a PIN",
    "aria-label": "Set a PIN",
    onClick: startSetPin
  }, /*#__PURE__*/React.createElement(Lock, {
    size: 18
  })) : revealed ? /*#__PURE__*/React.createElement("button", {
    className: "cw-icon-btn",
    title: "Hide",
    "aria-label": "Hide access code",
    onClick: () => setRevealed(false)
  }, /*#__PURE__*/React.createElement(EyeOff, {
    size: 18
  })) : /*#__PURE__*/React.createElement("button", {
    className: "cw-icon-btn",
    "aria-label": "Show access code",
    disabled: busy || pinMode === "enter",
    onClick: reveal
  }, /*#__PURE__*/React.createElement(Eye, {
    size: 18
  }))), pinMode && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "cw-card-sub",
    style: {
      display: "block",
      marginBottom: 4
    }
  }, pinPrompt), /*#__PURE__*/React.createElement("input", {
    type: "password",
    inputMode: "numeric",
    pattern: "[0-9]*",
    autoComplete: "off",
    value: pinValue,
    onChange: e => setPinValue(onlyDigits(e.target.value)),
    onKeyDown: e => {
      if (e.key === "Enter") submitPin();
    },
    placeholder: "••••",
    autoFocus: true,
    style: {
      letterSpacing: 6,
      textAlign: "center",
      fontSize: 18
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "cw-btn cw-btn-ghost cw-btn-block",
    onClick: cancelPin
  }, "Cancel"), /*#__PURE__*/React.createElement("button", {
    className: "cw-btn cw-btn-primary cw-btn-block",
    onClick: submitPin
  }, pinMode === "enter" ? "Unlock" : pinMode === "confirm" ? "Confirm" : "Next"))), revealed && /*#__PURE__*/React.createElement("div", {
    className: "cw-card-sub",
    style: {
      marginTop: 6
    }
  }, "Keep this private — anyone with it can see your orders."), hasPin && !revealed && !pinMode && /*#__PURE__*/React.createElement("button", {
    className: "cw-btn cw-btn-ghost cw-btn-sm",
    style: {
      marginTop: 8
    },
    onClick: startSetPin
  }, "Change PIN"), msg && /*#__PURE__*/React.createElement("div", {
    className: "cw-card-sub",
    style: {
      marginTop: 8
    }
  }, msg));
}
function ClientPortal({
  clients,
  orders,
  items,
  photoMap,
  clientRates,
  verifyOrder,
  saveComment,
  syncNow,
  theme,
  setTheme
}) {
  const [code, setCode] = useState("");
  const [activeClient, setActiveClient] = useState(null);
  const [error, setError] = useState("");
  const [expandedIds, setExpandedIds] = useState(() => new Set());
  const [syncing, setSyncing] = useState(false);
  const [syncMsg, setSyncMsg] = useState("");
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const [clientTab, setClientTab] = useState("orders");
  // Show the tutorial automatically the first time a client uses the app on
  // this device (then never again unless they reopen it from Help).
  const [showFirstRunTutorial, setShowFirstRunTutorial] = useState(false);
  useEffect(() => {
    if (activeClient && !localStorage.getItem("cw_tutorial_seen")) {
      setShowFirstRunTutorial(true);
      localStorage.setItem("cw_tutorial_seen", "1");
    }
  }, [activeClient]);
  // Unread catalogue badge: compare the catalogue's newest timestamp to the
  // last time this client opened the Catalogue tab (stored per device).
  const catalogLatestTs = useMemo(() => {
    let m = 0;
    (items || []).forEach(it => {
      m = Math.max(m, it.updatedAt || 0, it.addedAt || 0);
    });
    return m;
  }, [items]);
  const [catalogSeenTs, setCatalogSeenTs] = useState(() => Number(localStorage.getItem("cw_catalog_seen")) || 0);
  const catalogUnread = catalogLatestTs > catalogSeenTs;
  const markCatalogSeen = () => {
    const ts = catalogLatestTs || Date.now();
    localStorage.setItem("cw_catalog_seen", String(ts));
    setCatalogSeenTs(ts);
  };
  const toggleExpanded = id => {
    setExpandedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);else next.add(id);
      return next;
    });
  };

  // Remember the access code on this device so the client doesn't have to
  // re-enter it every time the app opens.
  useEffect(() => {
    if (activeClient) return;
    const saved = localStorage.getItem("cw_my_code");
    if (!saved) return;
    const found = clients.find(c => c.code.toUpperCase() === saved.toUpperCase());
    if (found) setActiveClient(found);
  }, [clients, activeClient]);
  const submit = () => {
    const found = clients.find(c => c.code.toUpperCase() === code.trim().toUpperCase());
    if (!found) {
      setError("That code didn't match any client. Check it and try again.");
      return;
    }
    setError("");
    localStorage.setItem("cw_my_code", found.code);
    setActiveClient(found);
  };
  if (!activeClient) {
    return /*#__PURE__*/React.createElement("div", {
      className: "cw-portal-entry"
    }, /*#__PURE__*/React.createElement("img", {
      src: "logo-full.svg",
      alt: "The Chain Room",
      className: "cw-logo-full",
      style: {
        marginBottom: 16
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "cw-pill",
      style: {
        color: SYNC_ENABLED ? "var(--green)" : "var(--copper)",
        borderColor: SYNC_ENABLED ? "var(--green)" : "var(--copper)"
      }
    }, SYNC_ENABLED ? "Synced with workshop" : "Local only — ask the workshop to finish setup"), /*#__PURE__*/React.createElement("p", null, "Enter the access code shared by the workshop to view your orders."), error && /*#__PURE__*/React.createElement("div", {
      className: "cw-error"
    }, error), /*#__PURE__*/React.createElement("input", {
      value: code,
      onChange: e => setCode(e.target.value),
      onKeyDown: e => e.key === "Enter" && submit(),
      placeholder: "ACCESS CODE",
      maxLength: 6
    }), /*#__PURE__*/React.createElement("button", {
      className: "cw-btn cw-btn-primary cw-btn-block",
      onClick: submit
    }, "View my orders"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 18
      }
    }, /*#__PURE__*/React.createElement(AboutLegal, null)));
  }
  const myOrders = [...orders].filter(o => o.clientId === activeClient.id).reverse();
  const queue = getQueue(orders);
  const lifetimeTotal = myOrders.reduce((s, o) => s + (o.cancelled ? 0 : Number(o.totalCost) || 0), 0);
  const outstandingTotal = myOrders.reduce((s, o) => s + (o.cancelled || o.paid ? 0 : Number(o.totalCost) || 0), 0);
  const shareSummary = async () => {
    const lines = myOrders.map(o => `${fmtDate(o.date)} — ${formatOrderId(o)} — ${o.itemName || "Item"}${o.size ? ` (${o.size})` : ""} — ${o.status} — ₹${fmtMoney(o.totalCost)} — ${o.paid ? "Paid" : "Unpaid"}`);
    const text = [`The Chain Room — My Orders (${activeClient.name})`, "", ...lines, "", `Lifetime total: ₹${fmtMoney(lifetimeTotal)}`, `Outstanding (unpaid): ₹${fmtMoney(outstandingTotal)}`].join("\n");
    if (navigator.share) {
      try {
        await navigator.share({
          title: "My Orders",
          text
        });
        return;
      } catch {
        // fall through to clipboard
      }
    }
    navigator.clipboard?.writeText(text).catch(() => {});
    alert("Summary copied to clipboard.");
  };

  // Builds a one-page ledger PDF: a table of this client's orders plus
  // lifetime/outstanding totals.
  const buildLedgerPdf = () => {
    const {
      jsPDF
    } = window.jspdf;
    const doc = new jsPDF({
      unit: "pt",
      format: "a4"
    });
    const pageW = 595;
    const marginX = 40;
    pdfWatermark(doc, pageW, 842);
    pdfHeader(doc, "Ledger", pageW, marginX);
    doc.setTextColor(PDF_GREY[0], PDF_GREY[1], PDF_GREY[2]);
    doc.setFontSize(10);
    doc.text(`Client: ${activeClient.name}`, marginX, 90);
    doc.text(`Date: ${new Date().toLocaleDateString("en-IN")}`, pageW - marginX, 90, {
      align: "right"
    });
    let y = 110;
    // Columns: Date(dd/mm/yy) | Item | Size | Wt | Scrap | Rate | Amount
    const usable = pageW - marginX * 2;
    const colDate = marginX + 2;
    const colItem = marginX + 62;
    const colSize = marginX + 188;
    const colWt = marginX + 250;
    const colScrap = marginX + 318;
    const colRate = marginX + 388;
    const colAmt = pageW - marginX - 4; // right-aligned

    const drawHead = () => {
      doc.setFillColor(PDF_GOLD[0], PDF_GOLD[1], PDF_GOLD[2]);
      doc.rect(marginX, y, usable, 22, "F");
      doc.setTextColor(33, 28, 20);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.text("Date", colDate, y + 15);
      doc.text("Item", colItem, y + 15);
      doc.text("Size", colSize, y + 15);
      doc.text("Wt(g)", colWt, y + 15);
      doc.text("Scrap(g)", colScrap, y + 15);
      doc.text("Rate", colRate, y + 15);
      doc.text("Amount", colAmt, y + 15, {
        align: "right"
      });
      y += 22;
    };
    drawHead();
    doc.setFont("helvetica", "normal");
    myOrders.forEach((o, i) => {
      const fullItem = items.find(it => it.id === o.itemId);
      const desc = fullItem && fullItem.description ? fullItem.description : "";
      const rowH = desc ? 30 : 20;
      if (y + rowH > 800) {
        doc.addPage();
        pdfWatermark(doc, pageW, 842);
        y = 56;
        drawHead();
      }
      if (i % 2 === 0) {
        doc.setFillColor(PDF_LIGHTROW[0], PDF_LIGHTROW[1], PDF_LIGHTROW[2]);
        doc.rect(marginX, y, usable, rowH, "F");
      }
      doc.setTextColor(PDF_DARK[0], PDF_DARK[1], PDF_DARK[2]);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.text(fmtDateShort(o.date), colDate, y + 14);
      doc.text(`${o.itemName || "Item"}`, colItem, y + 14, {
        maxWidth: colSize - colItem - 4
      });
      doc.text(o.size ? String(o.size) : "—", colSize, y + 14, {
        maxWidth: colWt - colSize - 4
      });
      doc.text(o.wireWeight ? fmtNum(Number(o.wireWeight)) : "—", colWt, y + 14);
      doc.text(o.scrapWeight ? fmtNum(Number(o.scrapWeight)) : "—", colScrap, y + 14);
      doc.text(o.ratePerKg ? String(o.ratePerKg) : "—", colRate, y + 14);
      doc.text(o.cancelled ? "—" : `Rs ${fmtMoney(o.totalCost)}`, colAmt, y + 14, {
        align: "right"
      });
      if (desc) {
        doc.setTextColor(PDF_GREY[0], PDF_GREY[1], PDF_GREY[2]);
        doc.setFont("helvetica", "italic");
        doc.setFontSize(7.5);
        doc.text(desc, colItem, y + 25, {
          maxWidth: colAmt - colItem - 4
        });
      }
      y += rowH;
    });
    y += 12;
    doc.setDrawColor(PDF_GOLD[0], PDF_GOLD[1], PDF_GOLD[2]);
    doc.setLineWidth(1);
    doc.line(marginX, y, pageW - marginX, y);
    y += 22;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(PDF_DARK[0], PDF_DARK[1], PDF_DARK[2]);
    doc.text("Lifetime total", marginX, y);
    doc.text(`Rs ${fmtMoney(lifetimeTotal)}`, pageW - marginX, y, {
      align: "right"
    });
    y += 20;
    doc.setTextColor(PDF_COPPER[0], PDF_COPPER[1], PDF_COPPER[2]);
    doc.text("Outstanding balance", marginX, y);
    doc.text(`Rs ${fmtMoney(outstandingTotal)}`, pageW - marginX, y, {
      align: "right"
    });
    return doc;
  };
  const shareLedgerPdf = async () => {
    try {
      await loadJsPdf();
    } catch {
      alert("Couldn't load the PDF library — check your internet connection and try again.");
      return;
    }
    const doc = buildLedgerPdf();
    const dateStr = new Date().toISOString().slice(0, 10);
    const filename = `${sanitizeFilename(activeClient.name)} - ${dateStr}.pdf`;
    await sharePdf(doc, filename, `Ledger — ${activeClient.name}`, "Ledger from The Chain Room");
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "cw-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cw-title",
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "icon.svg",
    alt: "",
    className: "cw-logo-mark"
  }), /*#__PURE__*/React.createElement("div", null, "TCR", /*#__PURE__*/React.createElement("small", null, "My Orders"))), /*#__PURE__*/React.createElement("button", {
    className: "cw-btn cw-btn-ghost cw-btn-sm",
    onClick: () => {
      setActiveClient(null);
      setCode("");
      localStorage.removeItem("cw_my_code");
    }
  }, /*#__PURE__*/React.createElement(ArrowLeft, {
    size: 13
  }), " Switch account"), /*#__PURE__*/React.createElement("button", {
    className: "cw-btn cw-btn-ghost cw-btn-sm",
    style: {
      marginLeft: 8
    },
    onClick: () => setTheme(theme === "light" ? "dark" : "light")
  }, theme === "light" ? /*#__PURE__*/React.createElement(Moon, {
    size: 13
  }) : /*#__PURE__*/React.createElement(Sun, {
    size: 13
  }), " ", theme === "light" ? "Dark" : "Light"), SYNC_ENABLED && /*#__PURE__*/React.createElement("button", {
    className: "cw-btn cw-btn-ghost cw-btn-sm",
    style: {
      marginLeft: 8
    },
    disabled: syncing,
    onClick: async () => {
      setSyncing(true);
      setSyncMsg("");
      try {
        await syncNow();
        setSyncMsg("Up to date.");
      } catch {
        setSyncMsg("Couldn't reach the workshop — check your connection.");
      } finally {
        setSyncing(false);
      }
    }
  }, /*#__PURE__*/React.createElement(RefreshCw, {
    size: 13
  }), " ", syncing ? "Syncing…" : "Sync now"), syncMsg && /*#__PURE__*/React.createElement("div", {
    className: "cw-card-sub",
    style: {
      marginTop: 6
    }
  }, syncMsg), showFirstRunTutorial && /*#__PURE__*/React.createElement(TutorialWalkthrough, {
    onClose: () => setShowFirstRunTutorial(false)
  }), /*#__PURE__*/React.createElement("div", {
    className: "cw-section-title"
  }, "Welcome, ", activeClient.name), /*#__PURE__*/React.createElement("div", {
    className: "cw-grand-total"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Outstanding (unpaid)"), /*#__PURE__*/React.createElement("span", {
    className: "value"
  }, "₹", fmtMoney(outstandingTotal))), /*#__PURE__*/React.createElement("div", {
    className: "cw-card-sub",
    style: {
      marginBottom: 14,
      textAlign: "right"
    }
  }, "Lifetime total: ₹", fmtMoney(lifetimeTotal)), /*#__PURE__*/React.createElement(AccessCodeReveal, {
    code: activeClient.code
  }), myOrders.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    className: "cw-btn cw-btn-ghost cw-btn-block",
    style: {
      marginBottom: 8
    },
    onClick: shareSummary
  }, "Share my order summary"), /*#__PURE__*/React.createElement("button", {
    className: "cw-btn cw-btn-ghost cw-btn-block",
    style: {
      marginBottom: 14
    },
    onClick: shareLedgerPdf
  }, "Share my ledger (PDF)")), /*#__PURE__*/React.createElement("div", {
    className: "cw-tabs",
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "cw-tab" + (clientTab === "orders" ? " active" : ""),
    onClick: () => setClientTab("orders")
  }, "My orders"), /*#__PURE__*/React.createElement("button", {
    className: "cw-tab" + (clientTab === "catalog" ? " active" : ""),
    onClick: () => {
      setClientTab("catalog");
      markCatalogSeen();
    },
    style: {
      position: "relative"
    }
  }, "Catalogue", catalogUnread && clientTab !== "catalog" && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 6,
      right: 6,
      width: 9,
      height: 9,
      borderRadius: "50%",
      background: "var(--gold)",
      boxShadow: "0 0 0 2px var(--bg)"
    }
  }))), clientTab === "orders" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "cw-section-title",
    style: {
      fontSize: 14
    }
  }, "Your orders"), myOrders.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "cw-empty"
  }, /*#__PURE__*/React.createElement("b", null, "No orders yet"), "Orders the workshop logs for you will show up here."), myOrders.map(o => {
    const queuePos = queue.findIndex(q => q.id === o.id);
    const made = Math.max(0, (Number(o.wireWeight) || 0) - (Number(o.wireReturned) || 0) - (Number(o.scrapWeight) || 0));
    const expanded = expandedIds.has(o.id);
    const itemPhoto = resolveItemPhoto(items.find(it => it.id === o.itemId), photoMap);
    const totalWeight = Number(o.wireWeight) || 0;
    const showSlider = !o.cancelled && o.workshopDone && !o.clientConfirmed;
    return /*#__PURE__*/React.createElement("div", {
      className: "cw-row" + (expanded ? " open" : ""),
      key: o.id,
      style: o.cancelled ? {
        opacity: 0.65
      } : undefined
    }, /*#__PURE__*/React.createElement("div", {
      className: "cw-ledger-row",
      onClick: () => toggleExpanded(o.id)
    }, /*#__PURE__*/React.createElement("span", {
      className: "cw-chevron"
    }, expanded ? /*#__PURE__*/React.createElement(ChevronUp, {
      size: 14
    }) : /*#__PURE__*/React.createElement(ChevronDown, {
      size: 14
    })), /*#__PURE__*/React.createElement("span", {
      className: "cw-ledger-col-date"
    }, fmtDate(o.date)), /*#__PURE__*/React.createElement("div", {
      className: "cw-ledger-col-item"
    }, /*#__PURE__*/React.createElement("div", {
      className: "cw-ledger-text"
    }, /*#__PURE__*/React.createElement("div", {
      className: "cw-ledger-name"
    }, o.itemName || "Untitled item", o.size ? ` · ${o.size}` : ""), /*#__PURE__*/React.createElement("div", {
      className: "cw-ledger-sub"
    }, formatOrderId(o), " · ", fmtNum(totalWeight), "g"))), o.cancelled ? /*#__PURE__*/React.createElement("span", {
      className: "cw-pill",
      style: {
        color: "var(--red)",
        borderColor: "var(--red)"
      }
    }, "Cancelled") : /*#__PURE__*/React.createElement("span", {
      className: "cw-pill gold"
    }, o.status), /*#__PURE__*/React.createElement("span", {
      className: "cw-ledger-col-amount",
      style: {
        color: o.cancelled ? "var(--text-muted)" : o.paid ? "var(--green)" : "var(--text)"
      }
    }, o.cancelled ? "—" : /*#__PURE__*/React.createElement(React.Fragment, null, "₹", fmtMoney(o.totalCost), o.paid ? " ✓" : ""))), showSlider && !expanded && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 10
      },
      onClick: e => e.stopPropagation()
    }, /*#__PURE__*/React.createElement(SlideToVerify, {
      confirmed: false,
      onVerify: () => verifyOrder(o.id)
    })), expanded && /*#__PURE__*/React.createElement("div", {
      className: "cw-ledger-expanded"
    }, /*#__PURE__*/React.createElement("hr", {
      className: "cw-divider"
    }), /*#__PURE__*/React.createElement("div", {
      className: "cw-card-head"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "cw-card-title"
    }, o.itemName || "Untitled item", o.size ? ` · ${o.size}` : "", o.itemCode ? /*#__PURE__*/React.createElement("span", {
      className: "cw-mono",
      style: {
        color: "var(--text-muted)",
        fontWeight: 400,
        fontSize: 12
      }
    }, " (", o.itemCode, ")") : null), /*#__PURE__*/React.createElement("div", {
      className: "cw-card-sub"
    }, fmtDate(o.date)), /*#__PURE__*/React.createElement("div", {
      className: "cw-card-sub cw-mono"
    }, formatOrderId(o), o.receiverName ? ` · Receiver: ${o.receiverName}` : "")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "flex-end"
      }
    }, o.cancelled ? /*#__PURE__*/React.createElement("span", {
      className: "cw-pill",
      style: {
        color: "var(--red)",
        borderColor: "var(--red)"
      }
    }, "Cancelled") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "cw-pill gold"
    }, o.status), /*#__PURE__*/React.createElement("span", {
      className: "cw-pill",
      style: {
        color: o.paid ? "var(--green)" : "var(--copper)",
        borderColor: o.paid ? "var(--green)" : "var(--copper)"
      }
    }, o.paid ? "Paid" : "Unpaid")))), (() => {
      const fullItem = items.find(it => it.id === o.itemId);
      return fullItem?.description ? /*#__PURE__*/React.createElement("div", {
        className: "cw-card-sub",
        style: {
          marginBottom: 8
        }
      }, fullItem.description) : null;
    })(), itemPhoto && /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: itemPhoto,
      alt: o.itemName || "Item",
      onClick: () => setLightboxSrc(itemPhoto),
      style: {
        width: "100%",
        maxHeight: 260,
        objectFit: "contain",
        background: "var(--panel-2)",
        borderRadius: 10,
        border: "1px solid var(--border)",
        cursor: "zoom-in",
        display: "block"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        bottom: 8,
        right: 8,
        background: "rgba(0,0,0,0.6)",
        color: "#fff",
        fontSize: 11,
        padding: "3px 8px",
        borderRadius: 6,
        pointerEvents: "none"
      }
    }, "Tap to enlarge")), !o.cancelled && /*#__PURE__*/React.createElement(StatusStepper, {
      status: o.status
    }), !o.cancelled && queuePos >= 0 && /*#__PURE__*/React.createElement("div", {
      className: "cw-card-sub",
      style: {
        marginTop: 6
      }
    }, queuePos === 0 ? "You're next in the workshop queue" : `${queuePos} order${queuePos === 1 ? "" : "s"} ahead of yours in the queue`), /*#__PURE__*/React.createElement("hr", {
      className: "cw-divider"
    }), /*#__PURE__*/React.createElement(YieldRing, {
      wireIn: o.wireWeight,
      made: made,
      scrap: o.scrapWeight,
      returned: o.wireReturned
    }), (o.clientSlip || o.workshopSlip) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("hr", {
      className: "cw-divider"
    }), /*#__PURE__*/React.createElement("div", {
      className: "cw-card-sub",
      style: {
        fontWeight: 600,
        marginBottom: 6
      }
    }, "Weight slips"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12,
        flexWrap: "wrap"
      }
    }, o.clientSlip && /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: o.clientSlip,
      alt: "",
      onClick: () => setLightboxSrc(o.clientSlip),
      style: {
        width: 88,
        height: 88,
        borderRadius: 8,
        objectFit: "cover",
        border: "1px solid var(--border)",
        cursor: "zoom-in"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "cw-card-sub",
      style: {
        fontSize: 11,
        marginTop: 3
      }
    }, "Your slip")), o.workshopSlip && /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: o.workshopSlip,
      alt: "",
      onClick: () => setLightboxSrc(o.workshopSlip),
      style: {
        width: 88,
        height: 88,
        borderRadius: 8,
        objectFit: "cover",
        border: "1px solid var(--border)",
        cursor: "zoom-in"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "cw-card-sub",
      style: {
        fontSize: 11,
        marginTop: 3
      }
    }, "Workshop slip")))), !o.cancelled && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("hr", {
      className: "cw-divider"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "cw-pill",
      style: {
        textAlign: "center",
        display: "block",
        color: o.workshopDone ? "var(--green)" : "var(--text-muted)",
        borderColor: o.workshopDone ? "var(--green)" : "var(--border)"
      }
    }, o.workshopDone ? "Workshop: done" : "Workshop: in progress"), o.workshopDone && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 10
      }
    }, /*#__PURE__*/React.createElement(SlideToVerify, {
      confirmed: !!o.clientConfirmed,
      onVerify: () => verifyOrder(o.id)
    })))), Number(o.wireReturned) > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: 13,
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-muted)"
      }
    }, "Wire returned (bad condition)"), /*#__PURE__*/React.createElement("span", {
      className: "cw-mono"
    }, fmtNum(o.wireReturned), "g")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: 13,
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-muted)"
      }
    }, "Rate"), /*#__PURE__*/React.createElement("span", {
      className: "cw-mono"
    }, "₹", fmtMoney(o.ratePerKg), " / kg")), /*#__PURE__*/React.createElement("div", {
      className: "cw-total-row",
      style: {
        fontSize: 15
      }
    }, "Total cost ", /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: "auto",
        marginRight: 6
      }
    }, "₹"), fmtMoney(o.totalCost)), o.workshopFeedback && /*#__PURE__*/React.createElement("div", {
      className: "cw-card-sub",
      style: {
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement("b", {
      style: {
        color: "var(--text)"
      }
    }, "Workshop notes:"), " ", o.workshopFeedback), /*#__PURE__*/React.createElement("hr", {
      className: "cw-divider"
    }), /*#__PURE__*/React.createElement(CommentBox, {
      label: "Your comment",
      initialValue: o.clientComment || "",
      onSave: text => saveComment(o.id, text)
    }), /*#__PURE__*/React.createElement("hr", {
      className: "cw-divider"
    }), /*#__PURE__*/React.createElement(OrderTimeline, {
      order: o
    })));
  })), clientTab === "catalog" && /*#__PURE__*/React.createElement(CatalogView, {
    items: items,
    photoMap: photoMap,
    clientRates: clientRates,
    clientId: activeClient.id,
    onPhoto: setLightboxSrc
  }), /*#__PURE__*/React.createElement("div", {
    className: "cw-section-title"
  }, "Help"), /*#__PURE__*/React.createElement(HelpGuide, null), /*#__PURE__*/React.createElement("div", {
    className: "cw-section-title"
  }, "About"), /*#__PURE__*/React.createElement(AboutLegal, null), /*#__PURE__*/React.createElement(PhotoLightbox, {
    src: lightboxSrc,
    onClose: () => setLightboxSrc(null)
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));