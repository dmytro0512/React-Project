import { AxiosInstance } from "axios";
import { GetBurnsResponse } from "../types/burns";
import {
  GetLeaderboardResponse,
  GetTotalPvpWinsResponse,
} from "@/types/responses/leaderboard";

export class RankingService {
  constructor(private api: AxiosInstance) {}

  getDonationLeaderboard() {
    return this.api
      .get<GetLeaderboardResponse>("leaderboard/donation")
      .then((resp) => {
        return resp.data.leaderboard;
      });
  }

  getBurnLeaderboard() {
    return this.api
      .get<GetLeaderboardResponse>("leaderboard/burn")
      .then((resp) => {
        return resp.data.leaderboard;
      });
  }

  getTotalPvpWinLeaderboard() {
    return this.api
      .get<GetTotalPvpWinsResponse>("leaderboard/pvp/wins")
      .then((resp) => {
        return resp.data.leaderboard;
      });
  }

  getLoginStreakLeaderboard() {
    return this.api
      .get<GetLeaderboardResponse>("leaderboard/login")
      .then((resp) => {
        return resp.data.leaderboard;
      });
  }

  getBurnsPerDay(day: number) {
    return this.api
      .get<GetBurnsResponse>("leaderboard/burn/day/" + day)
      .then((resp) => {
        return resp.data;
      });
  }
}
