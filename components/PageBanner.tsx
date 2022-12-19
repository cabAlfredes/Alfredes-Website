import { Typography, Box, styled } from "@mui/material";

const PageBannerWrapper = styled("div")(({ theme }) => {
  return {
    backgroundImage: 'url("/assets/banner/cabana.jpeg")',
    // alignItems: "center",
    display: "flex",
    // margin: "auto",
    minHeight: 250,
    position: "relative",
    width: "100%",
    // backgroundColor: theme.palette.neutral.dark,
    backgroundColor: theme.palette.accent1,
    backgroundPosition: "50% 45%",
    backgroundSize: "cover",
    // maskImage:
      // "linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0.9), rgba(0,0,0,0.8), rgba(0,0,0,0.8), rgba(0,0,0,0.0))",
  };
});

const Title = styled(Typography)(() => {
  return {
    // padding: theme.spacing(6),
    // color: theme.palette.common.white,
    fontSize: "36px",
    textAlign: "center",
    marginLeft: 16,
  };
});

const Left = styled(Box)(() => ({
  // flex: 1,
  width: '100%',
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  // backgroundColor: "linear-gradient(90deg, #3f87a6, #ebf8e1, #f69d3c)",
  background: "linear-gradient(91deg, #6478ca 5%, #497488e3 37%, rgba(0,0,0,0) 66%,rgba(0,0,0,0));"

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
