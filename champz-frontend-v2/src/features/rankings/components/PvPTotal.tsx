import {
  PaginationTable,
  PaginationTableColumns,
} from "@/components/ChampzTable/PaginationTable";
import { QueryKeys } from "@/consts/queryKeys";
import { RankingService } from "@/features/rankings/services/rankingService";
import { useApiErrorHandler } from "@/hooks/useApiErrorHandler";
import { useQuery } from "@tanstack/react-query";
import { getRouteApi } from "@tanstack/react-router";
import { ProfileIcon } from "@/components/ChampzIcon/ProfileIcon";
import { ChampzOutputFormatNumber } from "@/components/ChampzFormatting/ChampzOutputFormatNumber";
import { PvPLeaderBoard } from "../types/leaderboard";
import { ChampzRankingCrowns } from "@/components/ChampzFormatting/ChampzRankingCrowns";

const route = getRouteApi("/_auth/rankings");

export function PvPTotal() {
  const routeContext = route.useRouteContext();

  const queryResult = useQuery({
    queryKey: [QueryKeys.totalPvpWins],
    queryFn: () =>
      new RankingService(routeContext.api).getTotalPvpWinLeaderboard(),
  });

  useApiErrorHandler(queryResult);

  console.log(queryResult);

  const headCells: PaginationTableColumns<PvPLeaderBoard>[] = [
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
      headerName: "Wins",
      render: (row) => (
        <ChampzOutputFormatNumber value={row.wins} showBackground={true} />
      ),
    },
    {
      headerName: "Losses",
      render: (row) => (
        <ChampzOutputFormatNumber
          value={row.losses}
          showBackground={true}
          showNegative={true}
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
