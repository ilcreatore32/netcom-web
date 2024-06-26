// Components
import Carousel from "../components/Carousel";
import { Box, Paper, Typography, Button, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

// Icons
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import InsightsIcon from "@mui/icons-material/Insights";
import LanguageIcon from "@mui/icons-material/Language";
import PowerIcon from "@mui/icons-material/Power";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import HttpsIcon from "@mui/icons-material/Https";
import NetworkCheckIcon from "@mui/icons-material/NetworkCheck";
import LanIcon from "@mui/icons-material/Lan";

// Timeline
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

// Images
import bg02 from "../assets/images/bg-2.png";

const Home = () => {
  const theme = useTheme();

  const oferts = [
    {
      id: "0",
      label: "Escalabilidad",
      icon: <AutoFixHighIcon />,
    },
    {
      id: "1",
      label: "Respaldo de Energía",
      icon: <InsightsIcon />,
    },
    {
      id: "2",
      label: "Datos Ilimitados",
      icon: <LanguageIcon />,
    },
  ];

  const tlItems = [
    {
      id: "0",
      title: "99.99% DE DISPONIBILIDAD",
      content:
        "Estamos equipados para ofrecer el mayor rendimiento del servicio con la menor incidencia de fallas.",
      icons: <PowerIcon />,
    },
    {
      id: "1",
      title: "VELOCIDAD DE DATOS",
      content:
        "Trabajamos con los mejores equipos en Telecomunicaciones y nos mantenemos día a día actualizando nuestras infraestructuras para brindar la mayor velocidad de transferencia de datos.",
      icons: <SwapHorizIcon />,
    },
    {
      id: "2",
      title: "ESTABILIDAD",
      content:
        "Nuestro equipo de Soporte Técnico está conformado por especialistas y profesionales capaces de resolver cualquier inconveniente en el menor tiempo posible.",
      icons: <SignalCellularAltIcon />,
    },
    {
      id: "3",
      title: "SEGURIDAD",
      content:
        "Empleamos los más robustos protocolos de seguridad para que nuestros clientes finales naveguen con tranquilidad y confianza.",
      icons: <HttpsIcon />,
    },
    {
      id: "4",
      title: "DESEMPEÑO",
      content:
        "Contamos con profesionales altamente capacitados para dar un excelente soporte técnico y atención al cliente, siempre con la visión de entregar un servicio eficiente.",
      icons: <NetworkCheckIcon />,
    },
    {
      id: "5",
      title: "TECNOLOGIA ESCALABLE",
      content:
        "Constantemente actualizamos nuestro Sistema e Infraestructura de Red para ofrecer un servicio de Internet capaz de asegurar la mejor experiencia de usuario. Bajo la filosofía de mejora continua le ofrecemos a nuestros usuarios la posibilidad de mejorar sus servicios sin ninguna complicación.",
      icons: <LanIcon />,
    },
  ];

  return (
    <>
      <Carousel />
      <Paper
        square
        elevation={1}
        sx={{
          display: "flex",
          width: "100%",
          padding: "30px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
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
            <Typography
              className="teko-text"
              variant="h2"
              component="span"
              sx={{ textWrap: "nowrap" }}
            >
              <Box
                className="teko-text"
                component="span"
                sx={{ color: theme.palette.primary.main }}
              >
                ¿
              </Box>
              QUÉ HACEMOS
              <Box
                className="teko-text"
                component="span"
                sx={{ color: theme.palette.primary.main }}
              >
                ?
              </Box>
            </Typography>
            <Typography variant="subtitle2" component="p">
              Somos una empresa que provee servicio de Transporte de Datos e
              Interconexión de Redes hacia Internet por medio de enlaces
              inalámbricos y enlaces de fibra óptica, enfocados en atender
              entornos residenciales y empresariales.
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
            <Typography
              className="teko-text"
              variant="h2"
              component="span"
              sx={{ textWrap: "nowrap" }}
            >
              <Box
                className="teko-text"
                component="span"
                sx={{ color: theme.palette.primary.main }}
              >
                ¿
              </Box>
              QUÉ OFRECEMOS
              <Box
                className="teko-text"
                component="span"
                sx={{ color: theme.palette.primary.main }}
              >
                ?
              </Box>
            </Typography>
            <Box
              component="ul"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                paddingX: "15px",
              }}
            >
              {oferts.map((o) => {
                return (
                  <Box
                    component="li"
                    key={o.id}
                    sx={{
                      display: "flex",
                      gap: "15px",
                      textDecoration: "none",
                    }}
                  >
                    {o.icon}
                    <Typography variant="subtitle2" component="span">
                      {o.label}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
        <Timeline position="left">
          {tlItems.map((tli, i) => {
            return (
              <TimelineItem key={tli.id}>
                <TimelineOppositeContent
                  color="text.secondary"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {tli.content}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary">{tli.icons}</TimelineDot>
                  {i != tlItems.length - 1 ? <TimelineConnector /> : null}
                </TimelineSeparator>
                <TimelineContent>{tli.title}</TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      </Paper>
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

export default Home;
