import React from "react";
import About from "@/components/About";
import { CenterPanelWithBanner } from "@/components/Layout/templates";

const AboutPage = () => {
  return <About />;
};

export default AboutPage;

AboutPage.getLayout = function getLayout(page) {
  return (
    <CenterPanelWithBanner bannerTitle="Historia de la cabaña">
      {page}
    </CenterPanelWithBanner>
  );
};
