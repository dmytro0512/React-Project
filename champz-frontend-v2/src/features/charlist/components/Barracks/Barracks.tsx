import { UnStyledLink } from "@/components/UnStyledLink";
import { BarracksMember } from "@/features/charlist/components/Barracks/BarracksMember";
import { Char } from "@/types/responses/charList";
import { Stack } from "@mui/material";

export function Barracks(props: BarracksProps) {  
  return (
    <Stack direction="column" gap={1}>
      {props.charList?.map((char) => {
        return (
          <UnStyledLink
            key={char.id}
            to="/character/$id"
            params={{ id: char.id + "" }}
            preload={false}
          >
            <BarracksMember
              char={char}
              isSelected={char === props.selectedChar}
            ></BarracksMember>
          </UnStyledLink>
        );
      })}
    </Stack>
  );
}

interface BarracksProps {
  charList: Char[] | undefined;
  selectedChar: Char | undefined;
}
