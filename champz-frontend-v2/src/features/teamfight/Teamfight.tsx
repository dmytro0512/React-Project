import TeamFightBg from "@/assets/img/teamfight/bg.png";
import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import "teamfight.css";
import BattleFooter from "./components/BattleFooter/BattleFooter";
import BattleHeader from "./components/BattleHeader/BattleHeader";
import BattleField from "./components/BattleField/BattleField";
import { Fight } from "./types/teamfight";
import { ChampzLoading } from "@/components/ChampzLoading";
import { useFightContext } from "./hooks/useFightContext";
import { useSelection } from "./hooks/useSelection";
import { useFightData } from "./hooks/useFightData";

export interface TeamFightProps {
  fight: Fight;
}

export const Teamfight = (props: TeamFightProps) => {
  const containerWrapper = useRef<HTMLDivElement>(null);
  const fightContext = useFightContext();
  const { selectActor, selectedActor } = useSelection();
  const { getFirstLivingCharacterOfTeam } = useFightData();

  useEffect(() => {
    console.log("Setting fight", props.fight);
    if (fightContext.setFight) {
      fightContext.setFight(props.fight);
    }
  }, [props.fight]);

  useEffect(() => {
    if (fightContext !== undefined && selectedActor === undefined) {
      // Default selection of first Character if there is no RoundCommand set
      const firstLivingCharacterOfTeam = getFirstLivingCharacterOfTeam(1);
      if (
        firstLivingCharacterOfTeam !== undefined &&
        fightContext.roundCommands?.length === 0
      ) {
        selectActor(firstLivingCharacterOfTeam);
      }
    }
  }, [fightContext]);

  const [containerSize, setContainerSize] = useState<{
    width: number;
    height: number;
  }>();

  useEffect(() => {
    const resizeHandler = () => {
      const aspectRatio = 2;
      const wScreen = window.innerWidth;
      const hScreen = window.innerHeight;
      const result = { height: 0, width: 0 };
      if (wScreen / hScreen >= aspectRatio) {
        result.width = aspectRatio * hScreen;
        result.height = hScreen;
      } else {
        result.width = wScreen;
        result.height = wScreen / aspectRatio;
      }
      setContainerSize(result);
      document.getElementsByTagName("html")[0].style.fontSize =
        `${result.width / 100}px`;
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  if (fightContext.fight === undefined || fightContext.fight.id === 0)
    return <ChampzLoading />;

  return (
    <Box bgcolor={"black"} width={"100%"} height={"100%"}>
      <Box
        position={"fixed"}
        m={"auto"}
        top={"50%"}
        left={"50%"}
        ref={containerWrapper}
        width={`${containerSize?.width}px`}
        height={`${containerSize?.height}px`}
        display={"grid"}
        gridTemplateRows={"10fr 25fr 4fr"}
        gap={"1em"}
        px={"2em"}
        sx={{
          background: `url(${TeamFightBg})`,
          backgroundSize: "100% 100%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <BattleHeader />
        <BattleField />
        <BattleFooter />
      </Box>
    </Box>
  );
};
