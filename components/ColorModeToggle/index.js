import { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { ColorModeContext } from '@/store/store';

// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';



function ColorModeToggle() {
  const theme = useTheme();
  console.log('theme >>;)>>',theme);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box
      sx={{
        // display: 'flex',
        // width: '100%',
        // alignItems: 'center',
        // justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 1,
      }}
    >
      {theme.palette.mode} mode
      <IconButton sx={{ ml: 1 }} 
      onClick={colorMode.toggleColorMode} 
      color="inherit">
        {/* {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />} */}
        {theme.palette.mode === 'dark' ? 'dark' : 'light'}
      </IconButton>
    </Box>
  );
}


export default ColorModeToggle