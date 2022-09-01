import { keyframes, styled, useTheme } from "@mui/material/styles";
import { useStateContext, useStateDispatch } from "@/store/store";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { Link } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NextLink from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";
import { items, MenuItem } from "@/utils/menuItems";

const LinkStyled = styled(Link)(({ theme }) => ({
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

const Menu = () => {
	const { showMenu } = useStateContext();
	const dispatch = useStateDispatch();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	const handleMobileMenu = () => {

		dispatch({
			type: "TOGGLE_MENU",
		});
	};

	const Menu = () => {
		if (isMobile) {
			return (
				<Box component="nav">
					<IconButton
						size="large"
						edge="start"
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
				<Box component="nav" display="flex" gap={2} mt={2}>
					{items.map((link: MenuItem, index: number) => (
						<NextLink key={index} href={link.url} passHref>
							<LinkStyled
								underline="none"
								color="darkBlue"
								variant="labelLargeStrike"
							>
								{link.title}
							</LinkStyled>
						</NextLink>
					))}
				</Box>
			);
		}
	};

	return <Menu />;
};

export default Menu;
