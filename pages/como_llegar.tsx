import { CenterPanelWithBanner } from "@/components/Layout/templates";
import { HowToArribe } from "@/components/index";
import React from "react";

const ComoLlegar = () => {
	return <HowToArribe />;
};

export default ComoLlegar;

ComoLlegar.getLayout = function getLayout(page) {
	return (
		<CenterPanelWithBanner bannerTitle="Donde esta la Cabaña Alfredes">
			{page}
		</CenterPanelWithBanner>
	);
};
