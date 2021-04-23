import { useSpring, animated } from 'react-spring';
import { FaInstagram, FaFacebook, FaWhatsapp, FaGoogle } from 'react-icons/fa'
import styles from './contactDetails.module.scss';

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
      <div className={`${styles.item} ${styles.icon}`}>
        <a href="mailto:cab.alfredes@gmail.com" title="Envianos un Email">
          <FaGoogle /> cab.alfredes@gmail.com
          </a>
      </div>
      {/* <div className={`${styles.item} ${styles.icon}`}>
          <a href="tel:15-1562-1562" title="Teléfono Fijo">
            <FaPhone/>15-1562-1562
          </a>
        </div> */}
      <div className={`${styles.item} ${styles.icon}`}>
        <a href="https://wa.me/+5491162785125" title="Contactar por WhatsApp">
          <FaWhatsapp /> 15-1562-1562
          </a>
      </div>
      <div className={`${styles.item} ${styles.icon}`}>
        <a href="https://www.facebook.com/isla.alfredes/" alt="Facebook isla.alfredes" title=" Facebook isla.alfredes">
          <FaFacebook /> isla.alfredes
          </a>
      </div>
      <div className={`${styles.item} ${styles.icon}`}>
        <a href="https://www.instagram.com/cab.alfredes/" alt="Instagram cab.alfredes" title="Instagram cab.alfredes">
          <FaInstagram /> cab.alfredes
          </a>
      </div>
    </animated.div>
  );
}

export default ContactDetails;
