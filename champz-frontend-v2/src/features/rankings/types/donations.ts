import { BaseResponse } from "@/types/baseResponse";

export interface GetDonationsResponse extends BaseResponse {
  donation_leaderboard: Donation[];
}

export interface Donation {
  player_name: string;
  wallet: string;
  donated: number;
}
