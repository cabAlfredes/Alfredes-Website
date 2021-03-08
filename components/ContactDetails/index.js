import CardWithRotation from '@/components/CardWithRotation';
import styles from './contactDetails.module.css';

function ContactDetails(props) {
  return (
    <div className={styles.wrapper}>
      <CardWithRotation>
        <div className={styles.content}>
          <div className={`${styles.item}`}>cab.alfredes@gmail.com</div>
          <div className={`${styles.item}`}>15-1562-1562</div>
          <div className={`${styles.item}`}>instagram</div>
          <div className={`${styles.item}`}>facebook</div>
        </div>
      </CardWithRotation>
    </div>
  );
}

export default ContactDetails;
