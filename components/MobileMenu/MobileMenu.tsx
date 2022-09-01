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
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List>
            {items.map((item: MenuItem, index) => (
              <NextLink href={item.url} passHref>
                <ListItemButton component={Link} key={index}>
                  {/* <Link> */}
                  {/* <ListItemIcon> */}
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                  {/* </ListItemIcon> */}
                  <ListItemText>{item.title}</ListItemText>
                  {/* </Link> */}
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
