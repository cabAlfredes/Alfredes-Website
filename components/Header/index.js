import Logo from '@/components/Logo';
import Menu from '@/components/Menu';
import BurgerMenu from '@/components/BurgerMenu';
import { Box } from '@mui/system';
import Link from 'next/link';
import ColorModeToggle from '../ColorModeToggle';
import styles from './header.module.scss';

function Header() {
  return (
    <Box
      component='header'
      className={styles.headerWrapper}
    >
      <div className={`header ${styles.header}`}>
        <Link href="/">
          <a>
            <div className={styles.logo}>
              <Logo />
            </div>
          </a>
        </Link>
        <ColorModeToggle />
        <BurgerMenu />
      </div>
      <Menu />
    </Box>
  );
}

export default Header;
