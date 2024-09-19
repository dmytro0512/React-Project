import { getCardBorderStyled } from "@/utils/getCardBorderStyled";
import commonBorder from "@/assets/borders/equipment/common.svg";
import legendaryBorder from "@/assets/borders/equipment/legendary.svg";
import slotBorder from "@/assets/borders/equipment/slot.svg";

const equipmentStyles = {
  borderWidth: 21,
};

export const CommonContainer = getCardBorderStyled({
  borderUrl: commonBorder,
  ...equipmentStyles,
});

export const LegendaryContainer = getCardBorderStyled({
  borderUrl: legendaryBorder,
  ...equipmentStyles,
});

export const EmptySlotContainer = getCardBorderStyled({
  borderUrl: slotBorder,
  ...equipmentStyles,
});
