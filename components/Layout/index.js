import PropTypes from 'prop-types';
import { useTransition, animated } from 'react-spring';
import { useRouter } from 'next/router';
import Header from '../Header';
import styles from './layout.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    Powered by
    <a href="https://bmunz.dev" target="_blank" rel="noopener noreferrer">
      bmunz.dev
    </a>
  </footer>
);

function Layout({ children }) {
  const Router = useRouter();
  const transitions = useTransition(Router, (router) => router.pathname, {
    unique: false,
    reset: false,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 1 },
  });

  return (
    <div className={styles.container}>
      <Header />
      {transitions.map(({ props: style, key }) => (
        <animated.main key={key} style={style} className={styles.mainWrapper}>
          {children}
        </animated.main>
      ))}

      <Footer />
    </div>
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
};
