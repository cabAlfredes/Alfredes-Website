import { Paper, Box, Alert, List, ListItem, ListItemIcon } from "@mui/material";
import Wifi from "@mui/icons-material/Wifi";
import SolarPower from "@mui/icons-material/SolarPower";
import CountertopsIcon from "@mui/icons-material/Countertops";
import FlatwareIcon from "@mui/icons-material/Flatware";
import KitchenIcon from "@mui/icons-material/Kitchen";
import HotelIcon from "@mui/icons-material/Hotel";
import DeckIcon from "@mui/icons-material/Deck";
import RowingIcon from "@mui/icons-material/Rowing";
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";

const data = [
  {
    text: "Ahora la cabaña esta conectada a internet.",
    icon: <Wifi />,
    new: true,
  },
  {
    text: "Tenemos Paneles solares para poder seguir teniendo luz en caso de  corte.",
    icon: <SolarPower />,
    new: true,
  },
  {
    text: "La Cabaña cuenta con un living cocina-comedor equipada con utensilios y elementos de cocina para 2 ó 4 personas.",
    icon: <FlatwareIcon />,
    new: false,
  },

  {
    text: "Heladera y Cocina convencional con Horno.",
    icon: <KitchenIcon />,
    new: false,
  },

  { text: "Blancos - Sabanas - Toallas", icon: <HotelIcon />, new: false },
  {
    text: "Cama matrimonial con vista al rio y fondo del parque en el piso superior.",
    icon: <Wifi />,
    new: false,
  },
  { text: "Deck con vista al río.", icon: <DeckIcon />, new: false },
  {
    text: "Una piragua a disposición para remar.",
    icon: <RowingIcon />,
    new: false,
  },
  {
    text: "UParrilla y mesa en el jardín.",
    icon: <OutdoorGrillIcon />,
    new: false,
  },
  // { text: "Hamaca paraguaya", icon: <Wifi /> },
];

export const Services = () => (
  <Paper component="section">
    <Box p={5}>
      <List>
        {data.map((item) => {
          return <Item text={item.text} icon={item.icon} highlight={item.new}/>;
        })}
      </List>
    </Box>
  </Paper>
);

const Item = ({ text, icon, highlight }) => {
  return (
    <ListItem sx={{
      color: highlight ? '#12f500': 'unset'
    }} >
      <ListItemIcon sx={{
      color: highlight ? '#12f500': 'unset'
    }}>{icon}</ListItemIcon>
      {text}
    </ListItem>
  );
};
