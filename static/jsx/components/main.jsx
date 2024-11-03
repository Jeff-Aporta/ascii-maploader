function $CardDef(props) {
  const { title, children } = props;
  delete props.title;
  delete props.children;
  return (
    <Card {...props} className="mh-20px pad-10px">
      <$enfasis>{title}</$enfasis>
      <br />
      <$h />
      <$F>{children}</$F>
    </Card>
  );
}

function $PR({ children, lang }) {
  return (
    <$Copy>
      <pre className="prettyprint">
        <code className={`lang-${lang}`}>{children}</code>
      </pre>
    </$Copy>
  );
}

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
