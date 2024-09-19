import { GetCharListResponse } from "./charList";

export interface GetExploreResponse extends GetCharListResponse {
  explore: ExploreType;
}

export interface ExploreType {
  active: Boolean;
  active_explore_part: number;
  journal_explore_id: number;
  explore_parts: ExplorePart[];
}

export interface ExplorePart {
  src: string;
  text: string;
  id: number;
  has_decisions: Boolean;
  is_final: Boolean;
  is_start_event: Boolean;
  requires_text: Boolean;
  decisions?: ExploreDecision[];
}

export interface ExploreAction {
  index?: number;
  answer?: string;  
  journal_explore_id?: number;
  decision?: ExploreDecision;
}

export interface ExploreDecision {
  id: number;
  outcome_display: string;
  spores_cost: number;
}
