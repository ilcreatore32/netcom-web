import { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Switch,
  Button,
  Tooltip,
  FormControlLabel,
  Menu,
  MenuItem,
  useTheme,
} from "@mui/material";
import { useContext, useMemo } from "react";
import { ThemeContext } from "../ThemeContextProvider";
import { styled } from "@mui/material/styles";
import NetcomLogo from "./NetcomLogo";

const Navbar = () => {
  const theme = useTheme();
  const { switchColorMode } = useContext(ThemeContext);
  const activateName = useMemo(
    () => (theme.palette.mode === "dark" ? "Light" : "Dark"),
    [theme]
  );

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: theme.palette.background.paper,
          color: theme.palette.text.primary,
        }}
      >
        <Toolbar sx={{ px: "5px" }}>
          <Button href="/">
            <NetcomLogo></NetcomLogo>
          </Button>
          <Button color="inherit">Inicio</Button>
          <Button color="inherit">Sobre Nosotros</Button>
          <Button
            color="inherit"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Cobertura
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Cobertura Inalambrica</MenuItem>
            <MenuItem onClick={handleClose}>Cobertura Fibra Optica</MenuItem>
          </Menu>
          <Button color="inherit">Servicios</Button>
          <Button color="inherit">FAQ</Button>
          <Button color="inherit">Contacto</Button>
          <Tooltip title={`Activate ${activateName} Mode`}>
            <FormControlLabel
              control={<ModeSwitch />}
              onClick={switchColorMode}
            />
          </Tooltip>
          <Button color="inherit">Portal de Pagos</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

const ModeSwitch = styled(Switch)(({ theme }) => ({
  padding: 8,
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,
    "&::before, &::after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 16,
      height: 16,
    },
    "&::before": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      left: 12,
    },
    "&::after": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M19,13H5V11H19V13Z" /></svg>')`,
      right: 12,
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 16,
    height: 16,
    margin: 2,
  },
}));
