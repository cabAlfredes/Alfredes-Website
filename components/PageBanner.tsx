import { Typography, Box, styled } from "@mui/material";

const PageBannerWrapper = styled("div")(({ theme }) => {
  return {
    // alignItems: "center",
    display: "flex",
    // margin: "auto",
    // minHeight: 250,
    position: "relative",
    width: "100%",
		backgroundColor: theme.palette.accent1,
		border: '1px solid red',
  };
});

const Title = styled(Typography)(({ theme }) => {
	return {				
    padding: theme.spacing(6),
    color: theme.palette.common.white,
  };
});

const Left = styled(Box)(({ theme }) => ({
	border: '1px solid green',
	flex: 1,
	display: 'flex',
	justifyContent: 'center',	
	alignItems: 'center',
}));

const Right = styled(Box)(({ theme }) => ({
	border: '1px solid yellow',
	flex: 1,
	width: '50%',
	height: 250,
  backgroundColor: theme.palette.accent1,
  backgroundImage: 'url("/assets/banner/cabana.jpeg")',
  backgroundPosition: "50% 45%",
  backgroundSize: "cover",	
	maskImage: 'linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0.7), rgba(0,0,0,0.0))'
}));

interface Props {
  title?: string;
}

export const PageBanner = ({ title }: Props) => {
  return (
    <PageBannerWrapper>
      <Left>{title && <Title variant="labelLargeStrike" color="secondary">{title}</Title>}</Left>
      <Right></Right>
    </PageBannerWrapper>
  );
};
