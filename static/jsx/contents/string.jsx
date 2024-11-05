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
