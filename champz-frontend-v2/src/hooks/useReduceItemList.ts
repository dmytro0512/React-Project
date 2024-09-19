import { Item } from "@/features/inventory/types/items";
import { useMemo } from "react";

export function useReduceItemListByCfgItemId(itemList: Item[] | undefined) {
  if (itemList === undefined) {
    return [];
  }

  const reducedItemList = useMemo(() => {
    if (itemList) {
      return itemList.filter((item, index, self) => {
        return (
          index === self.findIndex((t) => t.cfg_item_id === item.cfg_item_id)
        );
      });
    }
  }, [itemList]);

  return reducedItemList;
}
