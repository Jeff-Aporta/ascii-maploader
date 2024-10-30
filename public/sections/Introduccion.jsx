sections["introduccion"] = newContent(<_>Introducción</_>)
  .sub(
    <_>¿Qué es?</_>,
    <p>
      Es un lenguaje interpretado nacido de la necesidad de abstraer las
      opciones de @media en CSS, ya que por defecto CSS estas funciones son
      complejas de trabajar
    </p>
  )
  .sub(
    <_>Caracteristicas</_>,
    <p>cuenta con opciones de condiciones e interpolación lineal.</p>,
    (body) => {
      body.sub(<_>Bifurcaciones</_>, null, (body) => {
        body
          .sub(
            <_>
              <p>lt (less-than)</p>
            </_>,
            <p>Explicacion de lt</p>
          )
          .sub(
            <_>
              <p>gt (greater-than)</p>
            </_>,
            <p>Explicacion de gt</p>
          );
      });
      body.sub(<_>Trifurcación</_>, null, (body) => {
        body.sub(<_>btw (between)</_>, <p>Explicacion</p>);
      });
    }
  )
  .render();
