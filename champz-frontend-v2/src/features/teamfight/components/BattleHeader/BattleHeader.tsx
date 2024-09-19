import BattlePlan from "./BattlePlan/BattlePlan";
import { Box } from "@mui/material";
import { DropResult } from "react-beautiful-dnd";
import { ProtagonistStatus } from "./ProtagonistStatus/ProtagonistStatus";
import { useFightContext } from "../../hooks/useFightContext";
import { useSelection } from "../../hooks/useSelection";

const BattleHeader = () => {
  const fightContext = useFightContext();
  const { reorderCommandsOnDrop } = useSelection();

  const onDragEnd = ({ destination, source }: DropResult) => {
    console.log(destination, source);

    // Dropped outside the list
    if (!destination) return;

    // Reorder the items
    if (fightContext.roundCommands !== undefined) {
      const newList = reorderCommandsOnDrop(
        fightContext.roundCommands,
        source.index,
        destination.index,
      );

      fightContext.setRoundCommands(newList);
    }
  };

  return (
    <Box display={"grid"} gridTemplateColumns={"1fr auto 1fr"} gap={"12em"}>
      <ProtagonistStatus protagonist={fightContext.selectedActor} />
      <BattlePlan onDragEnd={onDragEnd} />
      <ProtagonistStatus
        protagonist={fightContext.selectedActor}
        // name="Opponent B"
        // avatar={ProfileImage2}
        // level={20}
        // isPositive={false}
        // speciality="blood"
      />
    </Box>
  );
};

export default BattleHeader;
