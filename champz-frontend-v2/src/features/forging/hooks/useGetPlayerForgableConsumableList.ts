import { useGetPlayerConsumableList } from "@/features/inventory/hooks/useGetPlayerConsumableList";
import { useMemo } from "react";

export function useGetPlayerForgableConsumableList() {
  const { consumableList, consumableListIsLoading } =
    useGetPlayerConsumableList();

  const forgableConsumableList = useMemo(() => {
    return consumableList?.filter((consumable) => {
      return consumable.forgable && consumable.balance > 0;
    });
  }, [consumableList]);

  return { forgableConsumableList, consumableListIsLoading };
}
