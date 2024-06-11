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
import { NavLink, useMatch  } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      id: "0",
      label: "Inicio",
      href: "/inicio",
      isActive: useMatch({ path: `/inicio/*`, end: true })
    },
    {
      id: "1",
      label: "Sobre Nosotros",
      href: "sobre-nosotros",
      isActive: useMatch({ path: `/sobre-nosotros/*`, end: true })
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
          isActive: useMatch({ path: `/cobertura/inalambrica`, end: true })
        },
        {
          id: "1",
          label: "Cobertura Fibra Optica",
          href: "cobertura/fibra-optica",
          isActive: useMatch({ path: `/cobertura/fibra-optica`, end: true })
        },
      ],
    },
    {
      id: "3",
      label: "Servicios",
      href: "servicios",
      isActive: useMatch({ path: `/servicios/*`, end: true })
    },
    {
      id: "4",
      label: "FAQ",
      href: "faqs",
      isActive: useMatch({ path: `/faqs/*`, end: true })
    },
    {
      id: "5",
      label: "Contacto",
      href: "contact",
      isActive: useMatch({ path: `/contact/*`, end: true })
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
          {links.map((link) =>
            !link.isMenu ? (
              <Button key={link.id} color={link.isActive ? 'primary' : 'inherit'} sx={{ padding: 0 }}>
                <NavLink
                  to={link.href}
                  style={{ color: "inherit", textDecoration: "none", display: 'block', width: '100%', height: '100%', padding: '6px 8px' }}
                >
                  {link.label}
                </NavLink>
              </Button>
            ) : (
              <Box key={link.id}>
                <Button
                  color={link.isActive ? 'primary' : 'inherit'}
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
                    <MenuItem key={children.id} color={children.isActive ? 'primary' : 'inherit'} sx={{ padding: 0 }}>
                      <NavLink
                        to={children.href}
                        style={{ color: "inherit", textDecoration: "none", display: 'block', width: '100%', height: '100%', padding: '6px 8px'}}
                      >
                        {children.label}
                      </NavLink>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            )
          )}
          <Tooltip title={`Activate ${activateName} Mode`}>
            <FormControlLabel
              control={<ModeSwitch />}
              onClick={switchColorMode}
            />
          </Tooltip>
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
