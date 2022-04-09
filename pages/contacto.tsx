import ContactForm from "@/components/ContactForm";
import ContactDetails from "@/components/ContactDetails";
import { Grid } from "@mui/material";
import { CenterPanelWithBanner } from "@/components/Layout/templates";

const Contact = () => {
  return (
    <>
      <Grid container>
        <Grid container spacing={2} justifyContent="space-around">
          <Grid item xs={12} md={4}>
            <ContactDetails />
          </Grid>
          <Grid item xs={12} md={6}>
            <ContactForm />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;

Contact.getLayout = function getLayout(page) {
  return (
    <CenterPanelWithBanner bannerTitle="Contacto">{page}</CenterPanelWithBanner>
  );
};
