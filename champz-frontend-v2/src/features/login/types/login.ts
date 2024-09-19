import { BaseResponse } from "@/types/baseResponse";

export interface LoginResponse extends BaseResponse {
  sufficient_token: boolean;
}
