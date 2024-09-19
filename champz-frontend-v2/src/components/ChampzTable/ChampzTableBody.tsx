import { TableBody } from "@mui/material";
import { styled } from "@mui/material/styles";
import tableRow1 from "@/assets/borders/tableRows/tableRow_1.svg";
import tableRow2 from "@/assets/borders/tableRows/tableRow_2.svg";
import tableRow3 from "@/assets/borders/tableRows/tableRow_3.svg";
import tableRow4 from "@/assets/borders/tableRows/tableRow_4.svg";
import tableRow1_highlight from "@/assets/borders/tableRows/tableRow_1_highlight.svg";
import tableRow2_highlight from "@/assets/borders/tableRows/tableRow_2_highlight.svg";
import tableRow3_highlight from "@/assets/borders/tableRows/tableRow_3_highlight.svg";
import tableRow4_highlight from "@/assets/borders/tableRows/tableRow_4_highlight.svg";
import { BorderColor } from "@/consts/borderColor";

export const ChampzTableBody = styled(TableBody)(() => ({
  tr: {
    position: "relative",
    backgroundColor: "transparent",
    zIndex: 0,

    "&:nth-child(4n+1)::after": {
      borderImageSource: `url(${tableRow1})`,
    },
    "&:nth-child(4n+1).highlight::after": {
      borderImageSource: `url(${tableRow1_highlight})`,
    },
    "&:nth-child(4n+2)::after": {
      borderImageSource: `url(${tableRow2})`,
    },
    "&:nth-child(4n+2).highlight::after": {
      borderImageSource: `url(${tableRow2_highlight})`,
    },
    "&:nth-child(4n+3)::after": {
      borderImageSource: `url(${tableRow3})`,
    },
    "&:nth-child(4n+3).highlight::after": {
      borderImageSource: `url(${tableRow3_highlight})`,
    },
    "&:nth-child(4n+4)::after": {
      borderImageSource: `url(${tableRow4})`,
    },
    "&:nth-child(4n+4).highlight::after": {
      borderImageSource: `url(${tableRow4_highlight})`,
    },
    "&::after": {
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
      filter: `drop-shadow(0px 4px 0px ${BorderColor.dark})`,
    },
  },
}));
