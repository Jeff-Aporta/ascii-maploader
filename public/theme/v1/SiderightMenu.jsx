function SiderightMenuResponsive() {
  return (
    <_
      className={fluidCSS()
        .gtX(950, { display: "none" })
        .end("container-right-responsive togle-input")}
    >
      <input
        type="checkbox"
        defaultChecked={false}
        id="togle-menu-right-responsive"
      />
      <Backdrop />
      <Contenido />
    </_>
  );

  function Contenido() {
    return (
      <_ className="options">
        <EstadoEnVerdadero />
        <EstadoEnFalso />
      </_>
    );

    function EstadoEnVerdadero() {
      return (
        <Card
          onClick={() => {
            document.getElementById(
              "togle-menu-right-responsive"
            ).checked = false;
          }}
          elevation={6}
          className="sidebar right-responsive pad-20px true"
          style={{
            borderRadius: "15px",
          }}
        />
      );
    }

    function EstadoEnFalso() {
      return (
        <Fab
          color="primary false"
          onClick={() => {
            document.getElementById(
              "togle-menu-right-responsive"
            ).checked = true;
          }}
        >
          <i
            class="fa-solid fa-list-ul"
            style={{
              fontSize: "24px",
            }}
          />
        </Fab>
      );
    }
  }

  function Backdrop() {
    return (
      <label
        htmlFor="togle-menu-right-responsive"
        className="backdrop-right-menu"
      />
    );
  }
}

function SiderightMenu() {
  return (
    <Card
      variant="nofill"
      className={fluidCSS()
        .ltX(950, { display: "none" })
        .end("sidebar right pad-10px")}
    />
  );
}

function buscar_idR(query, tree = {}) {
  [...document.querySelectorAll(query)].forEach((e) => {
    if (e.id.startsWith("idR-")) {
      tree[e.id] ??= {};
      const query_idR = `#${e.id} > *`;
      buscar_idR(query_idR, tree[e.id]);
    }
  });
  return tree;
}

function onHash(id) {
  const parent = document.querySelector(".root");
  const topparent = parent.getBoundingClientRect().top;
  parent.scrollTo({
    top: document.getElementById(id).offsetTop - topparent - 50,
    behavior: "smooth",
  });
}

function generateIndex(tree) {
  return (
    <ul className="c-deepskyblue">
      {Object.entries(tree).map((t) => {
        if (!Object.keys(t[1]).length) {
          return (
            <li>
              <Link
                id={`${t[0]}-index`}
                color="inherit"
                underline="none"
                className="c-pointer link-index"
                onClick={() => onHash(t[0])}
              >
                {
                  document.getElementById(t[0]).querySelector(".titulo")
                    .innerText
                }
              </Link>
            </li>
          );
        } else {
          return (
            <li>
              <Link
                id={`${t[0]}-index`}
                color="inherit"
                underline="none"
                className="c-pointer link-index"
                onClick={() => onHash(t[0])}
              >
                {
                  document.getElementById(t[0]).querySelector(".titulo")
                    .innerText
                }
              </Link>
              {generateIndex(t[1], t[0])}
            </li>
          );
        }
      })}
    </ul>
  );
}

function updateIndexes() {
  loadIndexes();
  loadIndexes(true);

  function loadIndexes(inResponsive = false) {
    const r = inResponsive ? "-responsive" : "";
    ReactDOM.render(
      <_>
        <strong>
          <big>
            {document.querySelector(".main-area .root .titulo").innerText}
          </big>
        </strong>
        <hr />
        {generateIndex(buscar_idR(".main-area .root > *"))}
      </_>,
      document.querySelector(".sidebar.right" + r)
    );
  }
}
