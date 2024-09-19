import { useRef, useState } from "react";
import { useFightContext } from "./useFightContext";
import {
  Fight,
  FightRound,
  FightRoundAction,
  Protagonist,
} from "../types/teamfight";

export function useProcessFightActions() {
  const fightContext = useFightContext();
  const DEFAULT_ANIMATIONENDDELAY = 2000;
  const DEFAULT_AUTOACTIONDELAY = 2500;
  const [autoActionDelay, setAutoActionDelay] = useState(
    DEFAULT_AUTOACTIONDELAY,
  );
  const [animationEndDelay, setAnimationEndDelay] = useState(
    DEFAULT_ANIMATIONENDDELAY,
  );

  const playLatestRound = (fight: Fight) => {
    if (fight === undefined) {
      return;
    }

    const currentRound = fight.current_round;
    const latestRoundIndex = fight.rounds.findIndex(
      (round) => round.round_id === currentRound,
    );

    if (latestRoundIndex === -1) {
      return;
    }

    const latestRound = fight.rounds[latestRoundIndex];
    console.log("latestRound", latestRound);
    fightContext.latestRoundRef.current = latestRound;
    playNextAction(1);
  };

  const getActionIndexFromLatestRoundRef = (actionId: number) => {
    const actionIndex = fightContext.latestRoundRef.current.actions.findIndex(
      (action: FightRoundAction) => action.action_id === actionId,
    );

    return actionIndex;
  };

  const playNextAction = async (actionId: number) => {
    console.log("Playing Action ", actionId);

    if (fightContext.latestRoundRef?.current === undefined) {
      return;
    }

    const actionIndex = getActionIndexFromLatestRoundRef(actionId);

    if (actionIndex === -1) {
      return;
    }

    const currentAction =
      fightContext.latestRoundRef.current.actions[actionIndex];
    console.log("currentAction", currentAction, actionIndex);
    fightContext.currentActionRef.current = currentAction;

    playAnimation();
  };

  const playAnimation = async () => {
    console.log("playAnimation", fightContext.currentActionRef.current);
    const currentAction = fightContext.currentActionRef.current;
    let animationCounter = 0;

    fightContext.setBattleTeam((prevState: Protagonist[]) => {
      let copy = [...prevState];

      if (currentAction.actor !== undefined) {
        const actorIndex = fightContext.battleTeam?.findIndex(
          (protagonist) =>
            protagonist.team_id === currentAction.actor?.team_id &&
            protagonist.pos_id === currentAction.actor?.pos_id,
        );

        if (actorIndex !== -1 && actorIndex !== undefined) {
          console.log("Setting fight animation on actor");
          copy[actorIndex].fightAnimationClass =
            copy[actorIndex].team_id === 1
              ? "anim_moveToCenter"
              : "anim_moveToCenterTeam2";
          copy[actorIndex].hitEffect = undefined;
          animationCounter++;
        }
      }

      for (let i = 0; i < currentAction.targets.length; i++) {
        const targetIndex = fightContext.battleTeam?.findIndex(
          (protagonist) =>
            protagonist.team_id === currentAction.targets[i].team_id &&
            protagonist.pos_id === currentAction.targets[i].pos_id,
        );

        if (targetIndex !== -1 && targetIndex !== undefined) {
          console.log(
            "Setting fight animation on target",
            currentAction.targets[i].action_type,
          );
          if (currentAction.targets[i].action_type === "death") {
            copy[targetIndex].fightAnimationClass = "anim_death";
          } else {
            copy[targetIndex].fightAnimationClass =
              copy[targetIndex].team_id === 1
                ? "anim_moveToCenter"
                : "anim_moveToCenterTeam2";
          }
          copy[targetIndex].hitEffect = currentAction.targets[i].hitEffect;
          animationCounter++;
        }
      }

      fightContext.currentActionRef.current.animationCounter = animationCounter;
      fightContext.currentActionRef.current.animationEndCounter = 0;
      console.log("animationCounter", animationCounter);

      return copy;
    });
  };

  const updateStatsAfterAnimation = () => {
    // This is called after the animation of the actor and every target
    // We store a number of expected returns and only if all inform that they are done we are updating
    fightContext.currentActionRef.current.animationEndCounter++;

    console.log(
      "updateStatsAfterAnimation",
      fightContext.currentActionRef.current,
      "animation end counter",
      fightContext.currentActionRef.current.animationEndCounter,
      "of",
      fightContext.currentActionRef.current.animationCounter,
    );

    if (
      fightContext.currentActionRef.current === undefined ||
      fightContext.currentActionRef.current.animationEndCounter <
        fightContext.currentActionRef.current.animationCounter
    ) {
      return;
    }

    const currentActionRef = fightContext.currentActionRef.current;
    const latestRoundRef = fightContext.latestRoundRef.current;

    fightContext.setBattleTeam((prevState: Protagonist[]) => {
      let copy = [...prevState];

      if (currentActionRef.actor !== undefined) {
        const actorIndex = fightContext.battleTeam?.findIndex(
          (protagonist) =>
            protagonist.team_id === currentActionRef.actor?.team_id &&
            protagonist.pos_id === currentActionRef.actor?.pos_id,
        );

        if (actorIndex !== -1 && actorIndex !== undefined) {
          copy[actorIndex] = {
            ...currentActionRef.actor,
            fightAnimationClass: "", // Overwrite animation class
          };
        }
      }

      for (let i = 0; i < currentActionRef.targets?.length; i++) {
        const targetIndex = fightContext.battleTeam?.findIndex(
          (protagonist) =>
            protagonist.team_id === currentActionRef.targets[i].team_id &&
            protagonist.pos_id === currentActionRef.targets[i].pos_id,
        );

        if (targetIndex !== -1 && targetIndex !== undefined) {
          copy[targetIndex] = {
            ...currentActionRef.targets[i],
            fightAnimationClass: "",
          };
        }
      }

      return copy;
    });

    console.log(
      "Preparing for next Action after Id",
      currentActionRef.action_id,
    );
    const actionIndex = getActionIndexFromLatestRoundRef(
      currentActionRef.action_id,
    );

    if (actionIndex === -1) {
      console.log("ActionIndex", actionIndex);
      return;
    }

    if (latestRoundRef.actions[actionIndex + 1] !== undefined) {
      setTimeout(function () {
        playNextAction(currentActionRef.action_id + 1);
      }, autoActionDelay);
    }
  };

  const removeAnimationClasses = () => {
    fightContext.setBattleTeam((prevState: Protagonist[]) => {
      let copy = [...prevState];

      for (let i = 0; i < copy.length; i++) {
        copy[i].fightAnimationClass = "";
      }

      return copy;
    });
  };

  return {
    playLatestRound,
    updateStatsAfterAnimation,
    removeAnimationClasses,
  };
}
