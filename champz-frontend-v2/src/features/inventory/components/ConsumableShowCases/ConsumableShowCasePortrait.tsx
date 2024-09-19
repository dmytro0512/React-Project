import { Box } from "@mui/material";
import { Consumable } from "../../types/items";
import { ConsumableImage } from "@/components/Consumables/ConsumableImage";

import {
  SquareItemContainer,
  SquareItemNameContainer,
  SquareItemNumber,
} from "@/components/Items/SquareItemDisplay";

export function ConsumableShowCasePortrait(props: { consumable: Consumable }) {
  return (
    <>
      <SquareItemContainer>
        <ConsumableImage src={props.consumable.src} />
        <SquareItemNameContainer>
          <Box>{props.consumable.name}</Box>
          <SquareItemNumber>x{props.consumable.balance}</SquareItemNumber>
        </SquareItemNameContainer>
      </SquareItemContainer>
    </>
  );
}
