import { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Tooltip,
  Menu,
  MenuItem,
  ToggleButton,
  useTheme,
} from "@mui/material";
import { useContext, useMemo } from "react";
import { ThemeContext } from "../ThemeContextProvider";
import NetcomLogo from "./NetcomLogo";
import { NavLink, useMatch } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const Navbar = () => {
  const links = [
    {
      id: "0",
      label: "Inicio",
      href: "/inicio",
      isActive: useMatch({ path: `/inicio/*`, end: true }),
    },
    {
      id: "1",
      label: "Sobre Nosotros",
      href: "sobre-nosotros",
      isActive: useMatch({ path: `/sobre-nosotros/*`, end: true }),
    },
    {
      id: "2",
      label: "Cobertura",
      isMenu: true,
      children: [
        {
          id: "0",
          label: "Cobertura Inalambrica",
          href: `/cobertura/inalambrica`,
          isActive: useMatch({ path: `/cobertura/inalambrica`, end: true }),
        },
        {
          id: "1",
          label: "Cobertura Fibra Optica",
          href: "cobertura/fibra-optica",
          isActive: useMatch({ path: `/cobertura/fibra-optica`, end: true }),
        },
      ],
    },
    {
      id: "3",
      label: "Servicios",
      href: "servicios",
      isActive: useMatch({ path: `/servicios/*`, end: true }),
    },
    {
      id: "4",
      label: "FAQ",
      href: "faqs",
      isActive: useMatch({ path: `/faqs/*`, end: true }),
    },
    {
      id: "5",
      label: "Contacto",
      href: "contact",
      isActive: useMatch({ path: `/contact/*`, end: true }),
    },
    {
      id: "6",
      label: "Portal de Pagos",
      href: "https://pagos.netcomplusve.com:445/portal-de-pago/",
    },
  ];

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
          <Box sx={{ display: 'flex', justifyContent: 'end', gap: '12px', width: '100%'}}>
            {links.map((link) =>
              !link.isMenu ? (
                <Button
                  key={link.id}
                  color={link.isActive ? "primary" : "inherit"}
                  sx={{ padding: 0 }}
                >
                  <NavLink
                    to={link.href}
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      display: "block",
                      width: "100%",
                      height: "100%",
                      padding: "6px 8px",
                    }}
                  >
                    {link.label}
                  </NavLink>
                </Button>
              ) : (
                <Box key={link.id}>
                  <Button
                    color={link.isActive ? "primary" : "inherit"}
                    aria-controls={open ? `menu${link.id}` : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    {link.label}
                  </Button>
                  <Menu
                    id={`menu${link.id}`}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{ "aria-labelledby": "basic-button" }}
                  >
                    {link.children.map((children) => (
                      <MenuItem
                        key={children.id}
                        color={children.isActive ? "primary" : "inherit"}
                        sx={{ padding: 0 }}
                      >
                        <NavLink
                          to={children.href}
                          style={{
                            color: "inherit",
                            textDecoration: "none",
                            display: "block",
                            width: "100%",
                            height: "100%",
                            padding: "6px 8px",
                          }}
                        >
                          {children.label}
                        </NavLink>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              )
            )}
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
    </Box>
  );
};

export default Navbar;
