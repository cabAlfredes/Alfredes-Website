import PropTypes from 'prop-types';
import Header from '../Header';
import styles from './layout.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <a href="https://bmunz.dev" target="_blank" rel="noopener noreferrer">
      Powered by bmunz.dev
    </a>
  </footer>
);

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.mainWrapper}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
Layout.propTypes = {
  children: PropTypes.node,
};
