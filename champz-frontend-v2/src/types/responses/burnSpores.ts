import { BaseResponse } from "@/types/baseResponse";
import { AuthenticatedGameConfig } from "./gameConfig";

export interface BurnSporesResponse
  extends BaseResponse,
    AuthenticatedGameConfig {}
