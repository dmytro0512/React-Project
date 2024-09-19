import { QueryKeys } from "@/consts/queryKeys";
import { useApiErrorHandler } from "@/hooks/useApiErrorHandler";
import { PlayerService } from "@/services/playerService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getRouteApi } from "@tanstack/react-router";
import { StatBox } from "../../../components/StatBox";
import { useState } from "react";
import { CustomStatisticsSelectionList } from "./CustomStatisticsSelectionList";
import { Box } from "@mui/material";

const route = getRouteApi("/_auth/home");

export function CustomStatistic(props: CustomStatisticsProps) {
  const routeContext = route.useRouteContext();
  const queryClient = useQueryClient();
  const [showSelectionList, setShowSelectionList] = useState(false);

  const customStatisticQueryResult = useQuery({
    queryKey: [`${QueryKeys.customStatistic}${props.slot}`],
    queryFn: () =>
      new PlayerService(routeContext.api).getCustomStatistic(props.slot),
  });

  const removeMutation = useMutation({
    mutationKey: [QueryKeys.customStatisticRemove],
    mutationFn: () => {
      return new PlayerService(routeContext.api).removeCustomStatistic(
        props.slot,
      );
    },
    onSuccess: (data) => {
      if (data.success) {
        queryClient.invalidateQueries({
          queryKey: [`${QueryKeys.customStatistic}${props.slot}`],
        });
      }
    },
  });

  useApiErrorHandler(customStatisticQueryResult);

  const handleRemoveCustomStatistic = () => {
    removeMutation.mutate();
  };

  const handleAddCustomStatistic = () => {
    setShowSelectionList(true);
  };

  if (customStatisticQueryResult.data?.statistic === null) {
    if (props.isEditMode) {
      return (
        <>
          <CustomStatisticsSelectionList
            slot={props.slot}
            open={showSelectionList}
            onClose={() => setShowSelectionList(false)}
          />
          <StatBox
            onClick={() => handleAddCustomStatistic()}
            isEmpty={true}
          ></StatBox>
        </>
      );
    } else {
      return <Box></Box>;
    }
  }

  return (
    <StatBox
      removeHandler={() => handleRemoveCustomStatistic()}
      value={customStatisticQueryResult.data?.statistic.value as number}
      description={customStatisticQueryResult.data?.statistic.name as string}
      isLoading={customStatisticQueryResult.isLoading}
      isEditMode={props.isEditMode}
    ></StatBox>
  );
}

export interface CustomStatisticsProps {
  slot: number;
  isEditMode?: boolean;
}
