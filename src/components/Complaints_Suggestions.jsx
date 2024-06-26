import { useState, useEffect } from "react";
import { Box, TextField, Button, Snackbar, Alert, Slide } from "@mui/material";
import emailjs from "@emailjs/browser";

const Complaints_Suggestions = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    subject: "",
    message: "",
  });
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({
    name: {
      state: false,
      message: "",
    },
    email: {
      state: false,
      message: "",
    },
    phone: {
      state: false,
      message: "",
    },
    location: {
      state: false,
      message: "",
    },
    subject: {
      state: false,
      message: "",
    },
    message: {
      state: false,
      message: "",
    },
  });

  // Feedback Control
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const handleClose = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  function SlideTransition(props) {
    return <Slide {...props} direction="right" />;
  }

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    handleErrors(e);
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValid) {
      // quejassugerenciasnetcomplus@gmail.com
      // xMrJ3d9vn8j8qdZ

      let message = `Hola soy ${form.name}, utilice el buzón de Quejas y Sugerencias aqui esta mi información:
        Correo Electrónico: ${form.email},
        Teléfono: ${form.phone},
        Ubicación: ${form.location},
        Asunto: ${form.subject},
        Mensaje: ${form.message}
      `;

      await emailjs.init("OdBxPXrv_VHWsnivY");

      await emailjs
        .send("service_mtb4q0s", "template_3omhae6", { message })
        .then(
          () => {
            setOpen(true);
          },
          (error) => {
            setErrorMessage(error.text)
            setOpen(true);
          }
        );
    }
  };

  return (
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
          label="Nombre"
          variant="outlined"
          fullWidth
          error={errors.name.state}
          helperText={errors.name.message}
          onChange={(e) => handleChange(e)}
        />
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
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", gap: "15px" }}
      >
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
      <TextField
        id="subject"
        name="subject"
        label="Asunto"
        variant="outlined"
        fullWidth
        error={errors.subject.state}
        helperText={errors.subject.message}
        onChange={(e) => handleChange(e)}
      />
      <TextField
        id="message"
        name="message"
        label="Mensaje"
        multiline
        maxRows={8}
        fullWidth
        error={errors.message.state}
        helperText={errors.message.message}
        onChange={(e) => handleChange(e)}
      />
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Button
          type="submit"
          variant="contained"
          disabled={!isValid}
          disableElevation
        >
          Enviar
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
            Se ha enviado correctamente su Mensaje
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
  );
};

export default Complaints_Suggestions;
