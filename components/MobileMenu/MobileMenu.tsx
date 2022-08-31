/** @format */

import * as React from 'react';
import { useStateContext, useStateDispatch } from '@/store/store';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { items, MenuItem } from '@/utils/menuItems';

const MobileMenu = () => {
  const { showMenu } = useStateContext();
  const dispatch = useStateDispatch();


  const toggleDrawer = () => {
    dispatch({
      type: 'TOGGLE_MENU'
    });
  };


  // console.log(items)

  return (
    <div>
      <Drawer
        // anchor={anchor}
        open={showMenu}
        onClose={toggleDrawer}
      >
        <Box
          sx={{ width: 250 }}
          role='presentation'
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List>
            {items.map((item: MenuItem, index) => (
              <ListItem button key={index}>
                <ListItemIcon>
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
}

export default MobileMenu