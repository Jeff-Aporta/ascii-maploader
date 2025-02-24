import external from "./external.mjs";
import { writenodes } from "../html.mjs";

const { react_mui_fa, prettier_codemirror, FileSaver_jszip } = external;

export default {
  JS2CSS,
  fluidCSS,
  designSysCliRender_DocuDesign,
  designSysCliRender_DocuDesignPR,
  designSysCliRender_DocuDesign_body,
};

function fluidCSS() {
  writenodes(
    "https://jeff-aporta.github.io/fluid-css/static/js/index.all.min.js"
  );
}

function JS2CSS() {
  writenodes("https://jeff-aporta.github.io/JS2CSS/static/js/index.all.min.js");
}

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

function PR(){
  writenodes(
    "https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js"
  );
}

function designSysCliRender_DocuDesignPR() {
  designSysCliRender_DocuDesign();
  prettier_codemirror();
  FileSaver_jszip();
  PR();
}

function designSysCliRender_DocuDesign() {
  react_mui_fa();
  fluidCSS();
  const s = `
    https://jeff-aporta.github.io/design-sys-cli-render/DocuDesign/static/ 
  `.trim();
  writenodes(s + "all.templates.min.js", s + "all.styles.min.css");
}
