function _cascade() {
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
        <EjemploConConsola
          js={`
            var mapa = asciiMap.tree().css("style1","style2","style3");

            console.log(mapa.toString());
          `}
        />
        para incluir varios estilos a la vez.
      </$CardDef>
      <$CardDef title=".js(...filesname)">
        Con esta función, puedes agregar archivos de JavaScript en formato .js
        al árbol. Un ejemplo sería:
        <EjemploConConsola
          js={`
            var mapa = asciiMap.tree().js("logic1","logic2","logic3");

            console.log(mapa.toString());
          `}
        />
        donde puedes añadir múltiples archivos de lógica de tu aplicación.
      </$CardDef>
      <$CardDef title=".jsx(...filesname)">
        Similar a la función anterior, esta se usa para agregar archivos de
        JavaScript que contienen sintaxis JSX, comúnmente utilizados con React.
        Por ejemplo, al escribir
        <EjemploConConsola
          js={`
            var mapa = asciiMap.tree().jsx("react1","react2","react3");

            console.log(mapa.toString());
          `}
        />
        estarás incluyendo varios componentes React en tu árbol.
      </$CardDef>
      Estas funciones simplifican la gestión de archivos en tu proyecto,
      permitiéndote organizar y cargar tus dependencias de manera eficiente.
      <$$h />
      <$hr />
      <$$h />
      #### Ramificación
      <$CardDef title="tree.newBranch()">
        permite seleccionar una rama específica en la rama actual, alias alt
        `subDir`
        <$$h />
        <$ variant="h9">
          <$secundario>Ejemplo</$secundario>
        </$>
        <br />
        <EjemploConConsola
          js={`
            var mapa = asciiMap.tree("public").newBranch("ex-branch", branch=>{
                    branch.css("style").js("script").jsx("App");
            });

            console.log(mapa.toString());
          `}
        />
      </$CardDef>
      <$CardDef title="tree.firstBranch()">
        Busca, si no encuenta entonces la crea
      </$CardDef>
      <$CardDef title="tree.findFirstBranch()">
        Busca, sólo devuelve si encuentra.
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
      <$CardDef title=".toHtml()">
        En lugar de modificar el HTML directamente, esta función retorna un
        arreglo que contiene las cadenas de texto de las etiquetas que se
        deberían incluir en el documento. Esto es útil si deseas manipular o
        revisar las etiquetas antes de insertarlas en el HTML.
        <$h />
        Por ejemplo, al utilizar la función, el resultado será un arreglo que
        incluye las etiquetas necesarias para cargar los archivos
        correspondientes:
        <EjemploConConsola
          js={`
            var mapa = asciiMap
            .tree()
            .newBranch("ex-branch", (branch) => {
              branch.css("style").js("script").jsx("App");
              });
              
            var html = removerRuido(mapa.toHtml());

            html.forEach(x => console.log(x));

            function removerRuido(arr_html){ // Opcional
              return arr_html.map(x => x.replace(/onerror=".*"/g, "")
                              .replace(/\\s+/g, " ")
                              .replace(/\\s*</g, "<")
                              .replace(/\\s*>/g, ">")
                              .replaceAll(">", ">\\n")
                              .replace(/>\\s*<\\//g, "></")
              );
            }
          `}
        />
      </$CardDef>
      <$CardDef title=".toJson()">
        convierte la estructura del árbol de dependencias que has creado en un
        formato JSON, lo que facilita su manipulación y almacenamiento. Este
        formato es especialmente útil si deseas integrar los datos en
        aplicaciones que manejan estructuras JSON o si necesitas realizar
        operaciones adicionales sobre la información.
        <p>Por ejemplo, al utilizar la función de esta manera:</p>
        <EjemploConConsola
          playground_extra_clases=""
          js={`
            var mapa = asciiMap.tree("public").subDir("ex-branch", branch=>{
                branch.css("style").js("script").jsx("App");
            });
              
            console.log(mapa.toJson());
          `}
        />
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
function EjemploConConsola({
  js,
  playground_extra_clases = "minimo-1-pestaña",
}) {
  return (
    <Editor_en_linea
      playground_extra_clases={playground_extra_clases}
      nombre_proyecto="proyecto-de-prueba-1"
      plantilla_HTML={template_html}
      extra_js={() => {
        abrir_consola();
        bloquear_consola();
      }}
      HTML="#basic-console"
      CSS="#basic-console"
      JS={js}
      index={0}
      ocultar_pestañas={true}
      ocultar_pestaña_HTML={true}
      ocultar_pestaña_CSS={true}
      ocultar_pestaña_JSX={true}
    />
  );
}
