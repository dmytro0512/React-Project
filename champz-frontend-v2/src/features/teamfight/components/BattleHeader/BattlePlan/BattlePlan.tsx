import BattlePair from "./BattlePair";
import { List } from "@mui/material";
import {
  DragDropContext,
  Droppable,
  OnDragEndResponder,
} from "react-beautiful-dnd";
import "teamfight.css";
import { useFightContext } from "@/features/teamfight/hooks/useFightContext";
import { RoundCommand } from "@/features/teamfight/types/teamfight";

export interface BattlePlanProps {
  onDragEnd: OnDragEndResponder;
}

const BattlePlan = (props: BattlePlanProps) => {
  const fightContext = useFightContext();

  return (
    <>
      <DragDropContext onDragEnd={props.onDragEnd}>
        <Droppable droppableId="droppable-list">
          {(provided) => (
            <List ref={provided.innerRef} {...provided.droppableProps}>
              {fightContext.roundCommands?.map(
                (roundCommand: RoundCommand, index: number) => {
                  return (
                    <BattlePair
                      roundCommand={roundCommand}
                      index={index}
                      key={`c${roundCommand.actor.team_id}${roundCommand.actor.pos_id}`}
                    />
                  );
                },
              )}
            </List>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default BattlePlan;
