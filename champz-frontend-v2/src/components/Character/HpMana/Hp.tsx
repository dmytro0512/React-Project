import { RegularText } from "@/components/Text";
import { FontWeight } from "@/consts/fontWeight";
import { Char } from "@/types/responses/charList";
import { Box, BoxProps } from "@mui/material";
import { HPBarActionList } from "../../../features/character/components/Actions/HPBarActionList";

export function Hp({ char, ...rest }: HpProps & BoxProps) {
  const hpPercent = (char?.hp / char?.hp_base) * 100;

  return (
    char && (
      <Box
        {...rest}
        className="hp-bar-container"
        sx={{
          ...rest.sx,
          backgroundColor: "#4A1818",
          backgroundImage: `linear-gradient(#4A1818, #4A1818), linear-gradient(to top, rgba(255, 255, 255, 0), rgba(255, 68, 116, 0.4))`,
          border: "double 1.5px transparent",
          backgroundOrigin: "border-box",
          backgroundClip: "content-box, border-box",
          position: "relative",
        }}
      >
        <Box
          className="hp-bar"
          sx={{
            height: "13px",
            width: `${hpPercent}%`,
            backgroundColor: "#E63434",
            boxShadow:
              "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 2px 4px 0px rgba(255, 156, 156, 1) inset",
          }}
        >
          <Box
            className="hp-info"
            sx={{
              position: "absolute",
              display: "none",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <RegularText
              sx={{
                color: "#FFFFFF",
                fontWeight: FontWeight.XL,
              }}
            >
              {char.hp} / {char.hp_base} HP
            </RegularText>
            <HPBarActionList char={char} />
          </Box>
        </Box>
      </Box>
    )
  );
}

export interface HpProps {
  char: Char;
  extended?: boolean;
}
