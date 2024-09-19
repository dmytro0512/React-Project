import { BaseResponse } from "@/types/baseResponse";

export interface CustomStatisticsResponse extends BaseResponse {
  statistics: CustomStatistic[];
}

export interface CustomStatisticResponse extends BaseResponse {
  statistic: CustomStatistic;
}

export interface CustomStatistic {
  id: number;
  slot?: number;
  name: string;
  handler: string;
  value?: number;
}
