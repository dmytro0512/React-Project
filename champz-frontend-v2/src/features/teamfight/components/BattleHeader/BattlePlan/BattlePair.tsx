import { RoundCommand } from "@/features/teamfight/types/teamfight";
import { Box, ListItem } from "@mui/material";
import PlayCardA from "@/assets/teamfight/playCardA.png";
import { Draggable } from "react-beautiful-dnd";

import { useMemo } from "react";
// import "teamfight.css";
import { getImageHost } from "@/utils/getImageHost";
import { useFightData } from "@/features/teamfight/hooks/useFightData";
import { ImagePath } from "@/consts/imagePaths";

interface BattlePairProps {
  roundCommand: RoundCommand;
  index: number;
}

export function BattlePair(props: BattlePairProps) {
  const { getBattleCharacter } = useFightData();

  const actorCharacter = useMemo(() => {
    return getBattleCharacter(
      props.roundCommand?.actor.team_id,
      props.roundCommand?.actor.pos_id,
    );
  }, [props.roundCommand.actor]);

  const targetCharacter = useMemo(() => {
    return getBattleCharacter(
      props.roundCommand?.target.team_id,
      props.roundCommand?.target.pos_id,
    );
  }, [props.roundCommand.target]);

  const selectedAbility = useMemo(() => {
    const selectedAbilityIndex = actorCharacter?.abilities.findIndex(
      (ability) => ability.handler === props.roundCommand.action,
    );

    if (selectedAbilityIndex !== -1 && selectedAbilityIndex !== undefined) {
      return actorCharacter?.abilities[selectedAbilityIndex];
    }
  }, [actorCharacter, props.roundCommand.action]);

  return (
    <Draggable
      draggableId={`c${props.roundCommand.actor.team_id}${props.roundCommand.actor.pos_id}`}
      index={props.index}
    >
      {(provided, snapshot) => (
        // <Tooltip
        //   title={`Player Order ${props.roundCommand.player_order} Index ${props.index}`}
        // >
        <ListItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          sx={snapshot.isDragging ? { background: "rgb(235,235,235)" } : ""}
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={"0.5em"}
            p={"0.4em"}
            style={{
              backgroundImage: `url(${PlayCardA})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              maxWidth: "100%",
            }}
          >
            {props.index + 1}
            <Box>
              <img
                src={`${getImageHost()}${actorCharacter?.src_path}idle_${actorCharacter?.src}`}
                style={{ minHeight: "100%", height: "50px" }}
              />
            </Box>
            <Box height={"60%"}>
              <img
                src={`${getImageHost()}${ImagePath.ABILITIES}${selectedAbility?.icon_src}`}
                alt="Weapon"
                style={{ minHeight: "100%", height: "50px" }}
              />
            </Box>
            <Box height={"100%"}>
              <img
                src={`${getImageHost()}${targetCharacter?.src_path}idle_${targetCharacter?.src}`}
                style={{ minHeight: "100%", height: "50px" }}
              />
            </Box>
            {props.roundCommand.secondary_targets?.map((secondary_target) => {
              const secondaryTargetCharacter = getBattleCharacter(
                secondary_target.team_id,
                secondary_target.pos_id,
              );

              return (
                <img
                  src={`${getImageHost()}${secondaryTargetCharacter?.src_path}idle_${secondaryTargetCharacter?.src}`}
                  style={{ minHeight: "100%", height: "50px" }}
                />
              );
            })}
          </Box>
        </ListItem>
        // </Tooltip>
      )}
    </Draggable>
  );
}

export default BattlePair;
