import { Item } from "@/features/inventory/types/items";
import { BaseResponse } from "@/types/baseResponse";

export interface GetItemRecipeListResponse extends BaseResponse {
  itemlist: Item[];  
}
