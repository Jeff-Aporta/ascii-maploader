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
        <Editor_en_linea
          nombre_proyecto="proyecto-de-prueba-1"
          plantilla_HTML={asciiMap.CLI.myUI().playground_template.html}
          extra_js={() => abrir_consola()}
          JS={`const my_tree = asciiMap.tree("name-root");console.log(my_tree.toString());`}
          index={0}
        />
        <$PR
          elevation={0}
          lang="js"
        >{`const my_tree = asciiMap.tree("name-root");`}</$PR>
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
