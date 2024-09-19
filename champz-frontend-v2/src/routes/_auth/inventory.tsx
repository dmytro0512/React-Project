import { Inventory } from "@/features/inventory/components/Inventory";
import { createFileRoute } from "@tanstack/react-router";

export type InventorySearch = {
  name?: string;
  cfg_item_id?: number;
};

export const Route = createFileRoute("/_auth/inventory")({
  validateSearch: (search: Record<string, unknown>): InventorySearch => {
    return {
      name: (search.name as string) || "",
      cfg_item_id: search.cfg_item_id as number,
    };
  },
  component: Inventory,
});
