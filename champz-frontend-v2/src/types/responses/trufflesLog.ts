import { BaseResponse } from "@/types/baseResponse";
import { AuthenticatedGame } from "./gameConfig";

export interface TrufflesLogResponse extends BaseResponse {
  truffles_log: TrufflesLog[];
}

export interface TrufflesRateResponse extends BaseResponse {
  min_swap: number;
  truffles_rate: number;
}

export interface SwapTrufflesResponse extends BaseResponse {
  game: AuthenticatedGame;
}

export interface TrufflesLog {
  id: number;
  amount: number;
  day: number;
  reason: string;
  timestamp: string;
}
