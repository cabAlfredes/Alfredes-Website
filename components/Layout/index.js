import PropTypes from 'prop-types';
import Header from '../Header';
import style from './layout.module.css';

const Footer = () => (
  <footer className={style.footer}>
    <a
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by
      <img src="/vercel.svg" alt="Vercel Logo" className={style.logo} />
    </a>
  </footer>
);

function Layout({ children }) {
  return (
    <div className={style.container}>
      <Header />
      <main className={style.mainWrapper}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
Layout.propTypes = {
  children: PropTypes.node,
};
