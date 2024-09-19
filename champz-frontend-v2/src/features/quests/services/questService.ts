import { AxiosInstance } from "axios";
import { GetCurrentQuestsResponse, QuestType } from "../types/quests";

export class QuestService {
  constructor(private api: AxiosInstance) {}

  getCurrentQuests(): Promise<QuestType[]> {
    return this.api
      .post<GetCurrentQuestsResponse>(`/quests/current`)
      .then((resp) => {
        return resp.data.quests;
      });
  }
}
