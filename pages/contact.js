import ContactForm from '@/components/ContactForm';
import ContactDetail from '@/components/ContactDetails';
import styles from '@/styles/Contact.module.css';

function contact(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.details}>
        <ContactDetail />
        <ContactDetail />
      </div>
      <div className={styles.form}>
        <ContactForm />
      </div>
    </div>
  );
}

export default contact;
