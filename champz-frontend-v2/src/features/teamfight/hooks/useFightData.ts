import { useFightContext } from "./useFightContext";

export function useFightData() {
  const fightContext = useFightContext();

  const getBattleCharacter = (teamId: number, posId: number) => {
    if (fightContext.battleTeam === undefined) {
      return;
    }

    if (fightContext.battleTeam.length > 0) {
      const charIndex = fightContext.battleTeam?.findIndex(
        (protagonist) =>
          protagonist.team_id === teamId && protagonist.pos_id === posId,
      );
      return fightContext.battleTeam[charIndex];
    }
  };

  const getCountOfLivingCharacter = (teamId: number) => {
    if (fightContext.battleTeam === undefined) {
      return 0;
    }

    if (fightContext.battleTeam.length > 0) {
      const livingFightTeam = fightContext.battleTeam?.filter(
        (protagonist) => protagonist.team_id === teamId && protagonist.hp > 0,
      );

      return livingFightTeam.length;
    }

    return 0;
  };

  const getFirstLivingCharacterOfTeam = (teamId: number) => {
    if (fightContext.battleTeam === undefined) {
      return undefined;
    }

    if (fightContext.battleTeam.length > 0) {
      const livingFightTeam = fightContext.battleTeam?.filter(
        (protagonist) => protagonist.team_id === teamId && protagonist.hp > 0,
      );

      if (livingFightTeam.length === 0) {
        return undefined;
      }

      return livingFightTeam[0];
    }
  };

  const getNextLivingCharacterOfTeamWithoutCommand = (
    posId: number,
    teamId: number,
  ) => {
    if (fightContext.battleTeam === undefined) {
      return undefined;
    }

    if (fightContext.battleTeam.length > 0) {
      const livingFightTeamWithoutCommand = fightContext.battleTeam?.filter(
        (protagonist) =>
          protagonist.team_id === teamId &&
          protagonist.hp > 0 &&
          !fightContext.roundCommands?.some(
            (roundCommand) =>
              roundCommand.actor.pos_id === protagonist.pos_id &&
              roundCommand.actor.team_id === protagonist.team_id,
          ),
      );

      const fromCharacterIndex = livingFightTeamWithoutCommand.findIndex(
        (protagonist) => protagonist.pos_id === posId,
      );

      if (fromCharacterIndex !== -1) {
        // Remove the char we just gave an order to
        livingFightTeamWithoutCommand.splice(fromCharacterIndex, 1);
      }

      if (livingFightTeamWithoutCommand.length === 0) {
        return undefined;
      }

      for (let i = 0; i < livingFightTeamWithoutCommand.length; i++) {
        return livingFightTeamWithoutCommand[i];
      }
    }

    return undefined;
  };

  return {
    getBattleCharacter,
    getCountOfLivingCharacter,
    getNextLivingCharacterOfTeamWithoutCommand,
    getFirstLivingCharacterOfTeam,
  };
}
