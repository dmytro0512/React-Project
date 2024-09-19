import { Fight } from "@/features/teamfight/types/teamfight";
import { GetCharListResponse } from "./charList";

export interface GetFightReponse extends GetCharListResponse {
  fight: Fight;
}
