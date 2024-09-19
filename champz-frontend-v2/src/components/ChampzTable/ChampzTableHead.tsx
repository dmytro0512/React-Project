import { TableHead } from "@mui/material";
import { styled } from "@mui/material/styles";
import { titleStyles } from "../Title";
import tableRow_head from "@/assets/borders/tableRows/tableRow_head.svg";

export const ChampzTableHead = styled(TableHead)(() => ({
  tr: {
    position: "relative",
    backgroundColor: "transparent",
    zIndex: 0,
    "&::after": {
      borderImageSource: `url(${tableRow_head})`,
      content: "''",
      inset: "0",
      position: "absolute",
      borderImageWidth: "16px",
      borderImageOutset: 0,
      borderImageRepeat: "stretch",
      borderImageSlice: "16 fill",
      borderStyle: "solid",
      backgroundColor: "transparent",
      zIndex: -1,
      display: "block",
      pointerEvents: "none",
    },
    th: { ...titleStyles },
  },
}));
