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
	return (
		<div>
			<Head>
				<title>Cabaña Alfredes</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero />
			<Typography variant="labelMediumBold">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</Typography>
		</div>
	);
};

Home.getLayout = function getLayout(page) {
	return <FullWidthPanel title="title test">{page}</FullWidthPanel>;
};

export default Home;
