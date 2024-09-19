export interface GetCurrentQuestsResponse {
  quests: QuestType[];
}

export interface QuestType {
  id: number;
  cfg_quest_id: number;
  wallet: string;
  active: Boolean;
  drawn_day: number;
  current_amount: number;
  dismissed: Boolean;
  redrawn: Boolean;
  completed: Boolean;
  slot_id: number;
  dismissed_day: number;
  redrawn_day: number;
  completed_day: number;
  claimable: Boolean;
  last_claim_day: number;
  claim_counter: number;
  streak_counter: number;
  valid_till_day: number;
  name: string;
  description: string;
  src: string;
  handler: string;
  required_amount: number;
  wallet_quest: Boolean;
  char_quest: Boolean;
  guild_quest: Boolean;
  probability_weight: number;
  free_to_play: Boolean;
  reward_loot_id: number;
  reward_loot_detail_id: number;
  fixed_quantity: number;
  display_name: string;
  loot_src: string;
  loot_detail_src: string;
}
