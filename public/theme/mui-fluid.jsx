const fs = 15;

function $(props) {
  let fscls = (() => {
    const map = {
      h1: 60,
      h2: 50,
      h3: 40,
      h4: 35,
      h5: 30,
      h6: 25,
      h7: 20,
      h8: 17,
    };
    const sz = map[props.variant];
    if (sz) {
      return fluidCSS()
        .lerpX([320, 900], {
          fontSize: [fs, sz],
        })
        .ltX(600, { fontWeight: "bolder" })
        .end(props.className);
    }
    return "";
  })();
  return <_ {...props} className={fscls} />;
}
