import { Consumable, Item } from "@/features/inventory/types/items";
import { useState } from "react";
import { useGetPlayerForgableConsumableList } from "./useGetPlayerForgableConsumableList";

export function useSelectedSourceConsumableList() {
  const [selectedSourceConsumableList, setSelectedSourceConsumableList] =
    useState<Consumable[]>();

  const { forgableConsumableList } = useGetPlayerForgableConsumableList();

  const handleToggleSourceConsumableSelect = (
    consumable: Consumable,
    add: boolean,
  ) => {
    switch (add) {
      case true:
        if (selectedSourceConsumableList === undefined) {
          setSelectedSourceConsumableList([consumable]);
        } else {
          setSelectedSourceConsumableList([
            ...selectedSourceConsumableList,
            consumable,
          ]);
        }
        break;
      case false:
        if (selectedSourceConsumableList === undefined) return;

        const removeIndex = selectedSourceConsumableList.findIndex(
          (listConsumable) =>
            listConsumable.consumable_id === consumable.consumable_id,
        );
        if (removeIndex !== -1) {
          const newSelectedSourceConsumableList = [
            ...selectedSourceConsumableList,
          ];
          selectedSourceConsumableList.splice(removeIndex, 1);
          setSelectedSourceConsumableList(newSelectedSourceConsumableList);
        }
        break;
    }
  };

  const setSelectedSourceConsumableListViaRecipe = (targetItem: Item) => {
    if (forgableConsumableList == undefined) {
      setSelectedSourceConsumableList([]);
    }

    const selectedSourceConsumableList = forgableConsumableList?.filter(
      (consumable) => {
        return targetItem.recipe.some(
          (recipe) => recipe.source_consumable_id === consumable.consumable_id,
        );
      },
    );

    setSelectedSourceConsumableList(selectedSourceConsumableList);
  };

  return {
    selectedSourceConsumableList,
    setSelectedSourceConsumableList,
    handleToggleSourceConsumableSelect,
    setSelectedSourceConsumableListViaRecipe,
  };
}
