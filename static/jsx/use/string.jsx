function _string() {
  setTimeout(PR.prettyPrint);
  const titulo = "Mapa ASCII";
  const ex = loadStringsSync("static/jsx/use/frag-01.txt");
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
        Función que quema las dependencias al HTML
        <$CardDef elevation={0} title="➤">
          Indica el inicio de un árbol de dependencias.
        </$CardDef>
        <$CardDef elevation={0} title="──">
          Utilizado para decorar las ramas del árbol, brindando una apariencia
          visual organizada.
        </$CardDef>
      </$CardDef>
      <$CardDef title="Indicadores de Nivel">
        Función que quema las dependencias al HTML
        <$CardDef elevation={0} title="├">
          Representa una bifurcación a la derecha y continúa hacia abajo.
        </$CardDef>
        <$CardDef elevation={0} title="└">
          Marca una bifurcación solo a la derecha, señalando el final de esa
          rama.
        </$CardDef>
        <$CardDef elevation={0} title="│">
          Indica un camino que no tiene bifurcaciones en ese renglón.
        </$CardDef>
        <$CardDef elevation={0} title="╧">
          Señala el final de un camino específico.
        </$CardDef>
      </$CardDef>
      <$CardDef title="Indicadores de Ramas">
        <$CardDef elevation={0} title="🌐">
          Indica un directorio web.
        </$CardDef>
        <$CardDef elevation={0} title="📁">
          Representa un directorio estándar.
        </$CardDef>
        <$CardDef elevation={0} title="🗀">
          Muestra un directorio que se ignora en la carga de dependencias.
        </$CardDef>
      </$CardDef>
      <$CardDef title="Indicadores de Hojas">
        <$CardDef elevation={0} title="🔗">
          Indica un archivo web.
        </$CardDef>
        <$CardDef elevation={0} title="📄">
          Representa un archivo de texto o código.
        </$CardDef>
      </$CardDef>
      <$CardDef title="Tipo de Archivo">
        <$CardDef elevation={0} title="🎨">
          Marca archivos de tipo CSS.
        </$CardDef>
        <$CardDef elevation={0} title="🖼️">
          Indica que un archivo .css tiene el mismo nombre que otro archivo en
          el directorio.
        </$CardDef>
        <$CardDef elevation={0} title="📦">
          Señala un archivo JavaScript que es de tipo módulo.
        </$CardDef>
        <$CardDef elevation={0} title="🐌">
          Muestra un archivo JavaScript que tiene la propiedad `defer` activada.
        </$CardDef>
      </$CardDef>
      <$CardDef title="Especiales">
        Azúcar sintáctico
        <$CardDef elevation={0} title="🏠">
          Un archivo marcado con este decorador se cargará en la raíz del
          proyecto, incluso si está representado en un subdirectorio.
        </$CardDef>
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
}
