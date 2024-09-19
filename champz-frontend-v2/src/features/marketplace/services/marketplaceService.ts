import { AxiosInstance } from "axios";
import {
  GetMarketplaceListResponse,
  MarketplaceItem,
} from "../types/marketplace";

export class MarketplaceService {
  constructor(private api: AxiosInstance) {}

  getMarketplaceList(): Promise<MarketplaceItem[]> {
    return this.api
      .get<GetMarketplaceListResponse>(`/marketplace/list`)
      .then((resp) => {
        return resp.data.marketplace;
      });
  }
}
