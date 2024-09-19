import { ConfirmationDialog } from "@/features/home/components/ConfirmationDialog";
import { Activity, Char } from "@/types/responses/charList";
import { useCharActions } from "../../hooks/useCharActions";
import { useStringFormatter } from "@/hooks/useStringFormatter";
import { ReactElement, useEffect, useState } from "react";
import { ActionHandler } from "@/consts/actionHandler";
import { ExploreAction, ExploreDecision } from "@/types/responses/explore";
import { LevelDownModalContent } from "./LevelDownModalContent";

export function HandleCharActions(props: CharActionHandlerProps) {
  const stringFormatter = useStringFormatter();
  const charActions = useCharActions();
  const [selectedLevel, setSelectedLevel] = useState(props.char.lvl);
  const [confirmationContent, setConfirmationContent] = useState<ReactElement>(
    <></>,
  );
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    if (props.selectedActivity) {
      console.log("Running for selected Activity", props.selectedActivity);
      handleActionPreflight(props.selectedActivity);
    }

    if (props.selectedExploreAction) {
      console.log(
        "Running for selected ExploreAction",
        props.selectedExploreAction,
      );
      handleExploreAction(
        props.selectedExploreAction?.decision as ExploreDecision,
        props.selectedExploreAction?.journal_explore_id as number,
      );
    }
  }, []);

  const handleSetLevelDownLevel = (lvl: number) => {
    console.log("HandlesetLevelDownLevel", lvl);
    setSelectedLevel(lvl);
  };
  console.log("selectedLevel", selectedLevel);

  const buildConfirmationContent = (activity: Activity) => {
    if (activity.handler === ActionHandler.LVLDOWN) {
      return (
        <>
          {activity.prompt_question &&
            stringFormatter.replaceHighlightTags(activity.prompt_question)}
          <LevelDownModalContent
            current_exp={props.char.exp}
            lvl={props.char.lvl}
            max_exp={props.char.max_exp}
            min_exp={props.char.min_exp}
            onLevelSelect={handleSetLevelDownLevel}
            char={props.char}
          />
        </>
      );
    }

    return (
      <>
        {activity.prompt_question &&
          stringFormatter.replaceHighlightTags(activity.prompt_question)}
        {activity.prompt_line2 &&
          stringFormatter.replaceHighlightTags(activity.prompt_line2)}
        {activity.prompt_line3 &&
          stringFormatter.replaceHighlightTags(activity.prompt_line3)}
        {activity.prompt_line4 &&
          stringFormatter.replaceHighlightTags(activity.prompt_line4)}
      </>
    );
  };

  const handleExploreAction = (
    decision: ExploreDecision,
    journal_explore_id: number,
  ) => {
    console.log("HandleDecision", decision);
    charActions.explore(
      props.char.id as number,
      decision?.id,
      undefined,
      journal_explore_id,
    );

    props.onHandlingComplete();
  };

  const handleAction = () => {
    console.log("HandleAction", props.selectedActivity?.handler);
    switch (props.selectedActivity?.handler) {
      case ActionHandler.FORAGE:
        charActions.forage(props.char.id as number);
        break;
      case ActionHandler.LVLUP:
        charActions.lvlup(props.char.id as number);
        break;
      case ActionHandler.LVLDOWN:
        charActions.lvldown(props.char.id as number, selectedLevel);
        break;
      case ActionHandler.REBIRTH:
        charActions.rebirth(props.char.id as number);
        break;
      case ActionHandler.REVIVE:
        charActions.revive(props.char.id as number);
        break;
      case ActionHandler.HEAL:
        charActions.heal(props.char.id as number);
        break;
      case ActionHandler.UNFORAGE:
        charActions.unforage(props.char.id as number);
        break;
      case ActionHandler.EXPLORE:
        charActions.explore(props.char.id as number);
        break;
      case ActionHandler.CONTINUE_EXPLORE:
        charActions.explore(props.char.id as number);
        break;
      case ActionHandler.CONTINUE_TEAMFIGHT:
        charActions.fight(props.char.status_fight_id as number);
        break;
    }

    props.onHandlingComplete();
  };

  const handleActionPreflight = (activity: Activity) => {
    console.log("Preflight", activity);
    if (activity.show_prompt) {
      setConfirmationContent(buildConfirmationContent(activity));
      setShowConfirmation(true);
    } else {
      handleAction();
    }
  };

  return (
    <ConfirmationDialog
      open={showConfirmation}
      content={confirmationContent}
      onClose={() => {
        setShowConfirmation(false);
        props.onHandlingComplete();
      }}
      onConfirm={() => {
        setShowConfirmation(false);
        handleAction();
      }}
    />
  );
}

interface CharActionHandlerProps {
  char: Char;
  selectedActivity?: Activity;
  selectedExploreAction?: ExploreAction;
  onHandlingComplete(): void;
}
