import { QueryKeys } from "@/consts/queryKeys";
import { useApiErrorHandler } from "@/hooks/useApiErrorHandler";
import { PlayerService } from "@/services/playerService";
import { useQuery } from "@tanstack/react-query";
import { getRouteApi } from "@tanstack/react-router";

const route = getRouteApi("/_auth/home");

export function AvailableStatisticsList() {
  const routeContext = route.useRouteContext();

  const availableStatisticsListQueryResult = useQuery({
    queryKey: [QueryKeys.availableStatisticsList],
    queryFn: () =>
      new PlayerService(routeContext.api).getStatisticsList(),
  });

  useApiErrorHandler(availableStatisticsListQueryResult);

  return (
    <>
      {availableStatisticsListQueryResult.data?.statistics.map((statistic) => {
        return statistic.handler + statistic.name;
      })}
    </>
  );
}
