/* eslint-disable import/no-unresolved */
import Logo from '@/components/Logo';
import Link from 'next/link';
import styles from './header.module.css';

function Header() {
  return (
    <div className={styles.headerWrapper}>
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
      </header>
    </div>
  );
}

export default Header;
