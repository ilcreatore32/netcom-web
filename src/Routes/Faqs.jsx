import { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  useTheme,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  alpha,
} from "@mui/material";

// Images
import bg02 from "../assets/images/bg-2.png";
import ftthImage from "../assets/images/Tecnologia-FTTH-1024x576.png";
import rfImage from "../assets/images/Tecnologia-RF-1024x576.png";

// Icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MyAccordion = ({ id, title, expanded, handleChange, children }) => {
  const theme = useTheme();

  return (
    <Accordion
      id={`${id}-header`}
      aria-controls={`${id}-content`}
      expanded={expanded === id}
      onChange={handleChange(id)}
      sx={{
        boxShadow: "none",
        border: `${alpha(theme.palette.text.primary, 0.12)} 1px solid`,
      }}
    >
      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon
            sx={{
              color: expanded === id ? theme.palette.primary.main : "inherit",
            }}
          />
        }
        sx={{
          fontSize: "32px",
          color: expanded === id ? theme.palette.primary.main : "inherit",
          "&:hover": {
            cursor: "pointer",
            color: alpha(theme.palette.primary.main, 0.8),
          },
        }}
      >
        <Typography className="teko-text" sx={{ fontSize: "34px" }}>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

const Faqs = () => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const StyledLink = {
    cursor: "pointer",
    color: theme.palette.primary.main,
    textDecoration: "none",
    fontWeight: "500",
  };

  return (
    <>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          width: "100%",
          height: "200px",
          padding: "30px",
          backgroundSize: "cover",
          backgroundImage: `url(${bg02})`,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            flexGrow: 1,
          }}
        >
          <Typography
            className="teko-text"
            variant="h2"
            component="span"
            sx={{ color: "#fff" }}
          >
            FAQ
            <Box
              className="teko-text"
              component="span"
              sx={{ color: theme.palette.primary.main }}
            >
              .
            </Box>
          </Typography>
        </Box>
      </Paper>
      <Paper
        square
        elevation={1}
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          justifyContent: "center",
          gap: "20px",
          padding: "60px",
        }}
      >
        <MyAccordion
          id="panel0"
          expanded={expanded}
          handleChange={handleChange}
          title="¿Cómo puedo verificar la velocidad de mi conexión a Internet?"
        >
          <Box>
            <Typography variant="body1">
              Se puede verificar la velocidad de conexión haciendo uso de
              páginas web destinadas para dicho fin, como, por ejemplo:
              <a href="http://speed.ui.com/" style={StyledLink} target="_blank">
                {" speed.ui.com "}
              </a>
              ,
              <a
                href="https://fiber.google.com/intl/es/speedtest/"
                style={StyledLink}
                target="_blank"
              >
                {" speed.googlefiber.net "}
              </a>
              o
              <a
                href="http://www.speedtest.net/"
                style={StyledLink}
                target="_blank"
              >
                {" www.speedtest.net "}
              </a>
              . Es importante asegurarnos de que ningún otro programa o
              dispositivo esté generando consumo o haciendo uso de Internet al
              momento de realizar el test de velocidad. Recomendamos realizar la
              prueba conectado directamente al cable LAN de servicio, de esta
              forma se estará garantizando lo anterior. A continuación, te
              mostramos cómo debes conectar tu computador:
            </Typography>
            <Box sx={{ margin: "20px" }}>
              <Typography
                variant="subtitle1"
                sx={{ color: theme.palette.primary.main, fontWeight: "600" }}
              >
                TECNOLOGÍA INALÁMBRICA – RF
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "20px",
                }}
              >
                <img
                  src={ftthImage}
                  style={{ width: "100%", maxWidth: "800px" }}
                />
              </Box>
            </Box>
            <Box sx={{ margin: "20px" }}>
              <Typography
                variant="subtitle1"
                sx={{ color: theme.palette.primary.main, fontWeight: "600" }}
              >
                TECNOLOGÍA FTTH – FIBRA ÓPTICA
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "20px",
                }}
              >
                <img
                  src={rfImage}
                  style={{ width: "100%", maxWidth: "800px" }}
                />
              </Box>
            </Box>
            <Typography variant="body1">
              Aproximadamente entre un 8% y un 10% de la capacidad total del
              ancho de banda se desprecia para la propia gestión al momento de
              realizar la prueba, lo que implica que, por ejemplo, para un ancho
              de banda de descarga de 8Mbps, las pruebas arrojen alrededor de
              7,36Mbps.
            </Typography>
          </Box>
        </MyAccordion>
        <MyAccordion
          id="panel1"
          expanded={expanded}
          handleChange={handleChange}
          title="¿Cómo puedo reportar un problema con mi servicio?"
        >
          <Typography variant="body1">
            Puedes llamarnos o escribirnos un WhatsApp al número de Soporte
            Técnico Nivel 1:
            <a
              href="https://wa.me/584244200034?text=Hola%20tengo%20un%20problema%20y%20quisiera%20reportarlo"
              style={StyledLink}
              target="_blank"
            >
              {" +584244200034 "}
            </a>
            . Existe una estructura escalatoria para reportar los inconvenientes
            con el servicio. Cuando un problema no puede resolverse en Nivel 1,
            se emite el ticket de soporte a Nivel 2, y así en lo sucesivo.
          </Typography>
        </MyAccordion>
        <MyAccordion
          id="panel2"
          expanded={expanded}
          handleChange={handleChange}
          title="Si soy cliente de Netcom Plus, ¿Cómo puedo ingresar a mi portal de
              cliente?"
        >
          <Typography variant="body1">
            Para ingresar al portal de clientes puedes descargar nuestro manual
            paso a paso donde te explicamos cómo administrarlo. Este portal es
            una herramienta donde puedes observar el historial de tus facturas,
            evaluar tu consumo y el tráfico en tiempo real.
          </Typography>
          <Box
            sx={{ display: "flex", justifyContent: "center", margin: "20px 0" }}
          >
            <Button
              component="a"
              variant="outlined"
              size="large"
              href="https://drive.google.com/file/d/1iMcE3qpEOU_xBR3SGf_eJAbtki2q5k-E/view?usp=sharing"
              style={{ cursor: "pointer", textDecoration: "none" }}
              target="_blank"
            >
              Ver Manual
            </Button>
          </Box>
        </MyAccordion>
        <MyAccordion
          id="panel3"
          expanded={expanded}
          handleChange={handleChange}
          title="¿Qué es el Internet inalámbrico?"
        >
          <Typography variant="body1">
            Es el mismo servicio de Internet que conocemos, sólo que la
            comunicación se realiza a través de antenas, es decir, no
            necesitamos llevar cableado hasta tu casa para proveerte el
            servicio.
          </Typography>
        </MyAccordion>
        <MyAccordion
          id="panel4"
          expanded={expanded}
          handleChange={handleChange}
          title="¿Qué es un servicio de última milla?"
        >
          <Typography variant="body1">
            Con esto nos referimos a que te entregamos el servicio mediante un
            cable con conector RJ-45, el cual puedes conectar a un computador,
            switch o router WiFi. Tú decides cómo vas distribuir el Internet en
            tu casa u oficina, lo importante es que no debes hacer
            configuraciones adicionales para utilizar el servicio.
          </Typography>
        </MyAccordion>
        <MyAccordion
          id="panel5"
          expanded={expanded}
          handleChange={handleChange}
          title="¿Cómo puedo calcular cuanta velocidad necesito contratar?"
        >
          <Typography variant="body1">
            Esto dependerá de las necesidades de cada cliente. Por ejemplo,
            Netflix establece la velocidad promedio para hacer uso de su
            servicio de streaming. Puede consultarlo en este enlace:
            <a
              href="https://help.netflix.com/es/node/306"
              style={StyledLink}
              target="_blank"
            >
              {" https://help.netflix.com/es/node/306 "}
            </a>
            Asimismo, para una indagación más extensa en cuanto al tema, puedes
            consultar el siguiente artículo:
            <a
              href="https://cincodias.elpais.com/cincodias/2015/11/09/lifestyle/1447087191_120067.html"
              style={StyledLink}
              target="_blank"
            >
              {
                " https://cincodias.elpais.com/cincodias/2015/11/09/lifestyle/1447087191_120067.html "
              }
            </a>
          </Typography>
        </MyAccordion>
      </Paper>
    </>
  );
};

export default Faqs;
