import Header from "../Header/Header";
import { Box, Typography} from "@mui/material";
import dynamic from "next/dynamic";
// import {Chat} from '../MessengerChat/Chat'
const Chat = dynamic(() => import("../MessengerChat/Chat"), {
  suspense: true,
  ssr: false,
});

const Footer = () => (
  <Box sx={{
    display: 'flex',
    justifyContent: 'center'
  }}>

  <Typography variant='labelMediumBold' color='secondary'>
    Desarrollo de {' '}
    <a href="https://bmunz.dev" target="_blank" rel="noopener noreferrer">
      bmunz.dev
    </a>
  </Typography>
  </Box>
);

function Layout({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      {children}
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
        }}
      >
        <Footer />
        <Chat />
      </Box>
    </Box>
  );
}

export default Layout;
