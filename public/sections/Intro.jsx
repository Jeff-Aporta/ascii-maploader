(() => {
  if (!sections) {
    console.log("No sections");
  }

  sections["introduccion"] = (
    <SectionDoc title="¿Qué es?">
      <p>
        Es un lenguaje interpretado nacido de la necesidad de abstraer las
        opciones de @media en CSS, ya que por defecto CSS estas funciones son
        complejas de trabajar
      </p>
      <SectionDoc title="Caracteristicas" deep={1}>
        <p>cuenta con opciones de condiciones e interpolación lineal.</p>
        <SectionDoc title="Bifurcaciones" deep={2}>
          <SectionDoc title="lt (less-than)" deep={3}>
            Explicacion de lt
          </SectionDoc>
          <SectionDoc title="gt (greater-than)" deep={3}>
            Explicacion de gt
          </SectionDoc>
        </SectionDoc>
        <SectionDoc title="Trifurcación" deep={2}>
          <SectionDoc title="btw (between)" deep={3}>
            Explicacion
          </SectionDoc>
        </SectionDoc>
      </SectionDoc>
    </SectionDoc>
  );
})();
