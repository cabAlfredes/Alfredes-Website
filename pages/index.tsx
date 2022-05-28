import { CenterPanel, FullWidthPanel } from "@/components/Layout/templates";
import { useEffect, useState } from "react";

import About from "@/components/About";
import Head from "next/head";
// import { useSpring, config, animated } from 'react-spring';
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material/styles";

const Home = () => {
	const theme = useTheme();
	console.log(theme.typography);
	return (
		<div>
			<Head>
				<title>Cabaña Alfredes</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero />
			<Typography
				variant="labelMediumDefault"
				component="div"
				color="secondary"
			>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</Typography>
			<Typography
				variant="labelLargeDefault"
				component="div"
				color="secondary.contrastText"
			>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</Typography>
		</div>
	);
};

Home.getLayout = function getLayout(page) {
	return <FullWidthPanel>{page}</FullWidthPanel>;
};

export default Home;
