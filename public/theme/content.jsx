function newContent(props) {
  class _content {
    childs = [];

    constructor(titulo, inicio, body, deep = 0) {
      this.titulo = titulo;
      this.contStart = inicio;
      this.deep = deep;
      this.class = "";
      switch (deep) {
        case 0:
          this.class = "padt-40px root";
          break;
        default:
          this.class = `mh-20px`;
          break;
      }
      body?.(this);
    }
    sub(titulo, contenido, body) {
      const child = new _content(titulo, contenido, body, this.deep + 1);
      this.childs.push(child);
      return this;
    }
    render() {
      const coloresSeccion = {
        0: "#050C9C",
        1: "#3572EF",
        2: "#3ABEF9",
        3: "#A7E6FF",
      };
      const length = Object.keys(coloresSeccion).length;
      const index = this.deep % length;
      const color = coloresSeccion[index];
      const indexinv = length - 1 - index;
      const grosorBorde = indexinv + 1;
      let style = {
        border: `1px solid rgba(255,255,255,0.1)`,
        borderLeft: `${grosorBorde}px solid ${color}`,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
      };
      if (this.deep < 2) {
        style = {};
      }
      return (
        <IDR className={`content-container ${this.class} indexed`} style={style}>
          <$ variant={`h${this.deep + 1}`} className="titulo">
            {this.titulo}
          </$>
          <$br/>
          {this.contStart}
          {!this.deep ? (
            <$hr/>
          ) : (
            ""
          )}
          <$br />
          {this.childs.map((child) => child.render())}
          {this.contEnd}
        </IDR>
      );
    }
    end(contEnd) {
      this.contEnd = contEnd;
      return this.render();
    }
  }

  return new _content(props);
}
