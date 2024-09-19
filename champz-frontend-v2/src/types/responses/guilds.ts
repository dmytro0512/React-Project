import { BaseResponse } from "@/types/baseResponse";
import {
  Guild,
  GuildAssignment,
  GuildLog,
} from "@/features/guilds/types/guilds";

export interface GetGuildsResponse extends BaseResponse {
  guilds: Guild[];
  max_member: number;
}

export interface GetGuildMainResponse extends BaseResponse {
  guild: Guild;
}

export interface GetGuildAssignmentResponse extends BaseResponse {
  guild: GuildAssignment;
}

export interface GetGuildLogResponse extends BaseResponse {
  log: GuildLog[];
}
