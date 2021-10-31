import { useStateContext, useStateDispatch } from '@/store/store';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import NextLink from 'next/link';
import { Link } from '@mui/material';

interface MenuItem {
  urlPath: string
  text: string
}

const items = [
  {
    urlPath: '/',
    text: 'Home'
  }, {
    urlPath: '/about',
    text: 'La Cabana'
  }, {
    urlPath: '/services',
    text: 'Servicios'
  },
  {
    urlPath: '/Fotos',
    text: 'Fotos'
  },
  {
    urlPath: '/como_llegar',
    text: 'Como Llegar'
  },
  {
    urlPath: '/contacto',
    text: 'Contacto'
  }
]

const Menu = () => {
  const { showMenu } = useStateContext();
  const dispatch = useStateDispatch();
  const theme = useTheme()

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleHideMenu = () => {
    dispatch({
      type: 'TOGGLE_MENU',
      payload: false,
    });
  }


  const Menu = () => {
    if (isMobile) { return null }
    return (
      <Box
        display='flex'
        gap={3}
      >
        {items.map((link: MenuItem) => (
          <NextLink href={link.urlPath} passHref>
            <Link underline="none" color='secondary' >{link.text}</Link>
          </NextLink>
        )
        )}
      </Box>)
  }


  return (<Box component='nav'>
    <Menu />
    {isMobile &&
      <IconButton
        size='large'
        edge='start'
        color='inherit'
        aria-label='menu'
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
    }
  </Box>
  )
};


export default Menu;
