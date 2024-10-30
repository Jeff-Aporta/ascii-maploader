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
  updateIndexes();
  _observer();
}

function App() {
  return (
    <Main>
      <HeaderMenu />
      <div className="app-content">
        <SideleftMenu />
        <Typography variant="t1">Probando</Typography>;
        <SiderightMenu />
      </div>
    </Main>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

changeContent("introduccion");
