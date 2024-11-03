import json from "./json.mjs";
import { html, writehtml } from "./html.mjs";

import { forceEnd } from "./tools.mjs";
import { decor } from "./ascii-colection.mjs";

export default tree;

function tree(name) {
  return new folder(name ?? "/");
}

class folder {
  #content = [];

  constructor(params) {
    let { name, lvls = 0, parent, ignore } = params;
    if (typeof params === "string") {
      name = params;
    }
    if (lvls) {
      if (!name) {
        throw new Error(
          "asciiMap: Un folder (treeAscii) hijo, siempre debe tener nombre"
        );
      }
    }
    this.name = name;
    this.lvls = lvls;
    this.parent = parent;
    this.ignore = ignore;
    if (parent) {
      this.lvls = parent.lvls + 1;
      this.pathroot = parent.path;
      this.web = parent.web;
    }
    if (!this.web) {
      this.web = name.startsWith("http") ?? web;
    }
  }

  get #path() {
    return [this.parent.pathroot, this.name].filter(Boolean).join("/");
  }

  #prepNames(name) {
    return name.map((n) => n.trim());
  }

  subDir(name, generator, ignore = false) {
    if (!name) {
      throw new Error("asciiMap: La subcarpeta no tiene nombre");
    }
    let tree = new folder({ name, parent: this, ignore, web: this.web });
    this.#content.push(tree);
    generator(tree);
    return this;
  }

  add(...name) {
    this.#prepNames(name).forEach((n) => {
      const ext = n.split(".").pop();
      switch (ext) {
        case "js":
          this.js(n);
          break;
        case "jsx":
          this.jsx(n);
          break;
        case "css":
          this.css(n);
          break;
        case "mjs":
          this.js(n);
          break;
        default:
          this.#file(n);
          break;
      }
    });
    return this;
  }

  css(...name) {
    this.#prepNames(name).forEach((n) => {
      this.#file(`${decor.CSS} ${forceEnd(n, ".css")}`);
    });
    return this;
  }

  js(...name) {
    this.#prepNames(name).forEach((n) => {
      this.#file(`${this.web ? decor.JS_WEB : decor.JS} ${forceEnd(n, ".js")}`);
    });
    return this;
  }

  defer(...name) {
    this.#prepNames(name).forEach((n) => {
      this.#file(
        `${this.web ? decor.JS_WEB : decor.JS} ${forceEnd(n, ".js")} ${
          decor.defer
        }`
      );
    });
    return this;
  }

  module(...name) {
    this.#prepNames(name).forEach((n) => {
      if (!n.endsWith("js")) {
        n = forceEnd(n, ".js");
      }
      this.#file(`${decor.js} ${n}`);
    });
    return this;
  }

  mjs(...name) {
    this.#prepNames(name).forEach((n) => {
      this.#file(`${decor.js} ${forceEnd(n, ".js")}`);
    });
    return this;
  }

  jsx(...name) {
    this.#prepNames(name).forEach((n) => {
      this.#file(
        `${this.web ? decor.JSX_WEB : decor.JSX} ${forceEnd(n, ".jsx")}`
      );
    });
    return this;
  }

  jsxcss(...name) {
    this.#prepNames(name).forEach((n) => {
      this.#file(`${decor.JSXCSS} ${n}`);
    });
    return this;
  }

  #file(name) {
    this.#content.push(name);
    return this;
  }

  toString(routes = false) {
    if (this.#content.length === 0) {
      return "";
    }
    if (routes) {
      const lines = [
        this.#path,
        this.#content
          .map((e) =>
            e instanceof folder ? e.toString(true) : [this.#path, e].join("/")
          )
          .join("\n"),
      ].filter(Boolean);
      return lines.join("\n");
    }
    const h = (() => {
      const F = this.ignore
        ? decor.noDIR
        : (() => (this.web ? decor.DIR_WEB : decor.DIR))();
      if (this.lvls) {
        return "│   ".repeat(this.lvls - 1) + `├──${F} ${this.name}`;
      }
      return `➤${F} ${this.name}`;
    })();
    const sufix = "│   ".repeat(this.lvls);

    const sep = "│   ".repeat(this.lvls + 1);

    let lines = [
      h,
      sep,
      this.#content
        .map((e, i, arr) => {
          let s;
          if (e instanceof folder) {
            s = `${sep}\n${e.toString()}`;
          } else {
            s = `${sufix}├──${e}`;
          }
          if (i === arr.length - 1 && !(e instanceof folder)) {
            s = s.replaceAll("├", "└");
          }
          return s;
        })
        .join("\n"),
    ].filter(Boolean);

    return lines.join("\n");
  }

  writehtml() {
    writehtml(this.end());
  }

  toHtml() {
    return html(this.end());
  }

  toJson() {
    return json(this.end());
  }

  toMap() {
    return this.end();
  }

  end() {
    if (this.parent) {
      return this.parent.end();
    }
    return this.toString()
      .split("\n")
      .map((l, i, arr) => {
        let chrs = l;
        const next = arr[i + 1] ?? "";
        for (let i = 0; i < chrs.length; i++) {
          if (chrs[i] == "│" && !next[i]) {
            chrs = setCharAt(chrs, i, "╧");
          }
        }
        return chrs;

        function setCharAt(str, index, chr) {
          if (index > str.length - 1) return str;
          return str.substring(0, index) + chr + str.substring(index + 1);
        }
      })
      .join("\n");
  }
}
