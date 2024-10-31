const fs = 12;

function _T_(props) {
  let fscls = (() => {
    const map = {
      h1: 60,
      h2: 30,
      h3: 25,
      h4: 23,
      h5: 20,
      h6: 15,
    };
    const sz = map[props.variant] ?? fs;
    return fluidCSS()
      .lerpX([320, 900], {
        fontSize: [12, sz],
      })
      .end(props.className);
  })();
  return <_ {...props} className={fscls} />;
}
