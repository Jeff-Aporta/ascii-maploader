function SectionDoc({ title, deep = 0, children }) {
  const { style, clase } = _propsSection(deep);

  return (
    <IDR
      className={`content-container ${clase} indexed`}
      style={style}
      onScroll={() => {
        const parent = document.querySelector(".root");
        const topparent = parent.getBoundingClientRect().top;
        const scrollparent = parent.scrollTop;
        const elementosIndexados = [
          ...document.querySelectorAll(".indexed"),
        ].filter((e) => !e.classList.contains("root"));
        document
          .querySelectorAll(".topest")
          .forEach((e) => e.classList.remove("topest"));
        const calcT = (e) => {
          const top = e.offsetTop;
          return top - scrollparent;
        };
        const topest = elementosIndexados.find((e) => {
          return (
            calcT(e) > topparent &&
            calcT(e) < topparent + window.innerHeight * 0.9
          );
        });
        const indextop = document.getElementById(topest.id + "-index");
        if (indextop) {
          indextop.classList.add("topest");
        }
      }}
    >
      <$ variant={`h${deep + 1}`} className="titulo">
        {title}
      </$>
      <$br />
      {!deep ? <$hr /> : ""}
      <$br />
      {children}
    </IDR>
  );

  function _propsSection() {
    const colores = ["#050C9C", "#3572EF", "#3ABEF9", "#A7E6FF"];
    const length = Object.keys(colores).length;
    const clase = (() => {
      if (deep == 0) {
        return "padt-40px root";
      }
      return `mh-20px`;
    })();

    return {
      clase: clase,
      style: calcContentStyles(deep),
    };

    function calcContentStyles(deep) {
      const index = deep % length;
      const indexinv = length - 1 - index;
      const color = colores[index];
      const grosorBorde = indexinv + 1;
      let style = {
        border: `1px solid rgba(255,255,255,0.1)`,
        borderLeft: `${grosorBorde}px solid ${color}`,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
      };
      if (deep < 2) {
        style = {};
      }
      return style;
    }
  }
}
