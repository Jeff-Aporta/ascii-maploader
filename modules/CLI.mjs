import tree from "./treeAscii.mjs";

import { writehtml } from "./html.mjs";

export default { fontawesome, react, mui, react_mui, react_mui_fa };

function react_mui_fa() {
  react_mui();
  fontawesome();
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
