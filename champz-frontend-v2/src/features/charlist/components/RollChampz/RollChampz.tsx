import { RollChampzBorder } from "@/features/charlist/components/RollChampz/RollChampzBorder";
import { Avatar, Box, Stack } from "@mui/material";
import avatar from "@/assets/roll-champz-avatar.png";
import { ActionCardHeading } from "@/components/Heading";
import { UnStyledLink } from "@/components/UnStyledLink";

export function RollChampz() {
  return (
    <UnStyledLink key={`rollNewChamp`} to="/character/roll" preload={false}>
      <RollChampzBorder>
        <Stack direction="row" gap={1}>
          <Box>
            <Avatar
              variant="rounded"
              sx={{ width: avatarSize, height: avatarSize }}
              src={avatar}
            ></Avatar>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ActionCardHeading>+ Roll a new Champ</ActionCardHeading>
          </Box>
        </Stack>
      </RollChampzBorder>
    </UnStyledLink>
  );
}

const avatarSize = 96;
