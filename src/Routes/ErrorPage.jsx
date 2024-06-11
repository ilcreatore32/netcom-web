import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useRouteError, useNavigate } from "react-router-dom";
export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();
  console.error(error);

  return (
    <Paper
      id="error-page"
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <h1>Oops!</h1>
      <p>Lo sentimos, ha ocurrido un error inesperado.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Button
        onClick={() => {
          navigate(-1);
        }}
      >
        Volver
      </Button>
    </Paper>
  );
}
