import { Typography, useTheme } from "@mui/material";

import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";

export const HowToArribe = () => {
	const theme = useTheme();
	const { typography } = theme;
	const types = Object.keys(typography);
	console.log(types);

	return (
		<section>
			{types.map((type) => {
				console.log(type);
				return (
					<div>
						<Typography color="secondary" variant={type}>{type}</Typography>
					</div>
				);
			})}
		</section>
	);
};
