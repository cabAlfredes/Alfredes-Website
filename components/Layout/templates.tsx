import { Box, Container, styled } from "@mui/material";

import { PageBanner } from "@/components/index";

const ContainerStyled = styled(Container)(({ theme }) => ({
	marginTop: theme.spacing(8),
}));

interface CommonProps {
	title: string;
}

interface CenterPanelProps {
	children: React.ReactNode;
}

interface CenterPanelWithBanner {
	bannerTitle?: string;
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
			<ContainerStyled maxWidth="lg">{children}</ContainerStyled>
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
