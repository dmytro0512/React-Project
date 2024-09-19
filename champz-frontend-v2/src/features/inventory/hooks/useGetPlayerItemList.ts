import { AxiosInstance } from "axios";

import { QueryKeys } from "@/consts/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { useApiErrorHandler } from "@/hooks/useApiErrorHandler";
import { useRouteContext } from "@tanstack/react-router";
import { PlayerService } from "@/services/playerService";

export function useGetPlayerItemList() {
  const routeContext = useRouteContext({ strict: false });

  const {
    data: itemList,
    error,
    isError,
    isSuccess: itemListIsSuccess,
    isLoading: itemListIsLoading,
  } = useQuery({
    queryKey: [QueryKeys.itemList],
    queryFn: () =>
      new PlayerService(routeContext.api as AxiosInstance).getItemList(),
  });

  useApiErrorHandler({ isError, error });

  return { itemList, itemListIsSuccess, itemListIsLoading };
}
