import { useState, useEffect } from "react";
import {
  Box,
  Paper,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Autocomplete,
  CircularProgress,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  useTheme,
} from "@mui/material";
import Wireless from "../assets/json/wireless.json";
import Fiber from "../assets/json/fiber.json";

// Icons
import CellTowerIcon from "@mui/icons-material/CellTower";
import CableIcon from "@mui/icons-material/Cable";
import NearMeIcon from "@mui/icons-material/NearMe";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

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
        <Box sx={{ width: "100%", height: "calc(100vh - 175px)" }}>
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
            height: "calc(100vh - 175px)",
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

const CoverageAppMobile = () => {
  const theme = useTheme();

  // States
  const [value, setValue] = useState(null);
  const [data, setData] = useState([]);
  const [cType, setCType] = useState("fiber");
  const [go, setGo] = useState(null);
  const [map, setMap] = useState(
    "https://www.google.com/maps/d/embed?mid=1Ui-jS8emaTOTh47ImSqIKCp79Cmo_uA&ll"
  );
  const [open, setOpen] = useState(false);

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

  const filterOptions = (options, { inputValue }) => {
    // Normalize input value and option properties (remove accents)
    const normalizedInput = inputValue
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

    const normalizedOptions = options.map((option) => ({
      area: option.area
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase(),
      name: option.name
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase(),
    }));

    // Filter options based on normalized input and option properties
    return normalizedOptions.filter((option) => {
      const searchTerms = `${option.name} ${option.area}`;

      return (
        option.name.includes(normalizedInput) ||
        option.area.includes(normalizedInput) ||
        searchTerms.includes(normalizedInput) ||
        searchTerms.split(" ").reverse().join(" ").includes(normalizedInput)
      );
    });
  };

  const handleChange = ({ area, name }) => {
    const selected = data.filter((option) => {
      const normalizedOptionName = option.name.toLowerCase();
      const normalizedOptionArea = option.area.toLowerCase();
      return (
        normalizedOptionName.includes(name.toLowerCase()) ||
        normalizedOptionArea.includes(area.toLowerCase())
      );
    })[0].map;
    setGo(selected);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  useEffect(() => {
    if (value === null) {
      setData(cType === "wireless" ? Wireless : Fiber);
    } else {
      handleChange(value);
    }
  }, [value, cType]);

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Paper square elevation={0} sx={{ p: "0 5px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "5px",
          }}
        >
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
              Fibra Óptica
            </ToggleButton>
          </ToggleButtonGroup>
          <Box
            sx={{
              width: "20%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton
              size="small"
              color="primary"
              onClick={() => setOpen(true)}
            >
              <InfoOutlinedIcon />
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: "8px 5px 5px 5px",
          }}
        >
          <Autocomplete
            id="coverage-search-mobile"
            disablePortal
            options={data}
            getOptionLabel={(op) => `${op.name} - ${op.area}`}
            value={value}
            onChange={(e, query) => {
              setValue(query);
            }}
            filterOptions={filterOptions}
            fullWidth
            renderInput={(params) => <TextField {...params} label="Busqueda" />}
            noOptionsText="Parece que lo que buscas no esta en nuestras ubicaciones listadas. Te invitamos a confirmar la cobertura directamente en el mapa."
          />
          <Box
            sx={{
              width: "20%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton size="small" color="primary" onClick={() => setMap(go)}>
              <NearMeIcon />
            </IconButton>
          </Box>
        </Box>
      </Paper>
      <GoogleMap map={map} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Información Importante</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Estas visualizando la cobertura
            <strong>
              {cType == "wireless" ? " Inalámbrica " : " de Fibra Óptica "}
            </strong>
            de Netcom Plus. Tiempo de Actualización de al menos{" "}
            <strong>30 días</strong>.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CoverageAppMobile;
