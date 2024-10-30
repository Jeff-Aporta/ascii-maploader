import CLI from "./modules/CLI.mjs";
import json from "./modules/json.mjs";
import tree from "./modules/treeAscii.mjs";

import { html, writehtml } from "./modules/html.mjs";

if (typeof window !== "undefined") {
  window["asciiMap"] = { writehtml, html, json, tree, CLI };
}

export { writehtml, html, json, tree, CLI };
