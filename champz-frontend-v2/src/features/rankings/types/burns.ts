import { BaseResponse } from "@/types/baseResponse";

export interface GetBurnsResponse extends BaseResponse {
  burn_leaderboard: BurnsLeaderBoard[];
  burn_leaderboard_daily: BurnLeaderBoardDaily[];
}

export interface BurnsLeaderBoard {
  player_name: string;
  wallet: string;
  burned_spores: number;
}

export interface BurnLeaderBoardDaily {
  player_name: string;
  wallet: string;
  amount: number;
  won: BurnRaffleWins[] | boolean;
  rank: number;
  qualified: number;
  id: number;
  player_src: string;
}

export interface BurnRaffleWins {
  amount: number;
  detail_src: string;
  src: string;
}
