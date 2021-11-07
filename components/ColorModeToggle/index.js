import { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { ColorModeContext } from '@/store/store';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';



function ColorModeToggle() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Box >
      <IconButton sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit">
        {theme.palette.type === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
}


export default ColorModeToggle