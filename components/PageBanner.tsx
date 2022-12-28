import { Typography, Box, styled } from "@mui/material";

const PageBannerWrapper = styled("div")(({ theme }) => {
  return {
    backgroundImage: 'url("/assets/banner/cabana.jpeg")',
    display: "flex",
    minHeight: 250,
    position: "relative",
    width: "100%",
    backgroundColor: theme.palette.accent1,
    backgroundPosition: "50% 45%",
    backgroundSize: "cover",
  };
});

const Title = styled(Typography)(() => {
  return {
    fontSize: "36px",
    textAlign: "center",
    marginLeft: 16,
  };
});

const Left = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  background:
    "linear-gradient(90deg, #6478ca 0%, #497488e3 27%, rgba(0,0,0,0) 50%, rgba(0,0,0,0));",
  [theme.breakpoints.down("sm")]: {
    background:
      "linear-gradient(90deg, #6478ca 0%, #497488e3 17%, rgba(0,0,0,0) 50%, rgba(0,0,0,0));",
  },
}));

interface Props {
  title?: string;
}

export const PageBanner = ({ title }: Props) => {
  return (
    <PageBannerWrapper>
      <Left>
        {title && (
          <Title variant="labelLargeBold" color="textPrimary">
            {title}
          </Title>
        )}
      </Left>
    </PageBannerWrapper>
  );
};
