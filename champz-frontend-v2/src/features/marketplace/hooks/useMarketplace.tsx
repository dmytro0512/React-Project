import { QueryKeys } from "@/consts/queryKeys";
import { useApiErrorHandler } from "@/hooks/useApiErrorHandler";
import { useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "axios";
import { useCallback, useState } from "react";
import { MarketplaceItem } from "../types/marketplace";
import { MarketplaceService } from "../services/marketplaceService";
import { MarketplaceSearch } from "@/routes/_auth/marketplace";

export function useMarketplace({ api }: UseMarketplaceProps) {
  const [filter, setFilter] = useState<MarketplaceSearch>();

  const filterMarketplace = useCallback(
    (marketplace: MarketplaceItem[]) => {
      return marketplace
        .filter((marketplaceItem) => {
          if (filter?.pr_from !== undefined) {
            if (marketplaceItem.price_per_unit < filter?.pr_from) {
              return false;
            }
          }

          if (filter?.pr_to !== undefined && filter?.pr_to > 0) {
            if (marketplaceItem.price_per_unit > filter?.pr_to) {
              return false;
            }
          }

          const regexp = new RegExp(filter?.name as string, "i");
          if (regexp.test(marketplaceItem.name)) {
            return true;
          }

          for (let i = 0; i < marketplaceItem.text_attributes.length; i++) {
            if (
              regexp.test(marketplaceItem.text_attributes[i].text_attribute)
            ) {
              return true;
            }
          }

          return false;
        })
        .sort((a, b) => {
          if (filter?.sort === "price") {
            if (filter?.dir === "asc") {
              return a.price_per_unit > b.price_per_unit ? 1 : -1;
            } else {
              return a.price_per_unit > b.price_per_unit ? -1 : 1;
            }
          } else if (filter?.sort === "time") {
            if (filter?.dir === "asc") {
              return a.due_epoch > b.due_epoch ? 1 : -1;
            } else {
              return a.due_epoch > b.due_epoch ? -1 : 1;
            }
          }
          return 0;
        });
    },
    [filter],
  );

  const marketplaceQueryResult = useQuery({
    queryKey: [QueryKeys.marketplaceList],
    queryFn: () => new MarketplaceService(api).getMarketplaceList(),
    select: filterMarketplace,
  });

  useApiErrorHandler(marketplaceQueryResult);

  return { marketplaceQueryResult, filter, setFilter };
}

interface UseMarketplaceProps {
  api: AxiosInstance;
}
