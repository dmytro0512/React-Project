import { ItemShowCaseProps } from "../../types/items";
import { ItemImage } from "@/components/Items/ItemImage";
import {
  SquareItemContainer,
  SquareItemNameContainer,
} from "@/components/Items/SquareItemDisplay";
import { Level } from "@/components/Character/Level";
import { ChampzLoading } from "@/components/ChampzLoading";
import { memo } from "react";

const ItemShowCasePortrait = memo(function (props: ItemShowCaseProps) {
  if (props.item === undefined) {
    return <ChampzLoading />;
  }

  return (
    <>
      <SquareItemContainer
        className={props.selected ? "selected" : ""}
        onClick={() => props.onSelectItem(props.item)}
      >
        <Level
          level={props.item.item_lvl}
          small={true}
          sx={{
            position: "absolute",
            zIndex: 1,
            top: "5px",
            left: "5px",
            height: "32px",
            width: "32px",
          }}
        >
          {props.item.item_lvl}
        </Level>
        <ItemImage src={props.item.src} />
        <SquareItemNameContainer>{props.item.name}</SquareItemNameContainer>
      </SquareItemContainer>
    </>
  );
});

export default ItemShowCasePortrait;
