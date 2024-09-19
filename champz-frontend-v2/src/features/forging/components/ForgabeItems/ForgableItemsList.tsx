import { ChampzLoading } from "@/components/ChampzLoading";
import { useShowItem } from "@/features/inventory/hooks/useShowItem";
import { Grid } from "@mui/material";
import { useGetPlayerForgableItemList } from "../../hooks/useGetPlayerForgableItemList";
import { ForgableItemSelectable } from "./ForgableItemSelectable";
import { ForgableItemsListProps } from "../../types/forging";
import { useMemo } from "react";

export function ForgableItemsList(props: ForgableItemsListProps) {
  const { forgableItemList, itemListIsLoading } =
    useGetPlayerForgableItemList();
  const { showItemByFilter, isPartOfRecipe, isItemSelected } = useShowItem();
  const reducedItemList = useMemo(() => {
    if (forgableItemList) {
      return forgableItemList.filter((item, index, self) => {
        return (
          index === self.findIndex((t) => t.cfg_item_id === item.cfg_item_id)
        );
      });
    }
  }, [forgableItemList]);

  const itemList =
    props.selectedTargetItem === undefined ? reducedItemList : forgableItemList;

  if (itemListIsLoading) {
    return <ChampzLoading />;
  }

  return (
    <>
      {itemList?.map((item) => {
        if (
          showItemByFilter(item, props.filter) &&
          isPartOfRecipe(item, props.selectedTargetItem)
        ) {
          return (
            <Grid item xs={4} key={`i${item.item_id}`}>
              <ForgableItemSelectable
                item={item}
                isSelected={isItemSelected(item, props.selectedSourceItemList)}
                onSourceItemSelect={props.onSourceItemSelect}
                selectedTargetItem={props.selectedTargetItem}
              />
            </Grid>
          );
        }
      })}
    </>
  );
}
