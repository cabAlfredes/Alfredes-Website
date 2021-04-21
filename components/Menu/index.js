import Link from 'next/link';
import styles from './Menu.module.scss';

const Menu = () => (
  <nav className={styles.nav}>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <a
          href="/#about"
          onClick={(e) => {
            e.preventDefault(); // prevent the page to move to top if click more than once the link
            window.location = '/#about';
          }}
        >
          La Cabana
        </a>
      </li>
      <li>
        <a
          href="/#services"
          onClick={(e) => {
            e.preventDefault(); // prevent the page to move to top if click more than once the link
            window.location = '/#services';
          }}
        >
          Servicios
        </a>
      </li>
      <li>
        <Link href="/gallery">
          <a>Fotos</a>
        </Link>
      </li>
      <li>
        <Link href="/map">
          <a>Como Llegar</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a>Contacto</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Menu;
