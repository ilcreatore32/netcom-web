import { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  MobileStepper,
  IconButton,
  useTheme,
  alpha,
} from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

// Images
import foto1 from "../assets/images/foto-1.png";
import foto2 from "../assets/images/foto-2.jpg";
import foto3 from "../assets/images/foto-3.jpg";
import foto4 from "../assets/images/foto-4.jpg";

const Carousel = () => {
  const images = [
    {
      title: "INTERNET PREMIUM",
      subtitle:
        "Contamos con personal altamente capacitado y el equipo con la mayor tecnología para ofrecerte el mejor servicio de Internet.",
      image: foto1,
      btn: "VER LOS PLANES",
      link: "/",
    },
    {
      title: "SERVICIOS RESIDENCIALES",
      subtitle:
        "Junto a tu familia saca el mayor provecho al día a día con Internet sin interrupciones.",
      image: foto2,
      btn: "PLANES RESIDENCIALES",
      link: "",
    },
    {
      title: "SERVICIOS PYME",
      subtitle:
        "Optimiza el manejo de información en tu empresa con conexiones rápidas y seguras.",
      image: foto3,
      btn: "PLANES PYME",
      link: "/",
    },
    {
      title: "SERVICIOS DEDICADOS",
      subtitle:
        "Conoce los beneficios de la exclusividad, acceso a Internet de alta velocidad y sin complicaciones por uso intensivo del ancho de banda.",
      image: foto4,
      btn: "PLANES DEDICADOS",
      link: "/",
    },
  ];

  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  setTimeout(() => {
    activeStep == maxSteps - 1
      ? setActiveStep(0)
      : setActiveStep(activeStep + 1);
  }, 5000);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "calc(100vh - 65px)",
          position: "relative"
        }}
      >
        <Paper square sx={{ width: "100%", height: "100%" }}>
          <Box sx={{ width: "100%", height: "100%" }}>
            {images.map((img, index) => {
              return (
                <Box
                key={index}
                  component="img"
                  sx={{
                    position: "absolute",
                    width: "100vw",
                    height: "calc(100vh - 65px)",
                    zIndex: "999",
                    backgroundSize: "cover",
                    backgroundImage: `url(${img.image})`,
                    opacity: activeStep == index ? "1" : "0",
                    transition: `all .5s ease-in-out`,
                  }}
                ></Box>
              );
            })}
            <Paper
              square
              elevation={1}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                bgcolor: alpha(theme.palette.background.paper, 0.15),
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
                  {images[activeStep].title}
                  <Box
                    className="teko-text"
                    component="span"
                    sx={{ color: theme.palette.primary.main }}
                  >
                    .
                  </Box>
                </Typography>
                <Typography variant="h6" component="span" color="textSecondary">
                  {images[activeStep].subtitle}
                </Typography>
              </Paper>
            </Paper>
            <MobileStepper
              sx={{
                position: "absolute",
                bottom: "0",
                width: "100%",
                zIndex: "1000",
              }}
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <IconButton
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                  size="small"
                  color="primary"
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </IconButton>
              }
              backButton={
                <IconButton
                  onClick={handleBack}
                  disabled={activeStep === 0}
                  size="small"
                  color="primary"
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                </IconButton>
              }
            />
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default Carousel;
