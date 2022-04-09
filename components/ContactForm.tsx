import { useState } from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { TextField, Stack, Paper } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import MobileDatePicker from "@mui/lab/MobileDatePicker";

interface FormData {
  name: string;
  email: string;
  message: string;
  dateFrom: string;
  dateTo: string;
  phone: string;
}
const validationSchema = yup.object({
  email: yup.string().email("Ingrese un email válido").required("Requerido"),
  name: yup.string().required("Requerido"),
  phone: yup.string().required("Requerido"),
  message: yup.string().required("Requerido"),
  dateFrom: yup.string().nullable().required("Requerido"),
  dateTo: yup.string().nullable().required("Requerido"),
});

const ContactForm = (props) => {
  const formik = useFormik({
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
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleDateFromChange = (date) => {
    formik.setFieldValue("dateFrom", date);
  };
  const handleDateToChange = (date) => {
    formik.setFieldValue("dateTo", date);
  };
  return (
    <div>
      <Paper
        elevation={5}
        sx={{
          padding: 5,
        }}
      >
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
              <MobileDatePicker
                inputFormat="dd/MM/yyyy"
                InputProps={{
                  name: "dateFrom",
                  error:
                    formik.touched.dateFrom && Boolean(formik.errors.dateFrom),
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    helperText={
                      formik.touched.dateFrom && formik.errors.dateFrom
                    }
                  />
                )}
                label="Desde"
                value={formik.values.dateFrom}
                onChange={handleDateFromChange}
              />
              <MobileDatePicker
                inputFormat="dd/MM/yyyy"
                InputProps={{
                  name: "dateTo",
                  error: formik.touched.dateTo && Boolean(formik.errors.dateTo),
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    helperText={formik.touched.dateTo && formik.errors.dateTo}
                  />
                )}
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
              >
                Borrar
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Enviar
              </Button>
            </Box>
          </Stack>
        </form>
      </Paper>
    </div>
  );
};

export default ContactForm;
