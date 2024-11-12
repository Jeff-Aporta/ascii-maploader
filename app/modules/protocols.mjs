import json from "./json.mjs";
import { decor } from "./ascii-colection.mjs";

export { renderizer, file_render };

function renderizer(params) {
  let { node, path_acumulated, asciiMaploader, onFile, onFolder } = params;
  if (!node && !asciiMaploader) {
    return;
  }
  if (asciiMaploader) {
    node = json(asciiMaploader);
  }
  node.list.forEach((e) => {
    if (e.folder) {
      onFolder?.({ ...params, node: e });
      next({ node: e });
    } else if (e.archivo) {
      onFile?.({ ...params, node: e });
    }
  });

  function next({ node }) {
    renderizer({
      node,
      path_acumulated: [path_acumulated, node.folder]
        .filter((e) => e)
        .join("/"),
      onFile,
      onFolder,
    });
  }
}
function file_render({ archivo, type, render }) {
  let ext;
  const defer = archivo.includes(decor.defer);
  archivo = archivo.replace(decor.defer, "").trim();

  intuirExtension();

  let stringLoad = render({ archivo, type, ext, defer });

  return stringLoad;

  function intuirExtension() {
    const isJSX = archivo.endsWith(".jsx");
    const isJS = archivo.endsWith(".js");
    const isMJS = archivo.endsWith(".mjs");
    const isCSS = archivo.endsWith(".css");
    if (isJSX || isJS || isMJS) {
      protocoloDeExtensionQuemada();
    } else if (!isCSS) {
      protocoloDeExtensionTipada();
    } else {
      ext = ".css";
    }

    function protocoloDeExtensionTipada() {
      switch (type) {
        case "module":
          ext = ".mjs";
          break;
        case "text/javascript":
          ext = ".js";
          break;
        case "text/babel":
          ext = ".jsx";
          break;
      }
    }

    function protocoloDeExtensionQuemada() {
      if (isMJS) {
        type = "module";
      } else if (isJSX) {
        type = "text/babel";
      } else if (isJS && type != "module") {
        type = "text/javascript";
      }
    }
  }
}
