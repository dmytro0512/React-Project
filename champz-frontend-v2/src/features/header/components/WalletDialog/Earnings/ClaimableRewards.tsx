import { ChampzAccordionSummary } from "@/components/ChampzAccordion";
import { ChampzLoading } from "@/components/ChampzLoading";
import { QueryKeys } from "@/consts/queryKeys";
import { useApiErrorHandler } from "@/hooks/useApiErrorHandler";
import { PlayerService } from "@/services/playerService";
import { Accordion, AccordionDetails } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getRouteApi } from "@tanstack/react-router";
import { AxiosInstance } from "axios";
import { useState } from "react";

export function ClaimableRewards() {
  const routeApi = getRouteApi("/_auth");
  const routeContext = routeApi.useRouteContext();
  const routeSearch = routeApi.useSearch();
  const [expanded, setExpanded] = useState<boolean>(
    routeSearch.tabAcc ? (routeSearch.tabAcc === 0 ? true : false) : true,
  );

  const ethClaimableListQueryResult = useQuery({
    queryKey: [QueryKeys.ethClaimableList],
    queryFn: () =>
      new PlayerService(
        routeContext.api as AxiosInstance,
      ).getEthClaimableList(),
  });

  useApiErrorHandler(ethClaimableListQueryResult);

  return (
    <Accordion
      disableGutters
      elevation={0}
      square
      sx={{ padding: "0 !important", "&:before": { display: "none" } }}
      expanded={expanded}
      onChange={() => setExpanded(expanded)}
    >
      <ChampzAccordionSummary>Claimable ETH</ChampzAccordionSummary>
      <AccordionDetails>
        {ethClaimableListQueryResult.isLoading ? (
          <ChampzLoading />
        ) : (
          ethClaimableListQueryResult.data?.drops_eth.map((eth) => {
            return eth.amount;
          })
        )}
      </AccordionDetails>
    </Accordion>
  );
}
