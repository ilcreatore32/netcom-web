import { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  alpha,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Backdrop,
} from "@mui/material";
import { Link } from "react-router-dom";

// Images
import bg02 from "../assets/images/bg-2.png";
import bg05 from "../assets/images/foto-5.jpg";
import bg09 from "../assets/images/foto-9.jpg";
import bg10 from "../assets/images/foto-10.jpg";
import bg11 from "../assets/images/foto-11.jpg";

// Icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AboutUs = () => {
  /**
   *  * About Us page - Informative section for business
   */
  const theme = useTheme();

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      {/* 'Sobre Nosotros' */}
      <Box
        sx={{
          width: "100vw",
          height: "calc(100vh - 65px)",
          position: "relative",
        }}
      >
        <Box
          component="img"
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: "999",
            backgroundSize: "cover",
            backgroundImage: `url(${bg05})`,
          }}
        ></Box>
        <Paper
          square
          elevation={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            bgcolor: alpha(theme.palette.background.paper, 0.15),
            border: "none",
            position: "absolute",
            zIndex: "1000",
            width: "100%",
            height: "100%",
            padding: "20px",
          }}
        >
          <Paper
            square
            elevation={0}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              bgcolor: alpha(theme.palette.background.paper, 0.4),
              position: "absolute",
              zIndex: "1100",
              borderRadius: "0",
              padding: "20px",
            }}
          >
            <Typography variant="h2" component="span" className="teko-text">
              Sobre Nosotros
              <Box
                className="teko-text"
                component="span"
                sx={{ color: theme.palette.primary.main }}
              >
                .
              </Box>
            </Typography>
            <Typography variant="h6" component="span" color="textSecondary">
              Grupo en búsqueda de la excelencia en nuestros servicios.
            </Typography>
          </Paper>
        </Paper>
      </Box>

      {/* 'Quienes Somos' */}
      <Paper
        square
        elevation={1}
        sx={{
          display: "flex",
          width: "100%",
          minHeight: "500px",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          padding: "30px",
        }}
      >
        <Typography className="teko-text" variant="h2" component="span">
          <Box
            className="teko-text"
            component="span"
            sx={{ color: theme.palette.primary.main }}
          >
            ¿
          </Box>
          QUIÉNES SOMOS
          <Box
            className="teko-text"
            component="span"
            sx={{ color: theme.palette.primary.main }}
          >
            ?
          </Box>
        </Typography>
        <Paper
          square
          elevation={2}
          sx={{
            display: "flex",
            width: "50%",
            padding: "0",
            boxShadow: "none",
            border: `${alpha(theme.palette.text.primary, 0.12)} 1px solid`,
          }}
        >
          <Typography
            variant="subtitle1"
            component="span"
            sx={{
              borderLeft: `${theme.palette.primary.main} 8px solid`,
              padding: "30px",
            }}
          >
            Somos una empresa de telecomunicaciones que trabaja día tras día
            para mejorar y ofrecer un servicio de calidad premium. Nuestra
            filosofía consiste en la mejora continua y creemos fielmente en
            seguir mejorando para satisfacer las necesidades de nuestros
            clientes en cuanto a la usabilidad que exige la evolución de las
            nuevas tecnologías.
          </Typography>
        </Paper>
      </Paper>

      {/* 'Accordion' */}
      <Paper
        square
        elevation={3}
        sx={{
          display: "flex",
          width: "100%",
          minHeight: "500px",
          padding: "30px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            padding: "15px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              width: "100%",
            }}
          >
            <Typography variant="h6" component="p">
              Nuestros usuarios confían en nosotros gracias a lo que somos y a
              lo que nuestro equipo nos permite ser. Ofrecemos una atención al
              cliente personalizada los 365 días del año sin interrupciones.
              Para nosotros es fundamental disponer de un buen equipo de
              atención al cliente con herramientas robustas dispuestos a aclarar
              cualquier duda y solventar en tiempo récord cualquier falla
              referente al servicio.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              width: "100%",
            }}
          >
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              sx={{
                boxShadow: "none",
                border: `${alpha(theme.palette.text.primary, 0.12)} 1px solid`,
              }}
            >
              <AccordionSummary
                className="teko-text"
                sx={{
                  fontSize: "32px",
                  color:
                    expanded === "panel1"
                      ? theme.palette.primary.main
                      : "inherit",
                  "&:hover": {
                    cursor: "pointer",
                    color: alpha(theme.palette.primary.main, 0.8),
                  },
                }}
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      color:
                        expanded === "panel1"
                          ? theme.palette.primary.main
                          : "inherit",
                    }}
                  />
                }
                aria-controls="panel1-content"
                id="panel1-header"
              >
                ¿QUE ES EL INTERNET INALÁMBRICO?
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="subtitle1" component="p">
                  Es una tecnología que proporciona acceso a Internet de alta
                  velocidad a través de antenas conectadas con torres de radio
                  transmisión, es decir, estas son el medio por el cuál se
                  transmiten los datos. La conexión inalámbrica ofrece
                  conexiones confiables y de rápida instalación dentro de un
                  rango de espacio suficientemente amplio. Para disfrutar de
                  este sistema los usuarios necesitan de una antena, donde la
                  misma debe estar orientada a un punto de repetición o nodo de
                  servicio.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              sx={{
                boxShadow: "none",
                border: `${alpha(theme.palette.text.primary, 0.12)} 1px solid`,
              }}
            >
              <AccordionSummary
                className="teko-text"
                sx={{
                  fontSize: "32px",
                  color:
                    expanded === "panel2"
                      ? theme.palette.primary.main
                      : "inherit",
                  "&:hover": {
                    cursor: "pointer",
                    color: alpha(theme.palette.primary.main, 0.8),
                  },
                }}
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      color:
                        expanded === "panel2"
                          ? theme.palette.primary.main
                          : "inherit",
                    }}
                  />
                }
                aria-controls="panel2-content"
                id="panel2-header"
              >
                ¿QUÉ ES EL INTERNET POR FIBRA ÓPTICA?
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="subtitle1" component="p">
                  Esta tecnología es comúnmente conocida como conexión FTTH
                  (Fibra hasta el hogar, Fiber to the Home) y emplea fibra
                  óptica para su interconexión. Su forma de operación es a
                  través de la transmisión de información en forma de pulsos de
                  luz por medio de hilos de fibra de vidrio o plástico.
                  Utilizando este medio de transmisión se pueden ofrecer mayores
                  velocidades con poca demora y no es tan susceptible a las
                  condiciones climáticas rigurosas como otros tipos de cables
                  tradicionales, lo que minimiza las interrupciones del
                  servicio.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
              sx={{
                boxShadow: `none`,
                border: `${alpha(theme.palette.text.primary, 0.12)} 1px solid`,
              }}
            >
              <AccordionSummary
                className="teko-text"
                sx={{
                  fontSize: "32px",
                  color:
                    expanded === "panel3"
                      ? theme.palette.primary.main
                      : "inherit",
                  "&:hover": {
                    cursor: "pointer",
                    color: alpha(theme.palette.primary.main, 0.8),
                  },
                }}
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      color:
                        expanded === "panel3"
                          ? theme.palette.primary.main
                          : "inherit",
                    }}
                  />
                }
                aria-controls="panel3-content"
                id="panel3-header"
              >
                ¿PUEDO ESCALARLO TANTO YO QUIERA?
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="subtitle1" component="p">
                  Nuestro servicio está preparado para poder escalarlo tanto sea
                  requerido y así poder cubrir sus necesidades. Nos adaptamos a
                  las nuevas demandas de velocidad que necesitan las
                  aplicaciones actuales de manera fluida sin perder la calidad
                  en los servicios ofrecidos.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </Paper>

      {/* 'Ideal para Negocios' */}
      <Paper
        square
        elevation={1}
        sx={{
          display: "flex",
          width: "100%",
          minHeight: "500px",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          padding: "30px",
        }}
      >
        <Typography className="teko-text" variant="h2" component="span">
          <Box
            className="teko-text"
            component="span"
            sx={{ color: theme.palette.primary.main }}
          >
            ¿
          </Box>
          NUESTRA CONEXIÓN ES IDEAL PARA NEGOCIOS
          <Box
            className="teko-text"
            component="span"
            sx={{ color: theme.palette.primary.main }}
          >
            ?
          </Box>
        </Typography>
        <Paper
          square
          sx={{
            display: "flex",
            width: "50%",
            padding: "0",
            boxShadow: "none",
          }}
        >
          <Typography
            variant="subtitle1"
            component="span"
            sx={{
              borderLeft: `${theme.palette.primary.main} 8px solid`,
              padding: "30px",
            }}
          >
            Es ideal para los negocios, al ser de calidad y rendimiento premium,
            es la mejor opción para aquellos negocios que requieran conexión a
            Internet por la disponibilidad y ancho de banda que ofrecemos,
            además de una comunicación instantánea con nuestro equipo de
            Atención al Cliente con un tiempo de respuesta récord, todas estas
            características son vitales para la optimización y el desarrollo de
            la organización empresarial. Somos una empresa de telecomunicaciones
            que trabaja día tras día para mejorar y ofrecer un servicio de
            calidad premium. Nuestra filosofía consiste en la mejora continua y
            creemos fielmente en seguir mejorando para satisfacer las
            necesidades de nuestros clientes en cuanto a la usabilidad que exige
            la evolución de las nuevas tecnologías.
          </Typography>
        </Paper>
      </Paper>

      {/* 'Ventas' */}
      <Paper
        square
        elevation={1}
        sx={{
          display: "flex",
          width: "100%",
          minHeight: "500px",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "#0006",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "1",
            gap: "15px",
          }}
        >
          <Typography
            className="teko-text"
            variant="h2"
            component="span"
            sx={{ color: "#fff" }}
          >
            Ventas
            <Box
              className="teko-text"
              component="span"
              sx={{ color: theme.palette.primary.main }}
            >
              .
            </Box>
          </Typography>
          <Typography
            variant="subtitle1"
            component="span"
            sx={{ color: "#fff" }}
          >
            Asesores comerciales con recomendaciones para servicios
            residenciales y corporativos.
          </Typography>
          <Link to={`/contacto#otros`}>
            <Button variant="contained" disableElevation>
              Contacto
            </Button>
          </Link>
        </Box>
        <Box
          component={"img"}
          src={bg11}
          alt="Imagen Ventas"
          sx={{
            width: "100%",
            height: "500px",
            objectFit: "cover",
            objectPosition: "bottom",
          }}
        />
      </Paper>

      {/* 'Soporte' */}
      <Paper
        square
        elevation={1}
        sx={{
          display: "flex",
          width: "100%",
          minHeight: "500px",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "#0006",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "1",
            gap: "15px",
          }}
        >
          <Typography
            className="teko-text"
            variant="h2"
            component="span"
            sx={{ color: "#fff" }}
          >
            Soporte
            <Box
              className="teko-text"
              component="span"
              sx={{ color: theme.palette.primary.main }}
            >
              .
            </Box>
          </Typography>
          <Typography
            variant="subtitle1"
            component="span"
            sx={{ color: "#fff" }}
          >
            Con líneas de comunicación directa para cualquier duda e inquietud.
          </Typography>
          <Link to={`/contacto#otros`}>
            <Button variant="contained" disableElevation>
              Contacto
            </Button>
          </Link>
        </Box>
        <Box
          component={"img"}
          src={bg09}
          alt="Imagen Soporte"
          sx={{
            width: "100%",
            height: "500px",
            objectFit: "cover",
            objectPosition: "bottom",
          }}
        />
      </Paper>

      {/* 'Empleos' */}
      <Paper
        square
        elevation={1}
        sx={{
          display: "flex",
          width: "100%",
          minHeight: "500px",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "#0006",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "1",
            gap: "15px",
          }}
        >
          <Typography
            className="teko-text"
            variant="h2"
            component="span"
            sx={{ color: "#fff" }}
          >
            Empleos
            <Box
              className="teko-text"
              component="span"
              sx={{ color: theme.palette.primary.main }}
            >
              .
            </Box>
          </Typography>
          <Typography
            variant="subtitle1"
            component="span"
            sx={{ color: "#fff" }}
          >
            Ofrecemos oportunidades de empleo y desarrollo profesional.
          </Typography>
          <Link to={`/contacto#otros`}>
            <Button variant="contained" disableElevation>
              Contacto
            </Button>
          </Link>
        </Box>
        <Box
          component={"img"}
          src={bg10}
          alt="Imagen Empleos"
          sx={{
            width: "100%",
            height: "500px",
            objectFit: "cover",
            objectPosition: "bottom",
          }}
        />
      </Paper>

      {/* 'Entre Nosotros' */}
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          width: "100%",
          height: "500px",
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              borderLeft: `${theme.palette.primary.main} 8px solid`,
              padding: "0 30px",
            }}
          >
            <Typography
              className="teko-text"
              variant="h2"
              component="span"
              sx={{ color: "#fff" }}
            >
              EL INTERNET
            </Typography>
            <Typography
              className="teko-text"
              variant="h2"
              component="span"
              sx={{ color: "#fff" }}
            >
              ESTÁ ENTRE NOSOTROS
              <Box
                className="teko-text"
                component="span"
                sx={{ color: theme.palette.primary.main }}
              >
                .
              </Box>
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            flexGrow: 3,
          }}
        >
          <Button
            variant="outlined"
            size="large"
            sx={{
              color: "#fff",
              border: `rgba(255,255,255, 0.3) 1px solid`,
              p: 0,
            }}
          >
            <Link
              target="_blank"
              to={`/presupuesto`}
              style={{
                color: "inherit",
                textDecoration: "none",
                width: "100%",
                height: "100%",
                padding: "8px 22px",
              }}
            >
              Presupuesto
            </Link>
          </Button>
        </Box>
      </Paper>
    </>
  );
};

export default AboutUs;
