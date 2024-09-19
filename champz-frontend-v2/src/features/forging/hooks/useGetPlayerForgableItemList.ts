import { useGetPlayerItemList } from "@/features/inventory/hooks/useGetPlayerItemList";
import { useMemo } from "react";

export function useGetPlayerForgableItemList() {
  const { itemList, itemListIsLoading } = useGetPlayerItemList();

  const forgableItemList = useMemo(() => {
    return itemList?.filter((item) => {
      return !item.equipped && !item.listed;
    });
  }, [itemList]);

  return { forgableItemList, itemListIsLoading };
}
