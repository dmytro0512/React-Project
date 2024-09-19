import { createContext, PropsWithChildren, Ref, useRef, useState } from "react";
import {
  Fight,
  FightRound,
  FightRoundAction,
  Protagonist,
  RoundCommand,
} from "../types/teamfight";
import { Ability } from "@/types/responses/charList";

export interface TeamFightContextInterface {
  roundCommands?: RoundCommand[];
  selectedActor?: Protagonist;
  selectedAbility?: Ability;
  battleTeam?: Protagonist[];
  fight?: Fight;
  currentActionRef?: Ref<FightRoundAction>;
  latestRoundRef?: Ref<FightRound>;
  setRoundCommands: (roundCommands: RoundCommand[]) => void;
  setSelectedActor: (protagonist: Protagonist | undefined) => void;
  setSelectedAbility: (ability: Ability | undefined) => void;
  setBattleTeam: (battleteam: Protagonist[]) => void;
  setFight: (fight: Fight) => void;
}

export const TeamFightContext = createContext<
  TeamFightContextInterface | undefined
>(undefined);

export function TeamFightContextProvider(props: PropsWithChildren) {
  const [selectedActor, setSelectedActor] = useState<Protagonist>();
  const [selectedAbility, setSelectedAbility] = useState<Ability>();
  const [fight, setFight] = useState<Fight>({
    id: 0,
    background_src: "",
    is_team_fight: false,
    teams: [],
    current_round: 0,
    rounds: [],
  });

  const [battleTeam, setBattleTeam] = useState<Protagonist[]>([]);
  const [roundCommands, setRoundCommands] = useState<RoundCommand[]>([]);
  const currentActionRef = useRef<FightRoundAction | undefined>();
  const latestRoundRef = useRef<FightRound | undefined>();

  const handleSetFight = (fight: Fight) => {
    console.log("handleSetFight");
    setFight(fight);
    const battleTeam: Protagonist[] = [];
    fight.teams.forEach((team) => {
      team.pos.forEach((protagonist) => {
        battleTeam.push(protagonist.protagonist);
      });
    });
    setBattleTeam(battleTeam);
  };

  const context = {
    selectedActor: selectedActor,
    setSelectedActor: setSelectedActor,
    selectedAbility: selectedAbility,
    setSelectedAbility: setSelectedAbility,
    battleTeam: battleTeam,
    setBattleTeam: setBattleTeam,
    fight: fight,
    setFight: handleSetFight,
    roundCommands: roundCommands,
    setRoundCommands: setRoundCommands,
    currentActionRef: currentActionRef,
    latestRoundRef: latestRoundRef,
  };

  return (
    <>
      <TeamFightContext.Provider value={context}>
        {props.children}
      </TeamFightContext.Provider>
    </>
  );
}
