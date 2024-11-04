function $enfasis({ children }) {
  return (
    <big>
      <strong className="c-skyblue">{children}</strong>
    </big>
  );
}

function $secundario({ children }) {
  return <span style={{ color: "steelblue" }}>{children}</span>;
}

function loadStringsSync(url) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, false);
  xhr.send(null);

  if (xhr.status === 200) {
    return xhr.responseText;
  } else {
    console.error("Error al cargar el archivo:", xhr.status);
  }
}
