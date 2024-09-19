import { ChampzLoading } from "@/components/ChampzLoading";
import { Grid } from "@mui/material";
import { useGetPlayerForgableConsumableList } from "../../hooks/useGetPlayerForgableConsumableList";
import { useShowConsumable } from "@/features/inventory/hooks/useShowConsumable";
import { ForgableConsumableSelectable } from "./ForgableConsumableSelectable";
import { ForgableConsumableListProps } from "../../types/forging";

export function ForgableConsumablesList(props: ForgableConsumableListProps) {
  const { forgableConsumableList, consumableListIsLoading } =
    useGetPlayerForgableConsumableList();
  const { showConsumableByFilter, isPartOfRecipe, isConsumableSelected } =
    useShowConsumable();

  if (consumableListIsLoading) {
    return <ChampzLoading />;
  }

  return (
    <>
      {forgableConsumableList?.map((consumable) => {
        if (
          showConsumableByFilter(consumable, props.filter) &&
          isPartOfRecipe(consumable, props.selectedTargetItem)
        ) {
          return (
            <Grid item xs={4} key={`c${consumable.consumable_id}`}>
              <ForgableConsumableSelectable
                consumable={consumable}
                isSelected={isConsumableSelected(
                  consumable,
                  props.selectedSourceConsumableList,
                )}
                onSourceConsumableSelect={props.onSourceConsumableSelect}
                selectedTargetItem={props.selectedTargetItem}
              />
            </Grid>
          );
        }
      })}
    </>
  );
}
