import { Box, Button, Typography } from "@mui/material";
import { TextField, Stack, Paper } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";

export interface FormProps {
  name: string;
  email: string;
  message: string;
  dateFrom: string;
  dateTo: string;
  phone: string;
}
interface ContactFormProps {
  sticky?: boolean;
}
const validationSchema = yup.object({
  email: yup.string().email("Ingrese un email válido").required("Requerido"),
  name: yup.string().required("Requerido"),
  phone: yup.string().required("Requerido"),
  message: yup.string().required("Requerido"),
  dateFrom: yup.string().nullable().required("Requerido"),
  dateTo: yup.string().nullable().required("Requerido"),
});

export const ContactForm = (props: ContactFormProps) => {
  const [messageSent, setMessageSent] = useState(false);
  const [sending, setSending] = useState(false);

  const formik = useFormik<FormProps>({
    initialValues: {
      name: "",
      email: "",
      message: "",
      dateFrom: null,
      dateTo: null,
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setSending(true)
      fetch("/api/emailHandler", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => {
        setMessageSent(true);
        setSending(false)
      }).catch((err)=>{
        setMessageSent(false);
        setSending(false)
        console.log(err)
      });
    },
  });

  const handleDateFromChange = (date) => {
    formik.setFieldValue("dateFrom", date);
  };
  const handleDateToChange = (date) => {
    formik.setFieldValue("dateTo", date);
  };

  return (
    <Box
      sx={{
        position: props?.sticky ? "sticky" : "inherit",
        top: "105px",        
      }}
    >
      <Paper
        elevation={5}
        sx={{
          padding: 5,
        }}
      >
        <Typography mb={2}>Envíanos un Mensaje </Typography>
        {messageSent ? (
          <Box>Gracias, mensaje enviado</Box>
        ) : (
          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={2}>
              <TextField
                variant="outlined"
                name="name"
                label="Nombre"
                type="text"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
              <TextField
                variant="outlined"
                name="email"
                label="Email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                variant="outlined"
                name="phone"
                type="phone"
                label="Teléfono"
                value={formik.values.phone}
                onChange={formik.handleChange}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <DatePicker
                  inputFormat="dd/MM/yyyy"
                  InputProps={{
                    name: "dateFrom",
                    error:
                      formik.touched.dateFrom &&
                      Boolean(formik.errors.dateFrom),
                  }}
                  renderInput={(params) => <TextField {...params} />}
                  label="Desde"
                  value={formik.values.dateFrom}
                  onChange={handleDateFromChange}
                />
                <DatePicker
                  inputFormat="dd/MM/yyyy"
                  InputProps={{
                    name: "dateTo",
                    error:
                      formik.touched.dateTo && Boolean(formik.errors.dateTo),
                  }}
                  renderInput={(params) => <TextField {...params} />}
                  label="Hasta"
                  value={formik.values.dateTo}
                  onChange={handleDateToChange}
                />
              </Box>

              <TextField
                multiline
                variant="outlined"
                name="message"
                label="Mensaje"
                aria-label="escribe el mensaje"
                style={{ width: "100%" }}
                value={formik.values.message}
                onChange={formik.handleChange}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
              />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  type="reset"
                  variant="outlined"
                  color="primary"
                  onClick={() => formik.resetForm()}
                  disabled={sending}
                >
                  Borrar
                </Button>
                <Button type="submit" variant="contained" color="primary">
                  Enviar
                </Button>
              </Box>
            </Stack>
          </form>
        )}
      </Paper>
    </Box>
  );
};
