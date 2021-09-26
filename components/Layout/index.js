import PropTypes from 'prop-types';
import { useTransition, animated } from 'react-spring';
import { useRouter } from 'next/router';
import Header from '../Header';
import styles from './layout.module.scss';
import { Container, Paper } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/system';

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
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}
    >
      <CssBaseline />
      <Header />
      <Container component='main'
        maxWidth="lg"
        sx={{
          mt: 8,
          mb: 2,
          pb: 8,
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[800],

        }}
      >
        {transitions((style, item) => (
          <animated.main
            key={item?.key}
            style={style}
            className={styles.mainWrapper}
          >
            {children}
          </animated.main>
        ))}
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth='lg'>
          <Footer />
        </Container>
      </Box>
    </Box>
  );
}

export default Layout;
