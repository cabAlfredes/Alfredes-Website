import { Paper, Box, Alert } from "@mui/material";
import { Wifi, SolarPower } from "@mui/icons-material";
import CountertopsIcon from "@mui/icons-material/Countertops";
import FlatwareIcon from "@mui/icons-material/Flatware";
import KitchenIcon from "@mui/icons-material/Kitchen";
import HotelIcon from "@mui/icons-material/Hotel";
import DeckIcon from "@mui/icons-material/Deck";
import RowingIcon from "@mui/icons-material/Rowing";
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";

export const Services = () => (
  <Paper component="section">
    <Box p={5}>
      <ul>
        <li>
          <Alert icon={<Wifi/>}>
            
            Ahora la cabaña esta conectada a internet.
          </Alert>
        </li>
        <li>
          <SolarPower />
          Tenemos Paneles solares para poder seguir teniendo luz en caso de
          corte.
        </li>
        <li>
          La Cabaña cuenta con un living cocina-comedor equipada con utensilios
          y elementos de cocina para 2 ó 4 personas.
        </li>
        <li> Cocina completa con Horno,</li>
        <li>Heladera y Cocina convencional </li>
        <li>Blancos - Sabanas - Toallas</li>
        <li>
          Cama matrimonial con vista al rio y fondo del parque en el piso
          superior
        </li>
        <li>Deck con vista al río</li>
        <li>Una piragua a disposición para remar</li>
        <li>Parrilla y mesa en el jardín</li>
        <li>Hamaca paraguaya</li>
      </ul>
    </Box>
  </Paper>
);
