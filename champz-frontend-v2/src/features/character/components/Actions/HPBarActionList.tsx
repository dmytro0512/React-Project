import { Avatar, Box, styled } from "@mui/material";
import { useState } from "react";
import { Activity } from "@/types/responses/charList";
import { HandleCharActions } from "./HandleCharActions";
import { ActionHandler } from "@/consts/actionHandler";
import CharacterHeal from "@/assets/icons/characteractions/heal.svg";
import CharacterRevive from "@/assets/icons/characteractions/revive.svg";
import { HpProps } from "../../../../components/Character/HpMana/Hp";

export function HPBarActionList(props: HpProps) {
  const [selectedActivity, setSelectedActivity] = useState<Activity>();

  const HealthBarActionList = styled(Box)(() => ({
    position: "absolute",
    right: "0.5em",
    top: "50%",
    translate: "0 -50%",
    left: "1.5em",
    zIndex: 2,
    display: "flex",
    flexDirection: "row-reverse",
    gap: "0.25em",
  }));

  const HealthbarButton = styled(Avatar)(() => ({
    width: "1.5em",
    height: "1.5em",
    cursor: "pointer",
    transition: "transform 0.25s ease-in-out",
    "&:hover": {
      transform: "scale(1.1) rotate(5deg)",
    },
  }));

  const healIndex = props.char?.activities?.findIndex(
    (activity) => activity.handler === ActionHandler.HEAL,
  );

  const reviveIndex = props.char?.activities?.findIndex(
    (activity) => activity.handler === ActionHandler.REVIVE,
  );

  return (
    <HealthBarActionList>
      {healIndex !== -1 ? (
        <HealthbarButton
          src={CharacterHeal}
          title="Heal"
          onClick={() =>
            setSelectedActivity(props.char.activities[healIndex as number])
          }
        />
      ) : (
        ""
      )}
      {reviveIndex !== -1 ? (
        <HealthbarButton
          src={CharacterRevive}
          title="Revive"
          onClick={() =>
            setSelectedActivity(props.char.activities[reviveIndex as number])
          }
        />
      ) : (
        ""
      )}
      {selectedActivity && (
        <HandleCharActions
          char={props.char}
          selectedActivity={selectedActivity}
          onHandlingComplete={() => setSelectedActivity(undefined)}
        />
      )}
    </HealthBarActionList>
  );
}
