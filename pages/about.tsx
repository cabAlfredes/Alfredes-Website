import { About, ContactForm } from "@/components/index";
import { TwoColumns } from "@/components/Layout/templates";

const AboutPage = () => {
	return null
}

export default AboutPage;

AboutPage.getLayout = function getLayout(page: any) {
  
  return (
    <TwoColumns
      title="la cabaña"
      leftColumn={<About />}
      rightColumn={<ContactForm />}
      showBanner
      bannerTitle="Como se construyo la cabaña"
    />
  );
};
