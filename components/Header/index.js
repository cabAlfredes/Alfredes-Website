import Logo from '@/components/Logo';
import style from './header.module.css';

function Header(params) {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Logo />
      </div>
      <nav>nav nav</nav>
    </header>
  );
}

export default Header;
