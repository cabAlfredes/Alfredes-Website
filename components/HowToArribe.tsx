import { Box, Paper, Typography, useTheme } from "@mui/material";

import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Spacer } from "./Spacer";

export const HowToArribe = () => {
  const theme = useTheme();
  const { typography } = theme;
  const types = Object.keys(typography);
  console.log(types);

  return (
    <section>
      <Grid2 container spacing={2}>
        <Grid2 sm={12} md={6}>
          <Paper>
            <Box p={2}>
              <Typography variant="h4">¿COMO LLEGAR?</Typography>
              <Typography variant="labelMediumBold">
                (SOLO CON RESERVA PREVIA)
              </Typography>
              <Spacer />
              <Typography>
                En lanchas colectivas de la LINEA INTERISLEÑA salen de la
                Estación Fluvial de Tigre ubicada en la Av. Mitre 305.
              </Typography>
              <Typography>
                Hay 2 principales opciones que varían según el dia de la semana
                y época del año.
              </Typography>
              <Typography>
                En la boletaría de la linea interisleña indicar que se va al
                Arroyo Fredes y Estudiantes, Muelle el Arroyon de Gomez. <br/>
								 En la boletaría de la linea interisleña decir que se va a la cabaña
                ALFREDES en el Arroyo Fredes indicando que se baja en el muelle
                EL MOSQUITO en el arroyo Fredes. 
								<br/>
								Preguntar en la rampa en que
                lancha debes subir, se recomienda estar con anticipación ya que
                suele haber bastante gente.
								<br/>
								 Siempre Consultar con anticipación
                en la cabaña que horario es el mas conveniente.
              </Typography>
            </Box>
          </Paper>
          <Spacer />
          <Paper>
            <Box p={2}>
              <Typography>Coordenadas de la Cabaña</Typography>
              <Typography>para llegar en tu propia lancha.</Typography>
              <Typography>
                G M S.s Lat: 34º 13' 34.5'' S /Long: 58º 33' 25.3'' O G M.m Lat:
                34º 13.574'S /Long: 58º 33.421' O
              </Typography>
            </Box>
          </Paper>
        </Grid2>
        <Grid2 sm={2} md={6}>
          <Box
            sx={{
              width: "100%",
              height: 500,
            }}
          >
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1tFXr40dZr1XFxpD4GW9AklEdEK0&ehbc=2E312F"
              width="100%"
              height="100%"
            ></iframe>
          </Box>
        </Grid2>
      </Grid2>
    </section>
  );
};

// {types.map((type) => {
// 	console.log(type);
// 	return (
// 		<div>
// 			<Typography color="secondary" variant={type}>{type}</Typography>
// 		</div>
// 	);
// })}
