/** @format */
import Link from 'next/link';
import styles from './MenuItems.module.scss';

const items = [
  <Link href='/'>
    <a className={styles.anchor}>Home</a>
  </Link>,
  <a
    href='/#about'
    className={styles.anchor}
    onClick={e => {
      e.preventDefault(); // prevent the page to move to top if click more than once the link
      window.location = '/#about';
    }}
  >
    La Cabana
  </a>,
  <a
    href='/#services'
    className={styles.anchor}
    onClick={e => {
      e.preventDefault(); // prevent the page to move to top if click more than once the link
      window.location = '/#services';
    }}
  >
    Servicios
  </a>,
  <Link href='/gallery'>
    <a className={styles.anchor}>Fotos</a>
  </Link>,
  <Link href='/map'>
    <a className={styles.anchor}>Como Llegar</a>
  </Link>,
  <Link href='/contact'>
    <a className={styles.anchor}>Contacto</a>
  </Link>,
];

const MenuItems = () => {
  return (
    <div className={styles.MenuItems}>
      <ul>
        {items.map((item, index) => {
          return <li className=''>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default MenuItems;
