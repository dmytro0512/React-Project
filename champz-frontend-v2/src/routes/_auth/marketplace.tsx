import { Marketplace } from "@/features/marketplace/components/Marketplace";
import { createFileRoute } from "@tanstack/react-router";

export type MarketplaceSearch = {
  tab?: MarketplaceTabOptions;
  name?: string;
  pr_from?: number;
  pr_to?: number;
  cur?: number;
  sort?: MarketplaceSearchSortOptions;
  dir?: MarketplaceSearchDirectionOptions;
};

type MarketplaceTabOptions = "s" | undefined;
export type MarketplaceSearchDirectionOptions = "asc" | "desc";
export type MarketplaceSearchSortOptions = "time" | "price";

export const Route = createFileRoute("/_auth/marketplace")({
  validateSearch: (search: Record<string, unknown>): MarketplaceSearch => {
    return {
      tab: (search.tab as MarketplaceTabOptions) || undefined,
      name: (search.name as string) || "",
      pr_from: search.pr_from as number,
      pr_to: search.pr_to as number,
      cur: search.cur as number,
      sort: (search.sort as MarketplaceSearchSortOptions) || "time",
      dir: (search.dir as MarketplaceSearchDirectionOptions) || "desc",
    };
  },
  component: Marketplace,
});
