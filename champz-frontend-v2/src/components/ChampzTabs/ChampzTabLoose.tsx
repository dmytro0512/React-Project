import { Tab } from "@mui/material";
import { styled } from "@mui/material/styles";
import tab1Border from "@/assets/borders/tab1.svg";
import { titleStyles } from "@/components/Title";
import { FontSize } from "@/consts/fontSize";

export const ChampzTabLoose = styled(Tab)(({ theme }) => ({
  ...titleStyles,
  color: `${titleStyles.color} !important`,
  fontSize: FontSize.M,
  width: "230px",
  padding: theme.spacing(4),
  position: "relative",
  borderWidth: 0,
  textTransform: "none",
  opacity: 0.7,
  "&.Mui-selected": {
    opacity: 1,
    "&::before": {
      opacity: 1,
    },
  },

  "&::before": {
    opacity: 0.4,
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

ChampzTabLoose.defaultProps = {
  ...ChampzTabLoose.defaultProps,
  disableRipple: true,
};
