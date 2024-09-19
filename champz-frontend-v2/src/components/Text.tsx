// Load MUI components
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

// Load Constants
import { FontSize } from "@/consts/fontSize";
import { TextColor } from "@/consts/textColor";
import { FontWeight } from "@/consts/fontWeight";
import { robotoFlex } from "@/fonts/robotoFlex";
import { TextShadow } from "@/consts/textShadow";
import { FontFamily } from "@/consts/fontFamily";

// Load Assets
import bgPositive from "@/assets/backgrounds/texts/positive.svg";
import bgNegative from "@/assets/backgrounds/texts/negative.svg";
import bgHighlight from "@/assets/backgrounds/texts/highlight.svg";
import { aladin } from "@/fonts/aladin";
import { BorderColor } from "@/consts/borderColor";

export const RegularText = styled(Box)(() => ({
  fontFamily: robotoFlex.fontFamily,
  color: `${TextColor.light2}`,
  fontSize: FontSize.XS,
  fontWeight: FontWeight.L,
}));
export const SmallText = styled(RegularText)(() => ({
  fontSize: FontSize.S,
}));
export const TinyText = styled(RegularText)(() => ({
  fontSize: FontSize.XS,
}));

export const DarkText = styled(RegularText)(() => ({
  color: `${TextColor.dark2}`,
}));
export const LightText = styled(RegularText)(() => ({
  fontWeight: FontWeight.M,
}));

export const PositiveText = styled(RegularText)(() => ({
  display: `inline`,
  color: `${TextColor.dark}`,
  position: "relative",
  zIndex: 0,
  "&::after": {
    content: "''",
    inset: "-0.5em ",
    position: "absolute",
    borderImageSource: `url(${bgPositive})`,
    borderImageWidth: "8px",
    borderImageOutset: 0,
    borderImageRepeat: "round",
    borderImageSlice: "16 12 16 12 fill",
    borderStyle: "solid",
    zIndex: -1,
    display: "block",
    pointerEvents: "none",
  },
}));

export const NegativeText = styled(RegularText)(() => ({
  display: `inline`,
  color: `${TextColor.dark}`,
  position: "relative",
  zIndex: 0,
  "&::after": {
    content: "''",
    inset: "-0.5em ",
    position: "absolute",
    borderImageSource: `url(${bgNegative})`,
    borderImageWidth: "8px",
    borderImageOutset: 0,
    borderImageRepeat: "round",
    borderImageSlice: "16 12 16 12 fill",
    borderStyle: "solid",
    zIndex: -1,
    display: "block",
    pointerEvents: "none",
  },
}));

export const HighlightText = styled(RegularText)(() => ({
  display: `inline`,
  color: `${TextColor.dark}`,
  position: "relative",
  zIndex: 0,
  "&::after": {
    content: "''",
    inset: "-0.5em ",
    position: "absolute",
    borderImageSource: `url(${bgHighlight})`,
    borderImageWidth: "8px",
    borderImageOutset: 0,
    borderImageRepeat: "round",
    borderImageSlice: "16 12 16 12 fill",
    borderStyle: "solid",
    zIndex: -1,
    display: "block",
    pointerEvents: "none",
  },
}));

export const EmphasizedText = styled(RegularText)(() => ({
  color: `${TextColor.highlight}`,
  fontWeight: FontWeight.L,
  display: "inline",
}));

export const StatBoxValue = styled(RegularText)(() => ({
  fontFamily: aladin.fontFamily,
  color: TextColor.heading2,
  fontSize: FontSize.XL,
  WebkitTextFillColor: TextColor.heading2,
  WebkitTextStroke: `4px ${BorderColor.heading2}`,
  paintOrder: `stroke fill`,
}));

export const StatBoxTitle = styled(RegularText)(() => ({
  fontFamily: aladin.fontFamily,
  color: TextColor.light2,
  fontSize: FontSize.S,
  WebkitTextStroke: `2px ${BorderColor.heading}`,
  paintOrder: `stroke fill`,
  textShadow: `0 2px 0 ${BorderColor.heading}`,
}));

export const ItemTitle = styled(RegularText)(() => ({
  fontFamily: aladin.fontFamily,
  color: TextColor.itemTitle,
  fontSize: FontSize.S,
  WebkitTextStroke: `2px ${BorderColor.itemTitle}`,
  paintOrder: `stroke fill`,
  textShadow: `0 2px 0 ${BorderColor.itemTitle}`,
}));

export const BlogTitleText = styled(Box)(({ theme }) => ({
  margin: 0,
  fontWeight: FontWeight.M,
  fontSize: FontSize.XL,
  lineHeight: `${FontSize.L}px`,
  color: TextColor.light,
  textShadow: TextShadow.blog,
  fontFamily: FontFamily.aladin,

  [theme.breakpoints.down("lg")]: {
    fontSize: FontSize.L,
    lineHeight: `${FontSize.M}px`,
  },

  [theme.breakpoints.down("md")]: {
    fontSize: FontSize.M,
    lineHeight: `${FontSize.S}px`,
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: FontSize.S,
    lineHeight: `${FontSize.XS}px`,
  },
}));

export const BlogContentText = styled(Box)(({ theme }) => ({
  fontWeight: FontWeight.M,
  fontSize: FontSize.L,
  color: TextColor.lightGreen,
  fontFamily: FontFamily.aladin,
  textShadow: TextShadow.ligh2,

  [theme.breakpoints.down("lg")]: {
    fontSize: FontSize.M,
  },

  [theme.breakpoints.down("md")]: {
    fontSize: FontSize.XS,
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: FontSize.XS2,
  },
}));

export const TabTitleText = styled(Box)(({ theme }) => ({
  fontWeight: FontWeight.M,
  fontSize: FontSize.M,
  color: TextColor.light,
  fontFamily: FontFamily.aladin,
  textShadow: TextShadow.header,

  [theme.breakpoints.down("lg")]: {
    fontSize: FontSize.S,
  },

  [theme.breakpoints.down("md")]: {
    fontSize: FontSize.XS,
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: FontSize.XS2,
  },
}));
