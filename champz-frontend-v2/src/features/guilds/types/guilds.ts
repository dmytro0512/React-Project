import { Consumable, Item } from "@/features/inventory/types/items";
import { Player } from "@/types/responses/gameConfig";

export interface Guild {
  id: number;
  member_count: number;
  name: string;
  abbreviation: string;
  description: string;
  src: string;
  chat_room: string;
  creation_timestamp: string;
  update_timestamp: string;
  member_list?: GuildMember[];
  treasury_spores?: number;
  treasury_truffles?: number;
  treasury_items?: Item[] | Consumable[];
  role_list?: GuildRole[];
}

export interface GuildAssignment extends Guild {
  assign_roles: boolean;
  edit_guild: boolean;
  guild_id: number;
  handle_join_requests: boolean;
  invite_member: boolean;
  is_founder_role: boolean;
  is_landing_role: boolean;
  join_request: boolean;
  kick_member: boolean;
  maintain_roles: boolean;
  player_name: string;
  role_id: number;
  role_name: string;
  src: string;
  use_consumable_treasury: boolean;
  use_item_treasury: boolean;
  use_spores_treasury: boolean;
  use_truffles_treasury: boolean;
  wallet: string;
}

export interface GuildMember extends GuildRole, Player {
  member_id: number;
}

export interface GuildRole {
  id: number;
  role_id?: number;
  assign_roles: boolean;
  edit_guild: boolean;
  handle_join_reqests: boolean;
  invite_member: boolean;
  is_founder_role: boolean;
  is_landing_role: boolean;
  join_request: boolean;
  kick_member: boolean;
  maintain_roles: boolean;
  role_name: string;
  use_consumable_treasury: boolean;
  use_item_treasury: boolean;
  use_spores_treasury: boolean;
  use_truffles_treasury: boolean;
}

export interface GuildLog {
  day: number;
  guild_id: number;
  id: string;
  message: string;
  timestamp: string;
}
