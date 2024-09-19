import { AxiosInstance } from "axios";

import { QueryKeys } from "@/consts/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { useApiErrorHandler } from "@/hooks/useApiErrorHandler";
import { useRouteContext } from "@tanstack/react-router";
import { ItemService } from "@/services/itemService";

export function useGetAllItemList() {
  const routeContext = useRouteContext({ strict: false });

  const {
    data: allItems,
    error,
    isError,
    isSuccess: allItemsIsSuccess,
    isLoading: allItemsIsLoading,
  } = useQuery({
    queryKey: [QueryKeys.allItemList],
    queryFn: () => new ItemService(routeContext.api as AxiosInstance).getAllItems(),
  });

  useApiErrorHandler({ isError, error });

  return { allItems, allItemsIsSuccess, allItemsIsLoading };
}
