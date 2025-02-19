function App() {
  return (
    <Playground
      nombre_proyecto="proyecto-de-prueba-1"
      templateHTML="iframe.html"
      HTML={`<h1>Hola desde el encabezado 1</h1>`}
      JS={`console.log("Hola desde JavaScript")`}
      index={0}
    />
  );
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
