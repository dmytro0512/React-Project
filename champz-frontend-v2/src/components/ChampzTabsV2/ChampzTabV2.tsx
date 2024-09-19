import { Tab } from "@mui/material";
import { styled } from "@mui/material/styles";
import tab1Border from "@/assets/borders/tab1.svg";
import { titleStyles } from "@/components/Title";
import { FontSize } from "@/consts/fontSize";

export const ChampzTabV2 = styled(Tab)(({ theme }) => ({
  ...titleStyles,
  color: `${titleStyles.color} !important`,
  fontSize: FontSize.M,
  width: "230px",
  padding: theme.spacing(4),
  position: "relative",
  borderWidth: 0,
  textTransform: "none",

  "&::before": {
    position: "absolute",
    borderImageSource: `url(${tab1Border})`,
    borderImageWidth: "0 0 8px 0",
    borderImageOutset: 0,
    borderImageRepeat: "stretch",
    borderImageSlice: "8 0 8 0",
    content: '""',
    height: "8px",
    left: 0,
    right: 0,
    bottom: "1px",
  },
}));

ChampzTabV2.defaultProps = { ...ChampzTabV2.defaultProps, disableRipple: true };
