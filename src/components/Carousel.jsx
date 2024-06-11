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

export default function SimpleSlider() {
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
    setActiveStep(step);
  }, 4000);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "calc(100vh - 64px)",
          position: "relative",
        }}
      >
        <Paper sx={{ height: "100%" }}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundSize: "cover",
              backgroundImage: `url(${images[activeStep].image})`,
            }}
          >
            <Paper
              square
              elevation={1}
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                bgcolor: "background.default",
                position: "absolute",
                zIndex: "1000",
                width: "500px",
                top: "35%",
                left: "35%",
                padding: "20px",
                borderRadius: "12px",
              }}
            >
              <Typography>{images[activeStep].title}</Typography>
              <Typography>{images[activeStep].subtitle}</Typography>
            </Paper>
            <MobileStepper
              sx={{ position: "absolute", bottom: "0", width: "100%" }}
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
}
