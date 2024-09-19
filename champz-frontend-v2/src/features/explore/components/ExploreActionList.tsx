import { ExploreAction, ExplorePart } from "@/types/responses/explore";
import { Grid } from "@mui/material";
import {
  ActionButtonByIndex,
  ActionButtonV1,
} from "../../character/components/Actions/ActionButton";
import { useRef, useState } from "react";
import { HandleExploreActions } from "./HandleExploreActions";
import { getRouteApi, useNavigate } from "@tanstack/react-router";
import { ChampzTextField } from "@/components/form/ChampzTextField";

export function ExploreActionList(props: ExploreActionListProps) {
  const [selectedAction, setSelectedAction] = useState<ExploreAction>();
  const answerRef = useRef<HTMLInputElement>();
  const navigate = useNavigate();
  const routeApi = getRouteApi("/_auth/explore/character/$id");
  const { id } = routeApi.useParams();

  console.log("Rendering ExploreActions with selected Action", selectedAction);
  console.log(props.explore_part);

  return (
    <>
      {props.explore_part.is_final && (
        <Grid key={`end`} item xs={12} md={6}>
          <ActionButtonV1
            key={`end`}
            onClick={() => {
              navigate({
                to: "/character/$id",
                params: { id: id + "" },
              });
            }}
          >
            {`End`}
          </ActionButtonV1>
        </Grid>
      )}
      {props.explore_part.requires_text && (
        <Grid key={`end`} item xs={12} md={6}>
          <ChampzTextField
            sx={{ width: "10000px" }}
            placeholder="What is your answer?"
            inputRef={answerRef}
          />
          <Grid key={`submit`} item xs={12} md={6}>
            <ActionButtonV1
              key={`submit`}
              onClick={() =>
                setSelectedAction({
                  index: 1,
                  journal_explore_id: props.journal_explore_id,
                  answer: answerRef.current?.value,
                })
              }
            >
              {`Submit`}
            </ActionButtonV1>
          </Grid>
        </Grid>
      )}
      {!props.explore_part.has_decisions &&
        !props.explore_part.is_final &&
        !props.explore_part.requires_text && (
          <Grid key={`next`} item xs={12} md={6}>
            <ActionButtonV1
              key={`next`}
              onClick={() =>
                setSelectedAction({
                  index: 1,
                  journal_explore_id: props.journal_explore_id,
                })
              }
            >
              {`Next`}
            </ActionButtonV1>
          </Grid>
        )}
      {props.explore_part.decisions?.map((decision, index) => {
        return (
          <Grid key={`g${decision.id}`} item xs={12} md={6}>
            <ActionButtonByIndex
              key={decision.id}
              tabIndex={index}
              onClick={() =>
                setSelectedAction({
                  index,
                  decision,
                  journal_explore_id: props.journal_explore_id,
                })
              }
            >
              {decision.outcome_display}
            </ActionButtonByIndex>
          </Grid>
        );
      })}
      {selectedAction && (
        <HandleExploreActions
          key={selectedAction.index}
          selectedExploreAction={selectedAction}
          onHandlingComplete={() => {
            console.log("ExploreActionList on handling complete");
            setSelectedAction(undefined);
          }}
        />
      )}
    </>
  );
}

export interface ExploreActionListProps {
  journal_explore_id: number;
  explore_part: ExplorePart;
}
