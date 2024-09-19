import { AxiosInstance } from "axios";

import { QueryKeys } from "@/consts/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { useApiErrorHandler } from "@/hooks/useApiErrorHandler";
import { useRouteContext } from "@tanstack/react-router";
import { ItemService } from "@/services/itemService";

export function useGetAllRecipes() {
  const routeContext = useRouteContext({ strict: false });

  const {
    data: allRecipes,
    error,
    isError,
    isSuccess: allRecipesIsSuccess,
    isLoading: allRecipesIsLoading,
  } = useQuery({
    queryKey: [QueryKeys.itemRecipeList],
    queryFn: () =>
      new ItemService(routeContext.api as AxiosInstance).getRecipes(),
  });

  useApiErrorHandler({ isError, error });

  return { allRecipes, allRecipesIsSuccess, allRecipesIsLoading };
}
