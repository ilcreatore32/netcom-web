import {
  Paper,
  Button,
  Box,
  Typography,
  Divider,
  useTheme,
} from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRouteError, useNavigate } from "react-router-dom";
import Error from "../components/Error";

export default function ErrorPage() {
  const theme = useTheme();
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Paper
        id="error-page"
        square
        sx={{
          width: "100%",
          height: "calc(100vh - 64px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: 'wrap',
            gap: "30px",
          }}
        >
          <Box
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              className="teko-text"
              variant="h1"
              component="span"
              sx={{ color: theme.palette.primary.main, zIndex: 100 }}
            >
              Oops!
            </Typography>
            <Typography
              className="teko-text"
              variant="h6"
              component="span"
              sx={{ color: theme.palette.primary.light, zIndex: 100 }}
            >
              Lo sentimos, ha ocurrido un error inesperado.
            </Typography>
            <Typography
              className="teko-text"
              variant="h6"
              component="span"
              sx={{ color: theme.palette.primary.light, zIndex: 100 }}
            >
              <i>{error.statusText || error.message}</i>
            </Typography>
            <Button
              variant="outlined"
              onClick={() => {
                navigate(-1);
              }}
              sx={{ margin: "10px 0" }}
            >
              Volver
            </Button>
          </Box>
          <Divider orietntation="verical" variant="middle" sx={{ height: "100%" }} />
          <Box
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Error />
            <a
              href="https://storyset.com/internet"
              style={{ textDecoration: "none", fontSize: "12px", color: theme.palette.primary.light }}
            >
              Internet illustrations by Storyset
            </a>
          </Box>
        </Box>
      </Paper>
      <Footer />
    </>
  );
}
