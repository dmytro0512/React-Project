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
import { LeaderBoard } from "../types/leaderboard";
import { ChampzRankingCrowns } from "@/components/ChampzFormatting/ChampzRankingCrowns";

const route = getRouteApi("/_auth/rankings");

export function DonationsLeaderboard() {
  const routeContext = route.useRouteContext();

  const donationsQueryResult = useQuery({
    queryKey: [QueryKeys.donations],
    queryFn: () =>
      new RankingService(routeContext.api).getDonationLeaderboard(),
  });

  useApiErrorHandler(donationsQueryResult);

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
      headerName: "Donated Truffles",
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
        isLoading={donationsQueryResult.isLoading}
        highlightPlayer={true}
        rows={donationsQueryResult.data ?? []}
      />
    </>
  );
}
