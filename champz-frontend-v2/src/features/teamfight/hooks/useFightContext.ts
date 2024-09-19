import { useContext } from "react";
import { TeamFightContext } from "../contexts/TeamFightContext";

export function useFightContext() {
  const fightContext = useContext(TeamFightContext);
  if (!fightContext) {
    throw Error("Error initiating FightContext");
  }

  return fightContext;
}
