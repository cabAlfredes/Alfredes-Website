
import { Container, Grid, styled } from "@mui/material";
import { Spacer, PageBanner } from "@/components/index";

interface CommonProps {
  title: string;
}

interface CenterPanelProps {
	children: React.ReactNode;
}

interface CenterPanelWithBannerProps {
	bannerTitle?: string;
  children: React.ReactNode;
}

interface TwoColumnsProps extends CommonProps {
	leftColumn: React.ReactNode;
  rightColumn: React.ReactNode;
	showBanner?: boolean;
	bannerTitle?: string;
}

const ContainerStyled = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(8),
}));

const MainWrapper = styled("main")(() => ({
  marginTop: "90px",
}));



export const CenterPanelWithBanner = (props: CenterPanelWithBannerProps) => {
  const { children, bannerTitle } = props;

  return (
    <MainWrapper>
      <PageBanner title={bannerTitle} />
      <ContainerStyled maxWidth="lg">{children}</ContainerStyled>
    </MainWrapper>
  );
};

export const CenterPanel = (props: CenterPanelProps) => {
  const { children } = props;

  return (
    <MainWrapper>
      <Container maxWidth="lg">{children}</Container>
    </MainWrapper>
  );
};

export const TwoColumns = (props: TwoColumnsProps) => {
  const { leftColumn, rightColumn, showBanner, bannerTitle } = props;
  return (
    <MainWrapper>
      {showBanner && <PageBanner title={bannerTitle ?? ""} />}
      <Spacer size="md" />
      <Container>
        <Grid container spacing={5}>
          <Grid item sm={12} md={8}>
            {leftColumn}
          </Grid>
          <Grid item sm={12} md={4}>
            {rightColumn}
          </Grid>
        </Grid>
      </Container>
    </MainWrapper>
  );
};

export const FullWidthPanel = ({ children }) => {
  return <MainWrapper>{children}</MainWrapper>;
};

export const PanelWrapper = ({ children, className }) => {
  return <div className={`wrapper-panel ${className}`}>{children}</div>;
};
