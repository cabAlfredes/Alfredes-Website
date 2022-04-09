import { Container, Paper } from "@mui/material";
import Box from "@mui/material/Box";
import PageBanner from "@/components/PageBanner";

interface CenterPanelProps {
  children: React.ReactNode;
}

interface CenterPanelWithBanner {
  bannerTitle: string;
  children: React.ReactNode;
}

export const CenterPanelWithBanner = (props: CenterPanelWithBanner) => {
  const { children, bannerTitle } = props;

  return (
    <Box
      component="main"
      sx={{
        marginTop: "90px",
      }}
    >
      <PageBanner title={bannerTitle} />
      <Container maxWidth="lg">{children}</Container>
    </Box>
  );
};

export const CenterPanel = (props: CenterPanelProps) => {
  const { children } = props;

  return (
    <Box
      component="main"
      sx={{
        marginTop: "150px",
      }}
    >
      <Container maxWidth="lg">{children}</Container>
    </Box>
  );
};

export const FullWidthPanel = ({ children }) => {
  return (
    <Box
      component="main"
      sx={{
        marginTop: "90px",
      }}
    >
      {children}
    </Box>
  );
};

export const PanelWrapper = ({ children, className }) => {
  return <div className={`wrapper-panel ${className}`}>{children}</div>;
};
