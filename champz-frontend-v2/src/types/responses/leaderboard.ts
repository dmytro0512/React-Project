import {
  LeaderBoard,
  PvPLeaderBoard,
} from "@/features/rankings/types/leaderboard";
import { BaseResponse } from "../baseResponse";

export interface GetDonationsResponse extends BaseResponse {
  donation_leaderboard: LeaderBoard[];
}

export interface GetLeaderboardResponse extends BaseResponse {
  leaderboard: LeaderBoard[];
}

export interface GetTotalPvpWinsResponse extends BaseResponse {
  leaderboard: PvPLeaderBoard[];
}

export interface GetLoginLeaderboardResponse extends BaseResponse {
  leaderboard: LeaderBoard[];
}
