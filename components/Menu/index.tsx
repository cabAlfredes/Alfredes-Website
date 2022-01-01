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
    urlPath: '/fotos',
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

const Menu = (props) => {
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
		if (isMobile) {
			return (<Box component='nav'>
				<IconButton
					size='large'
					edge='start'
					color='inherit'
					aria-label='menu'
				>
					<MenuIcon />
				</IconButton>
			</Box>
			)
		} else {
			return (
				<Box
					component='nav'
					display='flex'
					gap={3}
					mt={2}
				>
        {items.map((link: MenuItem) => (
					<NextLink href={link.urlPath} passHref>
						<Link underline="none" color='secondary' variant='body1' >{link.text}</Link>
          </NextLink>
        )
        )}
      </Box>)
		}
  }


	return (
		<Menu />
  )
};


export default Menu;
