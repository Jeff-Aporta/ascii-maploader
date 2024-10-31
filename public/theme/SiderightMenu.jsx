function SiderightMenu() {
  return <Card variant="nofill" className="sidebar right pad-20px" />;
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

function generateIndex(tree, key) {
  return (
    <ul className="c-deepskyblue" id={`${key}-index`}>
      {Object.entries(tree).map((t) => {
        if (!Object.keys(t[1]).length) {
          return (
            <Link href={`#${t[0]}`} color="inherit" underline="none">
              <li>
                {
                  document.getElementById(t[0]).querySelector(".titulo")
                    .innerText
                }
              </li>
            </Link>
          );
        } else {
          return (
            <li id={`${key}-index`}>
              <Link href={`#${t[0]}`} color="inherit" underline="none">
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
    document.querySelector(".sidebar.right")
  );
}

const observer = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    const target = entrada.target;
    const id = target.id;
    const idIndex = id + "-index";
    const domIndex = document.getElementById(idIndex);
    if (domIndex) {
      if (entrada.isIntersecting) {
        domIndex.classList.add("isVisible");
      } else {
        domIndex.classList.remove("isVisible");
      }
    }
  });
});

function _observer_(o) {
  [...document.querySelectorAll(".indexed")].forEach((elemento) => {
    if (o) {
      observer.observe(elemento);
    } else {
      observer.unobserve(elemento);
    }
  });
}

function _observer() {
  _observer_(true);
}
function _unobserver() {
  _observer_(false);
}
