import { Consumable, Item } from "@/features/inventory/types/items";
import { BaseResponse } from "@/types/baseResponse";
import {
  CustomStatisticResponse,
  CustomStatisticsResponse,
} from "@/types/responses/customStatistics";
import { EthDropResponse } from "@/types/responses/ethClaimHistoryLog";
import { HomeScreenResponse } from "@/types/responses/homeScreen";
import {
  ConsumableListResponse,
  ItemListResponse,
} from "@/types/responses/itemList";
import { SporesLogResponse } from "@/types/responses/sporesLog";
import {
  SwapTrufflesResponse,
  TrufflesLogResponse,
} from "@/types/responses/trufflesLog";
import { AxiosInstance } from "axios";

export class PlayerService {
  constructor(private api: AxiosInstance) {}

  getHomeScreen(): Promise<HomeScreenResponse> {
    return this.api
      .post<HomeScreenResponse>("/player/home")
      .then((response) => {
        return response.data;
      });
  }

  getItemList(): Promise<Item[]> {
    return this.api
      .post<ItemListResponse>("/player/itemlist")
      .then((response) => {
        return response.data.itemlist;
      });
  }

  getConsumableList(): Promise<Consumable[]> {
    return this.api
      .post<ConsumableListResponse>("/consumables/all")
      .then((response) => {
        return response.data.consumables;
      });
  }

  getSporesLog() {
    return this.api
      .post<SporesLogResponse>("/player/spores_log")
      .then((response) => {
        return response.data;
      });
  }

  getTrufflesLog() {
    return this.api
      .post<TrufflesLogResponse>("/player/truffles/log")
      .then((response) => {
        return response.data;
      });
  }

  getEthClaimHistoryLog() {
    return this.api
      .post<EthDropResponse>("/player/drops/claimed")
      .then((response) => {
        return response.data;
      });
  }

  getEthClaimableList() {
    return this.api
      .post<EthDropResponse>("/player/eth/claimable")
      .then((response) => {
        return response.data;
      });
  }

  getStatisticsList() {
    return this.api
      .post<CustomStatisticsResponse>("/player/statistics/getList")
      .then((response) => {
        return response.data;
      });
  }

  getCustomStatisticsList() {
    return this.api
      .post<CustomStatisticsResponse>("/player/statistics/getCustomList")
      .then((response) => {
        return response.data;
      });
  }

  getCustomStatistic(slot: number) {
    return this.api
      .post<CustomStatisticResponse>("/player/statistics/getCustomStatistic", {
        slot_id: slot,
      })
      .then((response) => {
        return response.data;
      });
  }

  removeCustomStatistic(slot: number) {
    return this.api
      .post<BaseResponse>("/player/statistics/removeCustomStatistic", {
        slot_id: slot,
      })
      .then((response) => {
        return response.data;
      });
  }

  addCustomStatistic(slot: number, id: number) {
    return this.api
      .post<BaseResponse>("/player/statistics/addCustomStatistic", {
        slot_id: slot,
        stats_id: id,
      })
      .then((response) => {
        return response.data;
      });
  }

  swapTrufflesToETH(amount: number) {
    return this.api
      .post<SwapTrufflesResponse>("/player/truffles/swap/ETH", {
        amount,
      })
      .then((response) => {
        return response.data;
      });
  }
}
