import { Protagonist } from "@/features/teamfight/types/teamfight";
import { getPercentValue } from "@/utils/getPercentValue";
import { Box } from "@mui/material";

interface LvlBarProps {
  protagonist: Protagonist;
}

export function StatsBar(props: LvlBarProps) {
  return (
    <Box
      key={props.protagonist.team_id + props.protagonist.pos_id}
      display={"grid"}
      gridTemplateColumns={"auto 1fr"}
      alignContent={"center"}
      columnGap={"0.3em"}
    >
      <Box gridRow={"1/3"}>
        {/* <img src={weaponIconUrl} className={"height-of-parent"} /> */}
      </Box>
      <Box
        py={"0.4em"}
        display={"flex"}
        justifyContent={"space-between"}
        gap={"1em"}
        // color={selected ? (isNegative ? "red" : "#04C900") : "white"}
        whiteSpace={"nowrap"}
        className={"text-shadow-dark text-sm leading-none"}
      >
        <span>{props.protagonist.name}</span>
        <span>Lv {props.protagonist.lvl}</span>
      </Box>
      {`HP${props.protagonist.hp_new ?? props.protagonist.hp}/${props.protagonist.hp_max}`}
      {/* <Box position={"relative"} height={"0.5em"} border={"0.05em solid black"}>
        <Box
          position={"absolute"}
          height={"100%"}
          width={`${getPercentValue(props.protagonist.hp, props.protagonist.hp_max)}%`}
          sx={{
            background: "linear-gradient(90deg, #B80000, #F61B1B, #B80000)",
          }}
        />
      </Box> */}
      <Box
        position={"relative"}
        height={"0.5em"}
      >{`Mana${props.protagonist.mana}`}</Box>
      {props.protagonist.status_effects?.map((status_effect) => {
        return (
          <Box
            key={status_effect.name}
            position={"relative"}
            height={"0.5em"}
          >{`${status_effect.name} for ${status_effect.ticks} instances`}</Box>
        );
      })}
    </Box>
  );
}

export default StatsBar;
