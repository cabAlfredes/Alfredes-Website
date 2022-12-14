import { FullWidthPanel } from "@/components/Layout/templates";
import Head from "next/head";
import Hero from "@/components/Hero";

const Home = () => {
	return (
		<div>
			<Head>
				<title>Cabaña Alfredes</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero />
		</div>
	);
};

Home.getLayout = function getLayout(page) {
	return <FullWidthPanel>{page}</FullWidthPanel>;
};

export default Home;
