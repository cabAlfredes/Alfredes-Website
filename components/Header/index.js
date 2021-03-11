/* eslint-disable import/no-unresolved */
import Logo from '@/components/Logo';
import Link from 'next/link';
import styles from './header.module.css';

function Header() {
  return (
    <header className={`header ${styles.header}`}>
      <Link href="/">
        <a>
          <div className={styles.logo}>
            <Logo />
          </div>
        </a>
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/#about">
              <a>La Cabana</a>
            </Link>
          </li>
          <li>
            <Link href="/#services">
              <a>Servicios</a>
            </Link>
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
    </header>
  );
}

export default Header;
