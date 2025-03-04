import { renderizer, file_render } from "./protocols.mjs";
import { forceEnd } from "./tools.mjs";

export { writehtml, writenodes, render_html, html };

const alert_icon = "\u26A0";

function render_html({ archivo, type, ext, defer }) {
  if (ext == ".css") {
    return `<link rel="stylesheet" href="${forceEnd(archivo, ext)}"
    ${onerror("href")}
    >`;
  } else {
    return `<script type="${type}" src="${forceEnd(archivo, ext)}" ${
      defer ? "defer" : ""
    }
      ${onerror("src")}
    ><\/script>`;
  }

  function onerror(atr) {
    let sentences = [
      `
        console.log(
          '%c${alert_icon} asciiMap: No se pudo cargar: this.${atr}',
          '
            color: orange; 
            font-weight: bolder

            border: 1px solid gray; 
            padding: 5px; 

            text-shadow: 2px 2px 0px gray;
          '
        );
      `,
      `this.remove()`,
    ].map((s) => s.replace(/\s+/g, " "));

    sentences = [];

    return `
      onerror="${sentences.join("; ")}"
    `.trim();
  }
}

function writehtml(asciiMaploader) {
  const s = html(asciiMaploader).join("\n");
  document.write(s);
}

function writenodes(...nodes) {
  if (nodes.length == 0) {
    return;
  }
  const s = html(
    nodes
      .filter(Boolean)
      .map((n) => {
        n = n.trim();
        if (n.endsWith(".css")) {
          return `🎨 ${n}`;
        }
        return `📄 ${n}`;
      })
      .join("\n")
  ).join("\n");
  document.write(s);
}

function html(asciiMaploader) {
  const lines = [];

  renderizer({
    asciiMaploader,
    onFile: ({ node, path_acumulated }) => {
      lines.push(
        file_render({
          archivo: [path_acumulated, node.archivo].filter(Boolean).join("/"),
          type: node.type,
          render: render_html,
        })
      );
    },
  });

  return lines.map(protocolReturn);

  // DIC/2024 (función creada para evitar errores en las rutas raíz)
  function protocolReturn(line) {
    // cesc es una combinación que protege los doble slash de los protocolos web
    const cesc = "&" + Math.random().toString(30).replace("0.", "") + "&";
    let p = protectEsc(line);
    p = deleteVoidRoot(p);
    p = deleteDoubleSlash(p);
    return unprotectEsc(p);

    function unprotectEsc(s) {
      return s.replace(cesc, "://");
    }

    function protectEsc(s) {
      return s.replace("://", cesc);
    }

    function deleteDoubleSlash(s) {
      return s.replaceAll("//", "/");
    }

    function deleteVoidRoot(s) {
      return s.replaceAll("|/", "");
    }
  }
}
