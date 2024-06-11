import {
  Grid,
  Paper,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import NetcomLogo from "./NetcomLogo";
import { Link } from "react-router-dom";

const Footer = () => {

    const services = [
        {
            id: '0',
            label: 'Residencial Inalambrico',
            href: '#'
        },
        {
            id: '1',
            label: 'Pyme Inalambrico',
            href: '#'
        },
        {
            id: '2',
            label: 'Residencial Fibra Optica',
            href: '#'
        },
        {
            id: '3',
            label: 'Pyme Fibra Optica',
            href: '#'
        },
        {
            id: '4',
            label: 'Community',
            href: '#'
        },
        {
            id: '5',
            label: 'Empresarial Dedicado',
            href: '#'
        },
    ]

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
          xs={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <NetcomLogo></NetcomLogo>
        </Grid>
        <Grid xs={2}>
          <Typography color="textPrimary" variant="h6">
            Servicios
          </Typography>
          <List
          dense
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <ListItem>
            <Link><ListItemText primary="Residencial Inalambrico" /></Link>
            </ListItem>
          </List>
        </Grid>
        <Grid
          xs={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography color="textPrimary" variant="subtitle1">
            Informacion
          </Typography>
        </Grid>
        <Grid
          xs={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography color="textPrimary" variant="subtitle1">
            asd
          </Typography>
        </Grid>
        <Grid
          xs={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography color="textPrimary" variant="subtitle1">
            Redes
          </Typography>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingX: "30px",
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
