import external from "./external.mjs";
import { writenodes } from "../html.mjs";

const { react_mui_fa, prettier_codemirror, FileSaver_jszip, PR } = external;

const jeff_aporta = (() => {
  const urlgithub = "https://jeff-aporta.github.io";
  if (window.location.href.includes("127.0.0.1")) {
    return window["jeff-aporta-default"] ?? urlgithub;
  }
  return urlgithub;
})();
const designsysclirender = join(jeff_aporta, "design-sys-cli-render");
const playgound = join(designsysclirender, `componentes/playground`);
const playgound_jsdelivr = (() => {
  return (
    "https://cdn.jsdelivr.net/gh/Jeff-Aporta/" +
    "design-sys-cli-render@ed2c2a3dbfb516cd069130882a9ee6c05be7f11a/" +
    "componentes/playground"
  );
})();
const DocuDesign = join(designsysclirender, "DocuDesign/static");

const myUI = {
  DocuDesign: () => designSysCliRender_DocuDesign(),
  DocuDesignPR: () => designSysCliRender_DocuDesignPR(),
  DocuDesignBody: () => designSysCliRender_DocuDesign_body(),
  comun: {
    muisetup: () => {
      writenodes(join(designsysclirender, "comun/jsx/00-mui-setup.jsx"));
    },
    tools: () => {
      writenodes(join(designsysclirender, "comun/jsx/01-tools.jsx"));
    },
    main_sass: () => {
      writenodes(join(designsysclirender, "comun/css/main-sass.css"));
    },
    all: () => {
      myUI.comun.muisetup();
      myUI.comun.tools();
      myUI.comun.main_sass();
    },
  },
  playground: () => {
    writenodes(
      ...["editor-en-linea.jsx", "editor-en-linea.css"].map((x) =>
        join(playgound, x)
      )
    );
  },
  playground_template: {
    html_jsdelivr: join(playgound_jsdelivr, "template", "iframe.html"),
    css_jsdelivr: join(playgound_jsdelivr, "template", "iframe.css"),
    js_jsdelivr: join(playgound_jsdelivr, "template", "iframe.js"),
    html: join(playgound, "template", "iframe.html"),
    css: join(playgound, "template", "iframe.css"),
    js: join(playgound, "template", "iframe.js"),
  },
};

export default {
  myUI: () => myUI,
  JS2CSS,
  fluidCSS,
  designSysCliRender_DocuDesign,
  designSysCliRender_DocuDesignPR,
  designSysCliRender_DocuDesign_body,
};

function join(...parts) {
  return parts
    .join("/")
    .replace("://", "$http$")
    .replace(/\/+/g, "/")
    .replace("$http$", "://");
}

function fluidCSS() {
  writenodes(join(jeff_aporta, "fluid-css/static/js/index.all.min.js"));
}

function JS2CSS() {
  writenodes(join(jeff_aporta, "JS2CSS/static/js/index.all.min.js"));
}

/**
 * @deprecated please use `myUI.DocuDesignBody`.
 * @description It is left only for backward compatibility with the initial implementation, refactored on 2025-02-24.
 */
function designSysCliRender_DocuDesign_body() {
  document.write(`
    <div id="root">
      <style>
        body,
        html {
          background-color: #121230;
          color: red;
          padding: 10px;
          font-family: Arial, Helvetica, sans-serif;
        }
      </style>
      <script type="text/babel">
        try {
          initApp();
        } catch (error) {
          console.log(error);
          console.error(error);
          document.querySelector("#root #error").innerHTML = error;
        }
      </script>
      <div id="error"></div>
    </div>
  `);
}

/**
 * @deprecated please use `myUI.DocuDesignPR`.
 * @description It is left only for backward compatibility with the initial implementation, refactored on 2025-02-24.
 */
function designSysCliRender_DocuDesignPR() {
  myUI.DocuDesign();
  prettier_codemirror();
  FileSaver_jszip();
  PR();
}

/**
 * @deprecated please use `myUI.DocuDesign`.
 * @description It is left only for backward compatibility with the initial implementation, refactored on 2025-02-24.
 */
function designSysCliRender_DocuDesign() {
  react_mui_fa();
  fluidCSS();
  designSysCliRender_DocuDesign_allTemplates();
}

function designSysCliRender_DocuDesign_allTemplates() {
  writenodes(
    ...["all.templates.min.js", "all.styles.min.css"].map((x) =>
      join(DocuDesign, x)
    )
  );
}
