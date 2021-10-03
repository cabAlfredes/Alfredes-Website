/** @format */
import { useState } from 'react';
import Menu from '@/components/MenuItems';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import Link from 'next/link';
import ColorModeToggle from '../ColorModeToggle';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

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
  backgroundColor: theme.palette.palette.primary.main,
}));

function Header() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggle = () => {
    setOpenDrawer(prev => !prev);
  };

  const list = () => (
    <Box
      sx={{ width: '100%' }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box component='header' sx={{ flexGrow: 1 }}>
      <StyledAppBar position='fixed' enableColorOnDark>
        <StyledToolbar>
          <Drawer
            anchor='right'
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
          >
            {list}
          </Drawer>

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
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
            onClick={toggle}
          >
            <MenuIcon />
          </IconButton>
          <ColorModeToggle />
        </StyledToolbar>
      </StyledAppBar>
    </Box>
  );
}

export default Header;
