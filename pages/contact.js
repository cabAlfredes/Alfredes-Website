
import ContactForm from '@/components/ContactForm';
import ContactDetail from '@/components/ContactDetails';
import HeroDivider from '@/components/HeroDivider';
import styles from '@/styles/Contact.module.scss';
import { Grid } from '@mui/material';

function contact(props) {
  return (
    <Grid container>
      <HeroDivider />
      <Grid container spacing={0} justifyContent='space-around' mt={-15}>
        <Grid item xs={8} md={4}>
          <ContactDetail />
        </Grid>
        <Grid item xs={12} md={6}>
          <ContactForm />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default contact;
