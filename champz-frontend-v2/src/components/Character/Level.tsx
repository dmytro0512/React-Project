import levelBg from "@/assets/backgrounds/level.svg";
import { BorderColor } from "@/consts/borderColor";

import { FontSize } from "@/consts/fontSize";
import { FontWeight } from "@/consts/fontWeight";
import { TextColor } from "@/consts/textColor";
import { aladin } from "@/fonts/aladin";
import { Avatar, Box, BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const LevelText = styled(Box)(() => ({
  fontFamily: aladin.fontFamily,
  fontSize: FontSize.XL,
  fontWeight: FontWeight.M,
  color: TextColor.heading2,
  WebkitTextStroke: `4px ${BorderColor.heading2}`,
  paintOrder: `stroke fill`,
}));

const LevelTextSmall = styled(Box)(() => ({
  fontFamily: aladin.fontFamily,
  fontSize: FontSize.XS,
  fontWeight: FontWeight.M,
  color: TextColor.heading2,
  WebkitTextStroke: `4px ${BorderColor.heading2}`,
  WebkitFillColor: TextColor.heading2,
  paintOrder: `stroke fill`,
}));

export function Level({ level, ...boxProps }: LevelProps & BoxProps) {
  return (
    <Box
      {...boxProps}
      sx={{
        height: "100%",
        aspectRatio: 1,
        backgroundImage: `url(${levelBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        position: "relative",
        ...boxProps.sx,
      }}
    >
      {boxProps.small ? (
        <LevelTextSmall
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transform: "rotateZ(8.5deg)",
          }}
        >
          {level}
        </LevelTextSmall>
      ) : (
        <LevelText
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transform: "rotateZ(8.5deg)",
          }}
        >
          {level}
        </LevelText>
      )}
    </Box>
  );
}

interface LevelProps {
  level: number;
  small?: boolean;
}
