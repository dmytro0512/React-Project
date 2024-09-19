import { useApiErrorHandler } from "@/hooks/useApiErrorHandler";
import { PlayerService } from "@/services/playerService";
import { useQuery } from "@tanstack/react-query";
import { getRouteApi } from "@tanstack/react-router";
import { QueryKeys } from "@/consts/queryKeys";
import {
  PaginationTable,
  PaginationTableColumns,
} from "@/components/ChampzTable/PaginationTable";
import { Accordion, AccordionDetails } from "@mui/material";
import { ChampzAccordionSummary } from "@/components/ChampzAccordion";
import { ChampzOutputFormatNumber } from "@/components/ChampzFormatting/ChampzOutputFormatNumber";
import { formatUnixTimestamp } from "@/hooks/useDateFormatter";
import { EthDrop } from "@/types/responses/ethClaimHistoryLog";
import { useState } from "react";

export function EthClaimHistoryLog() {
  const routeApi = getRouteApi("/_auth");
  const routeContext = routeApi.useRouteContext();
  const routeSearch = routeApi.useSearch();
  const [expanded, setExpanded] = useState<boolean>(
    routeSearch.tabAcc ? (routeSearch.tabAcc === 1 ? true : false) : false,
  );

  const queryResult = useQuery({
    queryKey: [QueryKeys.ethClaimHistoryLog],
    queryFn: () => new PlayerService(routeContext.api).getEthClaimHistoryLog(),
  });

  const headCells: PaginationTableColumns<EthDrop>[] = [
    {
      headerName: "Timestamp",
      render: (value) => <>{formatUnixTimestamp(value.claim_timestamp)}</>,
    },
    {
      headerName: "Amount (ETH)",
      render: (value) => (
        <ChampzOutputFormatNumber showBackground={false} value={value.amount} />
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
      <ChampzAccordionSummary>Eth Claim History</ChampzAccordionSummary>
      <AccordionDetails>
        <PaginationTable
          columns={headCells}
          rows={queryResult.data?.drops_eth ?? []}
        />
      </AccordionDetails>
    </Accordion>
  );
}
