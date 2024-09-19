import { BorderColor } from "@/consts/borderColor";
import { FontSize } from "@/consts/fontSize";
import { FontWeight } from "@/consts/fontWeight";
import { robotoFlex } from "@/fonts/robotoFlex";

export const formElementBorder = `1px solid ${BorderColor.lightTransparent}`;

export const formElementFontStyles = {
  fontFamily: robotoFlex.fontFamily,
  fontWeight: FontWeight.L,
  fontSize: FontSize.XS,
};

export const formElementStyles = {
  border: formElementBorder,
  borderRadius: "8px",
  ...formElementFontStyles,
};
