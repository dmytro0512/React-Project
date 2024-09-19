export interface BaseResponse {
  success: boolean;
  status?: string;
}

export interface BaseResponseWithPlayerName extends BaseResponse {
  player_name: string;
}
