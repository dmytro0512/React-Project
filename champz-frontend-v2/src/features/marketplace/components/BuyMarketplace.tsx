import { Box } from "@mui/material";
import { getRouteApi } from "@tanstack/react-router";
import { useMarketplace } from "../hooks/useMarketplace";
import { MarketplaceSearch } from "@/routes/_auth/marketplace";
import { useEffect } from "react";
import { ChampzCountdownTimer } from "@/components/ChampzCountdown";
const route = getRouteApi("/_auth/marketplace");

export function BuyMarketplace(props: MarketplaceProps) {
  const routeContext = route.useRouteContext();

  const {
    marketplaceQueryResult: { data: marketplace },
    setFilter,
  } = useMarketplace({ api: routeContext.api });

  useEffect(() => {
    setFilter(props.filter);
  }, [props.filter]);

  return (
    <>
      {marketplace?.map((marketplaceItem) => {
        return (
          <>
            <Box key={marketplaceItem.marketplace_id}>
              {marketplaceItem.name}- Price:
              {marketplaceItem.price_per_unit}- Currency:
              {marketplaceItem.currency_id}- Time left:
              <ChampzCountdownTimer dueEpoch={marketplaceItem.due_epoch} />
            </Box>
          </>
        );
      })}
    </>
  );
}

export interface MarketplaceProps {
  filter: MarketplaceSearch;
}
