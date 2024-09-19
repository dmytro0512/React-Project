import { Protagonist, RoundCommand } from "../types/teamfight";
import { Ability } from "@/types/responses/charList";
import { useFightContext } from "./useFightContext";
import { useFightData } from "./useFightData";

export function useSelection() {
  const fightContext = useFightContext();
  const {
    getCountOfLivingCharacter,
    getNextLivingCharacterOfTeamWithoutCommand,
  } = useFightData();

  const selectActor = (protagonist: Protagonist) => {
    fightContext.setSelectedActor(protagonist);

    const selectedActorExistingRoundCommandIndex =
      getSelectedActorsRoundCommandIndex(
        protagonist.team_id,
        protagonist.pos_id,
      );

    if (selectedActorExistingRoundCommandIndex === -1) {
      fightContext.setSelectedAbility(protagonist.abilities[0]);
    } else {
      fightContext.setSelectedAbility(undefined);
    }
  };

  const selectAbility = (ability: Ability) => {
    fightContext.setSelectedAbility(ability);
  };

  const setRoundCommand = (
    newCommand: RoundCommand,
    newCommandIndex?: number,
  ) => {
    if (newCommandIndex !== undefined && newCommandIndex !== -1) {
      const newRoundCommands = [
        ...(fightContext.roundCommands as RoundCommand[]),
      ];
      newRoundCommands[newCommandIndex] = newCommand;
      fightContext.setRoundCommands(newRoundCommands);
      return;
    }

    const newRoundCommands = [
      ...(fightContext.roundCommands as RoundCommand[]),
    ];
    newRoundCommands.push(newCommand);
    fightContext.setRoundCommands(newRoundCommands);
    return;
  };

  const selectTarget = (target: Protagonist) => {
    const selectedActor = fightContext.selectedActor as Protagonist;
    const selectedAbility = fightContext.selectedAbility as Ability;

    if (selectedActor === undefined || selectedAbility === undefined) {
      return;
    }

    // Check if valid primary target
    const primaryTargetIndex = selectedAbility.primary_targets.findIndex(
      (primary_target) =>
        primary_target.team_id === target.team_id &&
        primary_target.pos_id === target.pos_id,
    );
    if (primaryTargetIndex === -1) {
      return;
    }

    const newCommand = {
      action: selectedAbility.handler,
      actor: {
        team_id: selectedActor.team_id,
        pos_id: selectedActor.pos_id,
      },
      target: {
        team_id: target.team_id,
        pos_id: target.pos_id,
      },
      secondary_targets:
        selectedAbility.primary_targets[primaryTargetIndex].secondary_targets,
    };

    const selectedActorExistingRoundCommandIndex =
      getSelectedActorsRoundCommandIndex(
        selectedActor.team_id,
        selectedActor.pos_id,
      );

    if (selectedActorExistingRoundCommandIndex !== -1) {
      setRoundCommand(newCommand, selectedActorExistingRoundCommandIndex);
      selectNextActor(selectedActor);
      return;
    }

    const maxCommands = getCountOfLivingCharacter(
      selectedActor.team_id as number,
    );

    // Select the next Actor to give a command
    if (
      fightContext.roundCommands === undefined ||
      fightContext.roundCommands?.length < maxCommands
    ) {
      setRoundCommand(newCommand);
      selectNextActor(selectedActor);
    }
  };

  const selectNextActor = (selectedActor: Protagonist) => {
    const newSelectedActor = getNextLivingCharacterOfTeamWithoutCommand(
      selectedActor.pos_id,
      selectedActor.team_id,
    );

    if (newSelectedActor !== undefined) {
      fightContext.setSelectedActor(newSelectedActor);
      fightContext.setSelectedAbility(newSelectedActor?.abilities[0]);
    } else {
      fightContext.setSelectedActor(undefined);
      fightContext.setSelectedAbility(undefined);
    }
  };

  const getSelectedActorsRoundCommandIndex = (
    teamId: number,
    posId: number,
  ) => {
    const foundIndex = fightContext.roundCommands?.findIndex((command) => {
      return command.actor.team_id === teamId && command.actor.pos_id === posId;
    });
    return foundIndex;
  };

  const resetBattlePlan = () => {
    fightContext.setRoundCommands([]);
  };

  const reorderCommandsOnDrop = (
    commands: RoundCommand[],
    startIndex: number,
    endIndex: number,
  ) => {
    const result = Array.from(commands);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const selectedAbility = fightContext.selectedAbility;
  const selectedActor = fightContext.selectedActor;

  return {
    selectedActor,
    selectActor,
    selectedAbility,
    selectAbility,
    selectTarget,
    reorderCommandsOnDrop,
    resetBattlePlan,
  };
}
