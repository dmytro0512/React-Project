import { BurnSporesResponse } from "@/types/responses/burnSpores";
import { GetCharListResponse } from "@/types/responses/charList";

import {
  AuthenticatedGameConfig,
  GameConfig,
  LatestNewsResponse,
} from "@/types/responses/gameConfig";
import { TrufflesRateResponse } from "@/types/responses/trufflesLog";
import { AxiosInstance } from "axios";

export class GameService {
  constructor(private api: AxiosInstance) {}

  getGameConfig(): Promise<GameConfig> {
    return this.api.get<GameConfig>("/game/config").then((resp) => {
      return resp.data;
    });
  }

  getAuthenticatedGameConfig(): Promise<AuthenticatedGameConfig> {
    return this.api
      .post<AuthenticatedGameConfig>("/game/config")
      .then((resp) => {
        return resp.data;
      });
  }

  getLatestNews(): Promise<LatestNewsResponse> {
    return this.api
      .get<LatestNewsResponse>("/game/getLatestNews")
      .then((response) => {
        return response.data;
      });
  }

  getCharlist() {
    return this.api
      .post<GetCharListResponse>("/game/charlist")
      .then((response) => {
        return response.data.charlist;
      });
  }
  
  getTruffleRates() {
    return this.api
      .post<TrufflesRateResponse>("/game/truffles/rates")
      .then((response) => {
        return response.data;
      });
  }
  burnSpores(amount: number | null) {
    return this.api
      .post<BurnSporesResponse>("/game/spores/burn", { burn: amount })
      .then((response) => {
        return response.data;
      });
  }
}
