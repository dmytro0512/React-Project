import { Box, Stack } from "@mui/material";
import { PropsWithChildren } from "react";

export function EquipmentLayout(
  props: PropsWithChildren<EquipmentLayoutProps>,
) {
  return (
    <Stack direction="row" spacing={1}>
      <Box>
        <img src={props.image} style={{ width: "140px" }} />
      </Box>
      <Box sx={{ display: "flex" }} alignItems="center">
        {props.children}
      </Box>
    </Stack>
  );
}

interface EquipmentLayoutProps {
  image: string;
}
