import { BaseResponse } from "../baseResponse";
import { CustomStatistic } from "./customStatistics";
import { AuthenticatedGame } from "./gameConfig";

export interface HomeScreenResponse extends BaseResponse {
  game: AuthenticatedGame[];
  statistics: CustomStatistic[];
}
