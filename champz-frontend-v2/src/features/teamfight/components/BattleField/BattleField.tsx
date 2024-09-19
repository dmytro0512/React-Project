import StartBtnBg from "@/assets/img/teamfight/start.png";
import { Box, Button } from "@mui/material";
import "./battleField.css";
import { BattleCharacterControl } from "./BattleTeam/BattleCharacterControl";
import { useSelection } from "../../hooks/useSelection";
import { useFightAPI } from "../../hooks/useFightAPI";
import { useFightContext } from "../../hooks/useFightContext";
import { Fight, RoundCommand } from "../../types/teamfight";
import { useProcessFightActions } from "../../hooks/useProcessFightActions";

const BattleField = () => {
  const { resetBattlePlan } = useSelection();
  const { getNextRound, getTestRound } = useFightAPI();
  const fightContext = useFightContext();
  const { playLatestRound } = useProcessFightActions();

  const handleTestRound = () => {
    const testFight = getTestRound();
    playLatestRound(testFight as unknown as Fight);
  };

  console.log("BattleField FightContext", fightContext.battleTeam);

  return (
    <Box display={"grid"} gridTemplateColumns={"1fr auto 1fr"} gap={"2em"}>
      <Box
        // display={"grid"}
        // gridTemplateRows={"1fr 1fr"}
        // gridTemplateColumns={"1fr 1fr"}
        // justifyItems={"center"}
        // gap={"2em"}
        className={"battle-field left-field"}
      >
        <BattleCharacterControl posId={3} teamId={1} />
        <BattleCharacterControl posId={1} teamId={1} />
        <BattleCharacterControl posId={4} teamId={1} />
        <BattleCharacterControl posId={2} teamId={1} />
      </Box>

      <Box
        mt={"1em"}
        mb={"auto"}
        width={"13em"}
        className="start-button"
        // sx={{
        //   background: `url(${StartBtnBg})`,
        //   backgroundSize: " 100% 100%",
        //   aspectRatio: "3",
        // }}
      >
        <Button onClick={resetBattlePlan}>RESET BATTLEPLAN</Button>
        <Button
          onClick={() =>
            getNextRound(
              fightContext.fight?.id as number,
              fightContext.roundCommands as RoundCommand[],
            )
          }
        >
          START NEXT ROUND
        </Button>
        <Button onClick={() => handleTestRound()}>TEST ROUND</Button>
      </Box>
      <Box
        // display={"grid"}
        // gridTemplateRows={"1fr 1fr"}
        // gridTemplateColumns={"1fr 1fr"}
        // justifyItems={"center"}
        // gap={"2em"}
        className={"battle-field right-field"}
      >
        <BattleCharacterControl posId={4} teamId={2} />
        <BattleCharacterControl posId={2} teamId={2} />
        <BattleCharacterControl posId={3} teamId={2} />
        <BattleCharacterControl posId={1} teamId={2} />
      </Box>
    </Box>
  );
};

export default BattleField;
