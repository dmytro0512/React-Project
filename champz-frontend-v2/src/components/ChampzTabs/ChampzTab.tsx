import { Tab, TabProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import tab_border_1 from "@/assets/borders/tabs/tab_border_1.svg";
import tab_border_2 from "@/assets/borders/tabs/tab_border_2.svg";
import tabBg_inactive_1 from "@/assets/backgrounds/tabs/tabBg_inactive_1.svg";
import tabBg_inactive_2 from "@/assets/backgrounds/tabs/tabBg_inactive_2.svg";
import tabBg_active_1 from "@/assets/backgrounds/tabs/tabBg_active_1.svg";
import tabBg_active_2 from "@/assets/backgrounds/tabs/tabBg_active_2.svg";
import { titleStyles } from "@/components/Title";
import { FontSize } from "@/consts/fontSize";

export const ChampzTab = styled(Tab)(({ theme }) => ({
  ...titleStyles,
  color: `${titleStyles.color} !important`,
  fontSize: FontSize.M,
  padding: `${theme.spacing(3.5)} ${theme.spacing(6)} ${theme.spacing(3)}`,
  borderImageWidth: "8px",
  borderImageOutset: "1px",
  borderImageRepeat: "stretch",
  borderImageSlice: "8 fill",
  position: "relative",
  textTransform: "none",
  overflow: "visible",
  "&:nth-child(odd)": {
    borderImageSource: `url(${tabBg_inactive_1})`,
  },
  "&:nth-child(even)": {
    borderImageSource: `url(${tabBg_inactive_2})`,
  },
  "&.Mui-selected": {
    "&:nth-child(odd)": {
      borderImageSource: `url(${tabBg_active_1})`,
      "&::before": {
        borderImageSource: `url(${tab_border_1})`,
      },
    },
    "&:nth-child(even)": {
      borderImageSource: `url(${tabBg_active_2})`,
      "&::before": {
        borderImageSource: `url(${tab_border_2})`,
      },
    },
    "&::before": {
      position: "absolute",
      borderImageWidth: "8px 0 0 0",
      borderImageOutset: 0,
      borderImageRepeat: "stretch",
      borderImageSlice: "8 0 8 0",
      content: '""',
      height: "8px",
      left: 0,
      right: 0,
      top: "0px",
    },
  },
  "&::after": {
    position: "absolute",
    content: '""',
    height: "8px",
    left: 0,
    right: 0,
    bottom: "-8px",
    backgroundColor: "red",
  },

  [theme.breakpoints.down("md")]: {
    padding: `${theme.spacing(2.75)} ${theme.spacing(5)} ${theme.spacing(2.5)}`,
  },
  [theme.breakpoints.down("sm")]: {
    padding: `${theme.spacing(2)} ${theme.spacing(4)} ${theme.spacing(1.75)}`,
  },
}));

ChampzTab.defaultProps = { ...ChampzTab.defaultProps, disableRipple: true };
