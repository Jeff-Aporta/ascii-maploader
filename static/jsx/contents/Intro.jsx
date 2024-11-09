function _intro() {
  const urlCDN =
    "https://jeff-aporta.github.io/ascii-maploader/static/js/index.all.min.js";

  setTimeout(PR.prettyPrint);

  return (
    <$FMD>
      <_$Bienvenido name_app="ASCII Map Loader" img_url="static/img/logo.jpeg">
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
      <$index label="Instalación">
        <Card className="pad-10px">
          <$ variant="h3">Instalación</$>
          <$hr />
          <$ variant="h4">CDN</$>
          <p>
            Para usarlo en tu proyecto, puedes integrarlo de forma sencilla
            mediante la URL en tu código HTML.
          </p>
          <$BasicTabs
            onIndexChange={(e, i) => i == 1 && setTimeout(PR.prettyPrint)}
            style={{ border: "1px solid rgba(128, 128, 128, 0.2)" }}
            children={{
              DEPENDENCIAS: (
                <$CardCopy
                  elevation={0}
                  style={{
                    padding: "40px 10px 40px 10px",
                    color: "hotpink",
                  }}
                >
                  {urlCDN}
                </$CardCopy>
              ),
              HTML: (
                <$PR elevation={0} lang="html">
                  {[
                    `\u003Cscript type="text/javascript"`,
                    `  src="${urlCDN}"`,
                    `>\u003C/script>`,
                  ].join("\n")}
                </$PR>
              ),
            }}
          />
          <$h />
          <$ variant="h4">npm</$>
          <p>
            Ejecuta el siguiente comando para agregar ASCII Map Loader en su
            proyecto:
          </p>
          <$CardCopy elevation={0} className="pad-20px">
            <span className="c-yellow">npm</span> install{" "}
            <strong>ascii-maploader</strong>{" "}
            <span className="c-gray">--save</span>
          </$CardCopy>
        </Card>
      </$index>
      <$$h />
      <$hr />
      ### Funciones del módulo
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