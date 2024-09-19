import { RegularText } from "@/components/Text";
import { Title } from "@/components/Title";
import { FontSize } from "@/consts/fontSize";
import { Stack } from "@mui/material";

export function EquipmentInfo(props: EquipmentInfoProps) {
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={1}>
        <Title sx={{ fontSize: FontSize.M }}>{props.name}</Title>
        <RegularText>#{props.id}</RegularText>
      </Stack>
      <Stack direction="row" alignItems="flex-start" spacing={1}>
        {props.bonuses}
      </Stack>
      <Stack direction="row" alignItems="flex-start" spacing={1}>
        {props.properties}
      </Stack>
    </Stack>
  );
}

interface EquipmentInfoProps {
  name: string;
  id: number;
  bonuses: React.ReactElement[];
  properties: React.ReactElement[];
}
