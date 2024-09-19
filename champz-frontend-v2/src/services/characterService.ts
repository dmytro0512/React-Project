import { GetCharListResponse } from "@/types/responses/charList";
import { GetExploreResponse } from "@/types/responses/explore";
import { GetFightReponse } from "@/types/responses/fight";
import { AxiosInstance } from "axios";

export class CharacterService {
  constructor(private api: AxiosInstance) {}

  forage(charId: number) {
    return this.api
      .post<GetCharListResponse>("/char/forage", { char: charId })
      .then((response) => {
        return response.data;
      });
  }

  unforage(charId: number) {
    return this.api
      .post<GetCharListResponse>("/char/unforage", { char: charId })
      .then((response) => {
        return response.data;
      });
  }

  revive(charId: number) {
    return this.api
      .post<GetCharListResponse>("/char/revive", { char: charId })
      .then((response) => {
        return response.data;
      });
  }

  heal(charId: number) {
    return this.api
      .post<GetCharListResponse>("/char/heal", { char: charId })
      .then((response) => {
        return response.data;
      });
  }

  rebirth(charId: number) {
    return this.api
      .post<GetCharListResponse>("/char/rebirth", { char: charId })
      .then((response) => {
        return response.data;
      });
  }

  lvlup(charId: number) {
    return this.api
      .post<GetCharListResponse>("/char/lvlup", { char: charId })
      .then((response) => {
        return response.data;
      });
  }

  lvldown(charId: number, lvl: number) {
    return this.api
      .post<GetCharListResponse>("/char/lvldown", { char: charId, lvl: lvl })
      .then((response) => {
        return response.data;
      });
  }

  equip(charId: number, slotId: number, itemId: number) {
    return this.api
      .post<GetCharListResponse>("/char/equip", {
        char: charId,
        slot_id: slotId,
        item_id: itemId,
      })
      .then((response) => {
        return response.data;
      });
  }

  unequip(charId: number, slotId: number, itemId: number) {
    return this.api
      .post<GetCharListResponse>("/char/unequip", {
        char: charId,
        slot_id: slotId,
        item_id: itemId,
      })
      .then((response) => {
        return response.data;
      });
  }

  explore(
    charId: number,
    decision_id?: number,
    answer?: string,
    journal_explore_id?: number,
    fight_id?: number,
  ) {
    return this.api
      .post<GetExploreResponse>("/char/explore", {
        char: charId,
        decision_id,
        answer,
        journal_explore_id,
        fight_id,
      })
      .then((response) => {
        return response.data;
      });
  }

  fight(fightId: number) {
    return this.api
      .post<GetFightReponse>("/char/fight", {
        fight_id: fightId,
      })
      .then((response) => {
        return response.data;
      });
  }
}
