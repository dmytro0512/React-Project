import { ChampzDialog } from "@/components/ChampzDialog/ChampzDialog";
import { ChampzLoading } from "@/components/ChampzLoading";
import { StatSelectionItem } from "@/components/StatSelectionItem";
import { QueryKeys } from "@/consts/queryKeys";
import { PlayerService } from "@/services/playerService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getRouteApi } from "@tanstack/react-router";

const route = getRouteApi("/_auth/home");

export function CustomStatisticsSelectionList(
  props: CustomStatisticsSelectionListProps,
) {
  const routeContext = route.useRouteContext();
  const queryClient = useQueryClient();

  const CustomStatisticsSelectionList = useQuery({
    queryKey: [QueryKeys.availableStatisticsList],
    queryFn: () => new PlayerService(routeContext.api).getStatisticsList(),
  });

  const addMutation = useMutation({
    mutationKey: [QueryKeys.customStatisticRemove],
    mutationFn: (statisticId: number) => {
      return new PlayerService(routeContext.api).addCustomStatistic(
        props.slot,
        statisticId,
      );
    },
    onSuccess: (data) => {
      if (data.success) {
        queryClient.invalidateQueries({
          queryKey: [`${QueryKeys.customStatistic}${props.slot}`],
        });
        props.onClose();
      }
    },
  });

  const handleAddCustomStatistic = (statisticId: number) => {
    addMutation.mutate(statisticId);
  };

  return (
    <ChampzDialog open={props.open} onClose={props.onClose}>
      {CustomStatisticsSelectionList.isLoading ? (
        <ChampzLoading />
      ) : (
        <>
          {CustomStatisticsSelectionList.data?.statistics.map((statistic) => {
            return (
              <StatSelectionItem
                onClick={() => handleAddCustomStatistic(statistic.id)}
              >
                {statistic.name}
              </StatSelectionItem>
            );
          })}
        </>
      )}
    </ChampzDialog>
  );
}

interface CustomStatisticsSelectionListProps {
  slot: number;
  open: boolean;
  onClose: () => void;
  // onConfirm: () => void;
}
