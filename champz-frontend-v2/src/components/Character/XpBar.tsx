import xpBarBg from "@/assets/backgrounds/xpBar.svg";
import xpBarFilledBg from "@/assets/backgrounds/xpBarFilled.svg";
import { RegularText } from "@/components/Text";
import { Level } from "./Level";
import { Char } from "@/types/responses/charList";
import { Box, styled } from "@mui/material";
import { XpBarActionList } from "../../features/character/components/Actions/XpBarActionList";
import { ContentHeading } from "../Heading";
import { FontSize } from "@/consts/fontSize";

export function XpBar(props: XpBarProps) {
  const width = ((props.current_exp - props.min_exp) / props.max_exp) * 100;
  const XpBarText = styled(ContentHeading)(() => ({
    position: "absolute",
    top: "50%",
    translate: "0 -50%",
    left: "2em",
    zIndex: 2,
    fontSize: FontSize.M,
  }));

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <RegularText
        sx={{
          display: "flex",
          justifyContent: "end",
          fontSize: FontSize.XS2,
        }}
      >
        {props.current_exp} / {props.max_exp} XP
      </RegularText>
      <Box
        sx={{
          position: "relative",
          marginLeft: "40px",
        }}
      >
        <Level
          level={props.lvl}
          sx={{
            position: "absolute",
            zIndex: 1,
            top: "50%",
            left: 0,
            height: "125%",
            transform: "translate(-50%, -50%)",
          }}
        ></Level>
        {props.char && <XpBarActionList char={props.char} />}
        {!props.char && props.text && <XpBarText>{props.text}</XpBarText>}
        <img
          src={xpBarBg}
          style={{
            width: "100%",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: `${width}%`,
            height: "100%",
            top: 0,
            overflow: "hidden",
          }}
        >
          <img
            src={xpBarFilledBg}
            style={{
              height: "100%",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export interface XpBarProps {
  min_exp: number;
  max_exp: number;
  current_exp: number;
  lvl: number;
  char?: Char;
  text?: String;
}
