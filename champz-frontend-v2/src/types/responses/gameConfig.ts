// ToDo fix types
/* eslint-disable @typescript-eslint/no-explicit-any */

import { BaseResponse } from "@/types/baseResponse";

export interface GameConfig extends BaseResponse {
  host: string;
  game: Game;
}

export interface AuthenticatedGameConfig extends BaseResponse {
  game: AuthenticatedGame;
}

export interface LatestNewsResponse extends BaseResponse {
  news: News[];
}

export interface AuthenticatedGame {
  active_day: number;
  game_paused: boolean;
  login_logo: string;
  fight_debug: boolean;
  version: string;
  news: News;
  player: Player;
}

export interface Game {
  max_chars: number;
  game_paused: number;
  player?: any;
  error?: any;
  news?: any;
  active_day: number;
  charlist_time?: any;
  char_limit?: any;
  default_fight_bg: string;
  login_logo: string;
  quest_notification?: any;
  nfts_active: number;
  version: string;
}

export interface News {
  src: string;
  floating_text: string;
  explanation_text: string;
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
  anniversary_comic_seen: boolean;
  guild_id: number;
  last_login_day: number;
  is_game_wallet: boolean;
  free_to_play: boolean;
  p2c_chars_to_roll: number;
  unnotified_player_rev_shares: any[];
  canRollFreeToPlay: boolean;
  canCreateChar: boolean;
  new_notification: boolean;
  name: string;
  exp: number;
  output_exp: number;
  lvl: number;
}

export interface News {
  id: number;
  floating_text: string;
  explanation_text: string;
  active: boolean;
}
