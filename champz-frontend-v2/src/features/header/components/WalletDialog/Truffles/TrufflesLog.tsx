import { useApiErrorHandler } from "@/hooks/useApiErrorHandler";
import { PlayerService } from "@/services/playerService";
import { useQuery } from "@tanstack/react-query";
import { getRouteApi } from "@tanstack/react-router";
import { QueryKeys } from "@/consts/queryKeys";
import {
  PaginationTable,
  PaginationTableColumns,
} from "@/components/ChampzTable/PaginationTable";
import { TrufflesLog as TrufflesLogType } from "@/types/responses/trufflesLog";
import { Accordion, AccordionDetails } from "@mui/material";
import { ChampzAccordionSummary } from "@/components/ChampzAccordion";
import { ChampzOutputFormatNumber } from "@/components/ChampzFormatting/ChampzOutputFormatNumber";
import { useState } from "react";

export function TrufflesLog() {
  const routeApi = getRouteApi("/_auth");
  const routeSearch = routeApi.useSearch();
  const routeContext = routeApi.useRouteContext();
  const [expanded, setExpanded] = useState<boolean>(
    routeSearch.tabAcc ? (routeSearch.tabAcc === 2 ? true : false) : false,
  );

  const queryResult = useQuery({
    queryKey: [QueryKeys.trufflesLog],
    queryFn: () => new PlayerService(routeContext.api).getTrufflesLog(),
  });

  const headCells: PaginationTableColumns<TrufflesLogType>[] = [
    {
      headerName: "Day",
      render: (value) => <>{value.day}</>,
    },
    {
      headerName: "Reason",
      render: (value) => <>{value.reason}</>,
    },
    {
      headerName: "Amount",
      render: (value) => (
        <ChampzOutputFormatNumber value={value.amount} showBackground={true} />
      ),
    },
  ];

  useApiErrorHandler(queryResult);

  return (
    <Accordion
      disableGutters
      elevation={0}
      square
      sx={{ padding: "0 !important", "&:before": { display: "none" } }}
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
    >
      <ChampzAccordionSummary>Truffles Log</ChampzAccordionSummary>
      <AccordionDetails>
        <PaginationTable
          columns={headCells}
          rows={queryResult.data?.truffles_log ?? []}
        />
      </AccordionDetails>
    </Accordion>
  );
}
