import { useSpring, animated } from 'react-spring';
import { FaInstagram, FaFacebook, FaWhatsapp, FaGoogle } from 'react-icons/fa'
import styles from './contactDetails.module.scss';
import { Link, Paper, Stack } from '@mui/material';

function ContactDetails(props) {
  const spring = useSpring((
    {
      opacity: 1,
      transform: "translateX(0px)",
      from: {
        opacity: 0,
        transform: "translateX(-300px)",
      },
      delay: 500,
    }
  ))

  return (
    <animated.div className={styles.content} style={spring}>
      <Paper 
      elevation={5}
        sx={{
          padding: 5
        }}
      >
        <Stack 
          spacing={2}
        >
          <Link underline="none" color='default.light' href="mailto:cab.alfredes@gmail.com" title="Envianos un Email">
            <FaGoogle /> cab.alfredes@gmail.com
          </Link>
          <Link underline="none" color='default.light' href="https://wa.me/+5491162785125" title="Contactar por WhatsApp">
            <FaWhatsapp /> 15-1562-1562
          </Link>
          <Link underline="none" color='default.light' href="https://www.facebook.com/isla.alfredes/" alt="Facebook isla.alfredes" title=" Facebook isla.alfredes">
            <FaFacebook /> isla.alfredes
          </Link>
          <Link underline="none" color='default.light' href="https://www.instagram.com/cab.alfredes/" alt="Instagram cab.alfredes" title="Instagram cab.alfredes">
            <FaInstagram /> cab.alfredes
          </Link>        
        </Stack>
      </Paper>
    </animated.div>
  );
}

export default ContactDetails;
