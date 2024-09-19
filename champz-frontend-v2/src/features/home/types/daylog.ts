import { BaseResponse } from "@/types/baseResponse";

export interface GetDaylogResponse extends BaseResponse {
  day_log: Daylog[];
}

export interface Daylog {
  id: number;
  day: number;
  log: string;
  timestamp: string;
}
