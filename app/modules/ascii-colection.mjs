const ignore = ["➤", "──"];
const lvl = ["├", "└", "│", "╧"];

const MJS = "📦";
const JS = "📄";
const JS_WEB = "🔗";
const JSX = "📄";
const JSX_WEB = "🔗";
const JSXCSS = "🖼️";
const CSS = "🎨";
const defer = "🐌";

const DIR = "📁";
const noDIR = "🗀";
const DIR_WEB = "🌐";

const decor = {
  enRaiz: "🏠",
  CSS,
  JSModule: MJS,
  MJS,
  JS,
  JS_WEB,
  defer,
  JSX,
  JSX_WEB,
  JSXCSS,
  DIR,
  DIR_WEB,
  noDIR,
  ramas: [DIR_WEB, DIR, noDIR],
  hojas: [JS_WEB, JSX_WEB, JS, JSX, CSS, JSXCSS, "🏠", MJS],
};

export { decor, ignore, lvl };
