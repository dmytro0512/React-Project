import { Consumable } from "@/features/inventory/types/items";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { ConsumableShowCasePortrait } from "@/features/inventory/components/ConsumableShowCases/ConsumableShowCasePortrait";
import { ForgableConsumableSelectableProps } from "../../types/forging";
import { ChampzLoading } from "@/components/ChampzLoading";

export function ForgableConsumableSelectable(
  props: ForgableConsumableSelectableProps,
) {
  const [selected, setSelected] = useState(props.isSelected);

  useEffect(() => {
    if (selected !== props.isSelected) {
      setSelected(props.isSelected);
    }
  }, [props.isSelected]);

  const handleSelectToggle = (consumable: Consumable | undefined) => {
    if (consumable !== undefined) {
      props.onSourceConsumableSelect(consumable, !props.isSelected);
      setSelected(!props.isSelected);
    }
  };

  if (props.consumable === undefined) {
    return <ChampzLoading />;
  }
  
  return (
    <Box
      sx={{ position: "relative" }}
      onClick={() => handleSelectToggle(props.consumable)}
    >
      <Box sx={{ position: "absolute", zIndex: 10 }}>
        {selected && "Selected"}
      </Box>
      <ConsumableShowCasePortrait consumable={props.consumable} />
    </Box>
  );
}
