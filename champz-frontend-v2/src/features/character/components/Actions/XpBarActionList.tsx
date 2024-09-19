import { Avatar, Box, BoxProps, styled } from "@mui/material";
import { useState } from "react";
import { Activity, Char } from "@/types/responses/charList";
import { HandleCharActions } from "./HandleCharActions";
import { ActionHandler } from "@/consts/actionHandler";
import LevelUpIcon from "@/assets/icons/characteractions/levelup.svg";
import LevelDownIcon from "@/assets/icons/characteractions/leveldown.svg";
import RebirthIcon from "@/assets/icons/characteractions/rebirth.svg";

export function XpBarActionList(props: XpBarActionList) {
  const XPbarActionList = styled(Box)(() => ({
    position: "absolute",
    top: "50%",
    translate: "0 -50%",
    left: "2.5em",
    zIndex: 2,
    display: "flex",
    flexDirection: "row",
    gap: "0.25em",
  }));
  const XPbarButton = styled(Avatar)(() => ({
    width: "1.5em",
    height: "1.5em",
    cursor: "pointer",
    transition: "transform 0.25s ease-in-out",
    "&:hover": {
      transform: "scale(1.1) rotate(5deg)",
    },
  }));
  const [selectedActivity, setSelectedActivity] = useState<Activity>();

  const lvlUpIndex = props.char?.activities?.findIndex(
    (activity) => activity.handler === ActionHandler.LVLUP,
  );

  const lvlDownIndex = props.char?.activities?.findIndex(
    (activity) => activity.handler === ActionHandler.LVLDOWN,
  );

  const rebirthIndex = props.char?.activities?.findIndex(
    (activity) => activity.handler === ActionHandler.REBIRTH,
  );

  return (
    <XPbarActionList>
      {lvlDownIndex !== -1 ? (
        <XPbarButton
          src={LevelDownIcon}
          title="Level Down"
          onClick={() =>
            setSelectedActivity(props.char?.activities[lvlDownIndex as number])
          }
        />
      ) : (
        ""
      )}
      {lvlUpIndex !== -1 ? (
        <XPbarButton
          src={LevelUpIcon}
          title="Level Up"
          onClick={() =>
            setSelectedActivity(props.char?.activities[lvlUpIndex as number])
          }
        />
      ) : (
        ""
      )}
      {rebirthIndex !== -1 ? (
        <XPbarButton
          src={RebirthIcon}
          title="Rebirth"
          onClick={() =>
            setSelectedActivity(props.char?.activities[rebirthIndex as number])
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
    </XPbarActionList>
  );
}
interface XpBarActionList extends BoxProps {
  char: Char;
}
