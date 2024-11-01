window.addEventListener("scroll", preventScroll);

function preventScroll(event) {
  event.preventDefault();
  window.scrollTo(0, 0);
}

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

function SectionResponsive({ k }) {
  return <_>{sections[k]}</_>;
}

function changeContent(key) {
  ReactDOM.render(
    <SectionResponsive k={key} />,
    document.querySelector(".main-area")
  );
  updateIndexes();
}

function App() {
  return (
    <Main>
      <HeaderMenu />
      <div className="app-content">
        <SideleftMenuResponsive />
        <SideleftMenu />
        <_ className="main-area"></_>
        <SiderightMenu />
        <SiderightMenuResponsive />
      </div>
    </Main>
  );
}

function initApp() {
  ReactDOM.render(<App />, document.getElementById("root"));
  changeContent("introduccion");
}
