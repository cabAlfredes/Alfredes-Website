import { FullWidthPanel } from "@/components/Layout/templates";
import Head from "next/head";
// import Hero from "@/components/VideoHero";
import { Box } from "@mui/material";
import Image from "next/legacy/image";
import { ContactForm } from "../components";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Cabaña Alfredes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        sx={{
          position: "relative",
          height: "calc(100vh - 100px)",
          display: "block",
        }}
      >
        <Image
          src="/assets/hero_xl.jpg"
          layout="fill"
          objectFit="cover"
          // width="1440px"
          // height="1080px"
          priority
          alt="hero imagen de la cabaña"
          objectPosition='left'
        />

        <Box
          sx={(theme) => ({
            position: "fixed",
            top: 120,
            right: 0,
            width: "100%",
            maxWidth: 400,

            [theme.breakpoints.down("md")]: {
              display: "none",
            },
          })}
        >
          <ContactForm sticky />
        </Box>
      </Box>
      <Box
          sx={(theme) => ({            

            [theme.breakpoints.up("md")]: {
              display: "none",
            },
          })}
        >
          <ContactForm sticky />
        </Box>
    </div>
  );
};

Home.getLayout = function getLayout(page) {
  return <FullWidthPanel>{page}</FullWidthPanel>;
};

export default Home;
