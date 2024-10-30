function SideleftMenu() {
  return (
    <Card variant="nofill" className="sidebar left padh-10px">
      <Typography variant="h6" className="pad-10px">
        Documentación
      </Typography>
      <hr className="op-30" />
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
    </Card>
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