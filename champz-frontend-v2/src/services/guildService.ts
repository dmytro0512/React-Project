import { Guild } from "@/features/guilds/types/guilds";
import { BaseResponse, BaseResponseWithPlayerName } from "@/types/baseResponse";
import {
  GetGuildAssignmentResponse,
  GetGuildLogResponse,
  GetGuildMainResponse,
  GetGuildsResponse,
} from "@/types/responses/guilds";
import { AxiosInstance } from "axios";

export class GuildService {
  constructor(private api: AxiosInstance) {}

  getAllGuilds(): Promise<Guild[]> {
    return this.api.get<GetGuildsResponse>(`/guild/list`).then((resp) => {
      return resp.data.guilds;
    });
  }

  create(
    name: string,
    abbreviation: string,
    description: string,
    logo: string,
  ) {
    return this.api
      .post<BaseResponse>("/guild/create", {
        name,
        abbreviation,
        description,
        logo,
      })
      .then((response) => {
        return response.data;
      });
  }

  update(
    guild_id: number,
    name: string,
    abbreviation: string,
    description: string,
    logo: string,
  ) {
    return this.api
      .post<BaseResponse>("/guild/udpate", {
        guild_id,
        name,
        abbreviation,
        description,
        logo,
      })
      .then((response) => {
        return response.data;
      });
  }

  joinRequest(guild_id: number) {
    return this.api
      .post<BaseResponse>("/guild/request", {
        guild_id,
      })
      .then((response) => {
        return response.data;
      });
  }

  cancelJoinRequest(guild_id: number) {
    return this.api
      .post<BaseResponse>("/guild/request/cancel", {
        guild_id,
      })
      .then((response) => {
        return response.data;
      });
  }

  leaveGuild(guild_id: number) {
    return this.api
      .post<BaseResponse>("/guild/leave/", {
        guild_id,
      })
      .then((response) => {
        return response.data;
      });
  }

  getMain(guild_id: number) {
    return this.api
      .post<GetGuildMainResponse>("/guild/main", {
        guild_id,
      })
      .then((response) => {
        return response.data;
      });
  }

  getLog(guild_id: number) {
    return this.api
      .post<GetGuildLogResponse>("/guild/log", {
        guild_id,
      })
      .then((response) => {
        return response.data;
      });
  }

  getGuildAssignment() {
    return this.api
      .post<GetGuildAssignmentResponse>("/guild/assignment", {})
      .then((response) => {
        return response.data;
      });
  }

  getTreasury(guild_id: number) {
    return this.api
      .post<GetGuildMainResponse>("/guild/treasury", {
        guild_id,
      })
      .then((response) => {
        return response.data;
      });
  }

  getGuildRoles(guild_id: number) {
    return this.api
      .post<GetGuildMainResponse>("/guild/roles", {
        guild_id,
      })
      .then((response) => {
        return response.data;
      });
  }

  acceptJoinRequest(guild_id: number, wallet: string) {
    return this.api
      .post<BaseResponseWithPlayerName>("/guild/member/accept", {
        guild_id,
        wallet,
      })
      .then((response) => {
        return response.data;
      });
  }

  declineJoinRequest(guild_id: number, wallet: string) {
    return this.api
      .post<BaseResponseWithPlayerName>("/guild/member/decline", {
        guild_id,
        wallet,
      })
      .then((response) => {
        return response.data;
      });
  }

  kickMember(guild_id: number, wallet: string) {
    return this.api
      .post<BaseResponseWithPlayerName>("/guild/member/kick", {
        guild_id,
        wallet,
      })
      .then((response) => {
        return response.data;
      });
  }

  updateRoleAuthorization(
    guild_id: number,
    role_id: number,
    authorization: string,
    new_value: boolean,
  ) {
    return this.api
      .post<GetGuildMainResponse>("/guild/roles/upd_auth", {
        guild_id,
        role_id,
        authorization,
        new_value,
      })
      .then((response) => {
        return response.data;
      });
  }

  updateRoleName(guild_id: number, role_id: number, name: string) {
    return this.api
      .post<GetGuildMainResponse>("/guild/roles/upd_name", {
        guild_id,
        role_id,
        name,
      })
      .then((response) => {
        return response.data;
      });
  }

  newRole(guild_id: number) {
    return this.api
      .post<GetGuildMainResponse>("/guild/roles/new", {
        guild_id,
        name: "New Role",
      })
      .then((response) => {
        return response.data;
      });
  }

  deleteRole(guild_id: number, role_id: number) {
    return this.api
      .post<GetGuildMainResponse>("/guild/roles/del", {
        guild_id,
        role_id,
      })
      .then((response) => {
        return response.data;
      });
  }

  changeRoleAssignment(guild_id: number, role_id: number, member: string) {
    return this.api
      .post<GetGuildMainResponse>("/guild/roles/assign", {
        guild_id,
        role_id,
        member,
      })
      .then((response) => {
        return response.data;
      });
  }

  depositItems(guild_id: string, itemList: number[]) {
    return this.api
      .post<BaseResponse>("/guild/treasury/deposit/items", {
        guild_id,
        itemlist: itemList,
      })
      .then((response) => {
        return response.data;
      });
  }

  withdrawItems(guild_id: string, itemList: number[], member: string) {
    return this.api
      .post<BaseResponse>("/guild/treasury/withdraw/items", {
        guild_id,
        itemlist: itemList,
        member,
      })
      .then((response) => {
        return response.data;
      });
  }

  depositSpores(guild_id: number, amount: number) {
    return this.api
      .post<BaseResponse>("/guild/treasury/deposit/spores", {
        guild_id,
        amount,
      })
      .then((response) => {
        return response.data;
      });
  }

  withdrawSpores(guild_id: number, amount: number, member: string) {
    return this.api
      .post<BaseResponse>("/guild/treasury/withdraw/spores", {
        guild_id,
        amount,
        member,
      })
      .then((response) => {
        return response.data;
      });
  }

  depositTruffles(guild_id: number, amount: number) {
    return this.api
      .post<BaseResponse>("/guild/treasury/deposit/truffles", {
        guild_id,
        amount,
      })
      .then((response) => {
        return response.data;
      });
  }

  withdrawTruffles(guild_id: number, amount: number, member: string) {
    return this.api
      .post<BaseResponse>("/guild/treasury/withdraw/truffles", {
        guild_id,
        amount,
        member,
      })
      .then((response) => {
        return response.data;
      });
  }
}
