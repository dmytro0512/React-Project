import ShieldImage from "@/assets/img/teamfight/shield.png";
import BloodImage from "@/assets/img/teamfight/blood.png";
import GreenHeartImage from "@/assets/img/teamfight/heart_green.png";
import RedHeartImage from "@/assets/img/teamfight/heart_red.png";
import ThunderImage from "@/assets/img/teamfight/thunder.png";
import SwordImage from "@/assets/img/teamfight/sword.png";
import DefenseImage from "@/assets/img/teamfight/defense.png";

import "teamfight.css";
import { Box } from "@mui/material";
import StatusBar from "./StatusBar";
import { Protagonist } from "@/features/teamfight/types/teamfight";
import { getImageHost } from "@/utils/getImageHost";

interface ProtagonistStatusProps {
  protagonist: Protagonist | undefined;
}

export function ProtagonistStatus(props: ProtagonistStatusProps) {
  // console.log(props.protagonist);
  if (!props.protagonist) {
    return <>Placeholder</>;
  }

  return (
    <Box
      my={"auto"}
      // mr={isPositive ? "auto" : "0"}
      // ml={isPositive ? "0" : "auto"}
      display={"grid"}
      gridTemplateColumns={props.isPositive ? "2fr 5fr" : "5fr 2fr"}
      columnGap={"1em"}
    >
      <Box
        mr={props.isPositive ? "auto" : "0"}
        ml={props.isPositive ? "0" : "auto"}
        gridColumn={"1/-1"}
        className="text-lg text-shadow-dark font-bold"
      >
        {props.protagonist.name}
      </Box>
      <Box
        gridColumn={props.isPositive ? "1/2" : "2/3"}
        gridRow={"2/3"}
        display={"grid"}
        gridTemplateRows={"3fr 1fr"}
        justifyItems={"center"}
        gap={"0.5em"}
      >
        <Box
          bgcolor={"black"}
          border={"0.2em solid"}
          borderColor={props.isPositive ? "#04C900" : "red"}
          borderRadius={"100%"}
          display={"flex"}
          justifyContent={"center"}
          overflow={"hidden"}
          sx={{ outline: "0.1em solid black", aspectRatio: "1" }}
        >
          <img
            src={`${getImageHost()}${props.protagonist.src_path}idle_${props.protagonist.src}`}
            alt="Avatar"
            className={"height-of-parent"}
          />
        </Box>
        <Box
          width={"100%"}
          display={"grid"}
          gridTemplateColumns={"1fr 1fr 1fr"}
          justifyItems={"center"}
        >
          {/* {Array(3)
            .fill("")
            .map((_, idx) => (
              <img
                key={idx}
                src={
                  props.speciality === "defend"
                    ? ShieldImage
                    : props.speciality === "blood"
                      ? BloodImage
                      : ""
                }
                alt="Speciality image"
                className={"height-of-parent"}
              />
            ))} */}
        </Box>
      </Box>
      <Box
        display={"grid"}
        gridColumn={props.isPositive ? "2/3" : "1/2"}
        gridRow={"2/3"}
        gap={"0.5em"}
        fontSize={"1.2em"}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={"1em"}
          className="text-shadow-dark"
        >
          <span>{props.name}</span>
          <span className="font-bold">Lv.{props.level}</span>
        </Box>
        <StatusBar
          dirNegative={!props.isPositive}
          icon={props.isPositive ? GreenHeartImage : RedHeartImage}
          maxValue={100}
          value={50}
          colorBg={props.isPositive ? "#233001 " : "#320202"}
          colorStart={props.isPositive ? "#80B800" : "#B80000"}
          colorEnd={props.isPositive ? "#DDF61B" : "#F61B1B"}
        />
        <StatusBar
          dirNegative={!props.isPositive}
          icon={ThunderImage}
          maxValue={100}
          value={50}
          steps={[true, true, false]}
          colorBg={"#022D32"}
          colorStart={"#0097B8"}
          colorEnd={"#1BF6E9"}
        />
        <Box
          display={"grid"}
          gridAutoFlow={"dense"}
          gridTemplateColumns={"1fr 1fr"}
          gap={"0.3em"}
        >
          <StatusBar
            dirNegative={!props.isPositive}
            icon={SwordImage}
            maxValue={100}
            value={50}
            hideMaxValue
            colorBg={"#341A03"}
            colorStart={"#B85800"}
            colorEnd={"#F6841B"}
            sx={{
              gridColumn: props.isPositive ? "1/2" : "2/3",
              gridRow: "1/2",
            }}
          />
          <StatusBar
            dirNegative={!props.isPositive}
            icon={DefenseImage}
            maxValue={100}
            value={50}
            hideMaxValue
            colorBg={"#260233"}
            colorStart={"#7D00B8"}
            colorEnd={"#CA1BF6"}
            sx={{ gridColumn: props.isPositive ? "2/3" : "1/2" }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default ProtagonistStatusProps;
