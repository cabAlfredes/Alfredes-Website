import { TwoColumns } from "@/components/Layout/templates";
import { Services, ContactForm } from "@/components/index";

const ServiciosPage = () => {
  
  return null;
};

export default ServiciosPage;

ServiciosPage.getLayout = function getLayout() {  
  return (
    <TwoColumns
      title="Servicios"
      leftColumn={
        <>
          <Services />
        </>
      }
      rightColumn={<ContactForm sticky />}
      showBanner
      bannerTitle="Servicios en la cabaña"
    />
  );
};
