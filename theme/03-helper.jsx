const config_template = {
  clases: {
    text: fluidCSS()
      .lerpX([850, 1200], { fontSize: [13, 16] })
      .end(),
  },
};
const sections = {};

function idR(prefix = "idR") {
  return Math.random()
    .toString(36)
    .replace("0.", prefix + "-");
}

function IDR(props) {
  return <_ {...props} id={idR()} />;
}

function get_id_param() {
  return (
    new URL(window.location.href).searchParams.get("id") ??
    config_template.default_id
  );
}
