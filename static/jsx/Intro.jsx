function _intro() {
  const urlCDN =
    "https://jeff-aporta.github.io/ascii-maploader/static/js/index.all.min.js";

  setTimeout(PR.prettyPrint);

  const titulo = "ASCII Map Loader";

  return (
    <$FMD>
      <$index
        label="Bienvenido"
        variant="h1"
        className={fluidCSS()
          .btwX([950, 1050], { display: "none" })
          .end("nowrap")}
      >
        {titulo}
      </$index>
      <$
        variant="h2"
        className={fluidCSS()
          .btwX([950, 1050], { display: [, "none"] })
          .end("nowrap")}
      >
        {titulo}
      </$>
      <$$h />
      <div
        className={fluidCSS()
          .ltX(1050, { flexDirection: "column" })
          .end("d-flex jc-sb gap-30px")}
      >
        <img
          src="static/img/logo.jpeg"
          alt=""
          className={fluidCSS()
            .ltX(1050, { display: "none" })
            .lerpX([1050, 1200], { width: [250, 270], height: [250, 270] })
            .end("br-30px")}
        />
        <$F>
          Es un lenguaje interpretado que permite cargar dependencias de
          archivos `.jsx`, `.js` y `.css`. Se destaca por estar diseñado para
          inyectar estos elementos en tiempo real al cargar un documento HTML
          mediante el uso de la función `document.write()`.
          <$$h />
          Perfecto para cuando estás haciendo desarrollos de multiples módulos
          en un proyecto, personalmente lo uso para comprobar que los archivos
          `.mjs` sean compatibles en las dependencias de páginas estáticas o que
          deban ser usadas necesariamente en el cliente.
        </$F>
        <center>
          <img
            src="static/img/logo.jpeg"
            alt=""
            className={fluidCSS()
              .btwX([500, 1050], { display: ["", "none"] })
              .lerpX([600, 1050], { width: [250, 300], height: [250, 300] })
              .end("br-30px")}
          />
        </center>
      </div>
      <$$h />
      <$hr />
      <$ variant="h3">
        <$secundario>Instalación</$secundario>
      </$>
      <$h />
      #### CDN
      <CDN />
      <$h />
      #### npm
      <Npm />
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

  function Npm() {
    return (
      <Card className="pad-10px">
        <$F>
          <$h />
          Para instalarlo, ejecuta el siguiente comando en tu terminal:
          <$h />
          ```box npm install ascii-maploader ```
          <$h />
          En tu código JavaScript, importa el módulo con:
          <$PR lang="javascript">import asciiMap from "ascii-maploader";</$PR>
        </$F>
      </Card>
    );
  }

  function CDN() {
    return (
      <Card className="pad-10px">
        <$F>
          <$h />
          Para usarlo en tu proyecto, puedes integrarlo de forma sencilla
          mediante la URL: ```url
          https://jeff-aporta.github.io/ascii-maploader/static/js/index.all.min.js
          ``` En tu código HTML.
          <$Copy>
            <$PR lang="html">
              {[
                `<script`,
                `   type='text/javascript'`,
                `   src='${urlCDN}'`,
                `>`,
                `</script>`,
              ].join("\n")}
            </$PR>
          </$Copy>
          Esto permitirá que tu aplicación cargue y utilice la funcionalidad de
          **ASCII Maploader** para estructurar y gestionar las dependencias de
          tu proyecto de manera programada y visual.
        </$F>
      </Card>
    );
  }
}
