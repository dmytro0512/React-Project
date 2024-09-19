import { MutationKeys } from "@/consts/mutationKeys";
import { QueryKeys } from "@/consts/queryKeys";
import { useApiErrorHandler } from "@/hooks/useApiErrorHandler";
import { ItemService } from "@/services/itemService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouteContext } from "@tanstack/react-router";
import { AxiosInstance } from "axios";

export function useItemActions() {
  const routeContext = useRouteContext({ strict: false });
  const queryClient = useQueryClient();

  const delist = (itemId?: number, consumableId?: number) => {
    delistMutation.mutate({ itemId, consumableId });
  };

  const delistMutation = useMutation({
    mutationKey: [MutationKeys.itemDelist],
    mutationFn: ({
      itemId,
      consumableId,
    }: {
      itemId?: number;
      consumableId?: number;
    }) => {
      return new ItemService(routeContext.api as AxiosInstance).delist(
        itemId,
        consumableId,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.itemList] });
    },
  });

  useApiErrorHandler(delistMutation);

  return {
    delist,
  };
}
