/** @format */

import * as React from "react";
import { useStateContext, useStateDispatch } from "@/store/store";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Link,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { items, MenuItem } from "@/utils/menuItems";
import NextLink from "next/link";

const MobileMenu = () => {
  const { showMenu } = useStateContext();
  const dispatch = useStateDispatch();

  const toggleDrawer = () => {
    dispatch({
      type: "TOGGLE_MENU",
    });
  };


  return (
    <div>
      <Drawer
        anchor='left'
        open={showMenu}
        onClose={toggleDrawer}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List>
            {items.map((item: MenuItem, index) => (
              <NextLink href={item.url} passHref key={index}>
                <ListItemButton >
                  {/* <Link> */}
                  {/* <ListItemIcon> */}
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                  {/* </ListItemIcon> */}
                  {/* </Link> */}
                  <ListItemText>{item.title}</ListItemText>
                </ListItemButton>
              </NextLink>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default MobileMenu;
