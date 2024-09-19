import { AxiosInstance } from "axios";

import { QueryKeys } from "@/consts/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { useApiErrorHandler } from "@/hooks/useApiErrorHandler";
import { useRouteContext } from "@tanstack/react-router";
import { ItemService } from "@/services/itemService";
import { Item } from "../types/items";
import { useEffect, useState } from "react";

export function useGetMarketplaceHistory(item: Item) {
  const routeContext = useRouteContext({ strict: false });
  const [selectedItemCfgId, setSelectedItemCfgId] = useState<number>(
    item.cfg_item_id,
  );

  useEffect(() => {
    setSelectedItemCfgId(item.cfg_item_id);
  }, [item.cfg_item_id]);

  const {
    data: marketplaceHistory,
    error,
    isError,
    isSuccess: marketplaceHistoryIsSuccess,
    isLoading: marketplaceHistoryIsLoading,
  } = useQuery({
    queryKey: [QueryKeys.marketplaceTransactions, selectedItemCfgId],
    queryFn: () =>
      new ItemService(routeContext.api as AxiosInstance).getMarketplaceHistory(
        selectedItemCfgId,
      ),
    enabled: !!selectedItemCfgId,
  });

  useApiErrorHandler({ isError, error });

  return {
    marketplaceHistory,
    marketplaceHistoryIsSuccess,
    marketplaceHistoryIsLoading,
  };
}
