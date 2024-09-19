import { Char } from "@/types/responses/charList";
import { Box, StackProps, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

const ManaSlot = styled(Box)(() => ({
  height: "100%",
  flex: 1,
}));

export function Mana({ char, ...boxProps }: ManaProps & StackProps) {
  return (
    char && (
      <Box
        {...boxProps}
        className="mana-bar-container"
        sx={{
          ...boxProps.sx,
          backgroundColor: "#363922",
          width: "100%",
        }}
      >
        <Stack
          direction="row"
          className="mana-bar"
          gap={0.25}
          sx={{
            overflow: "hidden",
          }}
        >
          {Array(char.mana)
            .fill(undefined)
            .map((_, i) => {
              return (
                <ManaSlot
                  key={i}
                  sx={{
                    backgroundColor: "#00A6ED",
                    boxShadow: `0px 1px 5px 0px #D2F7FF inset`,
                  }}
                ></ManaSlot>
              );
            })}
          {Array(char.mana_base - char.mana)
            .fill(undefined)
            .map((_, i) => {
              return <ManaSlot key={i}></ManaSlot>;
            })}
        </Stack>
      </Box>
    )
  );
}

export interface ManaProps {
  char: Char;
}
