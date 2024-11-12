import tree from "./treeAscii.mjs";
import { writehtml } from "./html.mjs";

export default {
  mui,
  react,
  fluidCSS,
  react_mui,
  fontawesome,
  react_mui_fa,
  designSysCliRender_DocuDesign,
  designSysCliRender_DocuDesignPR,
  designSysCliRender_DocuDesign_body,
};

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

function designSysCliRender_DocuDesignPR() {
  designSysCliRender_DocuDesign()
  writehtml(`
    🔗 https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js
  `);
}

function designSysCliRender_DocuDesign() {
  react_mui_fa();
  fluidCSS();
  writehtml(`
      🔗 https://jeff-aporta.github.io/design-sys-cli-render/DocuDesign/static/all.templates.min.js
      🎨 https://jeff-aporta.github.io/design-sys-cli-render/DocuDesign/static/all.styles.min.css
  `);
}

function react_mui_fa() {
  react_mui();
  fontawesome();
}

function fluidCSS() {
  writehtml(
    "🔗 https://jeff-aporta.github.io/fluid-css/static/js/index.all.min.js"
  );
}

function fontawesome() {
  writehtml(
    "🔗 https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
  );
}
function react_mui() {
  react();
  mui();
}
function react() {
  tree("https://unpkg.com")
    .add(
      "react@18.3.1/umd/react.production.min.js",
      "react-dom@18.3.1/umd/react-dom.production.min.js",
      "@babel/standalone@7.25.5/babel.min.js"
    )
    .writehtml();
}
function mui() {
  tree("https://unpkg.com")
    .add("@mui/material@5.16.7/umd/material-ui.production.min.js")
    .writehtml();
}
