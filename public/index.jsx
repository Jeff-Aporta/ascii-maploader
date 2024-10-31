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
  _unobserver();
  ReactDOM.render(
    <SectionResponsive k={key} />,
    document.querySelector(".main-area")
  );
  _observer();
  updateIndexes();
}

(() => {
  function onUrlChange() {
    history.replaceState(null, "", window.location.pathname);
  }

  const observerURL = new MutationObserver(onUrlChange);

  observerURL.observe(document.body, {
    attributes: true,
    childList: true,
    subtree: true,
  });

  onUrlChange();
})();

function App() {
  return (
    <Main>
      <HeaderMenu />
      <div className="app-content">
        <SideleftMenuResponsive />
        <SideleftMenu />
        <_ className="main-area"></_>
        <SiderightMenu />
      </div>
    </Main>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

changeContent("introduccion");
