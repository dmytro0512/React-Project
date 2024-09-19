import { BaseResponse } from "@/types/baseResponse";

export interface SporesLogResponse extends BaseResponse {
  burned_by_player: number;
  burned_by_player_current_day: number;
  spores_transactions: SporesLog[];
}

export interface SporesLog {
  id: number;
  amount: number;
  day: number;
  reason: string;
  timestamp: string;
}