import { ChampzTab } from "@/components/ChampzTabs/ChampzTab";
import { ChampzTabPanel } from "@/components/ChampzTabs/ChampzTabPanel";
import { ChampzTabs } from "@/components/ChampzTabs/ChampzTabs";
import { Filter } from "@/features/marketplace/components/Filter";
import { getRouteApi } from "@tanstack/react-router";
import { useState } from "react";
import { BuyMarketplace } from "./BuyMarketplace";
import { MarketplaceSearch } from "@/routes/_auth/marketplace";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { QueryKeys } from "@/consts/queryKeys";

export function Marketplace() {
  const routeApi = getRouteApi("/_auth/marketplace");
  const routeContext = routeApi.useRouteContext();
  const routeSearch = routeApi.useSearch();
  const queryClient = useQueryClient();
  const socket = routeContext.socketClient;

  const [activeTab, setActiveTab] = useState(routeSearch.tab === "s" ? 1 : 0);
  const [filter, setFilter] = useState<MarketplaceSearch>({
    name: routeSearch.name,
    pr_from: routeSearch.pr_from,
    pr_to: routeSearch.pr_to,
    sort: routeSearch.sort,
    dir: routeSearch.dir,
  });

  useEffect(() => {
    socket.on("marketplaceUpdate", () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.marketplaceList] });
    });

    return () => {
      socket.off("marketplaceUpdate");
    };
  }, []);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <>
      <ChampzTabs centered value={activeTab} onChange={handleChange}>
        <ChampzTab label="Buy"></ChampzTab>
        <ChampzTab label="Sell"></ChampzTab>
      </ChampzTabs>
      <ChampzTabPanel value={0} index={activeTab}>
        <Filter filter={filter} setFilter={setFilter} />
        <BuyMarketplace filter={filter} />
      </ChampzTabPanel>
      <ChampzTabPanel value={1} index={activeTab}>
        <></>
      </ChampzTabPanel>
    </>
  );
}
