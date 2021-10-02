/** @format */

import Menu from '@/components/Menu';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import ColorModeToggle from '../ColorModeToggle';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import Logo from '/logo.svg';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    height: 120,
    // minHeight: 128,
  },
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  clipPath: ' polygon(0 0, 100% 0, 100% 75%, 0 100%)',
  backgroundColor: theme => theme.palette.primary,
}));

function Header() {
  return (
    <Box component='header' sx={{ flexGrow: 1 }}>
      <StyledAppBar position='fixed' enableColorOnDark>
        <StyledToolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Link href='/'>
            <a>
              <Box
                component='img'
                sx={{
                  // height: 233,
                  width: '100%',
                  maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                  fill: 'green',
                }}
                src='/logo.svg'
              />
            </a>
          </Link>
          <Menu />
          <ColorModeToggle />
        </StyledToolbar>
      </StyledAppBar>
      {/* <div className={`header ${styles.header}`}>
        <BurgerMenu />
      </div> */}
    </Box>
  );
}

export default Header;
