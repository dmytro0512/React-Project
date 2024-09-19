import { FontWeight } from "@/consts/fontWeight";
import { TextColor } from "@/consts/textColor";
import { Button, styled } from "@mui/material";
import pillButton from "@/assets/backgrounds/buttons/pillButton.svg";

export const PillButton = styled(Button)(({ theme }) => ({
  paddingBlock: theme.spacing(2),
  paddingInline: theme.spacing(4),
  color: TextColor.dark,
  fontWeight: FontWeight.XL,
  textTransform: "uppercase",
  borderImageSource: `url(${pillButton})`,
  borderImageWidth: "8px",
  borderImageOutset: 0,
  borderImageRepeat: "round",
  borderImageSlice: "8 10 fill",
  borderStyle: "solid",
  boxSizing: "border-box",
  backfaceVisibility: "hidden", //Fixes jagged edges on Chrome
  whiteSpace: "nowrap",
  transition: "transform 0.25s ease-in-out",
  "&:hover": {
    backgroundColor: "transparent",
    transform: "translateY(-3px)",
  },
}));
