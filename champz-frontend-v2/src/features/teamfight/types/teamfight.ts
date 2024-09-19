import { Ability, Equipment } from "@/types/responses/charList";
import { BoxProps } from "@mui/material";

export interface Fight {
  background_src: string;
  id: number;
  is_team_fight: boolean;
  current_round: number;
  rounds: FightRound[];
  teams: FightTeam[];
}

export interface FightRound {
  round_id: number;
  actions: FightRoundAction[];
  debugLog?: string[];
}

export interface FightRoundAction {
  action_id: number;
  actor?: Protagonist;
  targets: Protagonist[];
}

export interface FightTeam {
  team_id: number;
  player: string;
  player_name: string;
  player_team: boolean;
  pos: FightTeamPosition[];
}

export interface FightTeamPosition {
  pos_id: number;
  protagonist: Protagonist;
}

export interface Protagonist {
  abilities: Ability[];
  attack_effects: string;
  attack_max: number;
  attack_max_base: number;
  attack_min: number;
  attack_min_base: number;
  defense: number;
  defense_base: number;
  effective_attack_max?: number;
  effective_attack_min?: number;
  effective_defense?: number;
  equipment: Equipment[];
  hp: number;
  hp_base: number;
  hp_max: number;
  hp_start: number;
  hp_new: number;
  id: number;
  lvl: number;
  mana: number;
  mana_base: number;
  mana_max: number;
  mana_start: number;
  name: string;
  pos_id: number;
  src: string;
  src_path: string;
  starting_equipment: Equipment[];
  status_effects: StatusEffect[];
  team_id: number;
  weapon_class_id: number;
  fightAnimationClass?: string;
  action_type?: string;
  hitEffect?: string;
}

export interface StatusEffect {
  active: boolean;
  icon: string;
  name: string;
  ticks: number;
}

export interface PrimaryTarget extends Target {
  secondary_targets: Target[];
}

export interface Target {
  pos_id: number;
  team_id: number;
}

export interface BattleCharacterDisplayProps extends BoxProps {
  protagonist: Protagonist;
  isTargetable: boolean;
  isSelected: boolean;
  isSelectable: boolean;
  selectActor(protagonist: Protagonist): void;
  selectTarget(protagonist: Protagonist): void;
  selectAbility(ability: Ability): void;
  selectedAbility?: Ability;
  onAnimationEnd(): void;
  className?: string;
}

export interface BattleFieldProps {}

export interface SelectedActorSetterAndGetterProps {
  selectedActor: Protagonist;
  setSelectedActor: (protagonist: Protagonist) => void;
}

export interface SelectedActorGetterProps {
  selectedActor: Protagonist;
}

export interface BattleCharacterControlProps extends BattleFieldProps {
  teamId: number;
  posId: number;
}

export interface CommandActor {
  pos_id: number;
  team_id: number;
}

export interface RoundCommand {
  action: string;
  actor: CommandActor;
  target: CommandActor;
  secondary_targets?: CommandActor[];
}
