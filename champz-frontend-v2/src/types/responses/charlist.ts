// ToDo fix types
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Item } from "@/features/inventory/types/items";
import { PrimaryTarget } from "@/features/teamfight/types/teamfight";
import { BaseResponse } from "@/types/baseResponse";
import { AuthenticatedGame } from "./gameConfig";

export interface GetCharListResponse extends BaseResponse {
  charlist: Char[];
  game: AuthenticatedGame;
}

export interface Player {
  wallet: string;
  blocked: boolean;
  spores_balance: number;
  truffle_balance: number;
  latest_version?: any;
  auto_show_fight_info: boolean;
  default_animation_speed: number;
  latest_howto_seen: boolean;
  teamfight_intro_seen: boolean;
  guild_id: number;
  last_login_day: number;
  is_game_wallet: boolean;
  canRollFreeToPlay: boolean;
  canCreateChar: boolean;
}

export interface Charlisttime {
  char_equipment: number;
  token_balance: number;
  char_stats: number;
  char_attributes: number;
  char_activities: number;
  char_abilities: number;
}

export interface News {
  id: number;
  floating_text: string;
  explanation_text: string;
  active: boolean;
}

export interface Char {
  id: number;
  owner: string;
  name: string;
  status: string;
  status_id: number;
  class: string;
  src: string;
  weapon_class: string;
  lvl: number;
  play2claim: boolean;
  play2claim_roll_day: number;
  play2claim_reward_day: number;
  play2claim_login_counter: number;
  bonus_hp_percentage: number;
  bonus_mana_percentage: number;
  bonus_attack_percentage: number;
  bonus_defense_percentage: number;
  bonus_heal_percentage: number;
  bonus_forage_percentage: number;
  bonus_exp_percentage: number;
  speed: number;
  status_fight_id?: number;
  status_lss_fight_id: number;
  min_exp: number;
  max_exp: number;
  hp_base: number;
  mana_base: number;
  attack_min: number;
  attack_max: number;
  defense: number;
  spores_equip_cost: number;
  primary_attribute: string;
  primary_attribute_min: number;
  primary_attribute_max: number;
  rebirth_counter: number;
  nft_id: number;
  nft_owner: string;
  claimed: boolean;
  locked: boolean;
  free_to_play: boolean;
  weapon_class_id: number;
  ap: number;
  exp: number;
  equipment: Equipment;
  hp: number;
  mana: number;
  text_attributes: Attribute[];
  play2claim_days_left: number;
  play2claim_level_to_reach: number;
  play2claim_target_login_count: number;
  activities: Activity[];
  abilities: Ability[];
}

export interface Attribute {
  text_attribute: string;
  src: string;
  prefix?: string;
  value?: number;
  postfix?: string;
  secondary_value?: number;
  is_primary_attribute?: boolean;
}

export interface Ability {
  attack_effect?: string;
  order_no: number;
  basic_ability?: boolean;
  can_use: boolean;
  description: string;
  handler: string;
  icon_src: string;
  mana_cost: number;
  name: string;
  id?: number;
  self_cast?: number;
  primary_targets: PrimaryTarget[];
}

export interface Activity {
  activity_id: number;
  when_status: number;
  display_name: string;
  display_icon: string;
  handler: string;
  active_status: string;
  ap_cost: number;
  spores_cost: number;
  show_prompt: boolean;
  main_action: boolean;
  prompt_question: string;
  prompt_line2: string;
  prompt_line3: string;
  prompt_line4: string;
}

export interface Equipment {
  attack_item: Item | Record<string, never>;
  defense_item: Item | Record<string, never>;
  special_item: Item | Record<string, never>;
}
