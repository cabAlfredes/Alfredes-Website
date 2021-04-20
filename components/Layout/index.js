import PropTypes from 'prop-types';
import { useTransition, animated } from 'react-spring';
import { useRouter } from 'next/router';
import Header from '../Header';
import styles from './layout.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    Powered by{' '}
    <a href="https://bmunz.dev" target="_blank" rel="noopener noreferrer">
      bmunz.dev
    </a>
  </footer>
);

function Layout({ children }) {
  const Router = useRouter();
  const transitions = useTransition(Router, {
    unique: true,
    reset: true,
    from: {
      opacity: 0,
      transform: Router.pathname !== '/' && 'translate3d(0,-20px,0)',
    },
    enter: {
      opacity: 1,
      transform: Router.pathname !== '/' && 'translate3d(0, 0px,0)',
    },
    leave: {
      opacity: 0,
      transform: Router.pathname !== '/' && 'translate3d(0,-40px,0)',
    },
  });

  return (
    <div className={styles.container}>
      <Header />
      {transitions((style, item) => (
        <animated.main
          key={item?.key}
          style={style}
          className={styles.mainWrapper}
        >
          {children}
        </animated.main>
      ))}
      <Footer />
    </div>
  );
}

export default Layout;
