import { useGetAllConsumables } from "@/features/inventory/hooks/useGetAllConsumables";
import { useGetAllItemList } from "@/features/inventory/hooks/useGetAllItemList";
import { Consumable, Item } from "@/features/inventory/types/items";
import { Box, styled } from "@mui/material";
import { RecipeProps } from "../../types/forging";
import squareItemMask from "@/assets/backgrounds/items/square_item.svg";
import { ItemImage } from "@/components/Items/ItemImage";
import { ConsumableImage } from "@/components/Consumables/ConsumableImage";
import { TextShadow } from "@/consts/textShadow";

export function WorkbenchSlot(props: RecipeProps) {
  const WorkbenchSlot = styled(Box)(({ theme }) => ({
    minWidth: "120px",
    aspectRatio: 1,
    padding: theme.spacing(1),
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    backgroundImage: `url(${squareItemMask})`,
    backgroundSize: "100% 100%",
    cursor: "pointer",
  }));
  const WorkbenchSlotQuantity = styled(Box)(({ theme }) => ({
    position: "absolute",
    right: theme.spacing(1.5),
    bottom: theme.spacing(1.5),
    textShadow: TextShadow.dark,
  }));

  const { allItems } = useGetAllItemList();
  const { allConsumables } = useGetAllConsumables();

  const getRecipeItem = (cfg_item_id: number) => {
    if (allItems) {
      const sourceItemIndex = allItems.findIndex((item: Item) => {
        return item.cfg_item_id === cfg_item_id;
      });

      if (sourceItemIndex !== -1) {
        return (
          <>
            {/* {allItems[sourceItemIndex].name} */}
            <ItemImage src={`${allItems[sourceItemIndex].src}`} />
          </>
        );
      }
    } else {
      return undefined;
    }
  };

  const getAvailableItemQuantity = (cfg_item_id: number) => {
    if (props.selectedSourceItemList) {
      const sourceItemArray = props.selectedSourceItemList.filter(
        (item: Item) => {
          return item.cfg_item_id === cfg_item_id;
        },
      );

      return sourceItemArray.length;
    }

    return 0;
  };

  const getRecipeConsumable = (consumable_id: number) => {
    if (allConsumables) {
      const sourceConsumableIndex = allConsumables.findIndex(
        (consumable: Consumable) => {
          return consumable.id === consumable_id;
        },
      );

      if (sourceConsumableIndex !== -1) {
        return (
          <>
            {/* {allConsumables[sourceConsumableIndex].name} */}

            <ConsumableImage
              src={`${allConsumables[sourceConsumableIndex].src}`}
            />
          </>
        );
      }
    } else {
      return undefined;
    }
  };

  const getAvailableConsumableQuantity = (consumable_id: number) => {
    if (props.selectedSourceConsumableList) {
      const sourceConsumableIndex =
        props.selectedSourceConsumableList.findIndex(
          (consumable: Consumable) => {
            return consumable.id === consumable_id;
          },
        );

      if (sourceConsumableIndex !== -1) {
        return props.selectedSourceConsumableList[sourceConsumableIndex]
          .balance;
      }
    }

    return 0;
  };

  return (
    <WorkbenchSlot>
      {props.recipe && (
        <>
          {(props.recipe.source_cfg_item_id as number) > 0
            ? getRecipeItem(props.recipe.source_cfg_item_id as number)
            : getRecipeConsumable(props.recipe.source_consumable_id as number)}
          <WorkbenchSlotQuantity>
            {(props.recipe.source_cfg_item_id as number) > 0
              ? getAvailableItemQuantity(
                  props.recipe.source_cfg_item_id as number,
                )
              : getAvailableConsumableQuantity(
                  props.recipe.source_consumable_id as number,
                )}
            {`/${props.recipe.quantity}`}
          </WorkbenchSlotQuantity>
        </>
      )}
    </WorkbenchSlot>
  );
}
