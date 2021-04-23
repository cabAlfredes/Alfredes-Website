import ContactForm from '@/components/ContactForm';
import ContactDetail from '@/components/ContactDetails';
import HeroDivider from '@/components/HeroDivider';
import Image from 'next/image';
import styles from '@/styles/Contact.module.scss';

function contact(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heroImageWrapper} />
      <HeroDivider />
      <div className={styles.contentWrapper}>
        <ContactDetail />
        <ContactForm />
      </div>
    </div>
  );
}

export default contact;
