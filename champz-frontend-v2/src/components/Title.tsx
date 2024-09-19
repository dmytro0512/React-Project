/* eslint-disable react-refresh/only-export-components */
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { aladin } from "@/fonts/aladin";
import { FontSize } from "@/consts/fontSize";
import { TextColor } from "@/consts/textColor";
import { TextShadow } from "@/consts/textShadow";
import { FontWeight } from "@/consts/fontWeight";
import { BorderColor } from "@/consts/borderColor";

export const titleStyles = {
  fontFamily: aladin.fontFamily,
  color: `${TextColor.light}`,
  fontSize: FontSize.S,
  lineHeight: `${FontSize.S}px`,
  fontWeight: FontWeight.M,
  textShadow: TextShadow.dark,
  WebkitTextStroke: `2px ${BorderColor.dark}`,
  WebkitTextFillColor: `${TextColor.light}`,
  paintOrder: `stroke fill`,
};

export const Title = styled(Box)(() => ({ ...titleStyles }));
