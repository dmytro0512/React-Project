import {
  ConsumableListResponse,
  GetAvailableItemsResponse,
  ItemListResponse,
} from "@/types/responses/itemList";
import { GetItemRecipeListResponse } from "@/types/responses/itemRecipeList";
import { AxiosInstance } from "axios";

export class ItemService {
  constructor(private api: AxiosInstance) {}

  getAllItems() {
    return this.api.get<ItemListResponse>("/items/all").then((response) => {
      return response.data.itemlist;
    });
  }

  getAllConsumables() {
    return this.api
      .get<ConsumableListResponse>("/consumables/all")
      .then((response) => {
        return response.data.consumables;
      });
  }

  getRecipes() {
    return this.api
      .post<GetItemRecipeListResponse>("/items/forge/getRecipes")
      .then((response) => {
        return response.data.itemlist;
      });
  }

  getAvailableItems() {
    return this.api
      .post<GetAvailableItemsResponse>("/items/available")
      .then((response) => {
        return response.data.items;
      });
  }

  delist(itemId?: number, consumableId?: number) {
    return this.api
      .post<GetAvailableItemsResponse>("/items/marketplace/delist", {
        itemId,
        consumableId,
      })
      .then((response) => {
        return response.data;
      });
  }

  getMarketplaceHistory(itemId: number) {
    return this.api
      .post<GetAvailableItemsResponse>("/items/marketplace/getHistory/item", {
        item_id: itemId,
      })
      .then((response) => {
        return response.data.marketplace_transactions;
      });
  }
}
