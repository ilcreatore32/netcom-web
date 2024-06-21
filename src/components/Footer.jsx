import {
  Grid,
  Paper,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

// Logo
import NetcomLogo from "./NetcomLogo";

// Icons
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {

  const services = [
    {
      id: "0",
      label: "Residencial Inalámbrico",
      href: "http://localhost:5173/servicios?value=residencial#planes",
    },
    {
      id: "1",
      label: "Pyme Inalámbrico",
      href: "http://localhost:5173/servicios?value=pyme#planes",
    },
    {
      id: "2",
      label: "Residencial Fibra Óptica",
      href: "http://localhost:5173/servicios?value=residencial#planes",
    },
    {
      id: "3",
      label: "Pyme Fibra Óptica",
      href: "http://localhost:5173/servicios?value=pyme#planes",
    },
    {
      id: "4",
      label: "Community",
      href: "http://localhost:5173/servicios?value=community#planes",
    },
    {
      id: "5",
      label: "Empresarial Dedicado",
      href: "http://localhost:5173/servicios?value=empresarial-dedicado#planes",
    },
  ];

  const socials = [
    {
      id: "0",
      label: "Instagram",
      icon: <InstagramIcon />,
      href: "https://www.instagram.com/netcomplus.ve/",
    },
    {
      id: "1",
      label: "Facebook",
      icon: <FacebookIcon />,
      href: "https://www.facebook.com/people/NetCom-Plus/100063485411131/",
    },
    {
      id: "2",
      label: "X",
      icon: <XIcon />,
      href: "https://x.com/i/flow/login?redirect_after_login=%2Fnetcomplusve",
    },
    {
      id: "3",
      label: "Linkedin",
      icon: <LinkedInIcon />,
      href: "https://ve.linkedin.com/company/netcomplusve",
    },
    {
      id: "4",
      label: "Whatsapp",
      icon: <WhatsAppIcon />,
      href: "https://api.whatsapp.com/send?phone=584244126217",
    },
  ];

  const platforms = [
    {
      id: "0",
      label: "Portal de Pagos",
      href: "https://pagos.netcomplusve.com:445/portal-de-pago/",
    },
    {
      id: "1",
      label: "Cobertura",
      href: "/cobertura",
    },
    {
      id: "2",
      label: "Oficinas Comerciales",
      href: "/contacto#otros",
    },
  ];

  const generateList = (title, list) => {
    return (
      <>
        <Typography color="textPrimary" variant="h6" component="span">
          {title}
        </Typography>
        <List
          dense
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {list.map((li) => (
            <ListItem
              key={li.id}
              sx={{
                "&:hover": {
                  cursor: "pointer",
                  color: theme.palette.primary.main,
                },
              }}
            >
              <Link
                to={li.href}
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  textWrap: "nowrap",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                {li.icon ? li.icon : null}
                <ListItemText primary={li.label} />
              </Link>
            </ListItem>
          ))}
        </List>
      </>
    );
  };

  const theme = useTheme();

  return (
    <Paper
      square
      elevation={2}
      sx={{
        width: "100%",
        paddingY: "1rem",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "30px",
        }}
      >
        <Grid
          item
          xs={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <NetcomLogo></NetcomLogo>
        </Grid>
        <Grid item xs={2}>
          {generateList("Servicios", services)}
        </Grid>
        <Grid item xs={2}>
          {generateList("Nuestras Redes", socials)}
        </Grid>
        <Grid item xs={2}>
          {generateList("Plataforma", platforms)}
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography color="textSecondary" variant="subtitle2">
          {`${new Date().getFullYear()} © | Netcom Plus. All rights reserved.`}
        </Typography>
      </Box>
    </Paper>
  );
};

export default Footer;
