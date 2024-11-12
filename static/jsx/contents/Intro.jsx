function _intro() {
  setTimeout(PR.prettyPrint);

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
