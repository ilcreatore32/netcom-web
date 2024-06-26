import { useState, useEffect } from "react";
import {
  Box,
  Paper,
  Typography,
  Tab,
  Card,
  CardContent,
  CardActions,
  Button,
  alpha,
  useTheme,
  Grid,
  LinearProgress,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useSearchParams } from "react-router-dom";

// Images
import bg02 from "../assets/images/bg-2.png";
import bg06 from "../assets/images/foto-6.jpg";

// Icons
import DownloadIcon from "@mui/icons-material/Download";
import UploadIcon from "@mui/icons-material/Upload";
import SpeedIcon from "@mui/icons-material/Speed";
import NetworkCheckIcon from "@mui/icons-material/NetworkCheck";

const tabs = [
  {
    key: "residencial",
    name: "Plan Residencial",
  },
  {
    key: "pyme",
    name: "Plan Pyme",
  },
  {
    key: "community",
    name: "Plan Community",
  },
  {
    key: "empresarial-dedicado",
    name: "Plan Empresarial Dedicado",
  },
];

const services = [
  {
    type: "residencial",
    content: [
      {
        key: "residencial-inalambrico",
        name: "Residencial Inalámbrico",
        plans: [
          {
            key: "residencial-inalambrico-basico-plus",
            name: "Básico Plus",
            download: 15,
            upload: 3,
          },
          {
            key: "residencial-inalambrico-ultra",
            name: "Ultra",
            download: 25,
            upload: 5,
          },
          {
            key: "residencial-inalambrico-select",
            name: "Select",
            download: 30,
            upload: 5,
          },
          {
            key: "residencial-inalambrico-performance",
            name: "Performance",
            download: 40,
            upload: 15,
          },
          {
            key: "residencial-inalambrico-extreme-plus",
            name: "Extreme Plus",
            download: 70,
            upload: 25,
          },
        ],
      },
      {
        key: "residencial-fibra",
        name: "Residencial Fibra Óptica",
        plans: [
          {
            key: "residencial-fibra-basico",
            name: "Básico",
            download: 600,
            upload: 600,
          },
          {
            key: "residencial-fibra-ultra",
            name: "Ultra",
            download: 700,
            upload: 700,
          },
          {
            key: "residencial-fibra-select",
            name: "Select",
            download: 800,
            upload: 800,
          },
          {
            key: "residencial-fibra-performance",
            name: "Performance",
            download: 850,
            upload: 850,
          },
          {
            key: "residencial-fibra-extreme",
            name: "Extreme",
            download: 1000,
            upload: 1000,
          },
        ],
      },
    ],
  },
  {
    type: "pyme",
    content: [
      {
        key: "pyme-inalambrico",
        name: "Pyme Inalámbrico",
        plans: [
          {
            key: "pyme-inalambrico-basico",
            name: "Básico",
            download: 10,
            upload: 4,
          },
          {
            key: "pyme-inalambrico-ultra",
            name: "Ultra",
            download: 15,
            upload: 6,
          },
          {
            key: "pyme-inalambrico-mas",
            name: "Más",
            download: 20,
            upload: 8,
          },
          {
            key: "pyme-inalambrico-plus-ultra",
            name: "Plus Ultra",
            download: 25,
            upload: 12,
          },
          {
            key: "pyme-inalambrico-perfomance",
            name: "Performance",
            download: 30,
            upload: 15,
          },
        ],
      },
      {
        key: "pyme-fibra",
        name: "Pyme Fibra Óptica",
        plans: [
          {
            key: "pyme-fibra-inicial",
            name: "Inicial",
            download: 40,
            upload: 40,
          },
          {
            key: "pyme-fibra-basico",
            name: "Básico",
            download: 50,
            upload: 50,
          },
          {
            key: "pyme-fibra-ultra",
            name: "Ultra",
            download: 100,
            upload: 100,
          },
          {
            key: "pyme-fibra-select",
            name: "Select",
            download: 200,
            upload: 200,
          },
          {
            key: "pyme-fibra-performance",
            name: "Performance",
            download: 300,
            upload: 300,
          },
        ],
      },
    ],
  },
  {
    type: "community",
    content: [
      {
        key: "community",
        name: "Community",
        plans: [
          {
            key: "community-4m",
            name: "Plus 4M",
            download: 4,
            upload: 4,
          },
          {
            key: "community-8m",
            name: "Plus 8M",
            download: 8,
            upload: 8,
          },
          {
            key: "community-15m",
            name: "Plus 15M",
            download: 15,
            upload: 15,
          },
          {
            key: "community-25m",
            name: "Plus 25M",
            download: 25,
            upload: 15,
          },
          {
            key: "community-30m",
            name: "Plus 30M",
            download: 30,
            upload: 15,
          },
          {
            key: "community-50m",
            name: "Plus 50M",
            download: 50,
            upload: 20,
          },
          {
            key: "community-100m",
            name: "Plus 100M",
            download: 100,
            upload: 30,
          },
        ],
      },
    ],
  },
];

const Services = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const valueParam = searchParams.get("value");

  const theme = useTheme();
  const [value, setValue] = useState(
    valueParam != null ? valueParam : tabs[0].key
  );

  const generate = ({ key, name, download, upload }) => {
    return (
      <Grid key={key} item xs={1}>
        <Card
          sx={{
            display: "flex",
            width: "100%",
            minWidth: "100%",
            minHeight: "200px",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <CardContent sx={{ width: "100%", height: "100%" }}>
            <Typography
              variant="h6"
              component="span"
              color="primary"
              className="teko-text"
            >
              {name}
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h6" component="span">
                  Descarga
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="span"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                    fontSize: "14px",
                  }}
                >
                  <DownloadIcon />
                  {download} Mbps
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h6" component="span">
                  Subida
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="span"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                    fontSize: "14px",
                  }}
                >
                  <UploadIcon />
                  {upload} Mbps
                </Typography>
              </Box>
            </Box>
          </CardContent>
          <CardActions sx={{ justifyContent: "end" }}>
            <Button size="small" variant="contained" disableElevation>
              Presupuesto
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [progress]);

  return (
    <>
      {/* 'Servicios' */}
      <Box
        sx={{
          width: "100vw",
          height: "calc(100vh - 64px)",
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
            backgroundImage: `url(${bg06})`,
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
              Planes
              <Box
                className="teko-text"
                component="span"
                sx={{ color: theme.palette.primary.main }}
              >
                .
              </Box>
            </Typography>
            <Typography variant="h6" component="span" color="textSecondary">
              Revisa cuál de nuestros planes se adapta mejor a ti.
            </Typography>
          </Paper>
        </Paper>
      </Box>
      {/* 'Planes' */}
      <Paper
        id="planes"
        square
        elevation={1}
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          padding: "30px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <NetworkCheckIcon sx={{ fontSize: "64px" }} />
          <Typography className="teko-text" variant="h2" component="span">
            Tecnología Escalable
            <Box
              className="teko-text"
              component="span"
              sx={{ color: theme.palette.primary.main }}
            >
              .
            </Box>
          </Typography>
        </Box>
        <Box sx={{ width: "100%", height: "100%" }}>
          <TabContext value={value}>
            <Paper sx={{ border: "none" }} square variant="outlined">
              <TabList value={value} onChange={handleChange}>
                {tabs.map(({ key, name }) => (
                  <Tab key={key} label={name} value={key} />
                ))}
              </TabList>
            </Paper>
            {tabs.map(({ key, name }) => {
              if (key !== "empresarial-dedicado") {
                return (
                  <TabPanel
                    key={key}
                    label={name}
                    value={key}
                    sx={{ m: 0, p: 0 }}
                  >
                    <Paper
                      variant="outlined"
                      square
                      sx={{
                        display: "flex",
                        width: "100%",
                        flexDirection: "column",
                        gap: "10px",
                        padding: "30px",
                      }}
                    >
                      {services.map(({ type, content }) => {
                        if (type === key) {
                          return content.map(({ key, name, plans }) => (
                            <Box key={key}>
                              <Typography
                                className="teko-text"
                                variant="h5"
                                component="span"
                              >
                                {name}
                              </Typography>
                              <Grid
                                columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
                                container
                                spacing={3}
                                sx={{
                                  width: "100%",
                                  mb: "20px",
                                }}
                              >
                                {plans.map((p) => generate(p))}
                              </Grid>
                            </Box>
                          ));
                        }
                      })}
                    </Paper>
                  </TabPanel>
                );
              }
            })}
            <TabPanel
              label="Empresarial Dedicado"
              value="empresarial-dedicado"
              sx={{ m: 0, p: 0 }}
            >
              <Paper
                variant="outlined"
                square
                sx={{
                  display: "flex",
                  width: "100%",
                  flexDirection: "column",
                  gap: "25px",
                  padding: "30px",
                }}
              >
                <Box
                  sx={{
                    width: "90%",
                    margin: "auto",
                  }}
                >
                  <Typography
                    className="teko-text"
                    sx={{ fontSize: "20px", textAlign: "center" }}
                    component="span"
                  >
                    Los planes dedicados son simétricos, la velocidad de subida
                    es la misma que la de descarga, son personalizados a la
                    necesidad de cada cliente, están disponibles a partir de
                    <span style={{ color: theme.palette.primary.main }}>
                      {" 10 Mbps "}
                    </span>
                    y pueden ser escalables hasta cumplir con las necesidades de
                    Internet.
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    flexDirection: "column",
                    padding: "30px 100px",
                  }}
                >
                  <Typography
                    className="teko-text"
                    sx={{
                      display: "flex",
                      fontSize: "20px",
                      textAlign: "center",
                      color: theme.palette.primary.main,
                    }}
                    component="span"
                  >
                    10 Mbps
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={progress}
                    sx={{ height: 4 }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    flexDirection: "column",
                    padding: "30px 100px",
                  }}
                >
                  <Typography
                    className="teko-text"
                    sx={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                      fontSize: "20px",
                      textAlign: "center",
                      color: theme.palette.primary.main,
                    }}
                    component="span"
                  >
                    Otros Planes
                    <SpeedIcon />
                  </Typography>
                  <LinearProgress sx={{ height: 12 }} />
                </Box>
              </Paper>
            </TabPanel>
          </TabContext>
        </Box>
      </Paper>
      {/* 'Entre Nosotros' */}
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          width: "100%",
          height: "350px",
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
            sx={{ color: "#fff", border: `rgba(255,255,255, 0.3) 1px solid` }}
          >
            Presupuesto
          </Button>
        </Box>
      </Paper>
    </>
  );
};

export default Services;
