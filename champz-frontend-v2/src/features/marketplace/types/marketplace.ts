import { BaseResponse } from "@/types/baseResponse";
import { Attribute } from "@/types/responses/charList";

export interface GetMarketplaceListResponse extends BaseResponse {
  marketplace: MarketplaceItem[];
}

export interface MarketplaceItem {
  marketplace_id: number;
  item_id: number;
  currency_id: number;
  name: string;
  price_per_unit: number;
  due_epoch: number;
  quantity: number;
  text_attributes: Attribute[];
}
