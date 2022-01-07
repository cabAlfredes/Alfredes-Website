import Header from '../Header/Header';
import styles from './layout.module.scss';
import { Box } from '@mui/system';

const Footer = () => (
  <div className={styles.footer}>
    Powered by{' '}
    <a href="https://bmunz.dev" target="_blank" rel="noopener noreferrer">
      bmunz.dev
    </a>
  </div>
);

function Layout({ children }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}
    >
      <Header />
      {children}
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
        }}
      >
        <Footer />

      </Box>
    </Box>
  );
}

export default Layout;
