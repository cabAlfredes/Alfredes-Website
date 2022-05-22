import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
// import { useSpring, config, animated } from 'react-spring';
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import { CenterPanel, FullWidthPanel } from "@/components/Layout/templates";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";

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
