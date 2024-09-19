import { HpMana } from "@/components/Character/HpMana/HpMana";
import { RegularText } from "@/components/Text";
import { Title } from "@/components/Title";
import { ImagePath } from "@/consts/imagePaths";
import { BarracksMemberBorder } from "@/features/charlist/components/Barracks/BarracksMemberBorder";
import { Char } from "@/types/responses/charList";
import { getImageHost } from "@/utils/getImageHost";
import { Avatar, Box, Stack } from "@mui/material";

export function BarracksMember({ char, isSelected }: BarracksMemberProps) {
  return (
    <BarracksMemberBorder
      className={isSelected ? "selected" : ""}
      sx={{ cursor: "pointer" }}
    >
      <Stack direction="row" gap={1}>
        <Box>
          <Avatar
            variant="rounded"
            src={`${getImageHost()}${ImagePath.CHARS}${char.src}`}
            sx={{ width: avatarSize, height: avatarSize }}
          ></Avatar>
        </Box>
        <Box sx={{ flex: 1, display: "flex", alignItems: "center" }}>
          <Stack gap={1} sx={{ flex: 1 }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ position: "relative" }}
            >
              <Title>{char.name}</Title>
              <Stack
                direction="row"
                gap={0.5}
                alignItems="center"
                sx={{ position: "absolute", right: 0 }}
              >
                <Title>AP</Title>
                <RegularText>{char.ap}</RegularText>
              </Stack>
            </Stack>
            <Stack direction="row" gap={0.5}>
              <RegularText>{char.class}</RegularText>
              <RegularText>/</RegularText>
              <RegularText>LVL {char.lvl}</RegularText>
              <RegularText>{char.status}</RegularText>
            </Stack>
            <HpMana char={char}></HpMana>
          </Stack>
        </Box>
      </Stack>
    </BarracksMemberBorder>
  );
}

export interface BarracksMemberProps {
  char: Char;
  isSelected: boolean;
}

const avatarSize = "96px";
