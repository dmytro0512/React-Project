import useAuthContext from "@/features/auth/contexts/authContext";
import { useEffect } from "react";
import { ExploreAction, ExploreDecision } from "@/types/responses/explore";
import { useRouteContext } from "@tanstack/react-router";
import { useCharActions } from "../../character/hooks/useCharActions";

export function HandleExploreActions(props: ExploreActionHandlerProps) {
  const { selectedChar } = useAuthContext();
  const routeContext = useRouteContext({
    from: "/_auth/explore/character/$id",
  });
  const charActions = useCharActions({ api: routeContext.api });

  useEffect(() => {
    if (props.selectedExploreAction) {
      console.log(
        "Running for selected ExploreAction",
        props.selectedExploreAction,
      );
      handleExploreAction(
        props.selectedExploreAction?.decision as ExploreDecision,
        props.selectedExploreAction?.answer as string,
        props.selectedExploreAction?.journal_explore_id as number,
      );
    }
  }, []);

  const handleExploreAction = (
    decision: ExploreDecision,
    answer: string,
    journal_explore_id: number,
  ) => {
    console.log("HandleDecision", decision);
    charActions.explore(
      selectedChar?.id as number,
      decision?.id,
      answer,
      journal_explore_id,
    );

    props.onHandlingComplete();
  };

  return <></>;
}

interface ExploreActionHandlerProps {
  selectedExploreAction?: ExploreAction;
  onHandlingComplete(): void;
}
