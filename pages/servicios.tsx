import { TwoColumns } from "@/components/Layout/templates";
import { Services, ContactForm } from "@/components/index";

const ServiciosPage = (props) => {
  console.log(props);
  return null;
};

export default ServiciosPage;

ServiciosPage.getLayout = function getLayout(page: any) {  
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
