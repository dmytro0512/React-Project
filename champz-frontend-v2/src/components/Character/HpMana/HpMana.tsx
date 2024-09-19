import { Hp, HpProps } from "@/components/Character/HpMana/Hp";
import { Mana, ManaProps } from "@/components/Character/HpMana/Mana";
import { Box } from "@mui/material";

export function HpMana(props: HpManaProps) {
  const manaPaddingTop = props.extended ? "5px" : "4px";
  const manaBorderRadiusValue = props.extended ? "90px" : "62px";
  const manaBarCOntainerHeight = props.extended ? "15px" : "13px";
  const manaBarHeight = props.extended ? "8px" : "6px";

  const hpBarContainerBorderRadius = props.extended ? "8px" : "4px";
  const hpBorderRadius = props.extended ? "7px" : "3px";
  const hpBarHeight = props.extended ? "38px" : "8px";

  return (
    <Box
      className={props.extended ? "extended" : ""}
      sx={{
        ".mana-bar-container": {
          padding: `${manaPaddingTop} 10px 0`,
          borderRadius: `0 0 ${manaBorderRadiusValue} ${manaBorderRadiusValue}`,
          height: manaBarCOntainerHeight,
        },
        ".hp-bar-container": {
          borderRadius: hpBarContainerBorderRadius,
        },
        ".hp-bar": {
          height: hpBarHeight,
          borderRadius: hpBorderRadius,
        },
        ".mana-bar": {
          height: manaBarHeight,
          borderRadius: `0 0 ${manaBorderRadiusValue} ${manaBorderRadiusValue}`,
        },
        "&.extended .mana-bar-container": {
          margin: "0 24px",
          width: "auto",
        },
        "&.extended .hp-info": {
          display: "flex",
        },
      }}
    >
      <Hp char={props.char} sx={{ position: "relative", zIndex: 1 }}></Hp>
      <Mana
        char={props.char}
        sx={{
          position: "relative",
          top: `-${manaPaddingTop}`,
          marginBottom: `-${manaPaddingTop}`,
          zIndex: 0,
        }}
      ></Mana>
    </Box>
  );
}

interface HpManaProps extends HpProps, ManaProps {
  extended?: boolean;
}
