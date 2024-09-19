import { useEffect, useState } from "react";
import P2 from "@/assets/teamfight/p2.png";
import Sword from "@/assets/teamfight/swor.png";
import StatsBar from "./StatsBar";
import { BattleCharacterDisplayProps } from "@/features/teamfight/types/teamfight";
import { getImageHost } from "@/utils/getImageHost";
import { ImagePath } from "@/consts/imagePaths";
import { Box } from "@mui/material";
import { useProcessFightActions } from "@/features/teamfight/hooks/useProcessFightActions";
import { getDifferenceFromFloat } from "@/utils/getDifferenceFromFloat";

export function BattleCharacterDisplay(props: BattleCharacterDisplayProps) {
  const [showHitEffect, setShowHitEffect] = useState<boolean>(false);
  const iconType = "player";

  const handleOnClick = () => {
    if (props.isTargetable) {
      props.selectTarget(props.protagonist);
      return;
    }

    if (props.isSelectable) {
      props.selectActor(props.protagonist);
      return;
    }

    return;
  };

  return (
    <>
      <Box
        onAnimationIteration={() => {
          console.log(
            "Animation Iteraction: " +
              props.protagonist.name +
              " " +
              props.protagonist.fightAnimationClass,
          );
          if (props.protagonist.hitEffect !== undefined) {
            setShowHitEffect(true);
          }
        }}
        onAnimationEnd={() => {
          console.log(
            "Animation End: " +
              props.protagonist.name +
              " " +
              props.protagonist.fightAnimationClass,
          );
          setShowHitEffect(false);
          props.onAnimationEnd();
        }}
        display={"grid"}
        gridTemplateColumns={"4fr 1fr"}
        gridTemplateRows={"1fr 5fr"}
        gap={"1em"}
        className={`${props.className} ${props.protagonist.fightAnimationClass}`}
        sx={{
          aspectRatio: "1.15",
        }}
      >
        {showHitEffect && (
          <>
            {console.log(props.protagonist.hitEffect)}
            <img
              alt="character hit effect"
              onAnimationEnd={(event) => {
                event.stopPropagation();
              }}
              className={"character_hiteffect"}
              src={`${getImageHost()}${ImagePath.EFFECTS}${props.protagonist.hitEffect}`}
            />
          </>
        )}

        {props.protagonist.hp_start > props.protagonist.hp_new && (
          <div
            // id={props.customKey}
            // key={props.customKey}
            className={"hp_delta"}
          >
            {getDifferenceFromFloat(
              props.protagonist.hp_new,
              props.protagonist.hp_start,
              1,
            )}
          </div>
        )}

        <Box display={"flex"} justifyContent={"center"}>
          {iconType && props.isSelected && (
            <img
              src={P2}
              className="height-of-parent"
              style={{ aspectRatio: "1", objectFit: "contain" }}
            />
          )}
          {iconType && props.isTargetable && (
            <img
              src={Sword}
              className="height-of-parent"
              style={{ aspectRatio: "1", objectFit: "contain" }}
            />
          )}
        </Box>
        <Box style={{ pointerEvents: "none" }} />
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"0.5em"}
          onClick={handleOnClick}
        >
          <Box flex={"1"} display={"flex"} justifyContent={"center"}>
            <img
              src={`${getImageHost()}${props.protagonist.src_path}idle_${props.protagonist.src}`}
              className="height-of-parent"
              alt=""
            />
          </Box>
          <Box>
            <StatsBar
              protagonist={props.protagonist}
              key={props.protagonist.team_id + props.protagonist.pos_id}
            />
          </Box>
        </Box>
        <Box display={"grid"} gap={"0.5em"}>
          {props.isSelected &&
            props.protagonist.abilities?.map((ability) => {
              return (
                <Box key={ability.handler}>
                  {ability.handler === props.selectedAbility?.handler &&
                    "Selected"}
                  <img
                    onClick={() => props.selectAbility(ability)}
                    src={`${getImageHost()}${ImagePath.ABILITIES}${ability.icon_src}`}
                    className={"height-of-parent"}
                  />
                </Box>
              );
            })}
          {/* 
        <Box>
          <img src={GroupWeaponImage2} className={"height-of-parent"} />
        </Box>
        <Box>
          <img src={GroupWeaponImage3} className={"height-of-parent"} />
        </Box> */}
        </Box>
      </Box>
    </>
  );
}
