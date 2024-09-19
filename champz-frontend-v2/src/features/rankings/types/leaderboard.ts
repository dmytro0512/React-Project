export interface PvPLeaderBoard extends LeaderBoard {
  wins: number;
  losses: number;
  guild_name: string;
}

export interface LeaderBoard {
  id: number;
  player_name: string;
  wallet: string;
  guild_name: string;
  sorted_amount: number;
  rank: number;
  player_src: string;
}
