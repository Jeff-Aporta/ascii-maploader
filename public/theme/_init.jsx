const sections = {};

function $socialTop({ lbl, url, _icon, black = false, color, brk = 700 }) {
  const icon = (
    <i
      className={`fa-brands fa-${_icon} icon-social ${black ? "black" : ""}`}
      style={{
        color,
      }}
    />
  );
  const alw = "d-center gap-10px";
  const cls = fluidCSS().ltX(brk, { display: "none" }).end(alw);
  const full = (
    <span className={cls}>
      {icon}
      {lbl}
    </span>
  );
  return (
    <Link href={url} color="inherit" underline="hover">
      <Tooltip
        title={lbl}
        className={fluidCSS().gtX(brk, { display: "none" }).end(alw)}
      >
        {icon}
      </Tooltip>
      {full}
    </Link>
  );
}

function idR() {
  return Math.random().toString(36).replace("0.", "idR-");
}

function IDR(props) {
  return <_ {...props} id={idR()} />;
}

function $hr() {
  return (
    <hr className={fluidCSS().ltX(500, { display: "none" }).end("op-40")} />
  );
}
function $br() {
  return <br className={fluidCSS().ltX(500, { display: "none" }).end()} />;
}
