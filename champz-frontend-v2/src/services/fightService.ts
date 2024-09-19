import { RoundCommand } from "@/features/teamfight/types/teamfight";
import { GetFightReponse } from "@/types/responses/fight";
import { AxiosInstance } from "axios";

export class FightService {
  constructor(private api: AxiosInstance) {}

  nextRound(fightId: number, roundCommands?: RoundCommand[]) {
    return this.api
      .post<GetFightReponse>("/fight/nextRound", {
        fight_id: fightId,
        roundCommands,
      })
      .then((response) => {
        return response.data;
      });
  }
}
