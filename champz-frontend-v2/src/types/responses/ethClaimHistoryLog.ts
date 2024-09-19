import { BaseResponse } from "@/types/baseResponse";

export interface EthDropResponse extends BaseResponse {
  drops_eth: EthDrop[];
}

export interface EthDrop {
  amount: number;
  id: number;
  src: string;
  claim_timestamp: number;
}
