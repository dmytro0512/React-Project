import { BorderColor } from "@/consts/borderColor";
import { FontSize } from "@/consts/fontSize";
import { FontWeight } from "@/consts/fontWeight";
import { TextColor } from "@/consts/textColor";
import { TextShadow } from "@/consts/textShadow";
import { aladin } from "@/fonts/aladin";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Heading = styled(Box)(({ theme }) => ({
  fontFamily: aladin.fontFamily,
  fontSize: FontSize.M,
  fontWeight: FontWeight.M,
  color: TextColor.lightGreen,
  textShadow: TextShadow.light,
  WebkitTextStroke: `0.5px ${BorderColor.light}`,
  padding: `${theme.spacing(1)} 0`,
}));

export const HeadingHuge = styled(Heading)(({ theme }) => ({
  fontSize: FontSize.XL,
}));

export const ContentHeading = styled(Box)(({ theme }) => ({
  fontFamily: aladin.fontFamily,
  fontSize: FontSize.L,
  fontWeight: FontWeight.M,
  color: TextColor.heading,
  textShadow: TextShadow.heading,
  WebkitTextStroke: `2px ${BorderColor.heading}`,
  paintOrder: `stroke fill`,
  padding: `${theme.spacing(1)} 0`,
}));

export const ActionCardHeading = styled(Box)(() => ({
  fontFamily: aladin.fontFamily,
  fontSize: FontSize.L,
  fontWeight: FontWeight.M,
  WebkitTextFillColor: TextColor.dark,
  WebkitTextStroke: `4px ${TextColor.dark2}`,
  paintOrder: `stroke fill`,
}));
