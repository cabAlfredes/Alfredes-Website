import Logo from '@/components/Logo';
import Menu from '@/components/Menu';
import BurgerMenu from '@/components/BurgerMenu';
import Link from 'next/link';
import ColorModeToggle from '../ColorModeToggle';
import styles from './header.module.scss';

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
        <ColorModeToggle/>
        <BurgerMenu />
      </header>
      <Menu />
    </div>
  );
}

export default Header;
