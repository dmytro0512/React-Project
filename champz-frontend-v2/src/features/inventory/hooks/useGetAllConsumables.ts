import { AxiosInstance } from "axios";

import { QueryKeys } from "@/consts/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { useApiErrorHandler } from "@/hooks/useApiErrorHandler";
import { useRouteContext } from "@tanstack/react-router";
import { ItemService } from "@/services/itemService";

export function useGetAllConsumables() {
  const routeContext = useRouteContext({ strict: false });

  const {
    data: allConsumables,
    error,
    isError,
    isSuccess: allConsumablesIsSuccess,
    isLoading: allConsumablesIsLoading,
  } = useQuery({
    queryKey: [QueryKeys.allConsumablesList],
    queryFn: () => new ItemService(routeContext.api as AxiosInstance).getAllConsumables(),
  });

  useApiErrorHandler({ isError, error });

  return { allConsumables, allConsumablesIsSuccess, allConsumablesIsLoading };
}
