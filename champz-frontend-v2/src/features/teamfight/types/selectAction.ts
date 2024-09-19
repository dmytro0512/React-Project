import { Ability } from "@/types/responses/charList";
import { Protagonist } from "./teamfight";

export interface SelectActionProps {
  setSelectedActor: (protagonist: Protagonist) => void;
  selectedActor: Protagonist;
  setSelectedAbility: (ability: Ability) => void;
  selectedAbility: Ability;
}
