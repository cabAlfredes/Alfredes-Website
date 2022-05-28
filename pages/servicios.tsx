import { CenterPanelWithBanner } from "@/components/Layout/templates";
import React from "react";
import { Services } from "@/components/index";

const ServiciosPage = () => {
	return (
		<div>
			<Services />
		</div>
	);
};

export default ServiciosPage;

ServiciosPage.getLayout = function getLayout(page) {
	return (
		<CenterPanelWithBanner bannerTitle="SERVICIOS">
			{page}
		</CenterPanelWithBanner>
	);
};
