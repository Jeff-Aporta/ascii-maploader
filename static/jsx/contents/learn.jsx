function _learn() {
  const titulo = "Lenguaje de dependencias";
  const ex = loadStringsSync("static/jsx/fragmentos/frag-01.txt");

  return (
    <$FMD>
      <$index label="Empecemos" variant="h2" className="nowrap">
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
        {asciiMap
          .html(ex)
          .join("\n")
          .replace(/onerror=".*"/g, "")
          .replace(/\s+/g, " ")
          .replace(/\s*</g, "<")
          .replace(/\s*>/g, ">")
          .replaceAll(">", ">\n")
          .replace(/>\s*<\//g, "></")
          }
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
