/** @format */
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import ColorModeToggle from '../ColorModeToggle';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@/components/Menu/index';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  paddingTop: theme.spacing(1),
  position: 'relative',
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    height: 120,
  },
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  clipPath: ' polygon(0 0, 100% 0, 100% 75%, 0 100%)',
}));

function Header() {
  return (
    <Box component='header' sx={{ flexGrow: 1 }}>
      <StyledAppBar position='fixed' enableColorOnDark>
        <StyledToolbar>
          <Box
            display='flex'
            height='100%'
            maxWidth='100pxs'
          >
            <Link href='/'>
              <a>
                <Box
                  component='img'
                  sx={{
                    width: '250px',
                    fill: 'green',
                  }}
                  src='/logo.svg'
                />
              </a>
            </Link>
            <ColorModeToggle />
          </Box>
          <Menu />
        </StyledToolbar>
      </StyledAppBar>
      {/* <div className={`header ${styles.header}`}>
        <BurgerMenu />
      </div> */}
    </Box >
  );
}

export default Header;
