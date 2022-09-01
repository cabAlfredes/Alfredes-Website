import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { useStateDispatch } from "@/store/store";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

function ColorModeToggle() {
	const theme = useTheme();
	const dispatch = useStateDispatch();
	console.log(theme.palette.mode);

	const handleClick = () => {
		dispatch({
			type: "TOGGLE_DARK_MODE",
		});
	};

	return (
		<Box>
			<IconButton sx={{ ml: 1 }} onClick={handleClick} color='secondary'>
				{theme.palette.type === "dark" ? (
					<Brightness7Icon />
				) : (
					<Brightness4Icon />
				)}
			</IconButton>
		</Box>
	);
}

export default ColorModeToggle;
