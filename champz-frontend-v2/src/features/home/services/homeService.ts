import { Daylog, GetDaylogResponse } from "@/features/home/types/daylog";
import { AxiosInstance } from "axios";

export class HomeService {
  constructor(private api: AxiosInstance) {}

  getDaylog(): Promise<Daylog[]> {
    return this.api.get<GetDaylogResponse>(`/game/daylog/0`).then((resp) => {
      return resp.data.day_log;
    });
  }
}
