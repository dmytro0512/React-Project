import { Item } from "@/features/inventory/types/items";
import { useState } from "react";
import { useGetPlayerForgableItemList } from "./useGetPlayerForgableItemList";

export function useSelectedSourceItemList() {
  const [selectedSourceItemList, setSelectedSourceItemList] =
    useState<Item[]>();

  const { forgableItemList } = useGetPlayerForgableItemList();

  const handleReduceItemFromSourceItemList = (targetItem: Item) => {
    if (selectedSourceItemList === undefined || targetItem === undefined) {
      return;
    }

    let newSelectedSourceItemList = [...selectedSourceItemList];
    for (let i = 0; i < targetItem.recipe.length; i++) {
      for (let j = 0; j < targetItem.recipe[i].quantity; j++) {
        const firstSourceItemIndex = newSelectedSourceItemList.findIndex(
          (item) =>
            item.cfg_item_id === targetItem.recipe[i].source_cfg_item_id,
        );

        if (firstSourceItemIndex !== 1) {
          newSelectedSourceItemList.splice(firstSourceItemIndex, 1);
        }
      }
    }

    setSelectedSourceItemList(newSelectedSourceItemList);
  };

  const handleIncreaseItemFromSourceList = (targetItem: Item) => {
    if (
      selectedSourceItemList === undefined ||
      targetItem === undefined ||
      forgableItemList === undefined
    ) {
      return;
    }

    console.log(selectedSourceItemList);
    console.log(forgableItemList);
    console.log(targetItem.recipe);

    let newSelectedSourceItemList = [...selectedSourceItemList];
    for (let i = 0; i < targetItem.recipe.length; i++) {
      const targetLength = targetItem.recipe[i].quantity;
      let itemsToSelect: Item[] = [];
      for (let j = 0; j < targetItem.recipe[i].quantity; j++) {
        const firstSourceItemIndex = forgableItemList.findIndex(
          (item) =>
            item.cfg_item_id === targetItem.recipe[i].source_cfg_item_id &&
            newSelectedSourceItemList.findIndex(
              (sourceItemListItem) =>
                sourceItemListItem.item_id === item?.item_id,
            ) === -1 &&
            itemsToSelect.findIndex(
              (itemToSelect) => itemToSelect.item_id === item?.item_id,
            ) === -1,
        );

        // console.log(
        //   newSelectedSourceItemList,
        //   firstSourceItemIndex,
        //   forgableItemList[firstSourceItemIndex],
        // );

        if (firstSourceItemIndex !== 1) {
          itemsToSelect = [
            forgableItemList[firstSourceItemIndex],
            ...itemsToSelect,
          ];
        }

        console.log(newSelectedSourceItemList);
      }

      if (itemsToSelect.length === targetLength) {
        newSelectedSourceItemList = [
          ...itemsToSelect,
          ...newSelectedSourceItemList,
        ];
      }
    }

    setSelectedSourceItemList(newSelectedSourceItemList);
  };

  const handleToggleSourceItemSelect = (item: Item, add: boolean) => {
    switch (add) {
      case true:
        if (selectedSourceItemList === undefined) {
          setSelectedSourceItemList([item]);
        } else {
          setSelectedSourceItemList([...selectedSourceItemList, item]);
        }
        break;
      case false:
        if (selectedSourceItemList === undefined) return;

        const removeIndex = selectedSourceItemList.findIndex(
          (listItem) => listItem.item_id === item.item_id,
        );
        if (removeIndex !== -1) {
          const newSelectedSourceItemList = [...selectedSourceItemList];
          newSelectedSourceItemList.splice(removeIndex, 1);
          setSelectedSourceItemList(newSelectedSourceItemList);
        }
        break;
    }
  };

  const setSelectedSourceItemListViaRecipe = (targetItem: Item) => {
    if (forgableItemList == undefined) {
      setSelectedSourceItemList([]);
    }

    const selectedSourceItemList = forgableItemList?.filter((item) => {
      return targetItem.recipe.some(
        (recipe) => recipe.source_cfg_item_id === item.cfg_item_id,
      );
    });

    setSelectedSourceItemList(selectedSourceItemList);
  };

  return {
    selectedSourceItemList,
    setSelectedSourceItemList,
    handleToggleSourceItemSelect,
    setSelectedSourceItemListViaRecipe,
    handleReduceItemFromSourceItemList,
    handleIncreaseItemFromSourceList,
  };
}
