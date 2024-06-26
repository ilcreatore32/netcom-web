import { Box, Paper, Typography, useTheme, alpha } from "@mui/material";
import Complaints_Suggestions from "../components/Complaints_Suggestions";
import InformationRequest from "../components/InformationRequest";
import ContactMethods from "../components/ContactMethods";

// Images
import bg07 from "../assets/images/foto-7.jpg";

const Contact = () => {
  const theme = useTheme();

  return (
    <>
      {/* Contacto */}
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
            backgroundImage: `url(${bg07})`,
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
              Contacto
              <Box
                className="teko-text"
                component="span"
                sx={{ color: theme.palette.primary.main }}
              >
                .
              </Box>
            </Typography>
            <Typography variant="h6" component="span" color="textSecondary">
              No te quedes con dudas, contáctanos para obtener mayor información
            </Typography>
          </Paper>
        </Paper>
      </Box>
      {/* Solicitud de Información */}
      <Paper
        square
        elevation={1}
        sx={{
          display: "flex",
          width: "100%",
          minHeight: "500px",
          flexDirection: "column",
          justifyContent: "center",
          gap: "20px",
          padding: "60px",
        }}
      >
        <Typography
          variant="h4"
          component={"span"}
          className="teko-text"
          textAlign={"center"}
        >
          <Box
            className="teko-text"
            component="span"
            sx={{ color: theme.palette.primary.main }}
          >
            ¿
          </Box>
          DESEAS INFORMACIÓN INMEDIATA DEL SERVICIO
          <Box
            className="teko-text"
            component="span"
            sx={{ color: theme.palette.primary.main }}
          >
            ?
          </Box>
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <Typography variant="body1" component={"span"}>
            Con este Formulario puedes Solicitar Información a nuestro equipo de
            Ventas, el cual contiene los siguientes campos requeridos:
          </Typography>
          <InformationRequest />
          <Typography variant="body1" component={"span"}>
            Al enviar tu información un asesor de Netcom Plus se comunicara contigo.
          </Typography>
        </Box>
      </Paper>
      {/* Buzón de Quejas y Sugerencias */}
      <Paper
        square
        elevation={1}
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          minHeight: "500px",
          justifyContent: "center",
          gap: "20px",
          padding: "60px",
        }}
      >
        <Typography
          variant="h4"
          component={"span"}
          className="teko-text"
          textAlign={"center"}
        >
          BUZÓN DE QUEJAS Y SUGERENCIAS
          <Box
            className="teko-text"
            component="span"
            sx={{ color: theme.palette.primary.main }}
          >
            .
          </Box>
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <Typography variant="body1" component={"span"}>
            Tu expectativa del servicio es importante para nosotros,
            constantemente establecemos criterios de calidad para mejorar
            nuestro servicio. No dudes en contactarnos, para obtener mayor
            información o hacernos llegar tus sugerencias o reclamos disponemos
            de diversas líneas de comunicación con profesionales altamente
            capacitados, puedes llenar el siguiente formulario para ampliar tus
            requerimientos o hacernos llegar tus comentarios.
          </Typography>
        </Box>
        <Complaints_Suggestions />
      </Paper>
      {/* Otros Metodos de Contacto */}
      <Paper
        id="otros"
        square
        elevation={1}
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          minHeight: "100vh",
          justifyContent: "center",
          gap: "20px",
          padding: "60px",
        }}
      >
        <Typography
          variant="h4"
          component={"span"}
          className="teko-text"
          textAlign={"center"}
        >
          OTROS METODOS DE CONTACTOS
          <Box
            className="teko-text"
            component="span"
            sx={{ color: theme.palette.primary.main }}
          >
            .
          </Box>
        </Typography>
        <ContactMethods />
      </Paper>
    </>
  );
};

export default Contact;
