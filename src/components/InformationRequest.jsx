import { useState, useEffect } from "react";
import { Box, TextField, Button } from "@mui/material";

const InformationRequest = () => {
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
    document: "",
    location: "",
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
    phone: {
      state: false,
      message: "",
    },
    email: {
      state: false,
      message: "",
    },
    document: {
      state: false,
      message: "",
    },
    location: {
      state: false,
      message: "",
    },
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      let message = `Hola soy un Cliente que busca Solicitar Información, aqui esta mi información:
        Nombres: ${form.name},
        Apellidos: ${form.lastname},
        Correo Electrónico: ${form.email},
        Teléfono: ${form.phone},
        Ubicación: ${form.location},
        Documento: ${form.document},  
        Muchas Gracias de antemano.
      `;

      window.open(`https://wa.me/584244200034?text=${message}`, "_blank");
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
          id="location"
          name="location"
          label=" Ubicación"
          variant="outlined"
          fullWidth
          error={errors.location.state}
          helperText={errors.location.message}
          onChange={(e) => handleChange(e)}
        />
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
      </Box>
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Button
          type="submit"
          variant="contained"
          disabled={!isValid}
          disableElevation
        >
          Solicitar Información
        </Button>
      </Box>
    </Box>
  );
};

export default InformationRequest;
