import { styled, Theme } from "@mui/material";

export interface SpacerProps {
  size?: "xl" | "lg" | "md" | "sm" | "xs";
}


const getSize = (
  theme : Theme,
  size : SpacerProps["size"]
) => {
  switch (size) {
    case "xl":
      return theme.spacing(5);
    case "lg":
      return theme.spacing(4);
    case "md":
      return theme.spacing(3);
    case "sm":
      return theme.spacing(2);
    case "xs":
      return theme.spacing(1);
    default:
      return theme.spacing(3);
  }
};

const SpacerStyled = styled("div", {
  shouldForwardProp: (propName) => propName !== "size",
})<SpacerProps>(({ theme, size }) => ({
  height: getSize(theme, size),
}));

export const Spacer = ({ size = "md" }: SpacerProps) => {
  return <SpacerStyled size={size} />;
};
