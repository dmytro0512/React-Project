import {
  PaginationTable,
  PaginationTableColumns,
} from "@/components/ChampzTable/PaginationTable";
import { QueryKeys } from "@/consts/queryKeys";
import { RankingService } from "@/features/rankings/services/rankingService";
import { useApiErrorHandler } from "@/hooks/useApiErrorHandler";
import { useQuery } from "@tanstack/react-query";
import { useRouteContext } from "@tanstack/react-router";
import { ProfileIcon } from "@/components/ChampzIcon/ProfileIcon";
import { ChampzOutputFormatNumber } from "@/components/ChampzFormatting/ChampzOutputFormatNumber";
import { LeaderBoard } from "../types/leaderboard";
import { ChampzRankingCrowns } from "@/components/ChampzFormatting/ChampzRankingCrowns";
import { AxiosInstance } from "axios";

export function LoginStreak() {
  const routeContext = useRouteContext({ strict: false });

  const queryResult = useQuery({
    queryKey: [QueryKeys.loginStreak],
    queryFn: () =>
      new RankingService(
        routeContext.api as AxiosInstance,
      ).getLoginStreakLeaderboard(),
  });

  useApiErrorHandler(queryResult);

  const headCells: PaginationTableColumns<LeaderBoard>[] = [
    {
      headerName: "Rank",
      render: (row) => <ChampzRankingCrowns rank={row.rank} />,
    },
    {
      headerName: "Player",
      render: (row) => (
        <>
          <ProfileIcon url={row.player_src} />
          {row.player_name}
        </>
      ),
    },
    {
      headerName: "Guild",
      render: (row) => <>{row.guild_name}</>,
    },
    {
      headerName: "Current streak",
      render: (row) => (
        <ChampzOutputFormatNumber
          value={row.sorted_amount}
          showBackground={true}
        />
      ),
    },
  ];

  return (
    <>
      <PaginationTable
        rowsPerPage={10}
        columns={headCells}
        isLoading={queryResult.isLoading}
        highlightPlayer={true}
        rows={queryResult.data ?? []}
      />
    </>
  );
}
