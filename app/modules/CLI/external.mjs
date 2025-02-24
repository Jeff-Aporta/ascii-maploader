import tree from "../treeAscii.mjs";
import { writenodes } from "../html.mjs";

let _codemirror_theme_name_ = "material-ocean";

export default {
  PR,
  mui,
  react,
  react_mui,
  fontawesome,
  react_mui_fa,
  prettier_codemirror,
  codemirror_theme_name,
  FileSaver_jszip
};

function PR() {
  writenodes(
    "https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js"
  );
}

function react_mui_fa() {
  react_mui();
  fontawesome();
}

function fontawesome() {
  writenodes(
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
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

function codemirror_theme_name(name) {
  if (name) {
    _codemirror_theme_name_ = name;
  }
  return _codemirror_theme_name_;
}

function FileSaver_jszip() {
  tree("https://cdnjs.cloudflare.com/ajax/libs/")
    .add("jszip/3.10.1/jszip.min.js", "FileSaver.js/2.0.5/FileSaver.min.js")
    .writehtml();
}

function prettier_codemirror(theme_name) {
  if (theme_name) {
    codemirror_theme_name(theme_name);
  }
  tree("https://")
    .newBranch("unpkg.com/prettier@2.8.8", (pretier) => {
      pretier.js(
        "standalone.js",
        "parser-html.js",
        "parser-postcss.js",
        "parser-babel.js"
      );
    })
    .newBranch(
      "cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.18",
      (codemirror) => {
        codemirror
          .js("codemirror.min")
          .css("codemirror.min.css", `theme/${codemirror_theme_name()}.min.css`)
          .newBranch("mode", (mode) => {
            mode.js(
              "xml/xml.min.js",
              "javascript/javascript.min.js",
              "css/css.min.js",
              "sass/sass.min.js",
              "htmlmixed/htmlmixed.min.js"
            );
          });
      }
    )
    .writehtml();
}
