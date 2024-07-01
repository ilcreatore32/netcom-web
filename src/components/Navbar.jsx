import { useState, useContext, useMemo, Fragment } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Tooltip,
  ToggleButton,
  Drawer,
  IconButton,
  useTheme,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  alpha,
} from "@mui/material";
import { ThemeContext } from "../ThemeContextProvider";
import { NavLink, useMatch } from "react-router-dom";

// Icons
import NetcomLogo from "./NetcomLogo";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";
import MapIcon from "@mui/icons-material/Map";
import WifiIcon from "@mui/icons-material/Wifi";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PaymentsIcon from "@mui/icons-material/Payments";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const Navbar = () => {
  const links = [
    {
      id: "0",
      label: "Inicio",
      href: "/",
      isActive: useMatch({ path: `/`, end: true }),
      icon: <HomeIcon sx={{ display: { md: "block", lg: "none" } }} />,
    },
    {
      id: "1",
      label: "Sobre Nosotros",
      href: "sobre-nosotros",
      isActive: useMatch({ path: `/sobre-nosotros/*`, end: true }),
      icon: <BusinessIcon sx={{ display: { md: "block", lg: "none" } }} />,
    },
    {
      id: "2",
      label: "Cobertura",
      href: `/cobertura`,
      isActive: useMatch({ path: `/cobertura`, end: true }),
      icon: <MapIcon sx={{ display: { md: "block", lg: "none" } }} />,
    },
    {
      id: "3",
      label: "Servicios",
      href: "servicios",
      isActive: useMatch({ path: `/servicios/*`, end: true }),
      icon: <WifiIcon sx={{ display: { md: "block", lg: "none" } }} />,
    },
    {
      id: "4",
      label: "FAQ",
      href: "faqs",
      isActive: useMatch({ path: `/faqs/*`, end: true }),
      icon: <LiveHelpIcon sx={{ display: { md: "block", lg: "none" } }} />,
    },
    {
      id: "5",
      label: "Contacto",
      href: "contacto",
      isActive: useMatch({ path: `/contacto/*`, end: true }),
      icon: <SupportAgentIcon sx={{ display: { md: "block", lg: "none" } }} />,
    },
    {
      id: "6",
      label: "Portal de Pagos",
      href: "https://pagos.netcomplusve.com:445/portal-de-pago/",
      icon: <PaymentsIcon sx={{ display: { md: "block", lg: "none" } }} />,
    },
  ];

  const theme = useTheme();
  const { switchColorMode } = useContext(ThemeContext);
  const activateName = useMemo(
    () => (theme.palette.mode === "dark" ? "Light" : "Dark"),
    [theme]
  );

  const [Open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          border: `${theme.palette.divider} 1px solid`,
        }}
      >
        <Toolbar sx={{ px: "5px" }}>
          <Tooltip title="Menu" arrow>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleToggle}
              sx={{ mr: 2, display: { xs: "block", sm: "block", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Tooltip>
          <Button
            href="/"
            sx={{
              width: { xs: "100%", sm: "100%", md: "auto" },
              m: { xs: "0 20%", sm: "0 20%", md: 0 },
              display: { xs: "flex", sm: "flex", md: "block" },
              justifyContent: { xs: "center", sm: "center", md: "auto" },
            }}
          >
            <NetcomLogo />
          </Button>
          <Box
            sx={{
              width: { xs: "auto", sm: "auto", md: "100%" },
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              gap: "12px",
            }}
          >
            {links.map((link) => (
              <Button
                key={link.id}
                color={link.isActive ? "primary" : "inherit"}
                sx={{
                  padding: 0,
                  display: { xs: "none", sm: "none", md: "block" },
                }}
              >
                <NavLink
                  to={link.href}
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    display: "flex",
                    width: "100%",
                    height: "100%",
                    padding: "6px 8px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: {
                        xs: "none",
                        sm: "none",
                        md: "none",
                        lg: "flex",
                      },
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {link.label}
                  </Box>
                  <Tooltip title={link.label} arrow>
                    {link.icon}
                  </Tooltip>
                </NavLink>
              </Button>
            ))}
            <Tooltip
              title={activateName == "Light" ? `Modo Claro` : `Modo Oscuro`}
            >
              <ToggleButton
                color="primary"
                value="check"
                size="small"
                selected
                onChange={switchColorMode}
                sx={{ width: "34px", height: "34px" }}
              >
                {activateName == "Light" ? <DarkModeIcon /> : <LightModeIcon />}
              </ToggleButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer open={Open} onClose={handleToggle}>
        <Box sx={{ width: 250 }} role="presentation">
          <Box
            sx={{
              width: "100%",
              height: "66px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderBottom: `1px solid ${theme.palette.divider}`,
            }}
          >
            <NetcomLogo />
          </Box>
          <List sx={{ p: 0 }}>
            <ListItem disablePadding onClick={handleToggle}>
              <ListItemButton>
                <ListItemIcon>
                  <NavigateBeforeIcon />
                </ListItemIcon>
                <ListItemText primary="Cerrar" />
              </ListItemButton>
            </ListItem>
            <Divider />
            {links.map(({ id, label, icon, isActive, href }) => (
              <Fragment key={id}>
                <NavLink
                  to={href}
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    width: "100%",
                    height: "100%",
                  }}
                  onClick={handleToggle}
                >
                  <ListItem
                    disablePadding
                    sx={{
                      color: isActive ? theme.palette.primary.main : "inherit",
                      bgcolor: isActive
                        ? alpha(theme.palette.primary.main, 0.1)
                        : "inherit",
                    }}
                  >
                    <ListItemButton>
                      <ListItemIcon
                        sx={{
                          color: isActive
                            ? theme.palette.primary.main
                            : "inherit",
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={label} />
                    </ListItemButton>
                  </ListItem>
                </NavLink>
                <Divider />
              </Fragment>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;
