import { Item } from "../types/items";
import { InventorySearch } from "@/routes/_auth/forging";

export function useShowItem() {
  // This version turned out to be significantly faster than filtering the array first and then map it out
  const showItemByFilter = (item: Item, filter: InventorySearch) => {    
    if (filter?.cfg_item_id) {
      return item.cfg_item_id === filter.cfg_item_id;
    }

    const regexp = new RegExp(filter?.name as string, "i");
    if (regexp.test(item.name)) {
      return true;
    }

    for (let i = 0; i < item.text_attributes.length; i++) {
      if (regexp.test(item.text_attributes[i].text_attribute)) {
        return true;
      }
    }

    return false;
  };

  const isPartOfRecipe = (item: Item, targetItem: Item | undefined) => {
    if (targetItem === undefined) {
      return true;
    }

    for (let i = 0; i < targetItem.recipe.length; i++) {
      if (item.cfg_item_id === targetItem.recipe[i].source_cfg_item_id) {
        return true;
      }
    }

    return false;
  };

  const isItemSelected = (
    item: Item,
    selectedSourceItemList: Item[] | undefined,
  ) => {
    if (selectedSourceItemList === undefined) {
      return false;
    }

    return selectedSourceItemList.some(
      (sourceItem) => sourceItem.item_id === item.item_id,
    );
  };
  return { showItemByFilter, isPartOfRecipe, isItemSelected };
}
