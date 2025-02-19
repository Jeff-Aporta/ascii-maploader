"use strict";

var _excluded = ["children", "valor", "index"];
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var themename = function (_ref) {
  var ls = localStorage.getItem("theme");
  var w = window["theme-config-name"];
  return (_ref = w !== null && w !== void 0 ? w : ls) !== null && _ref !== void 0 ? _ref : "light";
}();
var isThemeDark = themename === "dark";
if (typeof window != "undefined" && window["MaterialUI"]) {
  Object.assign(window, window["MaterialUI"]);
}
var palette = function () {
  var white = {
    main: "#fff",
    contrastText: "#000"
  };
  var black = {
    main: "#000",
    contrastText: "#fff"
  };
  var contrastText = isThemeDark ? "#fff" : "#000";
  var uncontrastText = isThemeDark ? "#000" : "#fff";
  return {
    primary: {
      main: "#1E90FF",
      contrastText: contrastText
    },
    darkprimary: {
      main: "#003366",
      contrastText: contrastText
    },
    secondary: {
      main: isThemeDark ? "#387FC7" : "#ccccff",
      contrastText: contrastText
    },
    success: {
      main: "#32CD32",
      contrastText: contrastText
    },
    atentionBlue: {
      main: "#00BFFF",
      contrastText: uncontrastText
    },
    atentionGreen: {
      main: "#00FA9A",
      contrastText: uncontrastText
    },
    white: white,
    black: black,
    contrast: isThemeDark ? white : black,
    uncontrast: isThemeDark ? black : white
  };
}();
var typography = {
  fontSize: 12,
  button: {
    textTransform: "none"
  }
};
var components = {
  MuiAccordionDetails: {
    styleOverrides: {
      root: {
        padding: 0
      }
    }
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        // Aplica estos estilos solo si el Paper está dentro de un Accordion
        "&.MuiAccordionDetails-root": {
          backgroundColor: "transparent",
          // Fondo transparente
          boxShadow: "none" // Opcional: elimina la sombra
        }
      }
    }
  },
  MuiButton: {
    styleOverrides: {
      root: {
        margin: 0
      }
    }
  }
};
var theme = responsiveFontSizes(isThemeDark ? createTheme({
  typography: typography,
  components: components,
  palette: _objectSpread({
    mode: "dark",
    background: {
      "default": "#112",
      paper: "#05051f"
    }
  }, palette)
}) : createTheme({
  typography: typography,
  components: components,
  palette: _objectSpread({
    mode: "light"
  }, palette)
}));
function _cascade() {
  setTimeout(PR.prettyPrint);
  var titulo = "Modo cascada";
  var ex = loadStringsSync("static/jsx/fragmentos/frag-02.txt");
  return /*#__PURE__*/React.createElement($FMD, null, /*#__PURE__*/React.createElement($index, {
    label: "Inicio",
    variant: "h2",
    className: "nowrap"
  }, titulo), /*#__PURE__*/React.createElement($$h, null), "En lugar de escribir manualmente cada etiqueta de HTML para cargar tus dependencias, puedes usar un flujo de comandos que se encadenan de manera ordenada y l\xF3gica, lo que imita la estructura de un \xE1rbol de archivos.", /*#__PURE__*/React.createElement($PR, {
    lang: "html",
    className: "pad-10px mh-20px"
  }, ex), /*#__PURE__*/React.createElement($CardDef, {
    title: ".tree(name_root)"
  }, "La funci\xF3n `.tree(name_root)` se utiliza para iniciar la creaci\xF3n de una estructura de \xE1rbol en tu proyecto, donde `name_root` representa el nombre de la ra\xEDz del \xE1rbol. Esta funci\xF3n establece el punto de partida para organizar tus archivos y carpetas de manera jer\xE1rquica y modular.", /*#__PURE__*/React.createElement($h, null), "Al invocar esta funci\xF3n, est\xE1s creando un contenedor que te permitir\xE1 a\xF1adir diferentes elementos, como archivos de estilo, scripts y componentes, de forma ordenada. Esto ayuda a mantener tu proyecto limpio y f\xE1cil de navegar, ya que puedes ver claramente c\xF3mo se relacionan los diferentes archivos entre s\xED.", /*#__PURE__*/React.createElement($h, null), "Un ejemplo de c\xF3mo usar esta funci\xF3n es el siguiente:", /*#__PURE__*/React.createElement($PR, {
    elevation: 0,
    lang: "js"
  }, "var my_tree = asciiMap.tree(\"name-root\");"), "En este caso, my_tree ser\xE1 el \xE1rbol que contiene todos los elementos que vayas a agregar a partir de este punto. Esta organizaci\xF3n es fundamental para proyectos m\xE1s complejos, donde es necesario mantener una estructura clara para facilitar el mantenimiento y la escalabilidad del c\xF3digo."), /*#__PURE__*/React.createElement($$h, null), /*#__PURE__*/React.createElement($hr, null), /*#__PURE__*/React.createElement($$h, null), "#### Funciones de agregaci\xF3n", /*#__PURE__*/React.createElement($CardDef, {
    title: ".css(...filesname)"
  }, "Esta funci\xF3n se utiliza para agregar archivos de estilo en formato .css al \xE1rbol de tu proyecto. Por ejemplo, puedes escribir:", /*#__PURE__*/React.createElement($PR, {
    elevation: 0,
    lang: "js"
  }, "tree.css(\"style1\",\"style2\",\"style3\");"), "para incluir varios estilos a la vez."), /*#__PURE__*/React.createElement($CardDef, {
    title: ".js(...filesname)"
  }, "Con esta funci\xF3n, puedes agregar archivos de JavaScript en formato .js al \xE1rbol. Un ejemplo ser\xEDa:", /*#__PURE__*/React.createElement($PR, {
    elevation: 0,
    lang: "js"
  }, "tree.js(\"logic1\",\"logic2\",\"logic3\");"), "donde puedes a\xF1adir m\xFAltiples archivos de l\xF3gica de tu aplicaci\xF3n."), /*#__PURE__*/React.createElement($CardDef, {
    title: ".jsx(...filesname)"
  }, "Similar a la funci\xF3n anterior, esta se usa para agregar archivos de JavaScript que contienen sintaxis JSX, com\xFAnmente utilizados con React. Por ejemplo, al escribir", /*#__PURE__*/React.createElement($PR, {
    elevation: 0,
    lang: "js"
  }, "tree.jsx(\"react1\",\"react2\",\"react3\");"), "estar\xE1s incluyendo varios componentes React en tu \xE1rbol."), "Estas funciones simplifican la gesti\xF3n de archivos en tu proyecto, permiti\xE9ndote organizar y cargar tus dependencias de manera eficiente.", /*#__PURE__*/React.createElement($$h, null), /*#__PURE__*/React.createElement($hr, null), /*#__PURE__*/React.createElement($$h, null), "#### Ramificaci\xF3n", /*#__PURE__*/React.createElement($CardDef, {
    title: ".subDir(name_branch, subspace)"
  }, "permite seleccionar una rama espec\xEDfica en la rama actual.", /*#__PURE__*/React.createElement($$h, null), /*#__PURE__*/React.createElement($, {
    variant: "h9"
  }, /*#__PURE__*/React.createElement($secundario, null, "Ejemplo")), /*#__PURE__*/React.createElement($PR, {
    elevation: 0,
    lang: "js"
  }, ["tree.subDir(\"name-branch\", branch=>{", "    branch.css(\"styles\").js(\"script\").jsx(\"App\");", "})"].join("\n"))), /*#__PURE__*/React.createElement($$h, null), /*#__PURE__*/React.createElement($hr, null), /*#__PURE__*/React.createElement($$h, null), "##### Funciones de conclusi\xF3n", /*#__PURE__*/React.createElement($h, null), "Las funciones de conclusi\xF3n son aquellas que detienen la cadena de llamadas en cascada, permitiendo finalizar la construcci\xF3n de tu \xE1rbol de dependencias.", /*#__PURE__*/React.createElement($CardDef, {
    title: ".writehtml()"
  }, "Esta funci\xF3n se encarga de \u201Cquemar\u201D el \xE1rbol en el documento HTML. Al ejecutarla, se insertan directamente las etiquetas generadas en el archivo HTML, asegurando que todas las dependencias est\xE9n correctamente integradas en tu p\xE1gina."), /*#__PURE__*/React.createElement($CardDef, {
    title: ".toString()"
  }, "devuelve una representaci\xF3n en forma de cadena de texto del \xE1rbol de dependencias que has construido. Esta funci\xF3n es \xFAtil para visualizar de manera r\xE1pida y clara la estructura jer\xE1rquica de tus archivos y carpetas.", /*#__PURE__*/React.createElement($h, null), "Por ejemplo, al usar la funci\xF3n de esta forma:", /*#__PURE__*/React.createElement($PR, {
    elevation: 0,
    lang: "js"
  }, ["asciiMap.tree(\"public\").subDir(\"ex-branch\", branch=>{", "    branch.css(\"style\").js(\"script\").jsx(\"App\");", "}).toString()"].join("\n")), "El resultado ser\xE1 una cadena que muestra la organizaci\xF3n de tus archivos en un formato que imita la estructura de un \xE1rbol de directorios, como el siguiente:", /*#__PURE__*/React.createElement($Copy, {
    className: "mh-10px pad-10px dark-02"
  }, /*#__PURE__*/React.createElement("pre", null, /*#__PURE__*/React.createElement("code", {
    className: "c-khaki"
  }, asciiMap.tree("public").subDir("ex-branch", function (branch) {
    branch.css("style").js("script").jsx("App");
  }).toString())))), /*#__PURE__*/React.createElement($CardDef, {
    title: ".toHtml()"
  }, "En lugar de modificar el HTML directamente, esta funci\xF3n retorna un arreglo que contiene las cadenas de texto de las etiquetas que se deber\xEDan incluir en el documento. Esto es \xFAtil si deseas manipular o revisar las etiquetas antes de insertarlas en el HTML.", /*#__PURE__*/React.createElement($h, null), "Por ejemplo, al utilizar la funci\xF3n de esta manera:", /*#__PURE__*/React.createElement($PR, {
    elevation: 0,
    lang: "js"
  }, ["asciiMap.tree(\"public\").subDir(\"ex-branch\", branch=>{", "    branch.css(\"style\").js(\"script\").jsx(\"App\");", "}).toHtml()"].join("\n")), "El resultado ser\xE1 un arreglo que incluye las etiquetas necesarias para cargar los archivos correspondientes:", /*#__PURE__*/React.createElement($PR, {
    elevation: 0,
    lang: "js"
  }, "[", /*#__PURE__*/React.createElement("br", null), asciiMap.tree("public").subDir("ex-branch", function (branch) {
    branch.css("style").js("script").jsx("App");
  }).toHtml().map(function (e) {
    return "  '" + e + "'";
  }).join(",\n"), /*#__PURE__*/React.createElement("br", null), "]")), /*#__PURE__*/React.createElement($CardDef, {
    title: ".toJson()"
  }, "convierte la estructura del \xE1rbol de dependencias que has creado en un formato JSON, lo que facilita su manipulaci\xF3n y almacenamiento. Este formato es especialmente \xFAtil si deseas integrar los datos en aplicaciones que manejan estructuras JSON o si necesitas realizar operaciones adicionales sobre la informaci\xF3n.", /*#__PURE__*/React.createElement("p", null, "Por ejemplo, al utilizar la funci\xF3n de esta manera:"), /*#__PURE__*/React.createElement($PR, {
    elevation: 0,
    lang: "js"
  }, ["asciiMap.tree(\"public\").subDir(\"ex-branch\", branch=>{", "    branch.css(\"style\").js(\"script\").jsx(\"App\");", "}).toJson()"].join("\n")), /*#__PURE__*/React.createElement("p", null, "El resultado ser\xE1 un objeto JSON que representa la jerarqu\xEDa de tus archivos de la siguiente manera:"), /*#__PURE__*/React.createElement($PR, {
    elevation: 0,
    lang: "json"
  }, JSON.stringify(asciiMap.tree("public").subDir("ex-branch", function (branch) {
    branch.css("style").js("script").jsx("App");
  }).toJson(), null, 1).replaceAll("\"type\": \"text/javascript\"", "").split("\n").filter(function (e) {
    return Boolean(e.trim());
  }).join("\n")), /*#__PURE__*/React.createElement("p", null, "En esta representaci\xF3n, cada carpeta y archivo est\xE1 claramente definido, permitiendo ver su relaci\xF3n dentro de la estructura del proyecto. Esto no solo facilita la visualizaci\xF3n, sino que tambi\xE9n permite que otros sistemas procesen esta informaci\xF3n de manera m\xE1s eficiente.")));
}
function App() {
  return /*#__PURE__*/React.createElement(Playground, {
    nombre_proyecto: "proyecto-de-prueba-1",
    templateHTML: "iframe.html",
    HTML: "<h1>Hola desde el encabezado 1</h1>",
    JS: "console.log(\"Hola desde JavaScript\")",
    index: 0
  });
}
ReactDOM.render(/*#__PURE__*/React.createElement(ThemeProvider, {
  theme: theme
}, /*#__PURE__*/React.createElement(CssBaseline, null), /*#__PURE__*/React.createElement(App, null)), document.getElementById("root"));
function initApp() {
  setup();
  burn_template();
  ready();
  function setup() {
    Object.assign(config_template, {
      banner: {
        left: {
          label: "Documentación",
          logo: "static/img/icon.svg"
        },
        right: {
          social: {
            github: {
              label: "Jeff-Aporta",
              url: "https://github.com/Jeff-Aporta"
            },
            youtube: {
              label: "YouTube",
              url: "https://www.youtube.com/@JeffAporta"
            },
            whatsapp: {
              label: "WhatsApp",
              url: "https://wa.link/1tmqmt"
            },
            telegram: {
              label: "Telegram",
              url: "https://t.me/jeffAporta"
            }
          }
        }
      },
      default_id: "intro",
      mapSite: _mapSite(),
      repo: {
        name: "ASCII Map Loader",
        url: "https://github.com/Jeff-Aporta/ascii-maploader"
      }
    });
  }
  function burn_template() {
    ReactDOM.render(/*#__PURE__*/React.createElement(App, null), document.getElementById("root"));
  }
  function ready() {
    changeContent({
      id: get_id_param()
    });
  }
  function _mapSite() {
    return [{
      lbl: " "
    }, {
      component: function component() {
        return /*#__PURE__*/React.createElement("center", null, /*#__PURE__*/React.createElement(Button, {
          color: "darkprimary",
          variant: "contained",
          startIcon: /*#__PURE__*/React.createElement("i", {
            className: "fa fa-globe"
          }),
          target: "_blank",
          href: "https://jeff-aporta.github.io/portafolio/"
        }, "M\xE1s en mi portafolio"));
      }
    }, {
      lbl: " - "
    }, {
      lbl: "Empecemos"
    }, {
      lbl: "Introducción",
      id: "intro",
      content: function content() {
        return /*#__PURE__*/React.createElement(_intro, null);
      },
      i: "fa-regular fa-file-lines"
    }, {
      lbl: "Acerca del lenguaje",
      id: "learn",
      content: function content() {
        return /*#__PURE__*/React.createElement(_learn, null);
      },
      i: "fa-solid fa-chalkboard-user"
    }, {
      lbl: " "
    }, {
      lbl: "Uso"
    }, {
      lbl: "Objeto del controlador",
      id: "cascade",
      content: function content() {
        return /*#__PURE__*/React.createElement(_cascade, null);
      },
      i: "fa-solid fa-code"
    }, {
      lbl: "Lenguaje interpretado",
      id: "string",
      content: function content() {
        return /*#__PURE__*/React.createElement(_string, null);
      },
      i: "fa-solid fa-code"
    },
    // {
    //   lbl: "Modo de uso",
    //   childs: [
    //     {
    //       lbl: "Cascada",
    //       id: "cascade",
    //       content: () => <_cascade />,
    //     },
    //     {
    //       lbl: "Inserción por cadena",
    //       id: "string",
    //       content: () => <_string />,
    //     },
    //   ],
    // },
    {
      lbl: "  "
    }];
  }
}
function _intro() {
  return /*#__PURE__*/React.createElement($FMD, null, /*#__PURE__*/React.createElement(_$Bienvenido, {
    name_app: "ASCII Map Loader",
    img_url: "static/img/thumb.png"
  }, "Es un lenguaje interpretado que permite cargar dependencias de archivos `.jsx`, `.js` y `.css`. Se destaca por estar dise\xF1ado para inyectar estos elementos en tiempo real al cargar un documento HTML mediante el uso de la funci\xF3n `document.write()`.", /*#__PURE__*/React.createElement($$h, null), "Perfecto para cuando est\xE1s haciendo desarrollos de multiples m\xF3dulos en un proyecto, personalmente lo uso para comprobar que los archivos `.mjs` sean compatibles en las dependencias de p\xE1ginas est\xE1ticas o que deban ser usadas necesariamente en el cliente."), /*#__PURE__*/React.createElement($$h, null), /*#__PURE__*/React.createElement($hr, null), /*#__PURE__*/React.createElement($h, null), /*#__PURE__*/React.createElement(_$Instalación, {
    url_cdn: "https://jeff-aporta.github.io/ascii-maploader/static/js/index.all.min.js",
    npm_pack: "ascii-maploader"
  }), /*#__PURE__*/React.createElement($$h, null), /*#__PURE__*/React.createElement($hr, null), /*#__PURE__*/React.createElement($$h, null), /*#__PURE__*/React.createElement(_$testing, {
    src_params_iife: {
      url: "https://jeff-aporta.github.io/ascii-maploader/static/js/index.all.min.js",
      name: "asciiMap",
      comment: "{CLI: {…}, html: ƒ, json: ƒ, tree: ƒ, writehtml: ƒ, …} --> all OK!"
    }
  }), /*#__PURE__*/React.createElement($$h, null), /*#__PURE__*/React.createElement($hr, null), /*#__PURE__*/React.createElement($$h, null), /*#__PURE__*/React.createElement($index, {
    variant: "h3",
    label: "Funciones Relevantes"
  }, "Funciones Relevantes"), /*#__PURE__*/React.createElement($$h, null), /*#__PURE__*/React.createElement($, {
    variant: "h8"
  }, /*#__PURE__*/React.createElement($secundario, null, "Estructuraci\xF3n de cascada")), /*#__PURE__*/React.createElement($CardDef, {
    title: "tree"
  }, "Funci\xF3n que inicia la generaci\xF3n de un \xE1rbol en estructura de cascada"), /*#__PURE__*/React.createElement($, {
    variant: "h8"
  }, /*#__PURE__*/React.createElement($secundario, null, "Funciones de carga")), /*#__PURE__*/React.createElement($CardDef, {
    title: "writehtml"
  }, "Funci\xF3n que quema las dependencias al HTML"), /*#__PURE__*/React.createElement($CardDef, {
    title: "CLI"
  }, "Gestor enlaces a librerias recurrentes como react y babel."), /*#__PURE__*/React.createElement($, {
    variant: "h8"
  }, /*#__PURE__*/React.createElement($secundario, null, "Funciones de conversi\xF3n")), /*#__PURE__*/React.createElement($CardDef, {
    title: "html"
  }, "Funci\xF3n que retorna un arreglo de etiquetas que importan las dependencias"), /*#__PURE__*/React.createElement($CardDef, {
    title: "json"
  }, "Funci\xF3n que retorna un JSON que representa la estructura de dependencias"));
}
function _learn() {
  var titulo = "Lenguaje de dependencias";
  var ex = loadStringsSync("static/jsx/fragmentos/frag-01.txt");
  return /*#__PURE__*/React.createElement($FMD, null, /*#__PURE__*/React.createElement($index, {
    label: "Empecemos",
    variant: "h2",
    className: "nowrap"
  }, titulo), /*#__PURE__*/React.createElement($$h, null), "El lenguaje de carga de dependencias representado en la estructura del ejemplo permite gestionar de manera eficiente la inclusi\xF3n de m\xFAltiples archivos de script y estilo en un proyecto web, facilitando la organizaci\xF3n y mantenibilidad del c\xF3digo. A continuaci\xF3n, se describen sus propiedades y ventajas en comparaci\xF3n con la inserci\xF3n manual de scripts y enlaces en HTML:", /*#__PURE__*/React.createElement($$h, null), /*#__PURE__*/React.createElement($, {
    variant: "h9"
  }, /*#__PURE__*/React.createElement($secundario, null, "Ejemplo de un \xE1rbol de carga de dependencias.")), /*#__PURE__*/React.createElement($$h, null), "Imagina que est\xE1s organizando un proyecto web, y para ello, decides estructurar tus archivos de manera ordenada. Este es un ejemplo de c\xF3mo podr\xEDa verse el \xE1rbol de carga de dependencias de tu proyecto:", /*#__PURE__*/React.createElement($CardCopy, {
    className: "pad-10px mh-20px",
    style: {
      color: "Khaki"
    }
  }, /*#__PURE__*/React.createElement("pre", null, ex)), /*#__PURE__*/React.createElement($h, null), "Cada uno de los archivos en este \xE1rbol de directorios puede ser referenciado en un documento HTML de la siguiente manera:", /*#__PURE__*/React.createElement($PR, {
    lang: "html",
    className: "pad-10px mh-20px",
    style: {
      color: "Khaki"
    }
  }, asciiMap.html(ex).join("\n")), "Ahora, analiza ambas formas de organizar la carga de dependencias. La estructura de carpetas y archivos proporciona una representaci\xF3n visual clara de la organizaci\xF3n de tu proyecto. Puedes ver de un vistazo c\xF3mo est\xE1n distribuidos los componentes y qu\xE9 archivos est\xE1n relacionados entre s\xED.", /*#__PURE__*/React.createElement($h, null), "Por otro lado, la carga de recursos en el HTML, aunque funcional, puede parecer un poco ca\xF3tica y menos intuitiva. En esta cadena de scripts y enlaces, puede ser m\xE1s dif\xEDcil identificar r\xE1pidamente de d\xF3nde proviene cada archivo y c\xF3mo se relaciona con los dem\xE1s.", /*#__PURE__*/React.createElement($$h, null), /*#__PURE__*/React.createElement(Card, {
    className: "pad-20px mh-10px"
  }, "Ahora que has comparado ambas opciones, t\xFA mismo puedes juzgar cu\xE1l de ellas es m\xE1s entendible. La organizaci\xF3n jer\xE1rquica no solo facilita la gesti\xF3n del proyecto, sino que tambi\xE9n mejora la legibilidad y el mantenimiento del c\xF3digo a lo largo del tiempo. Un \xE1rbol de carga de dependencias bien estructurado te permitir\xE1 tener un panorama claro de tu proyecto y ser\xE1 de gran ayuda para ti y cualquier colaborador que se sume al trabajo."), /*#__PURE__*/React.createElement($h, null), /*#__PURE__*/React.createElement($index, {
    variant: "h5"
  }, "Propiedades"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement($CardDef, {
    title: "Estructura Modular"
  }, "La carga de dependencias se organiza de forma jer\xE1rquica, permitiendo una mejor visualizaci\xF3n y acceso a componentes y hojas de estilo. Por ejemplo, los archivos se integran de forma ordenada en como aparecen en la expresi\xF3n."), /*#__PURE__*/React.createElement($CardDef, {
    title: "Gesti\xF3n Centralizada"
  }, "Todos los recursos necesarios, desde componentes JavaScript hasta hojas de estilo CSS, se agrupan en carpetas espec\xEDficas como `src` y `componentes`, lo que facilita la localizaci\xF3n y edici\xF3n de ruta de archivos."), /*#__PURE__*/React.createElement($CardDef, {
    title: "Soporte para Librer\xEDas y Envolventes"
  }, "La inclusi\xF3n de carpetas dedicadas a librer\xEDas y envolventes en `paginas` y `main` ayuda a segmentar el proyecto en subm\xF3dulos m\xE1s manejables."), /*#__PURE__*/React.createElement($h, null), /*#__PURE__*/React.createElement($index, {
    variant: "h5"
  }, "Ventajas"), /*#__PURE__*/React.createElement($h, null), /*#__PURE__*/React.createElement($CardDef, {
    title: "Mantenibilidad y Escalabilidad"
  }, "A diferencia de la inclusi\xF3n manual de m\xFAltiples `<script>` y ` <link>` en un archivo HTML, la carga de dependencias con este enfoque permite modificar o actualizar componentes y estilos de manera centralizada sin necesidad de buscar y modificar cada referencia en el documento HTML."), /*#__PURE__*/React.createElement($CardDef, {
    title: "Mejor Organizaci\xF3n de C\xF3digo"
  }, "La estructura de carpetas ayuda a separar el contenido de la l\xF3gica de la aplicaci\xF3n, reduciendo la confusi\xF3n y facilitando la colaboraci\xF3n entre desarrolladores."), /*#__PURE__*/React.createElement($CardDef, {
    title: "Uso de bifurcaciones seg\xFAn casos"
  }, "Las estructuras condicionales como `if` o `switch` permiten gestionar la carga de dependencias de forma flexible, evitando la inclusi\xF3n innecesaria de recursos o adaptando la carga a diferentes situaciones. Esto es \xFAtil para optimizar el rendimiento y personalizar la experiencia seg\xFAn las condiciones espec\xEDficas de cada caso."));
}
var index_code_mirror = 0;
function Playground(props) {
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    openDialogDownload = _React$useState2[0],
    setOpenDialogDownload = _React$useState2[1];
  var abrirAlertaDescarga = function abrirAlertaDescarga() {
    setOpenDialogDownload(true);
  };
  var cerrarAlerta = function cerrarAlerta() {
    setOpenDialogDownload(false);
  };
  var init = false;
  var editorHTML, editorCSS, editorJS, editorJSX;
  var printWidth = 60;
  var transformar_columna = 1100;
  var textoHTML = React.useRef(HTML !== null && HTML !== void 0 ? HTML : "");
  var textoCSS = React.useRef(CSS !== null && CSS !== void 0 ? CSS : "");
  var textoJS = React.useRef(JS !== null && JS !== void 0 ? JS : "");
  var textoJSX = React.useRef(JSX !== null && JSX !== void 0 ? JSX : "");
  var idR = React.useRef(Math.random().toString(30).replace("0.", ""));
  var ref = React.useRef(null);
  var nombre_proyecto = props.nombre_proyecto,
    _props$files = props.files,
    files = _props$files === void 0 ? {} : _props$files,
    HTML = props.HTML,
    CSS = props.CSS,
    JS = props.JS,
    JSX = props.JSX,
    _props$index = props.index,
    index = _props$index === void 0 ? -1 : _props$index,
    _props$hideHTML = props.hideHTML,
    hideHTML = _props$hideHTML === void 0 ? false : _props$hideHTML,
    _props$hideCSS = props.hideCSS,
    hideCSS = _props$hideCSS === void 0 ? false : _props$hideCSS,
    _props$hideJS = props.hideJS,
    hideJS = _props$hideJS === void 0 ? false : _props$hideJS,
    _props$hideJSX = props.hideJSX,
    hideJSX = _props$hideJSX === void 0 ? false : _props$hideJSX,
    templateHTML = props.templateHTML;
  React.useEffect(function () {
    cargarArchivos();
    function cargarArchivos() {
      return _cargarArchivos.apply(this, arguments);
    }
    function _cargarArchivos() {
      _cargarArchivos = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _ref2, _ref3, _ref4, _ref5, _html, _css, _js, _jsx;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              console.log("Cargando archivos...");
              if (!(index != -1 && index <= index_code_mirror)) {
                _context.next = 22;
                break;
              }
              _context.next = 4;
              return procesarArreglo(files.HTML);
            case 4:
              _html = _context.sent;
              _context.next = 7;
              return procesarArreglo(files.CSS);
            case 7:
              _css = _context.sent;
              _context.next = 10;
              return procesarArreglo(files.JS);
            case 10:
              _js = _context.sent;
              _context.next = 13;
              return procesarArreglo(files.JSX);
            case 13:
              _jsx = _context.sent;
              index_code_mirror++;
              textoHTML.current = (_ref2 = HTML !== null && HTML !== void 0 ? HTML : _html) !== null && _ref2 !== void 0 ? _ref2 : "";
              textoCSS.current = (_ref3 = CSS !== null && CSS !== void 0 ? CSS : _css) !== null && _ref3 !== void 0 ? _ref3 : "";
              textoJS.current = (_ref4 = JS !== null && JS !== void 0 ? JS : _js) !== null && _ref4 !== void 0 ? _ref4 : "";
              textoJSX.current = (_ref5 = JSX !== null && JSX !== void 0 ? JSX : _jsx) !== null && _ref5 !== void 0 ? _ref5 : "";
              formatearCodigo();
              ejecutarCodigo();
              return _context.abrupt("return");
            case 22:
              setTimeout(cargarArchivos, 1000);
            case 23:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return _cargarArchivos.apply(this, arguments);
    }
    function procesarArreglo(_x) {
      return _procesarArreglo.apply(this, arguments);
    }
    function _procesarArreglo() {
      _procesarArreglo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(arr) {
        var loadText, _iterator, _step, file, cargar, _cargar;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _cargar = function _cargar3() {
                _cargar = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(ruta) {
                  var response, texto;
                  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.prev = 0;
                        _context2.next = 3;
                        return fetch(ruta);
                      case 3:
                        response = _context2.sent;
                        if (response.ok) {
                          _context2.next = 6;
                          break;
                        }
                        throw new Error("Error al obtener el archivo: " + response.statusText);
                      case 6:
                        _context2.next = 8;
                        return response.text();
                      case 8:
                        texto = _context2.sent;
                        return _context2.abrupt("return", texto);
                      case 12:
                        _context2.prev = 12;
                        _context2.t0 = _context2["catch"](0);
                      case 14:
                        return _context2.abrupt("return", "");
                      case 15:
                      case "end":
                        return _context2.stop();
                    }
                  }, _callee2, null, [[0, 12]]);
                }));
                return _cargar.apply(this, arguments);
              };
              cargar = function _cargar2(_x2) {
                return _cargar.apply(this, arguments);
              };
              loadText = [];
              if (arr) {
                _context3.next = 5;
                break;
              }
              return _context3.abrupt("return");
            case 5:
              if (!Array.isArray(arr)) {
                arr = [arr];
              }
              _iterator = _createForOfIteratorHelper(arr);
              _context3.prev = 7;
              _iterator.s();
            case 9:
              if ((_step = _iterator.n()).done) {
                _context3.next = 18;
                break;
              }
              file = _step.value;
              _context3.t0 = loadText;
              _context3.next = 14;
              return cargar(file);
            case 14:
              _context3.t1 = _context3.sent;
              _context3.t0.push.call(_context3.t0, _context3.t1);
            case 16:
              _context3.next = 9;
              break;
            case 18:
              _context3.next = 23;
              break;
            case 20:
              _context3.prev = 20;
              _context3.t2 = _context3["catch"](7);
              _iterator.e(_context3.t2);
            case 23:
              _context3.prev = 23;
              _iterator.f();
              return _context3.finish(23);
            case 26:
              return _context3.abrupt("return", loadText.join("\n\n"));
            case 27:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[7, 20, 23, 26]]);
      }));
      return _procesarArreglo.apply(this, arguments);
    }
  }, []);
  return /*#__PURE__*/React.createElement(ComponenteRetorno, null);
  function ComponenteRetorno() {
    var _React$useState3 = React.useState(window.innerWidth),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      width = _React$useState4[0],
      setWidth = _React$useState4[1];
    React.useEffect(function () {
      function handleResize() {
        setWidth(window.innerWidth);
      }
      window.addEventListener("resize", handleResize);
      return function () {
        return window.removeEventListener("resize", handleResize);
      };
    }, []);
    React.useLayoutEffect(function () {
      formatearCodigo();
      ejecutarCodigo();
      if (init) {
        crearEditores();
        return;
      }
      init = true;
    }, [width]);
    return /*#__PURE__*/React.createElement("div", {
      ref: ref,
      className: fluidCSS().gtX(transformar_columna, {
        maxHeight: "400px"
      }).ltX(transformar_columna, {
        flexWrap: "wrap",
        flexDirection: "column-reverse"
      }).end("codemirror-instance estilo-fila-mini ".concat(isThemeDark ? "a" : "light"))
    }, /*#__PURE__*/React.createElement(PestañasVerticales, null), /*#__PURE__*/React.createElement("iframe", {
      src: "".concat(templateHTML, "?iframeId=").concat(idR.current),
      id: "output",
      className: fluidCSS().gtX(transformar_columna, {
        width: "35%",
        aspectRatio: "1"
      }).ltX(transformar_columna, {
        width: "100%",
        minHeight: "50vh"
      }).end()
    }), /*#__PURE__*/React.createElement(ConfirmarDescarga, {
      titulo: "Descargar ".concat(nombre_proyecto, ".zip"),
      mensaje: "Continuar con la descarga"
    }));
  }
  function PestañasVerticales() {
    var _React$useState5 = React.useState(0),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      valor = _React$useState6[0],
      setValor = _React$useState6[1];
    var manejarCambio = function manejarCambio(evento, nuevoValor) {
      setValor(nuevoValor);
    };
    React.useLayoutEffect(function () {
      crearEditores();
      formatearCodigo();
    }, [valor]);
    var classEditor = fluidCSS().gtX(transformar_columna, {
      maxWidth: "98%",
      width: "calc(100% + 60px)"
    }).end("editor-container");
    var editor_html = /*#__PURE__*/React.createElement("div", {
      id: "editor-html",
      className: classEditor
    }, /*#__PURE__*/React.createElement("textarea", {
      id: "html-code"
    }, textoHTML.current));
    var editor_css = /*#__PURE__*/React.createElement("div", {
      id: "editor-css",
      className: classEditor
    }, /*#__PURE__*/React.createElement("textarea", {
      id: "css-code"
    }, textoCSS.current));
    var editor_js = /*#__PURE__*/React.createElement("div", {
      id: "editor-js",
      className: classEditor
    }, /*#__PURE__*/React.createElement("textarea", {
      id: "js-code"
    }, textoJS.current));
    var editor_jsx = /*#__PURE__*/React.createElement("div", {
      id: "editor-jsx",
      className: classEditor
    }, /*#__PURE__*/React.createElement("textarea", {
      id: "jsx-code"
    }, textoJSX.current));
    var i = 0;
    var j = 0;
    return /*#__PURE__*/React.createElement(Box, {
      sx: {
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        alignItems: "center",
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement(Tabs, {
      orientation: "vertical",
      value: valor,
      onChange: manejarCambio,
      sx: {
        borderRight: 1,
        borderColor: "divider",
        minHeight: "400px"
      }
    }, hideHTML || /*#__PURE__*/React.createElement(Tab, _extends({
      label: /*#__PURE__*/React.createElement(BotonPestaña, {
        icon: /*#__PURE__*/React.createElement("i", {
          "class": "fa-solid fa-code"
        })
      }, "HTML")
    }, propAccesibilidad(i++))), hideCSS || /*#__PURE__*/React.createElement(Tab, _extends({
      label: /*#__PURE__*/React.createElement(BotonPestaña, {
        icon: /*#__PURE__*/React.createElement("i", {
          "class": "fa-brands fa-css"
        })
      }, "CSS")
    }, propAccesibilidad(i++))), hideJS || /*#__PURE__*/React.createElement(Tab, _extends({
      label: /*#__PURE__*/React.createElement(BotonPestaña, {
        icon: /*#__PURE__*/React.createElement("i", {
          "class": "fa-brands fa-square-js"
        })
      }, "JS")
    }, propAccesibilidad(i++))), hideJSX || /*#__PURE__*/React.createElement(Tab, _extends({
      label: /*#__PURE__*/React.createElement(BotonPestaña, {
        icon: /*#__PURE__*/React.createElement("i", {
          "class": "fa-brands fa-react"
        })
      }, "JSX")
    }, propAccesibilidad(i++)))), hideHTML || /*#__PURE__*/React.createElement(TabPanel, {
      valor: valor,
      index: j++,
      className: "fullWidth"
    }, editor_html), hideCSS || /*#__PURE__*/React.createElement(TabPanel, {
      valor: valor,
      index: j++,
      className: "fullWidth"
    }, editor_css), hideJS || /*#__PURE__*/React.createElement(TabPanel, {
      valor: valor,
      index: j++,
      className: "fullWidth"
    }, editor_js), hideJSX || /*#__PURE__*/React.createElement(TabPanel, {
      valor: valor,
      index: j++,
      className: "fullWidth"
    }, editor_jsx), /*#__PURE__*/React.createElement("div", {
      className: "d-none"
    }, editor_html, editor_css, editor_js, editor_jsx), /*#__PURE__*/React.createElement("div", {
      id: "botones-control"
    }, /*#__PURE__*/React.createElement(Tooltip, {
      title: "Ejecutar c\xF3digo",
      placement: "right"
    }, /*#__PURE__*/React.createElement(IconButton, {
      variant: "contained",
      color: "contrast",
      onClick: ejecutarCodigo,
      id: "ejecutar-codigo"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa fa-play"
    }))), /*#__PURE__*/React.createElement(Tooltip, {
      title: "Descargar",
      placement: "right"
    }, /*#__PURE__*/React.createElement(IconButton, {
      variant: "contained",
      color: "contrast",
      onClick: abrirAlertaDescarga,
      id: "ejecutar-codigo"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa fa-download"
    })))));
    function BotonPestaña(_ref6) {
      var icon = _ref6.icon,
        children = _ref6.children;
      return /*#__PURE__*/React.createElement("big", {
        style: {
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
          width: "100%",
          paddingRight: "10px"
        }
      }, icon, /*#__PURE__*/React.createElement("b", null, children));
    }
    function TabPanel(props) {
      var children = props.children,
        valor = props.valor,
        index = props.index,
        otros = _objectWithoutProperties(props, _excluded);
      return /*#__PURE__*/React.createElement("div", _extends({
        role: "tabpanel",
        hidden: valor !== index,
        id: "vertical-tabpanel-".concat(index),
        "aria-labelledby": "vertical-tab-".concat(index)
      }, otros), valor === index && /*#__PURE__*/React.createElement(Box, {
        sx: {
          p: 3
        }
      }, /*#__PURE__*/React.createElement(Typography, null, children)));
    }
    function propAccesibilidad(index) {
      return {
        id: "vertical-tab-".concat(index),
        "aria-controls": "vertical-tabpanel-".concat(index)
      };
    }
  }
  function crearEditores() {
    var idEditores = ["html-code", "css-code", "js-code", "jsx-code"];
    if (!ref.current) {
      return setTimeout(crearEditores, 50);
    }
    editorHTML = CodeMirror.fromTextArea(ref.current.querySelector("#" + idEditores[0]), {
      mode: "htmlmixed",
      lineNumbers: true,
      theme: asciiMap.CLI.codemirror_theme_name()
    });
    editorHTML.on("change", function (instancia, objetoCambio) {
      textoHTML.current = instancia.getValue();
    });
    editorHTML.on("keydown", capturarComando);
    editorCSS = CodeMirror.fromTextArea(ref.current.querySelector("#" + idEditores[1]), {
      mode: "text/x-scss",
      lineNumbers: true,
      theme: asciiMap.CLI.codemirror_theme_name()
    });
    editorCSS.on("change", function (instancia, objetoCambio) {
      textoCSS.current = instancia.getValue();
    });
    editorCSS.on("keydown", capturarComando);
    editorJS = CodeMirror.fromTextArea(ref.current.querySelector("#" + idEditores[2]), {
      mode: "javascript",
      lineNumbers: true,
      theme: asciiMap.CLI.codemirror_theme_name()
    });
    editorJS.on("change", function (instancia, objetoCambio) {
      textoJS.current = instancia.getValue();
    });
    editorJS.on("keydown", capturarComando);
    editorJSX = CodeMirror.fromTextArea(ref.current.querySelector("#" + idEditores[3]), {
      mode: "javascript",
      lineNumbers: true,
      theme: asciiMap.CLI.codemirror_theme_name()
    });
    editorJSX.on("change", function (instancia, objetoCambio) {
      textoJSX.current = instancia.getValue();
    });
    editorJSX.on("keydown", capturarComando);
    function capturarComando(cm, evento) {
      if (evento.altKey && evento.shiftKey && evento.key === "F") {
        formatearCodigo();
      }
    }
  }
  function ConfirmarDescarga(_ref7) {
    var _ref7$textoConfirmar = _ref7.textoConfirmar,
      textoConfirmar = _ref7$textoConfirmar === void 0 ? "Descargar" : _ref7$textoConfirmar,
      _ref7$textoCancelar = _ref7.textoCancelar,
      textoCancelar = _ref7$textoCancelar === void 0 ? "Cancelar" : _ref7$textoCancelar,
      _ref7$titulo = _ref7.titulo,
      titulo = _ref7$titulo === void 0 ? "Descargar el ejercicio" : _ref7$titulo,
      _ref7$mensaje = _ref7.mensaje,
      mensaje = _ref7$mensaje === void 0 ? "¿Estás seguro de querer descargar el ejercicio?" : _ref7$mensaje;
    return /*#__PURE__*/React.createElement(Dialog, {
      open: openDialogDownload,
      onClose: cerrarAlerta,
      "aria-labelledby": "alert-dialog-title",
      "aria-describedby": "alert-dialog-description"
    }, /*#__PURE__*/React.createElement(DialogTitle, {
      id: "alert-dialog-title"
    }, titulo), /*#__PURE__*/React.createElement(DialogContent, null, /*#__PURE__*/React.createElement(DialogContentText, null, mensaje)), /*#__PURE__*/React.createElement(DialogActions, null, /*#__PURE__*/React.createElement(Button, {
      onClick: function onClick() {
        cerrarAlerta();
      }
    }, textoCancelar), /*#__PURE__*/React.createElement(Button, {
      onClick: function onClick() {
        cerrarAlerta();
        descargarCodigo({
          archivos: _objectSpread({
            "index.html": prettier.format("\n                    <!DOCTYPE html>\n                    <html lang=\"es\">\n                      <head>\n                        <title>".concat(nombre_proyecto, "</title>\n  \n                        <script\n                          type=\"text/javascript\"\n                          src=\"https://jeff-aporta.github.io/ascii-maploader/static/js/index.all.min.js\"\n                        ></script>\n                \n                        <script>\n                          asciiMap.CLI.react_mui_fa();\n                          asciiMap.CLI.fluidCSS();\n                          asciiMap.CLI.JS2CSS();\n                        </script>\n  \n                        <script type=\"text/babel\">\n                          if (typeof window != \"undefined\" && window[\"MaterialUI\"]) {\n                            Object.assign(window, window[\"MaterialUI\"]);\n                          }\n                        </script>\n  \n                        ").concat(textoCSS ? "<link rel=\"stylesheet\" href=\"styles.css\" />" : "", "\n                        ").concat(textoJS ? "<script src=\"script.js\" defer></script>" : "", "\n                        ").concat(textoJSX ? "<script type=\"text/babel\" src=\"script.jsx\"></script>" : "", "\n                      </head>\n                      <body>\n                        ").concat(textoHTML.current, "\n                      </body>\n                    </html>\n                    "), {
              parser: "html",
              plugins: prettierPlugins
            })
          }, function () {
            var retorno = {};
            if (textoCSS) {
              retorno["styles.css"] = textoCSS;
            }
            if (textoJS) {
              retorno["script.js"] = textoJS;
            }
            if (textoJSX) {
              retorno["script.jsx"] = textoJSX;
            }
            return retorno;
          }()),
          nombre_proyecto: nombre_proyecto
        });
      },
      autoFocus: true
    }, textoConfirmar)));
    function descargarCodigo(_ref8) {
      var archivos = _ref8.archivos;
      if (!archivos) {
        console.error("No hay archivos para descargar");
      }
      var zip = new JSZip();
      var carpeta = zip.folder(nombre_proyecto !== null && nombre_proyecto !== void 0 ? nombre_proyecto : "Proyecto");
      Object.entries(archivos).forEach(function (_ref9) {
        var _ref10 = _slicedToArray(_ref9, 2),
          nombre = _ref10[0],
          contenido = _ref10[1];
        carpeta.file(nombre, contenido);
      });
      zip.generateAsync({
        type: "blob"
      }).then(function (content) {
        saveAs(content, nombre_proyecto + ".zip");
      });
    }
  }
  function ejecutarCodigo() {
    var iframe = ref.current.querySelector("iframe");
    var docIframe = iframe.contentDocument || iframe.contentWindow.document;
    modContenedor(docIframe.querySelector("#contenido-html-playground"), textoHTML.current);
    modContenedor(docIframe.querySelector("#contenido-css-playground"), textoCSS.current);
    modContenedor(docIframe.querySelector("#contenido-js-playground"), textoJS.current);
    modContenedor(docIframe.querySelector("#contenido-jsx-playground"), textoJSX.current);
    if (!docIframe.querySelector("#contenido-html-playground")) {
      setTimeout(ejecutarCodigo, 100);
    }
    function modContenedor(contenedor, contenido) {
      if (!contenedor || !contenido) {
        return;
      }
      if (contenedor.innerHTML != contenido) {
        contenedor.innerHTML = contenido;
      }
    }
  }

  // Función para formatear el código usando Prettier
  function formatearCodigo() {
    if (!editorHTML || !editorCSS || !editorJS || !editorJSX) {
      return setTimeout(formatearCodigo, 500);
    }
    try {
      var contenidoHTML = textoHTML.current;
      var contenidoCSS = textoCSS.current;
      var contenidoJS = textoJS.current;
      var contenidoJSX = textoJSX.current;
      var htmlFormateado = prettier.format(contenidoHTML, {
        parser: "html",
        plugins: prettierPlugins,
        printWidth: printWidth
      });
      var cssFormateado = prettier.format(contenidoCSS, {
        parser: "css",
        plugins: prettierPlugins,
        printWidth: printWidth
      });
      var jsFormateado = prettier.format(contenidoJS, {
        parser: "babel",
        plugins: prettierPlugins,
        printWidth: printWidth
      });
      var jsxFormateado = prettier.format(contenidoJSX, {
        parser: "babel",
        plugins: prettierPlugins,
        printWidth: printWidth
      });
      editorHTML.setValue(htmlFormateado);
      editorCSS.setValue(cssFormateado);
      editorJS.setValue(jsFormateado);
      editorJSX.setValue(jsxFormateado);
      textoHTML.current = htmlFormateado;
      textoCSS.current = cssFormateado;
      textoJS.current = jsFormateado;
      textoJSX.current = jsxFormateado;
    } catch (error) {
      alert("Error al formatear el código: " + error.message);
    }
  }
}
function _string() {
  setTimeout(PR.prettyPrint);
  var titulo = "Mapa ASCII";
  var ex = loadStringsSync("static/jsx/fragmentos/frag-03.txt");
  return /*#__PURE__*/React.createElement($FMD, null, /*#__PURE__*/React.createElement($index, {
    variant: "h1",
    className: fluidCSS().end("nowrap")
  }, titulo), /*#__PURE__*/React.createElement($$h, null), "La iniciativa de este proyecto surgi\xF3 para resolver la complejidad de gestionar dependencias en sitios web est\xE1ticos de forma eficiente y organizada. Utilizar un mapa ASCII permite visualizar y manejar estas dependencias con mayor claridad, replicando la estructura de archivos de tu proyecto de forma comprensible.", /*#__PURE__*/React.createElement($h, null), /*#__PURE__*/React.createElement($PR, {
    lang: "html",
    className: "pad-10px mh-20px",
    style: {
      color: "Khaki"
    }
  }, ex), "Este enfoque ofrece una manera m\xE1s ordenada y program\xE1tica de gestionar la inserci\xF3n de scripts y hojas de estilo, haciendo que tu c\xF3digo sea m\xE1s limpio y f\xE1cil de mantener.", /*#__PURE__*/React.createElement($$h, null), /*#__PURE__*/React.createElement($hr, null), /*#__PURE__*/React.createElement($h, null), /*#__PURE__*/React.createElement($index, {
    variant: "h5"
  }, "Caracteres y Decoradores"), /*#__PURE__*/React.createElement($CardDef, {
    title: "Secuencias o Caracteres Ignorados"
  }, cards({
    "➤": "Indica el inicio de un \xE1rbol de dependencias.",
    "──": "Utilizado para decorar las ramas del \xE1rbol, brindando una apariencia\n          visual organizada."
  })), /*#__PURE__*/React.createElement($CardDef, {
    title: "Indicadores de Nivel"
  }, cards({
    "├": "Representa una bifurcaci\xF3n a la derecha y contin\xFAa hacia abajo.",
    "└": "Marca una bifurcaci\xF3n solo a la derecha, se\xF1alando el final de esa\n          rama.",
    "│": "Indica un camino que no tiene bifurcaciones en ese rengl\xF3n.",
    "╧": "Se\xF1ala el final de un camino espec\xEDfico."
  })), /*#__PURE__*/React.createElement($CardDef, {
    title: "Indicadores de Ramas"
  }, cards({
    "🌐": "Indica un directorio web.",
    "📁": "Representa un directorio est\xE1ndar.",
    "🗀": "Muestra un directorio que se ignora en la carga de dependencias."
  })), /*#__PURE__*/React.createElement($CardDef, {
    title: "Indicadores de Hojas"
  }, cards({
    "🔗": "Indica un archivo web.",
    "📄": "Representa un archivo JS o JSX"
  })), /*#__PURE__*/React.createElement($CardDef, {
    title: "Tipo de Archivo"
  }, cards({
    "🎨": "Marca archivos de tipo CSS.",
    "🖼️": "Indica que un archivo .css tiene el mismo nombre que otro archivo en\n          el directorio.",
    "📦": "Señala un archivo JavaScript que es de tipo módulo.",
    "🐌": "Muestra un archivo JavaScript que tiene la propiedad `defer` activada."
  })), /*#__PURE__*/React.createElement($CardDef, {
    title: "Especiales"
  }, cards({
    "🏠": "Un archivo marcado con este decorador se cargar\xE1 en la ra\xEDz del\n          proyecto, incluso si est\xE1 representado en un subdirectorio."
  })), /*#__PURE__*/React.createElement($$h, null), /*#__PURE__*/React.createElement(Card, {
    elevation: 6,
    className: "pad-30px"
  }, "Esta gu\xEDa ayuda a interpretar y utilizar un sistema de s\xEDmbolos para representar estructuras de archivos y dependencias de forma visual, facilitando la organizaci\xF3n y la carga de recursos en proyectos de desarrollo."));
  function cards(e) {
    return Object.entries(e).map(function (_ref11) {
      var _ref12 = _slicedToArray(_ref11, 2),
        icon = _ref12[0],
        desc = _ref12[1];
      return /*#__PURE__*/React.createElement($CardDef, {
        elevation: 0,
        title: /*#__PURE__*/React.createElement($CardCopy, null, /*#__PURE__*/React.createElement($enfasis, null, icon))
      }, desc);
    });
  }
}
