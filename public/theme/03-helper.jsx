const sections = {};

function idR() {
  return Math.random().toString(36).replace("0.", "idR-");
}

function IDR(props) {
  return <_ {...props} id={idR()} />;
}
