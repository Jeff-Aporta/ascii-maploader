function Main({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper elevation={0} className={`app ${themename}`}>
        {children}
      </Paper>
    </ThemeProvider>
  );
}

function changeContent(key) {
  _unobserver();
  ReactDOM.render(sections[key], document.querySelector(".main-area"));
  _observer();
  updateIndexes();
}

function App() {
  return (
    <Main>
      <HeaderMenu />
      <div className="app-content">
        <SideleftMenu />
        <_ className="main-area">{sections["introduccion"]}</_>
        <SiderightMenu />
      </div>
    </Main>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

changeContent("introduccion");
