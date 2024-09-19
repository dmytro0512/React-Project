import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export function getCardBorderStyled({
  borderWidth,
  borderUrl,
  selectedBorderUrl,
}: GetCardBorderStyledProps) {
  const borderWidthPx = `${borderWidth}px`;
  const innerRectanglePositionPx = `${borderWidth / 2}px`;

  return styled(Box)(({ theme }) => ({
    borderImageSource: `url(${borderUrl})`,
    borderImageWidth: borderWidthPx,
    borderImageOutset: 0,
    borderImageRepeat: "stretch",
    borderImageSlice: `${borderWidth} fill`,
    borderStyle: "solid",
    padding: theme.spacing(1),
    position: "relative",
    backgroundColor: "transparent",
    zIndex: 0,
    "&::before": {
      position: "absolute",
      top: innerRectanglePositionPx,
      left: innerRectanglePositionPx,
      right: innerRectanglePositionPx,
      bottom: innerRectanglePositionPx,
      content: "''",
      //backgroundColor: "#3A4A20",
      zIndex: -1,
    },
    "&.selected": {
      borderImageSource: `url(${selectedBorderUrl})`,
    },
  }));
}

interface GetCardBorderStyledProps {
  borderWidth: number;
  borderUrl: string;
  selectedBorderUrl?: string;
}
