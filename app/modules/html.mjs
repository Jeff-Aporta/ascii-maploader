import { renderizer, file_render } from "./protocols.mjs";
import { forceEnd } from "./tools.mjs";

export { writehtml, writenodes, render_html, html };

function render_html({ archivo, type, ext, defer }) {
  if (ext == ".css") {
    return `<link rel="stylesheet" href="${forceEnd(archivo, ext)}">`;
  } else {
    return `<script type="${type}" src="${forceEnd(archivo, ext)}" ${defer ? "defer" : ""
      }><\/script>`;
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
  const s = html(nodes.filter(Boolean).map(n => {
    n = n.trim();
    if (n.endsWith(".css")) {
      return `🎨 ${n}`
    }
    return `📄 ${n}`
  }).join("\n")).join("\n");
  document.write(s);
}

function html(asciiMaploader) {
  const lines = [];
  renderizer({
    asciiMaploader,
    onFile: ({ node, path_acumulated }) => {
      lines.push(
        file_render({
          archivo: [path_acumulated, node.archivo].filter((e) => e).join("/"),
          type: node.type,
          render: render_html,
        })
      );
    },
  });
  return lines;
}
