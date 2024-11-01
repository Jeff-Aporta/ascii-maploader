const menuNav = [
  {
    title: "Introducción",
    ref: "introduccion",
    i: "fa-regular fa-file-lines",
  },
  {
    title: "Instalación",
    ref: "instal",
    i: "fa-solid fa-cloud-arrow-down",
  },
  {
    title: "Modo de uso",
    childs: [
      {
        title: "Lenguaje interpretado",
        ref: "lng-interpret",
      },
      {
        title: "Modo cascada",
        ref: "cascade",
      },
      {
        title: "Conversiones",
        ref: "conv",
      },
    ],
  },
  {
    title: "¿Cómo funciona?",
    childs: [
      {
        title: "Matemática",
        ref: "math-base",
      },
      {
        title: "Inserción CSS",
        ref: "css-base",
      },
    ],
  },
];

function SideleftMenuResponsive() {
  return (
    <_
      className={fluidCSS()
        .gtX(650, { display: "none" })
        .end("sideleft-menu-responsive-container")}
    >
      <label
        htmlFor="check-menu-responsive"
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          backdropFilter: "brightness(0.5) blur(3px)",
        }}
        className="backdrop-responsive"
      />
      <Paper
        variant="nofill"
        className={fluidCSS()
          .gtX(650, { display: "none" })
          .end(`sidebar left-responsive padh-10px padw-10px`)}
        style={{
          position: "absolute",
          height: "100%",
          zIndex: 10,
        }}
      >
        <input
          type="checkbox"
          defaultChecked={true}
          id="check-menu-responsive"
          className="d-none no-select"
        />
        <ContentLeftMenu />
      </Paper>
    </_>
  );
}
function SideleftMenu() {
  return (
    <Card
      variant="nofill"
      className={fluidCSS()
        .ltX(650, { display: "none" })
        .end(`sidebar left padh-10px`)}
    >
      <ContentLeftMenu />
    </Card>
  );
}

function ContentLeftMenu() {
  return (
    <_>
      <Typography variant="h4" className="padw-20px">
        Documentación
      </Typography>
      <$hr />
      <br />
      <Button_SideLeft
        size="large"
        startIcon={<i className="fa-regular fa-file-lines" />}
      >
        Introducción
      </Button_SideLeft>
      <Button_SideLeft
        startIcon={<i className="fa-solid fa-cloud-arrow-down" />}
      >
        Usar con CDN
      </Button_SideLeft>
      <br />
      <Acord_SideLeft title="Lenguaje interpretado">
        <Button_SideLeft>Sentencias if</Button_SideLeft>
        <Button_SideLeft>Función lerp</Button_SideLeft>
      </Acord_SideLeft>
      <Acord_SideLeft title="Cascada">
        <Button_SideLeft>Uso</Button_SideLeft>
        <Button_SideLeft>Conversiones</Button_SideLeft>
      </Acord_SideLeft>
    </_>
  );
}

function Button_SideLeft(props) {
  return (
    <Button
      color="white"
      fullWidth
      href="#"
      startIcon={<i className="fa-solid fa-caret-right c-gray" />}
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        paddingLeft: "25px",
        borderBottom: "1px solid rgba(128,128,128,0.3)",
      }}
      {...props}
    />
  );
}
function Acord_SideLeft(props) {
  let { children, title } = props;
  const b = "1px solid rgba(128, 128, 255, 0.5)";
  return (
    <div>
      <Accordion sx={{ borderBottom: b, borderTop: b }}>
        <AccordionSummary expandIcon={<i className="fa-solid fa-caret-down" />}>
          <Typography className="padr-10px">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ paddingBottom: "10px" }}>
          <Typography>{children}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
