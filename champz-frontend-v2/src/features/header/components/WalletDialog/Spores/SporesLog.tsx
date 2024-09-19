import { useApiErrorHandler } from "@/hooks/useApiErrorHandler";
import { PlayerService } from "@/services/playerService";
import { useQuery } from "@tanstack/react-query";
import { getRouteApi } from "@tanstack/react-router";
import { QueryKeys } from "@/consts/queryKeys";
import {
  PaginationTable,
  PaginationTableColumns,
} from "@/components/ChampzTable/PaginationTable";
import { EmphasizedText } from "@/components/Text";
import { SporesLog as SporesLogType } from "@/types/responses/sporesLog";
import { Accordion, AccordionDetails } from "@mui/material";
import { ChampzAccordionSummary } from "@/components/ChampzAccordion";
import { ChampzOutputFormatNumber } from "@/components/ChampzFormatting/ChampzOutputFormatNumber";
import { useState } from "react";

export function SporesLog() {
  const routeApi = getRouteApi("/_auth");
  const routeContext = routeApi.useRouteContext();
  const routeSearch = routeApi.useSearch();
  const [expanded, setExpanded] = useState<boolean>(
    routeSearch.tabAcc ? (routeSearch.tabAcc === 2 ? true : false) : false,
  );

  const queryResult = useQuery({
    queryKey: [QueryKeys.sporesLog],
    queryFn: () => new PlayerService(routeContext.api).getSporesLog(),
  });

  const headCells: PaginationTableColumns<SporesLogType>[] = [
    {
      headerName: "Day",
      render: (value) => <EmphasizedText>{value.day}</EmphasizedText>,
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
      <ChampzAccordionSummary>Spores Log</ChampzAccordionSummary>
      <AccordionDetails>
        <PaginationTable
          columns={headCells}
          rows={queryResult.data?.spores_transactions ?? []}
        />
      </AccordionDetails>
    </Accordion>
  );
}
