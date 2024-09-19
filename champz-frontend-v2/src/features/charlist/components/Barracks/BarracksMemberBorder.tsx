import barracksSelectedBorder from "@/assets/borders/barracks-selected.svg";
import barracksBorder from "@/assets/borders/barracks.svg";
import { getCardBorderStyled } from "@/utils/getCardBorderStyled";

export const BarracksMemberBorder = getCardBorderStyled({
  borderUrl: barracksBorder,
  selectedBorderUrl: barracksSelectedBorder,
  borderWidth: 21,
});
