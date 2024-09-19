import { Consumable, Item } from "@/features/inventory/types/items";
import { BaseResponse } from "../baseResponse";
import { MarketplaceItem } from "@/features/marketplace/types/marketplace";

export interface ItemListResponse extends BaseResponse {
  itemlist: Item[];
}

export interface ConsumableListResponse extends BaseResponse {
  consumables: Consumable[];
}

export interface GetAvailableItemsResponse extends BaseResponse {
  items: Item[];
  marketplace: MarketplaceItem[];
}
