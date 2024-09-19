import { Consumable, Item } from "../types/items";
import { InventorySearch } from "@/routes/_auth/forging";

export function useShowConsumable() {
  // This version turned out to be significantly faster than filtering the array first and then map it out
  const showConsumableByFilter = (
    consumable: Consumable,
    filter: InventorySearch,
  ) => {
    if (filter?.consumable_id) {
      return consumable.consumable_id === filter.consumable_id;
    }

    const regexp = new RegExp(filter?.name as string, "i");
    if (regexp.test(consumable.name)) {
      return true;
    }

    return false;
  };

  const isPartOfRecipe = (
    consumable: Consumable,
    targetItem: Item | undefined,
  ) => {
    if (targetItem === undefined) {
      return true;
    }

    for (let i = 0; i < targetItem.recipe.length; i++) {
      if (
        consumable.consumable_id === targetItem.recipe[i].source_consumable_id
      ) {
        return true;
      }
    }

    return false;
  };

  const isConsumableSelected = (
    consumable: Consumable,
    selectedSourceConsumableList: Consumable[] | undefined,
  ) => {
    if (selectedSourceConsumableList === undefined) {
      return false;
    }

    return selectedSourceConsumableList.some(
      (sourceConsumable) =>
        sourceConsumable.consumable_id === consumable.consumable_id,
    );
  };
  return { showConsumableByFilter, isPartOfRecipe, isConsumableSelected };
}
