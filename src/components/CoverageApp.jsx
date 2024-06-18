import { useState, useEffect } from "react";
import {
  Box,
  Paper,
  Typography,
  styled,
  useTheme,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Alert,
  alpha,
  Tooltip,
  CircularProgress,
  IconButton,
} from "@mui/material";
import Wireless from "../assets/json/wireless.json";
import Fiber from "../assets/json/fiber.json";

// Icons
import CellTowerIcon from "@mui/icons-material/CellTower";
import CableIcon from "@mui/icons-material/Cable";
import NearMeIcon from "@mui/icons-material/NearMe";

const GoogleMap = ({ map }) => {
  const [loading, setLoading] = useState(true);
  const handleIfrmeLoad = () => setLoading(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [loading]);

  return (
    <>
      {!loading ? (
        <Box sx={{ width: "100%", height: "100%" }}>
          <iframe
            title="Netcom Coverage Map"
            src={map}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={handleIfrmeLoad}
          ></iframe>
        </Box>
      ) : (
        <Paper
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          square
          elevation={0}
        >
          <CircularProgress />
        </Paper>
      )}
    </>
  );
};

const CoverageApp = () => {
  const theme = useTheme();
  const [q, setQ] = useState("");
  const [data, setData] = useState([]);
  const [map, setMap] = useState(
    "https://www.google.com/maps/d/embed?mid=1Ui-jS8emaTOTh47ImSqIKCp79Cmo_uA&ll"
  );

  const ZoneChild = styled(Paper)(({ theme }) => ({
    width: "100%",
    color: "text.primary",
    padding: "5px",
  }));

  const generate = ({ area, name, map }) => {
    return (
      <ZoneChild key={`${area}-${name}`} square variant="outlined">
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              className="teko-text"
              sx={{ color: "primary.main", fontSize: "14px", paddingX: "5px" }}
            >
              {area}
            </Typography>
            <Typography sx={{ paddingX: "5px" }}>{name}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
              marginX: "15px",
            }}
          >
            <Tooltip title="Ir al Mapa" placement="right" arrow>
              <IconButton
                color="primary"
                size="small"
                onClick={() => setMap(map)}
              >
                <NearMeIcon fontSize="inherit" />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </ZoneChild>
    );
  };

  const [cType, setCType] = useState("fiber");
  const handleType = (e, newType) => {
    if (newType !== null) {
      setCType(newType);
      setData(newType === "wireless" ? Wireless : Fiber);
      setMap(
        newType === "wireless"
          ? "https://www.google.com/maps/d/embed?mid=1eBCrDJpyDLbBtM2PrTvUpW_ZKFkJhqI&ll"
          : "https://www.google.com/maps/d/embed?mid=1Ui-jS8emaTOTh47ImSqIKCp79Cmo_uA&ll"
      );
    }
  };

  useEffect(() => {
    if (q == "") {
      setData(cType === "wireless" ? Wireless : Fiber);
    } else {
      let tempData = cType === "wireless" ? Wireless : Fiber;

      const qNormalized = q.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

      const filteredData = tempData.filter((item) => {
        const itemNameNormalized = item.name
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");

        return itemNameNormalized
          .toLowerCase()
          .includes(qNormalized.toLowerCase());
      });

      setData(filteredData);
    }
  }, [q, cType]);

  return (
    <Box sx={{ width: "100%", height: "calc(100vh - 64px)", display: "flex" }}>
      <Paper
        square
        elevation={0}
        sx={{ width: "500px", height: "calc(100vh - 162px)" }}
      >
        <Box sx={{ padding: "10px" }}>
          <ToggleButtonGroup
            color="primary"
            size="small"
            value={cType}
            exclusive
            onChange={handleType}
            fullWidth
          >
            <ToggleButton
              value="wireless"
              fullWidth
              sx={{ display: "flex", alignItems: "center", gap: "5px" }}
            >
              <CellTowerIcon />
              Inalámbrica
            </ToggleButton>
            <ToggleButton
              value="fiber"
              fullWidth
              sx={{ display: "flex", alignItems: "center", gap: "5px" }}
            >
              <CableIcon />
              Fibra Optica
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Box sx={{ padding: "10px" }}>
          <Alert severity="info" sx={{ mb: "10px" }}>
            Estas visualizando la cobertura
            <strong>
              {cType == "wireless" ? " Inalámbrica " : " de Fibra Optica "}
            </strong>
            de Netcom Plus. Tiempo de Actualización de al menos{" "}
            <strong>30 días</strong>.
          </Alert>
          <TextField
            id="coverage-search"
            label="Busqueda"
            size="small"
            fullWidth
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </Box>
        <Paper
          square
          elevation={0}
          variant="outlined"
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "calc(100% - 120px)",
            overflow: "hidden",
            overflowY: "auto",
            scrollbarWidth: "thin",
            scrollbarColor: `${alpha(theme.palette.primary.main, 0.7)} ${alpha(
              theme.palette.primary.main,
              0.1
            )}`,
            scrollBehavior: "smooth",
          }}
        >
          {data.length > 0 ? (
            data.map((i) => generate(i))
          ) : (
            <Alert severity="error">
              Parece que lo que buscas no esta en nuestras ubicaciones listadas.
              Te invitamos a confirmar la cobertura directamente en el mapa.
            </Alert>
          )}
        </Paper>
      </Paper>
      <GoogleMap map={map} />
    </Box>
  );
};

export default CoverageApp;
