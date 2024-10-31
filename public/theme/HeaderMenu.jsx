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
        <img
          src="/public/img/_icon.svg"
          alt=""
          style={{ width: "30px", height: "30px" }}
          className={fluidCSS().ltX(450, { display: "none" }).end()}
        />
        <$ variant="h8">ASCII Map Loader</$>
      </div>
      <div className="header_social d-center gap-10px">
        <$socialTop
          lbl="Telegram"
          url="https://t.me/jeffAporta"
          _icon="telegram"
          color="DodgerBlue"
        />
        <$socialTop
          lbl="WhatsApp"
          url="https://wa.link/1tmqmt"
          _icon="whatsapp"
          color="LimeGreen"
        />
        <$socialTop
          lbl="YouTube"
          url="https://www.youtube.com/@JeffAporta"
          _icon="youtube"
          color="red"
        />
        <$socialTop
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
