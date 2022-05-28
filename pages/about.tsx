import About from "@/components/About";
import { CenterPanelWithBanner } from "@/components/Layout/templates";
import React from "react";

const AboutPage = () => {
	return <About />;
};

export default AboutPage;

AboutPage.getLayout = function getLayout(page) {
	return (
		<CenterPanelWithBanner bannerTitle="LA CABAÑA">
			{page}
		</CenterPanelWithBanner>
	);
};
