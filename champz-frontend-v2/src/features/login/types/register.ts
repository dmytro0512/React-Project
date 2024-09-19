import { BaseResponse } from "@/types/baseResponse";

export interface RegisterResponse extends BaseResponse {
  jwt?: string;
}
