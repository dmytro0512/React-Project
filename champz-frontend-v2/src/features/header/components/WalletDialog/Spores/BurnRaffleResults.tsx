import { ChampzAccordionSummary } from "@/components/ChampzAccordion";
import { ProfileIcon } from "@/components/ChampzIcon/ProfileIcon";
import { ChampzOutputFormatNumber } from "@/components/ChampzFormatting/ChampzOutputFormatNumber";
import {
  PaginationTable,
  PaginationTableColumns,
} from "@/components/ChampzTable/PaginationTable";
import { ChampzSelect } from "@/components/form/ChampzSelect";
import { QueryKeys } from "@/consts/queryKeys";
import { FilterItem } from "@/features/marketplace/components/Filter";
import { RankingService } from "@/features/rankings/services/rankingService";
import { BurnLeaderBoardDaily } from "@/features/rankings/types/burns";
import { useApiErrorHandler } from "@/hooks/useApiErrorHandler";
import {
  Accordion,
  AccordionDetails,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getRouteApi } from "@tanstack/react-router";
import { useState } from "react";
import { ChampzRankingCrowns } from "@/components/ChampzFormatting/ChampzRankingCrowns";
import { useGameData } from "@/hooks/useGameData";

export function BurnRaffleResults() {
  const routeApi = getRouteApi("/_auth");
  const routeContext = routeApi.useRouteContext();
  const routeSearch = routeApi.useSearch();
  const { gameData } = useGameData();
  const [expanded, setExpanded] = useState<boolean>(
    routeSearch.tabAcc ? (routeSearch.tabAcc === 1 ? true : false) : false,
  );

  const activeDay = gameData?.active_day ?? 1;

  const [selectedDay, setSelectedDay] = useState<number>(activeDay);

  const queryResult = useQuery({
    queryKey: [QueryKeys.burnLogPerDay, selectedDay],
    queryFn: () =>
      new RankingService(routeContext.api).getBurnsPerDay(selectedDay),
    enabled: !!selectedDay,
  });

  const handleChangeDaySelect = (event: SelectChangeEvent<unknown>) => {
    setSelectedDay(parseInt(event.target.value as string));
  };

  // Show Active Day - 1 and the last 15 days as option
  const dayOptions = [];
  for (let i = activeDay - 1; i > activeDay - 15; i--) {
    dayOptions.push(<MenuItem value={i}>{i}</MenuItem>);
  }

  const headCells: PaginationTableColumns<BurnLeaderBoardDaily>[] = [
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
      headerName: "Burned Spores",
      render: (row) => (
        <ChampzOutputFormatNumber value={row.amount} showBackground={true} />
      ),
    },
    {
      headerName: "Qualified",
      render: (row) => <>{row.qualified}</>,
    },
    // {
    //   fieldName: "won",
    //   headerName: "Won",
    //   valueGetter: (value) => <>{value}</>,
    // },
  ];

  useApiErrorHandler(queryResult);

  return (
    <>
      <Accordion
        disableGutters
        elevation={0}
        expanded={expanded}
        onChange={() => setExpanded(!expanded)}
        square
        sx={{ padding: "0 !important", "&:before": { display: "none" } }}        
      >
        <ChampzAccordionSummary>Daily Burn Log</ChampzAccordionSummary>
        <AccordionDetails>
          <FilterItem>
            Day{" "}
            <ChampzSelect onChange={handleChangeDaySelect} value={selectedDay}>
              {dayOptions}
            </ChampzSelect>
          </FilterItem>

          <PaginationTable
            rowsPerPage={10}
            columns={headCells}
            highlightPlayer={true}
            isLoading={queryResult.isLoading}
            rows={queryResult.data?.burn_leaderboard_daily ?? []}
          />
        </AccordionDetails>
      </Accordion>
    </>
  );
}
