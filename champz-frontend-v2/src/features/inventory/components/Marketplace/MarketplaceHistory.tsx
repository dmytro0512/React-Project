import { ChampzLoading } from "@/components/ChampzLoading";
import { useGetMarketplaceHistory } from "../../hooks/useGetMarketplaceHistory";
import { Item } from "../../types/items";

export function MarketplaceHistory(props: { item: Item }) {
  console.log("MarketplaceHistory", props.item);
  const {
    marketplaceHistory,
    marketplaceHistoryIsLoading,
    marketplaceHistoryIsSuccess,
  } = useGetMarketplaceHistory(props.item);

  console.log(marketplaceHistory);

  if (marketplaceHistoryIsLoading) {
    return <ChampzLoading />;
  }

  return <></>;
}
