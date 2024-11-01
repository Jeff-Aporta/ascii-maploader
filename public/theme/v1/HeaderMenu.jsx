function ActivadorMenuIzquierda() {
  return (
    <label
      className={fluidCSS()
        .gtX(650, { display: "none" })
        .end("activator-menuleft c-pointer")}
      htmlFor="check-menu-responsive"
    >
      <big>
        <big>
          <big>
            <i className="fa-solid fa-bars true" />
            <i className="fa-solid fa-times false c-skyblue" />
          </big>
        </big>
      </big>
    </label>
  );
}

function HeaderMenu() {
  return (
    <Paper
      elevation={2}
      className="header d-flex jc-sb pad-10px bb-1px-gray no-select"
    >
      <div className="header_logo d-center gap-20px">
        <ActivadorMenuIzquierda />
        <_ className="d-center gap-10px">
          <img
            src="public/img/icon.svg"
            alt=""
            style={{ width: "30px", height: "30px" }}
            className={fluidCSS().ltX(450, { display: "none" }).end()}
          />
          <$ variant="h8" className="fw-bolder">
            ASCII Map Loader
          </$>
        </_>
      </div>
      <div className="header_social d-center gap-10px">
        <IconSocialTop
          lbl="Telegram"
          url="https://t.me/jeffAporta"
          _icon="telegram"
          color="DodgerBlue"
        />
        <IconSocialTop
          lbl="WhatsApp"
          url="https://wa.link/1tmqmt"
          _icon="whatsapp"
          color="LimeGreen"
        />
        <IconSocialTop
          lbl="YouTube"
          url="https://www.youtube.com/@JeffAporta"
          _icon="youtube"
          color="red"
        />
        <IconSocialTop
          lbl="Jeff-aporta"
          url="https://github.com/Jeff-Aporta"
          _icon="github"
          color="white"
          brk={450}
          black
          responsive={false}
        />
      </div>
    </Paper>
  );
}


function IconSocialTop({ lbl, url, _icon, black = false, color, brk = 700 }) {
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
