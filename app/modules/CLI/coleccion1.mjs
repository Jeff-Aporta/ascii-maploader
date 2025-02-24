import external from "./external.mjs";
import { writenodes } from "../html.mjs";

const { react_mui_fa, prettier_codemirror, FileSaver_jszip } = external;

const jeff_aporta = "https://jeff-aporta.github.io";
const designsysclirender = join(jeff_aporta, "design-sys-cli-render");
const playgound = join(designsysclirender, `componentes/playground`);
const DocuDesign = join(designsysclirender, "DocuDesign/static");

export default {
  myUI,
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
  writenodes(
    ["all.templates.min.js", "all.styles.min.css"].map((x) =>
      join(DocuDesign, x)
    )
  );
}

const myUI = {
  DocuDesign: () => designSysCliRender_DocuDesign(),
  DocuDesignPR: () => designSysCliRender_DocuDesignPR(),
  DocuDesignBody: () => designSysCliRender_DocuDesign_body(),
  playground: () => {
    writenodes(
      ...["editor-en-linea.jsx", "editor-en-linea.css"].map((x) =>
        join(playgound, x)
      )
    );
  },
  playground_template: {
    html: join(playgound, "iframe.html"),
    css: join(playgound, "iframe.css"),
    js: join(playgound, "iframe.js"),
  },
};
