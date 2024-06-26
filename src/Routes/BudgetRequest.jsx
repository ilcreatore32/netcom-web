import { useState, useEffect } from "react";
import {
  Paper,
  Typography,
  Box,
  TextField,
  Button,
  Snackbar,
  Alert,
  Slide,
} from "@mui/material";
import axios from "axios";
import CountrySelector from "../components/CountrySelector";
import PlanSelector from "../components/PlanSelector";

const BudgetRequest = () => {
  // Whatsapp Token & Error
  const [token, setToken] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  // Form Adminitration
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    email: "",
    location: "",
    phone: "",
    countryPhone: "",
    document: "",
    plan: "",
  });
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({
    name: {
      state: false,
      message: "",
    },
    lastname: {
      state: false,
      message: "",
    },
    email: {
      state: false,
      message: "",
    },
    location: {
      state: false,
      message: "",
    },
    phone: {
      state: false,
      message: "",
    },
    countryPhone: {
      state: false,
      message: "",
    },
    document: {
      state: false,
      message: "",
    },
    plan: {
      state: false,
      message: "",
    },
  });

  // Feedback Control
  const [open, setOpen] = useState(false);
  const handleClose = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  function SlideTransition(props) {
    return <Slide {...props} direction="right" />;
  }

  // Form Checking
  useEffect(() => {
    const isValid =
      Object.values(form).every((value) => {
        if (value === "") {
          return false;
        }
        return true;
      }) && Object.values(errors).every((error) => error.state === false);

    setIsValid(isValid);
  }, [form, errors]);

  // Form Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });

    handleErrors(e);
  };

  // Form Errors & Validation
  const handleErrors = (e) => {
    const { name, value } = e.target;

    if (value === "") {
      setErrors({
        ...errors,
        [name]: {
          state: true,
          message: "El Campo no puedo estar vacio.",
        },
      });
    } else {
      setErrors({
        ...errors,
        [name]: {
          state: false,
          message: "",
        },
      });
    }

    // Other Validations
    name == "phone" && phoneValidation(e);
    name == "email" && emailValidation(e);
    name == "plan" && planValidation(e);
  };

  const phoneValidation = (e) => {
    if (!/^(0412|0414|0424|0416|0426)\d{7}$/.test(e.target.value)) {
      setErrors({
        ...errors,
        phone: {
          state: true,
          message: "Formato de numero incorrecto",
        },
      });
    } else {
      setErrors({
        ...errors,
        phone: {
          state: false,
          message: "",
        },
      });
    }
  };

  const emailValidation = (e) => {
    const emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z\-0-9]{2,}))$/;
    if (!emailRegex.test(e.target.value)) {
      setErrors({
        ...errors,
        email: {
          state: true,
          message: "Formato de correo incorrecto",
        },
      });
    } else {
      setErrors({
        ...errors,
        email: {
          state: false,
          message: "",
        },
      });
    }
  };

  const planValidation = (e) => {
    if (e.target.value.length === 0) {
      setErrors({
        ...errors,
        plan: {
          state: true,
          message: "Debe seleccionar minimo un Plan",
        },
      });
    } else {
      setErrors({
        ...errors,
        plan: {
          state: false,
          message: "",
        },
      });
    }
  };

  // Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    console.log(errors);
    console.log(isValid);

    if (!token) {
      console.error("Token no disponible. Por favor espere...");
      return;
    }

    if (isValid) {
      try {
        await axios.post(
          "https://api.liveconnect.chat/prod/proxy/transfer",
          {
            id_conversacion: "",
            mensaje: `Solicitud de Presupuesto:

              Nombres: ${form.name},
              Apellidos: ${form.lastname},
              Correo Electrónico: ${form.email},
              Teléfono: ${form.phone},
              Ubicación: ${form.location},
              Documento: ${form.document},
              Interesado en los Planes: ${form.plan}

              Este mensaje fue generado desde la Web de Netcom Plus.
            `,
            // Canal de Pruebas
            id_canal: 62,
            estado: 1,
            contacto: { celular: `${form.countryPhone}${form.phone}` },
          },
          {
            headers: {
              "Content-Type": "application/json",
              PageGearToken: token,
            },
          }
        );
        setOpen(true);
      } catch (error) {
        setErrorMessage(error.message);
        setOpen(true);
      }
    }
  };

  // Token Request on Load
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await axios.post(
          "https://api.liveconnect.chat/prod/account/token",
          {
            cKey: "f78130cc10a9ca824e455418ecbe736c",
            privateKey: "25b2fc7eda9bbd0019785443a7900e8a",
          },
          { headers: { "Content-Type": "application/json" } }
        );
        setToken(response.data.PageGearToken);
      } catch (error) {
        setErrorMessage(error.message);
      }
    };

    fetchToken();
  }, []);

  return (
    <Paper square elevation={0} sx={{ p: "120px 0" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Petición de Presupuesto
        </Typography>
      </Box>
      <Box
        component={"form"}
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          padding: "10px 20%",
        }}
      >
        <Box
          sx={{ display: "flex", justifyContent: "space-between", gap: "15px" }}
        >
          <TextField
            id="name"
            name="name"
            label="Nombres"
            variant="outlined"
            fullWidth
            error={errors.name.state}
            helperText={errors.name.message}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            id="lastname"
            name="lastname"
            label="Apellidos"
            variant="outlined"
            fullWidth
            error={errors.lastname.state}
            helperText={errors.lastname.message}
            onChange={(e) => handleChange(e)}
          />
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "space-between", gap: "15px" }}
        >
          <TextField
            id="email"
            name="email"
            label="Correo Electrónico"
            variant="outlined"
            fullWidth
            error={errors.email.state}
            helperText={errors.email.message}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            id="location"
            name="location"
            label=" Ubicación"
            variant="outlined"
            fullWidth
            error={errors.location.state}
            helperText={errors.location.message}
            onChange={(e) => handleChange(e)}
          />
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "space-between", gap: "15px" }}
        >
          <CountrySelector
            error={errors.countryPhone.state}
            helperText={errors.countryPhone.message}
            onChange={handleChange}
          />
          <TextField
            id="phone"
            name="phone"
            label="Teléfono"
            variant="outlined"
            fullWidth
            error={errors.phone.state}
            helperText={errors.phone.message}
            onChange={(e) => handleChange(e)}
          />
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "space-between", gap: "15px" }}
        >
          <TextField
            id="document"
            name="document"
            label="Documento de Identificación"
            variant="outlined"
            fullWidth
            error={errors.document.state}
            helperText={errors.document.message}
            onChange={(e) => handleChange(e)}
          />
          <PlanSelector
            error={errors.plan.state}
            helperText={errors.plan.message}
            onChange={handleChange}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <Button
            type="submit"
            variant="contained"
            disabled={!isValid && token !== null}
            disableElevation
          >
            Solicitar Información
          </Button>
        </Box>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          TransitionComponent={SlideTransition}
        >
          {errorMessage === null ? (
            <Alert
              severity="success"
              variant="filled"
              sx={{ width: "100%", color: "#fff" }}
            >
              Se ha enviado correctamente su Solicitud
            </Alert>
          ) : (
            <Alert
              severity="error"
              variant="filled"
              sx={{ width: "100%", color: "#fff" }}
            >
              Ha ocurrido un Error, intente nuevamente
            </Alert>
          )}
        </Snackbar>
      </Box>
    </Paper>
  );
};

export default BudgetRequest;
