import { styled } from "@mui/material/styles";
import { useStateDispatch } from "@/store/store";

import { Box, IconButton, Link } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import NextLink from "next/link";
import { items, MenuItem } from "@/utils/menuItems";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const LinkStyled = styled(Link)(({ theme }) => ({
  fontFamily: "Neucha, cursive",
  fontWeight: 700,
  letterSpacing: 1.5,
  borderRadius: theme.spacing(4),
  padding: theme.spacing(1),
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  opacity: 0.8,
  transition: "all 0.25s ease-in-out",
  ":hover": {
    backgroundColor: theme.palette.text.secondary,
    color: theme.palette.text.primary,
  },
}));

const Menu = ({ isMobile }: { isMobile: boolean }) => {
  const dispatch = useStateDispatch();

  const handleMobileMenu = () => {
    dispatch({
      type: "TOGGLE_MENU",
    });
  };

  const Menu = () => {
    if (isMobile) {
      return (
        <Box>
          <IconButton
            size="large"
            edge="end"
            color="secondary"
            aria-label="menu"
            onClick={handleMobileMenu}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      );
    } else {
      return (
        <Box>
          <Box component="nav" display="flex" gap={2} mt={2}>
            {items.map((link: MenuItem, index: number) => (
              <NextLink key={index} href={link.url} passHref>
                <LinkStyled
                  underline="none"
                  color="darkBlue"
                  variant="linkBody"
                >
                  {link.title}
                </LinkStyled>
              </NextLink>
            ))}
          </Box>
          <SocialNetworkLinks />
        </Box>
      );
    }
  };

  return <Menu />;
};

export default Menu;

const SocialNetworkLinks = () => {
  return (
    <Box display="flex" flexDirection="row-reverse" >
      <a href="https://www.instagram.com/cab.alfredes/?hl=en" target="_blank" rel="noreferrer">
        <IconButton
          size="large"
          color="success"
          aria-label="Instagram link"
        >
          <InstagramIcon />
        </IconButton>
      </a>
      <a href="https://www.facebook.com/isla.alfredes/" target="_blank" rel="noreferrer">
        <IconButton
          size="large"          
          color="success"
          aria-label="Facebook link"
        >
          <FacebookIcon />
        </IconButton>
      </a>
    </Box>
  );
};
