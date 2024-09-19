import { AxiosInstance } from "axios";

import { QueryKeys } from "@/consts/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { useApiErrorHandler } from "@/hooks/useApiErrorHandler";
import { useRouteContext } from "@tanstack/react-router";
import { PlayerService } from "@/services/playerService";

export function useGetPlayerConsumableList() {
  const routeContext = useRouteContext({ strict: false });

  const {
    data: consumableList,
    error,
    isError,
    isSuccess: consumableListIsSuccess,
    isLoading: consumableListIsLoading,
  } = useQuery({
    queryKey: [QueryKeys.consumableList],
    queryFn: () =>
      new PlayerService(routeContext.api as AxiosInstance).getConsumableList(),
  });

  useApiErrorHandler({ isError, error });

  return { consumableList, consumableListIsSuccess, consumableListIsLoading };
}
