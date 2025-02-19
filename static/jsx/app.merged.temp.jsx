const themename = (() => {
  const ls = localStorage.getItem("theme");
  const w = window["theme-config-name"];
  return w ?? ls ?? "light";
})();

const isThemeDark = themename === "dark";

if (typeof window != "undefined" && window["MaterialUI"]) {
  Object.assign(window, window["MaterialUI"]);
}

let palette = (() => {
  const white = {
    main: "#fff",
    contrastText: "#000",
  };
  const black = {
    main: "#000",
    contrastText: "#fff",
  };
  const contrastText = isThemeDark ? "#fff" : "#000";
  const uncontrastText = isThemeDark ? "#000" : "#fff";
  return {
    primary: {
      main: "#1E90FF",
      contrastText,
    },
    darkprimary: {
      main: "#003366",
      contrastText,
    },
    secondary: {
      main: isThemeDark ? "#387FC7" : "#ccccff",
      contrastText,
    },
    success: {
      main: "#32CD32",
      contrastText,
    },
    atentionBlue: {
      main: "#00BFFF",
      contrastText: uncontrastText,
    },
    atentionGreen: {
      main: "#00FA9A",
      contrastText: uncontrastText,
    },
    white,
    black,
    contrast: isThemeDark ? white : black,
    uncontrast: isThemeDark ? black : white,
  };
})();

const typography = {
  fontSize: 12,
  button: {
    textTransform: "none",
  },
};

const components = {
  MuiAccordionDetails: {
    styleOverrides: {
      root: {
        padding: 0,
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        // Aplica estos estilos solo si el Paper está dentro de un Accordion
        "&.MuiAccordionDetails-root": {
          backgroundColor: "transparent", // Fondo transparente
          boxShadow: "none", // Opcional: elimina la sombra
        },
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        margin: 0,
      },
    },
  },
};

const theme = responsiveFontSizes(
  isThemeDark
    ? createTheme({
        typography,
        components,
        palette: {
          mode: "dark",
          background: {
            default: "#112",
            paper: "#05051f",
          },
          ...palette,
        },
      })
    : createTheme({
        typography,
        components,
        palette: {
          mode: "light",
          ...palette,
        },
      })
);

function _cascade() {
  setTimeout(PR.prettyPrint);
  const titulo = "Modo cascada";
  const ex = loadStringsSync("static/jsx/fragmentos/frag-02.txt");
  return (
    <$FMD>
      <$index label="Inicio" variant="h2" className="nowrap">
        {titulo}
      </$index>
      <$$h />
      En lugar de escribir manualmente cada etiqueta de HTML para cargar tus
      dependencias, puedes usar un flujo de comandos que se encadenan de manera
      ordenada y lógica, lo que imita la estructura de un árbol de archivos.
      <$PR lang="html" className="pad-10px mh-20px">
        {ex}
      </$PR>
      <$CardDef title=".tree(name_root)">
        La función `.tree(name_root)` se utiliza para iniciar la creación de una
        estructura de árbol en tu proyecto, donde `name_root` representa el
        nombre de la raíz del árbol. Esta función establece el punto de partida
        para organizar tus archivos y carpetas de manera jerárquica y modular.
        <$h />
        Al invocar esta función, estás creando un contenedor que te permitirá
        añadir diferentes elementos, como archivos de estilo, scripts y
        componentes, de forma ordenada. Esto ayuda a mantener tu proyecto limpio
        y fácil de navegar, ya que puedes ver claramente cómo se relacionan los
        diferentes archivos entre sí.
        <$h />
        Un ejemplo de cómo usar esta función es el siguiente:
        <$PR
          elevation={0}
          lang="js"
        >{`var my_tree = asciiMap.tree("name-root");`}</$PR>
        En este caso, my_tree será el árbol que contiene todos los elementos que
        vayas a agregar a partir de este punto. Esta organización es fundamental
        para proyectos más complejos, donde es necesario mantener una estructura
        clara para facilitar el mantenimiento y la escalabilidad del código.
      </$CardDef>
      <$$h />
      <$hr />
      <$$h />
      #### Funciones de agregación
      <$CardDef title=".css(...filesname)">
        Esta función se utiliza para agregar archivos de estilo en formato .css
        al árbol de tu proyecto. Por ejemplo, puedes escribir:
        <$PR
          elevation={0}
          lang="js"
        >{`tree.css("style1","style2","style3");`}</$PR>
        para incluir varios estilos a la vez.
      </$CardDef>
      <$CardDef title=".js(...filesname)">
        Con esta función, puedes agregar archivos de JavaScript en formato .js
        al árbol. Un ejemplo sería:
        <$PR
          elevation={0}
          lang="js"
        >{`tree.js("logic1","logic2","logic3");`}</$PR>
        donde puedes añadir múltiples archivos de lógica de tu aplicación.
      </$CardDef>
      <$CardDef title=".jsx(...filesname)">
        Similar a la función anterior, esta se usa para agregar archivos de
        JavaScript que contienen sintaxis JSX, comúnmente utilizados con React.
        Por ejemplo, al escribir
        <$PR
          elevation={0}
          lang="js"
        >{`tree.jsx("react1","react2","react3");`}</$PR>
        estarás incluyendo varios componentes React en tu árbol.
      </$CardDef>
      Estas funciones simplifican la gestión de archivos en tu proyecto,
      permitiéndote organizar y cargar tus dependencias de manera eficiente.
      <$$h />
      <$hr />
      <$$h />
      #### Ramificación
      <$CardDef title=".subDir(name_branch, subspace)">
        permite seleccionar una rama específica en la rama actual.
        <$$h />
        <$ variant="h9">
          <$secundario>Ejemplo</$secundario>
        </$>
        <$PR elevation={0} lang="js">
          {[
            `tree.subDir("name-branch", branch=>{`,
            `    branch.css("styles").js("script").jsx("App");`,
            `})`,
          ].join("\n")}
        </$PR>
      </$CardDef>
      <$$h />
      <$hr />
      <$$h />
      ##### Funciones de conclusión
      <$h />
      Las funciones de conclusión son aquellas que detienen la cadena de
      llamadas en cascada, permitiendo finalizar la construcción de tu árbol de
      dependencias.
      <$CardDef title=".writehtml()">
        Esta función se encarga de “quemar” el árbol en el documento HTML. Al
        ejecutarla, se insertan directamente las etiquetas generadas en el
        archivo HTML, asegurando que todas las dependencias estén correctamente
        integradas en tu página.
      </$CardDef>
      <$CardDef title=".toString()">
        devuelve una representación en forma de cadena de texto del árbol de
        dependencias que has construido. Esta función es útil para visualizar de
        manera rápida y clara la estructura jerárquica de tus archivos y
        carpetas.
        <$h />
        Por ejemplo, al usar la función de esta forma:
        <$PR elevation={0} lang="js">
          {[
            `asciiMap.tree("public").subDir("ex-branch", branch=>{`,
            `    branch.css("style").js("script").jsx("App");`,
            `}).toString()`,
          ].join("\n")}
        </$PR>
        El resultado será una cadena que muestra la organización de tus archivos
        en un formato que imita la estructura de un árbol de directorios, como
        el siguiente:
        <$Copy className="mh-10px pad-10px dark-02">
          <pre>
            <code className="c-khaki">
              {asciiMap
                .tree("public")
                .subDir("ex-branch", (branch) => {
                  branch.css("style").js("script").jsx("App");
                })
                .toString()}
            </code>
          </pre>
        </$Copy>
      </$CardDef>
      <$CardDef title=".toHtml()">
        En lugar de modificar el HTML directamente, esta función retorna un
        arreglo que contiene las cadenas de texto de las etiquetas que se
        deberían incluir en el documento. Esto es útil si deseas manipular o
        revisar las etiquetas antes de insertarlas en el HTML.
        <$h />
        Por ejemplo, al utilizar la función de esta manera:
        <$PR elevation={0} lang="js">
          {[
            `asciiMap.tree("public").subDir("ex-branch", branch=>{`,
            `    branch.css("style").js("script").jsx("App");`,
            `}).toHtml()`,
          ].join("\n")}
        </$PR>
        El resultado será un arreglo que incluye las etiquetas necesarias para
        cargar los archivos correspondientes:
        <$PR elevation={0} lang="js">
          [<br />
          {asciiMap
            .tree("public")
            .subDir("ex-branch", (branch) => {
              branch.css("style").js("script").jsx("App");
            })
            .toHtml()
            .map((e) => "  '" + e + "'")
            .join(",\n")}
          <br />]
        </$PR>
      </$CardDef>
      <$CardDef title=".toJson()">
        convierte la estructura del árbol de dependencias que has creado en un
        formato JSON, lo que facilita su manipulación y almacenamiento. Este
        formato es especialmente útil si deseas integrar los datos en
        aplicaciones que manejan estructuras JSON o si necesitas realizar
        operaciones adicionales sobre la información.
        <p>Por ejemplo, al utilizar la función de esta manera:</p>
        <$PR elevation={0} lang="js">
          {[
            `asciiMap.tree("public").subDir("ex-branch", branch=>{`,
            `    branch.css("style").js("script").jsx("App");`,
            `}).toJson()`,
          ].join("\n")}
        </$PR>
        <p>
          El resultado será un objeto JSON que representa la jerarquía de tus
          archivos de la siguiente manera:
        </p>
        <$PR elevation={0} lang="json">
          {JSON.stringify(
            asciiMap
              .tree("public")
              .subDir("ex-branch", (branch) => {
                branch.css("style").js("script").jsx("App");
              })
              .toJson(),
            null,
            1
          )
            .replaceAll(`"type": "text/javascript"`, "")
            .split("\n")
            .filter((e) => Boolean(e.trim()))
            .join("\n")}
        </$PR>
        <p>
          En esta representación, cada carpeta y archivo está claramente
          definido, permitiendo ver su relación dentro de la estructura del
          proyecto. Esto no solo facilita la visualización, sino que también
          permite que otros sistemas procesen esta información de manera más
          eficiente.
        </p>
      </$CardDef>
    </$FMD>
  );
}


function App() {
  return (
    <Playground
      nombre_proyecto="proyecto-de-prueba-1"
      templateHTML="iframe.html"
      HTML={`<h1>Hola desde el encabezado 1</h1>`}
      JS={`console.log("Hola desde JavaScript")`}
      index={0}
    />
  );
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

function initApp() {
  setup();
  burn_template();
  ready();

  function setup() {
    Object.assign(config_template, {
      banner: {
        left: {
          label: "Documentación",
          logo: "static/img/icon.svg",
        },
        right: {
          social: {
            github: {
              label: "Jeff-Aporta",
              url: "https://github.com/Jeff-Aporta",
            },
            youtube: {
              label: "YouTube",
              url: "https://www.youtube.com/@JeffAporta",
            },
            whatsapp: {
              label: "WhatsApp",
              url: "https://wa.link/1tmqmt",
            },
            telegram: {
              label: "Telegram",
              url: "https://t.me/jeffAporta",
            },
          },
        },
      },
      default_id: "intro",
      mapSite: _mapSite(),
      repo: {
        name: "ASCII Map Loader",
        url: "https://github.com/Jeff-Aporta/ascii-maploader",
      },
    });
  }

  function burn_template() {
    ReactDOM.render(<App />, document.getElementById("root"));
  }

  function ready() {
    changeContent({ id: get_id_param() });
  }

  function _mapSite() {
    return [
      {
        lbl: " ",
      },
      {
        component: () => (
          <center>
            <Button
              color="darkprimary"
              variant="contained"
              startIcon={<i className="fa fa-globe" />}
              target="_blank"
              href="https://jeff-aporta.github.io/portafolio/"
            >
              Más en mi portafolio
            </Button>
          </center>
        ),
      },
      {
        lbl: " - ",
      },
      {
        lbl: "Empecemos",
      },
      {
        lbl: "Introducción",
        id: "intro",
        content: () => <_intro />,
        i: "fa-regular fa-file-lines",
      },
      {
        lbl: "Acerca del lenguaje",
        id: "learn",
        content: () => <_learn />,
        i: "fa-solid fa-chalkboard-user",
      },
      {
        lbl: " ",
      },
      {
        lbl: "Uso",
      },
      {
        lbl: "Objeto del controlador",
        id: "cascade",
        content: () => <_cascade />,
        i: "fa-solid fa-code",
      },
      {
        lbl: "Lenguaje interpretado",
        id: "string",
        content: () => <_string />,
        i: "fa-solid fa-code",
      },
      // {
      //   lbl: "Modo de uso",
      //   childs: [
      //     {
      //       lbl: "Cascada",
      //       id: "cascade",
      //       content: () => <_cascade />,
      //     },
      //     {
      //       lbl: "Inserción por cadena",
      //       id: "string",
      //       content: () => <_string />,
      //     },
      //   ],
      // },
      {
        lbl: "  ",
      },
    ];
  }
}

function _intro() {
  return (
    <$FMD>
      <_$Bienvenido name_app="ASCII Map Loader" img_url="static/img/thumb.png">
        Es un lenguaje interpretado que permite cargar dependencias de archivos
        `.jsx`, `.js` y `.css`. Se destaca por estar diseñado para inyectar
        estos elementos en tiempo real al cargar un documento HTML mediante el
        uso de la función `document.write()`.
        <$$h />
        Perfecto para cuando estás haciendo desarrollos de multiples módulos en
        un proyecto, personalmente lo uso para comprobar que los archivos `.mjs`
        sean compatibles en las dependencias de páginas estáticas o que deban
        ser usadas necesariamente en el cliente.
      </_$Bienvenido>
      <$$h />
      <$hr />
      <$h />
      <_$Instalación
        url_cdn="https://jeff-aporta.github.io/ascii-maploader/static/js/index.all.min.js"
        npm_pack="ascii-maploader"
      />
      <$$h />
      <$hr />
      <$$h />
      <_$testing
        src_params_iife={{
          url: "https://jeff-aporta.github.io/ascii-maploader/static/js/index.all.min.js",
          name: "asciiMap",
          comment:
            "{CLI: {…}, html: ƒ, json: ƒ, tree: ƒ, writehtml: ƒ, …} --> all OK!",
        }}
      />
      <$$h />
      <$hr />
      <$$h />
      <$index variant="h3" label="Funciones Relevantes">Funciones Relevantes</$index>
      <$$h />
      <$ variant="h8">
        <$secundario>Estructuración de cascada</$secundario>
      </$>
      <$CardDef title="tree">
        Función que inicia la generación de un árbol en estructura de cascada
      </$CardDef>
      <$ variant="h8">
        <$secundario>Funciones de carga</$secundario>
      </$>
      <$CardDef title="writehtml">
        Función que quema las dependencias al HTML
      </$CardDef>
      <$CardDef title="CLI">
        Gestor enlaces a librerias recurrentes como react y babel.
      </$CardDef>
      <$ variant="h8">
        <$secundario>Funciones de conversión</$secundario>
      </$>
      <$CardDef title="html">
        Función que retorna un arreglo de etiquetas que importan las
        dependencias
      </$CardDef>
      <$CardDef title="json">
        Función que retorna un JSON que representa la estructura de dependencias
      </$CardDef>
    </$FMD>
  );
}

function _learn() {
  const titulo = "Lenguaje de dependencias";
  const ex = loadStringsSync("static/jsx/fragmentos/frag-01.txt");

  return (
    <$FMD>
      <$index
        label="Empecemos"
        variant="h2"
        className="nowrap"
      >
        {titulo}
      </$index>
      <$$h />
      El lenguaje de carga de dependencias representado en la estructura del
      ejemplo permite gestionar de manera eficiente la inclusión de múltiples
      archivos de script y estilo en un proyecto web, facilitando la
      organización y mantenibilidad del código. A continuación, se describen sus
      propiedades y ventajas en comparación con la inserción manual de scripts y
      enlaces en HTML:
      <$$h />
      <$ variant="h9">
        <$secundario>Ejemplo de un árbol de carga de dependencias.</$secundario>
      </$>
      <$$h />
      Imagina que estás organizando un proyecto web, y para ello, decides
      estructurar tus archivos de manera ordenada. Este es un ejemplo de cómo
      podría verse el árbol de carga de dependencias de tu proyecto:
      <$CardCopy className="pad-10px mh-20px" style={{ color: "Khaki" }}>
        <pre>{ex}</pre>
      </$CardCopy>
      <$h />
      Cada uno de los archivos en este árbol de directorios puede ser
      referenciado en un documento HTML de la siguiente manera:
      <$PR lang="html" className="pad-10px mh-20px" style={{ color: "Khaki" }}>
        {asciiMap.html(ex).join("\n")}
      </$PR>
      Ahora, analiza ambas formas de organizar la carga de dependencias. La
      estructura de carpetas y archivos proporciona una representación visual
      clara de la organización de tu proyecto. Puedes ver de un vistazo cómo
      están distribuidos los componentes y qué archivos están relacionados entre
      sí.
      <$h />
      Por otro lado, la carga de recursos en el HTML, aunque funcional, puede
      parecer un poco caótica y menos intuitiva. En esta cadena de scripts y
      enlaces, puede ser más difícil identificar rápidamente de dónde proviene
      cada archivo y cómo se relaciona con los demás.
      <$$h />
      <Card className="pad-20px mh-10px">
        Ahora que has comparado ambas opciones, tú mismo puedes juzgar cuál de
        ellas es más entendible. La organización jerárquica no solo facilita la
        gestión del proyecto, sino que también mejora la legibilidad y el
        mantenimiento del código a lo largo del tiempo. Un árbol de carga de
        dependencias bien estructurado te permitirá tener un panorama claro de
        tu proyecto y será de gran ayuda para ti y cualquier colaborador que se
        sume al trabajo.
      </Card>
      <$h />
      <$index variant="h5">Propiedades</$index>
      <br />
      <$CardDef title="Estructura Modular">
        La carga de dependencias se organiza de forma jerárquica, permitiendo
        una mejor visualización y acceso a componentes y hojas de estilo. Por
        ejemplo, los archivos se integran de forma ordenada en como aparecen en
        la expresión.
      </$CardDef>
      <$CardDef title="Gestión Centralizada">
        Todos los recursos necesarios, desde componentes JavaScript hasta hojas
        de estilo CSS, se agrupan en carpetas específicas como `src` y
        `componentes`, lo que facilita la localización y edición de ruta de
        archivos.
      </$CardDef>
      <$CardDef title="Soporte para Librerías y Envolventes">
        La inclusión de carpetas dedicadas a librerías y envolventes en
        `paginas` y `main` ayuda a segmentar el proyecto en submódulos más
        manejables.
      </$CardDef>
      <$h />
      <$index variant="h5">Ventajas</$index>
      <$h />
      <$CardDef title="Mantenibilidad y Escalabilidad">
        A diferencia de la inclusión manual de múltiples `&lt;script&gt;` y `
        &lt;link&gt;` en un archivo HTML, la carga de dependencias con este
        enfoque permite modificar o actualizar componentes y estilos de manera
        centralizada sin necesidad de buscar y modificar cada referencia en el
        documento HTML.
      </$CardDef>
      <$CardDef title="Mejor Organización de Código">
        La estructura de carpetas ayuda a separar el contenido de la lógica de
        la aplicación, reduciendo la confusión y facilitando la colaboración
        entre desarrolladores.
      </$CardDef>
      <$CardDef title="Uso de bifurcaciones según casos">
        Las estructuras condicionales como `if` o `switch` permiten gestionar la
        carga de dependencias de forma flexible, evitando la inclusión
        innecesaria de recursos o adaptando la carga a diferentes situaciones.
        Esto es útil para optimizar el rendimiento y personalizar la experiencia
        según las condiciones específicas de cada caso.
      </$CardDef>
    </$FMD>
  );
}

let index_code_mirror = 0;

function Playground(props) {
  const [openDialogDownload, setOpenDialogDownload] = React.useState(false);

  const abrirAlertaDescarga = () => {
    setOpenDialogDownload(true);
  };

  const cerrarAlerta = () => {
    setOpenDialogDownload(false);
  };

  let init = false;

  let editorHTML, editorCSS, editorJS, editorJSX;
  const printWidth = 60;
  const transformar_columna = 1100;

  const textoHTML = React.useRef(HTML ?? "");
  const textoCSS = React.useRef(CSS ?? "");
  const textoJS = React.useRef(JS ?? "");
  const textoJSX = React.useRef(JSX ?? "");
  const idR = React.useRef(Math.random().toString(30).replace("0.", ""));

  const ref = React.useRef(null);

  let {
    nombre_proyecto,
    files = {},
    HTML,
    CSS,
    JS,
    JSX,
    index = -1,
    hideHTML = false,
    hideCSS = false,
    hideJS = false,
    hideJSX = false,
    templateHTML,
  } = props;

  React.useEffect(() => {
    cargarArchivos();

    async function cargarArchivos() {
      console.log("Cargando archivos...");
      if (index != -1 && index <= index_code_mirror) {
        const _html = await procesarArreglo(files.HTML);
        const _css = await procesarArreglo(files.CSS);
        const _js = await procesarArreglo(files.JS);
        const _jsx = await procesarArreglo(files.JSX);
        index_code_mirror++;
        textoHTML.current = HTML ?? _html ?? "";
        textoCSS.current = CSS ?? _css ?? "";
        textoJS.current = JS ?? _js ?? "";
        textoJSX.current = JSX ?? _jsx ?? "";
        formatearCodigo();
        ejecutarCodigo();
        return;
      }
      setTimeout(cargarArchivos, 1000);
    }

    async function procesarArreglo(arr) {
      let loadText = [];
      if (!arr) return;
      if (!Array.isArray(arr)) {
        arr = [arr];
      }
      for (const file of arr) {
        loadText.push(await cargar(file));
      }
      return loadText.join("\n\n");

      async function cargar(ruta) {
        try {
          const response = await fetch(ruta);
          if (!response.ok) {
            throw new Error(
              "Error al obtener el archivo: " + response.statusText
            );
          }
          const texto = await response.text();
          return texto;
        } catch (error) {}
        return "";
      }
    }
  }, []);

  return <ComponenteRetorno />;

  function ComponenteRetorno() {
    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
      function handleResize() {
        setWidth(window.innerWidth);
      }
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }, []);

    React.useLayoutEffect(() => {
      formatearCodigo();
      ejecutarCodigo();
      if (init) {
        crearEditores();
        return;
      }
      init = true;
    }, [width]);

    return (
      <div
        ref={ref}
        className={fluidCSS()
          .gtX(transformar_columna, {
            maxHeight: "400px",
          })
          .ltX(transformar_columna, {
            flexWrap: "wrap",
            flexDirection: "column-reverse",
          })
          .end(
            `codemirror-instance estilo-fila-mini ${isThemeDark ? "a" : "light"}`
          )}
      >
        <PestañasVerticales />
        <iframe
          src={`${templateHTML}?iframeId=${idR.current}`}
          id={`output`}
          className={fluidCSS()
            .gtX(transformar_columna, {
              width: "35%",
              aspectRatio: "1",
            })
            .ltX(transformar_columna, {
              width: "100%",
              minHeight: "50vh",
            })
            .end()}
        ></iframe>
        <ConfirmarDescarga
          titulo={`Descargar ${nombre_proyecto}.zip`}
          mensaje="Continuar con la descarga"
        />
      </div>
    );
  }

  function PestañasVerticales() {
    const [valor, setValor] = React.useState(0);

    const manejarCambio = (evento, nuevoValor) => {
      setValor(nuevoValor);
    };

    React.useLayoutEffect(() => {
      crearEditores();
      formatearCodigo();
    }, [valor]);

    const classEditor = fluidCSS()
      .gtX(transformar_columna, {
        maxWidth: "98%",
        width: "calc(100% + 60px)",
      })
      .end("editor-container");

    const editor_html = (
      <div id="editor-html" className={classEditor}>
        <textarea id={`html-code`}>{textoHTML.current}</textarea>
      </div>
    );

    const editor_css = (
      <div id="editor-css" className={classEditor}>
        <textarea id={`css-code`}>{textoCSS.current}</textarea>
      </div>
    );

    const editor_js = (
      <div id="editor-js" className={classEditor}>
        <textarea id={`js-code`}>{textoJS.current}</textarea>
      </div>
    );

    const editor_jsx = (
      <div id="editor-jsx" className={classEditor}>
        <textarea id={`jsx-code`}>{textoJSX.current}</textarea>
      </div>
    );

    let i = 0;
    let j = 0;

    return (
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Tabs
          orientation="vertical"
          value={valor}
          onChange={manejarCambio}
          sx={{
            borderRight: 1,
            borderColor: "divider",
            minHeight: "400px",
          }}
        >
          {hideHTML || (
            <Tab
              label={
                <BotonPestaña icon={<i class="fa-solid fa-code"></i>}>
                  HTML
                </BotonPestaña>
              }
              {...propAccesibilidad(i++)}
            />
          )}
          {hideCSS || (
            <Tab
              label={
                <BotonPestaña icon={<i class="fa-brands fa-css"></i>}>
                  CSS
                </BotonPestaña>
              }
              {...propAccesibilidad(i++)}
            />
          )}
          {hideJS || (
            <Tab
              label={
                <BotonPestaña icon={<i class="fa-brands fa-square-js"></i>}>
                  JS
                </BotonPestaña>
              }
              {...propAccesibilidad(i++)}
            />
          )}
          {hideJSX || (
            <Tab
              label={
                <BotonPestaña icon={<i class="fa-brands fa-react"></i>}>
                  JSX
                </BotonPestaña>
              }
              {...propAccesibilidad(i++)}
            />
          )}
        </Tabs>
        {hideHTML || (
          <TabPanel valor={valor} index={j++} className="fullWidth">
            {editor_html}
          </TabPanel>
        )}
        {hideCSS || (
          <TabPanel valor={valor} index={j++} className="fullWidth">
            {editor_css}
          </TabPanel>
        )}
        {hideJS || (
          <TabPanel valor={valor} index={j++} className="fullWidth">
            {editor_js}
          </TabPanel>
        )}
        {hideJSX || (
          <TabPanel valor={valor} index={j++} className="fullWidth">
            {editor_jsx}
          </TabPanel>
        )}
        <div className="d-none">
          {editor_html}
          {editor_css}
          {editor_js}
          {editor_jsx}
        </div>
        <div id="botones-control">
          <Tooltip title="Ejecutar código" placement="right">
            <IconButton
              variant="contained"
              color="contrast"
              onClick={ejecutarCodigo}
              id="ejecutar-codigo"
            >
              <i className="fa fa-play" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Descargar" placement="right">
            <IconButton
              variant="contained"
              color="contrast"
              onClick={abrirAlertaDescarga}
              id="ejecutar-codigo"
            >
              <i className="fa fa-download" />
            </IconButton>
          </Tooltip>
        </div>
      </Box>
    );

    function BotonPestaña({ icon, children }) {
      return (
        <big
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
            width: "100%",
            paddingRight: "10px",
          }}
        >
          {icon}
          <b>{children}</b>
        </big>
      );
    }

    function TabPanel(props) {
      const { children, valor, index, ...otros } = props;

      return (
        <div
          role="tabpanel"
          hidden={valor !== index}
          id={`vertical-tabpanel-${index}`}
          aria-labelledby={`vertical-tab-${index}`}
          {...otros}
        >
          {valor === index && (
            <Box sx={{ p: 3 }}>
              <Typography>{children}</Typography>
            </Box>
          )}
        </div>
      );
    }

    function propAccesibilidad(index) {
      return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
      };
    }
  }

  function crearEditores() {
    const idEditores = ["html-code", "css-code", "js-code", "jsx-code"];
    if (!ref.current) {
      return setTimeout(crearEditores, 50);
    }
    editorHTML = CodeMirror.fromTextArea(
      ref.current.querySelector("#" + idEditores[0]),
      {
        mode: "htmlmixed",
        lineNumbers: true,
        theme: asciiMap.CLI.codemirror_theme_name(),
      }
    );

    editorHTML.on("change", function (instancia, objetoCambio) {
      textoHTML.current = instancia.getValue();
    });
    editorHTML.on("keydown", capturarComando);

    editorCSS = CodeMirror.fromTextArea(
      ref.current.querySelector("#" + idEditores[1]),
      {
        mode: "text/x-scss",
        lineNumbers: true,
        theme: asciiMap.CLI.codemirror_theme_name(),
      }
    );

    editorCSS.on("change", function (instancia, objetoCambio) {
      textoCSS.current = instancia.getValue();
    });
    editorCSS.on("keydown", capturarComando);

    editorJS = CodeMirror.fromTextArea(
      ref.current.querySelector("#" + idEditores[2]),
      {
        mode: "javascript",
        lineNumbers: true,
        theme: asciiMap.CLI.codemirror_theme_name(),
      }
    );

    editorJS.on("change", function (instancia, objetoCambio) {
      textoJS.current = instancia.getValue();
    });
    editorJS.on("keydown", capturarComando);

    editorJSX = CodeMirror.fromTextArea(
      ref.current.querySelector("#" + idEditores[3]),
      {
        mode: "javascript",
        lineNumbers: true,
        theme: asciiMap.CLI.codemirror_theme_name(),
      }
    );

    editorJSX.on("change", function (instancia, objetoCambio) {
      textoJSX.current = instancia.getValue();
    });
    editorJSX.on("keydown", capturarComando);

    function capturarComando(cm, evento) {
      if (evento.altKey && evento.shiftKey && evento.key === "F") {
        formatearCodigo();
      }
    }
  }

  function ConfirmarDescarga({
    textoConfirmar = "Descargar",
    textoCancelar = "Cancelar",
    titulo = "Descargar el ejercicio",
    mensaje = "¿Estás seguro de querer descargar el ejercicio?",
  }) {
    return (
      <Dialog
        open={openDialogDownload}
        onClose={cerrarAlerta}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{titulo}</DialogTitle>
        <DialogContent>
          <DialogContentText>{mensaje}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              cerrarAlerta();
            }}
          >
            {textoCancelar}
          </Button>
          <Button
            onClick={() => {
              cerrarAlerta();
              descargarCodigo({
                archivos: {
                  "index.html": prettier.format(
                    `
                    <!DOCTYPE html>
                    <html lang="es">
                      <head>
                        <title>${nombre_proyecto}</title>
  
                        <script
                          type="text/javascript"
                          src="https://jeff-aporta.github.io/ascii-maploader/static/js/index.all.min.js"
                        ></script>
                
                        <script>
                          asciiMap.CLI.react_mui_fa();
                          asciiMap.CLI.fluidCSS();
                          asciiMap.CLI.JS2CSS();
                        </script>
  
                        <script type="text/babel">
                          if (typeof window != "undefined" && window["MaterialUI"]) {
                            Object.assign(window, window["MaterialUI"]);
                          }
                        </script>
  
                        ${
                          textoCSS
                            ? `<link rel="stylesheet" href="styles.css" />`
                            : ""
                        }
                        ${
                          textoJS
                            ? `<script src="script.js" defer></script>`
                            : ""
                        }
                        ${
                          textoJSX
                            ? `<script type="text/babel" src="script.jsx"></script>`
                            : ""
                        }
                      </head>
                      <body>
                        ${textoHTML.current}
                      </body>
                    </html>
                    `,
                    {
                      parser: "html",
                      plugins: prettierPlugins,
                    }
                  ),
                  ...(() => {
                    const retorno = {};
                    if (textoCSS) {
                      retorno["styles.css"] = textoCSS;
                    }
                    if (textoJS) {
                      retorno["script.js"] = textoJS;
                    }
                    if (textoJSX) {
                      retorno["script.jsx"] = textoJSX;
                    }
                    return retorno;
                  })(),
                },
                nombre_proyecto: nombre_proyecto,
              });
            }}
            autoFocus
          >
            {textoConfirmar}
          </Button>
        </DialogActions>
      </Dialog>
    );

    function descargarCodigo({ archivos }) {
      if (!archivos) {
        console.error("No hay archivos para descargar");
      }

      const zip = new JSZip();

      const carpeta = zip.folder(nombre_proyecto ?? "Proyecto");

      Object.entries(archivos).forEach(([nombre, contenido]) => {
        carpeta.file(nombre, contenido);
      });

      zip.generateAsync({ type: "blob" }).then(function (content) {
        saveAs(content, nombre_proyecto + ".zip");
      });
    }
  }

  function ejecutarCodigo() {
    const iframe = ref.current.querySelector("iframe");
    const docIframe = iframe.contentDocument || iframe.contentWindow.document;
    modContenedor(
      docIframe.querySelector("#contenido-html-playground"),
      textoHTML.current
    );
    modContenedor(
      docIframe.querySelector("#contenido-css-playground"),
      textoCSS.current
    );
    modContenedor(
      docIframe.querySelector("#contenido-js-playground"),
      textoJS.current
    );
    modContenedor(
      docIframe.querySelector("#contenido-jsx-playground"),
      textoJSX.current
    );
    if (!docIframe.querySelector("#contenido-html-playground")) {
      setTimeout(ejecutarCodigo, 100);
    }

    function modContenedor(contenedor, contenido) {
      if (!contenedor || !contenido) {
        return;
      }
      if (contenedor.innerHTML != contenido) {
        contenedor.innerHTML = contenido;
      }
    }
  }

  // Función para formatear el código usando Prettier
  function formatearCodigo() {
    if (!editorHTML || !editorCSS || !editorJS || !editorJSX) {
      return setTimeout(formatearCodigo, 500);
    }
    try {
      var contenidoHTML = textoHTML.current;
      var contenidoCSS = textoCSS.current;
      var contenidoJS = textoJS.current;
      var contenidoJSX = textoJSX.current;

      let htmlFormateado = prettier.format(contenidoHTML, {
        parser: "html",
        plugins: prettierPlugins,
        printWidth,
      });
      let cssFormateado = prettier.format(contenidoCSS, {
        parser: "css",
        plugins: prettierPlugins,
        printWidth,
      });
      let jsFormateado = prettier.format(contenidoJS, {
        parser: "babel",
        plugins: prettierPlugins,
        printWidth,
      });

      let jsxFormateado = prettier.format(contenidoJSX, {
        parser: "babel",
        plugins: prettierPlugins,
        printWidth,
      });

      editorHTML.setValue(htmlFormateado);
      editorCSS.setValue(cssFormateado);
      editorJS.setValue(jsFormateado);
      editorJSX.setValue(jsxFormateado);

      textoHTML.current = htmlFormateado;
      textoCSS.current = cssFormateado;
      textoJS.current = jsFormateado;
      textoJSX.current = jsxFormateado;
    } catch (error) {
      alert("Error al formatear el código: " + error.message);
    }
  }
}

function _string() {
  setTimeout(PR.prettyPrint);
  const titulo = "Mapa ASCII";
  const ex = loadStringsSync("static/jsx/fragmentos/frag-03.txt");
  return (
    <$FMD>
      <$index variant="h1" className={fluidCSS().end("nowrap")}>
        {titulo}
      </$index>
      <$$h />
      La iniciativa de este proyecto surgió para resolver la complejidad de
      gestionar dependencias en sitios web estáticos de forma eficiente y
      organizada. Utilizar un mapa ASCII permite visualizar y manejar estas
      dependencias con mayor claridad, replicando la estructura de archivos de
      tu proyecto de forma comprensible.
      <$h />
      <$PR lang="html" className="pad-10px mh-20px" style={{ color: "Khaki" }}>
        {ex}
      </$PR>
      Este enfoque ofrece una manera más ordenada y programática de gestionar la
      inserción de scripts y hojas de estilo, haciendo que tu código sea más
      limpio y fácil de mantener.
      <$$h />
      <$hr />
      <$h />
      <$index variant="h5">Caracteres y Decoradores</$index>
      <$CardDef title="Secuencias o Caracteres Ignorados">
        {cards({
          "➤": `Indica el inicio de un árbol de dependencias.`,
          "──": `Utilizado para decorar las ramas del árbol, brindando una apariencia
          visual organizada.`,
        })}
      </$CardDef>
      <$CardDef title="Indicadores de Nivel">
        {cards({
          "├": `Representa una bifurcación a la derecha y continúa hacia abajo.`,
          "└": `Marca una bifurcación solo a la derecha, señalando el final de esa
          rama.`,
          "│": `Indica un camino que no tiene bifurcaciones en ese renglón.`,
          "╧": `Señala el final de un camino específico.`,
        })}
      </$CardDef>
      <$CardDef title="Indicadores de Ramas">
        {cards({
          "🌐": `Indica un directorio web.`,
          "📁": `Representa un directorio estándar.`,
          "🗀": `Muestra un directorio que se ignora en la carga de dependencias.`,
        })}
      </$CardDef>
      <$CardDef title="Indicadores de Hojas">
        {cards({
          "🔗": "Indica un archivo web.",
          "📄": "Representa un archivo JS o JSX",
        })}
      </$CardDef>
      <$CardDef title="Tipo de Archivo">
        {cards({
          "🎨": "Marca archivos de tipo CSS.",
          "🖼️": `Indica que un archivo .css tiene el mismo nombre que otro archivo en
          el directorio.`,
          "📦": "Señala un archivo JavaScript que es de tipo módulo.",
          "🐌": "Muestra un archivo JavaScript que tiene la propiedad `defer` activada.",
        })}
      </$CardDef>
      <$CardDef title="Especiales">
        {cards({
          "🏠": `Un archivo marcado con este decorador se cargará en la raíz del
          proyecto, incluso si está representado en un subdirectorio.`,
        })}
      </$CardDef>
      <$$h />
      <Card elevation={6} className="pad-30px">
        Esta guía ayuda a interpretar y utilizar un sistema de símbolos para
        representar estructuras de archivos y dependencias de forma visual,
        facilitando la organización y la carga de recursos en proyectos de
        desarrollo.
      </Card>
    </$FMD>
  );

  function cards(e) {
    return Object.entries(e).map(([icon, desc]) => (
      <$CardDef elevation={0} title={<$CardCopy><$enfasis>{icon}</$enfasis></$CardCopy>}>
        {desc}
      </$CardDef>
    ));
  }
}

