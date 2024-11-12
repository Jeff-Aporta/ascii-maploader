import { decor, ignore, lvl } from "./ascii-colection.mjs";
import { forceEnd } from "./tools.mjs";

export default json;

function json(asciimap) {
  let renglones = prepararAsciiMap(asciimap);
  {
    let renglonesJSXCSS = [];

    renglones.forEach((e) => {
      if (e.includes(decor.JSXCSS)) {
        renglonesJSXCSS.push(forceEnd(e, ".jsx").replace(decor.JSXCSS, "📄"));
        renglonesJSXCSS.push(e.replace(decor.JSXCSS, "🎨"));
      } else {
        renglonesJSXCSS.push(e);
      }
    });

    renglones = renglonesJSXCSS;
  }

  let enRaiz = renglones.filter((e) => e.includes(decor.enRaiz));
  renglones = renglones.filter((e) => !e.includes(decor.enRaiz));

  renglones = [...enRaiz, ...renglones];

  let retorno = refinarArbol(generarArbol());

  return retorno;

  function refinarArbol(arbol) {
    refinacionGeneral();
    refinarArchivo();
    recorrerTodosLosNodos();
    refinarCarpeta();

    return arbol;

    function refinacionGeneral() {
      delete arbol.padre;
      delete arbol.nivel;
    }

    function refinarArchivo() {
      if (arbol.archivo) {
        arbol.archivo = limpiarNombre(arbol.archivo);
      }
    }

    function refinarCarpeta() {
      if (arbol.folder != undefined) {
        arbol.folder = limpiarNombre(arbol.folder);
        delete arbol.type;
      }
    }

    function recorrerTodosLosNodos() {
      if (arbol.list) {
        removerCarpetasInactivas();
        recorrerRecursivamenteTodosLosNodos();
      }

      function recorrerRecursivamenteTodosLosNodos() {
        arbol.list = arbol.list.map((e) => refinarArbol(e));
      }

      function removerCarpetasInactivas() {
        arbol.list = arbol.list.filter(
          (e) => e.archivo || (e.folder && !e.folder.includes("🗀"))
        );
      }
    }

    function limpiarNombre(nombre) {
      nombre = [lvl, decor.hojas, decor.ramas].reduce(
        (resultado, coleccion) =>
          (resultado = coleccion.reduce(
            (acc, c) => (acc = acc.replaceAll(c, "")),
            resultado
          )),
        nombre
      );
      nombre = nombre.trim();
      return nombre;
    }
  }

  function generarArbol({
    padre = {
      padre: null,
      folder: "",
      list: [],
      type: "text/javascript",
      nivel: -1,
    },
    node,
  } = {}) {
    let renglon = node ? "" : renglones.shift();

    if (renglon == undefined) {
      return padre;
    }

    let determinarNivel = renglon
      .split("")
      .filter((e) => lvl.some((c) => c == e)).length;

    if (node) {
      if (padre.nivel < node.nivel) {
        padre.list.push(node);
        node.padre = node.padre.padre;
        generarArbol({ padre: node });
      } else {
        generarArbol({ padre: padre.padre, node });
      }
    } else {
      const esRama = decor.ramas.some((e) => renglon.includes(e));
      const esHoja = decor.hojas.some((e) => renglon.includes(e));

      if (esRama) {
        const newRoot = {
          padre,
          folder: renglon,
          type: padre.type,
          list: [],
          nivel: determinarNivel,
        };

        if (determinarNivel > padre.nivel) {
          padre.list.push(newRoot);
          generarArbol({
            padre: newRoot,
          });
        } else {
          generarArbol({
            padre: padre.padre,
            node: newRoot,
          });
        }
      } else if (esHoja) {
        let type = padre.type;

        if (renglon.includes(decor.CSS)) {
          if (!renglon.endsWith(".css")) {
            renglon += ".css";
          }
        }

        if (renglon.includes(decor.JSModule)) {
          type = "module";
          if (!renglon.endsWith(".js") && !renglon.endsWith(".mjs")) {
            renglon += ".js";
          }
        }

        if (renglon.endsWith(".mjs")) {
          type = "module";
        }

        const newRoot = {
          padre,
          archivo: renglon,
          type,
          nivel: determinarNivel,
        };

        if (padre.folder != undefined && determinarNivel > padre.nivel) {
          padre.list.push(newRoot);
          generarArbol({
            padre: newRoot,
          });
        } else {
          generarArbol({
            padre: padre.padre,
            node: newRoot,
          });
        }
      }
      return padre;
    }
  }
}

function prepararAsciiMap(asciimap) {
  return asciimap
    .split("\n")
    .map((e) => ignore.reduce((acc, c) => acc.replace(c, ""), e))
    .map((e) =>
      e.includes(decor.enRaiz)
        ? lvl.reduce((acc, c) => acc.replace(c, ""), e)
        : e
    )
    .map((e) => e.trim())
    .filter(
      (e) =>
        e != "" &&
        !e.split("").every((e) => lvl.some((c) => c == e) || e == " ")
    );
}
