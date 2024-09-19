import { Item } from "@/features/inventory/types/items";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { ForgableItemSelectableProps } from "../../types/forging";
import ItemShowCasePortrait from "@/features/inventory/components/ItemShowCases/ItemShowCasePortrait";
import { ChampzDialog } from "@/components/ChampzDialog/ChampzDialog";

export function ForgableItemSelectable(props: ForgableItemSelectableProps) {
  const [selected, setSelected] = useState(props.isSelected);
  const [showInfoDialog, setShowInfoDialog] = useState(false);

  useEffect(() => {
    if (selected !== props.isSelected) {
      setSelected(props.isSelected);
    }
  }, [props.isSelected]);

  const handleSelectToggle = (item: Item | undefined) => {
    if (props.selectedTargetItem == undefined) {
      setShowInfoDialog(true);
      return;
    }

    if (item !== undefined) {
      props.onSourceItemSelect(item, !props.isSelected);
      setSelected(!props.isSelected);
    }
  };

  return (
    <>
      <ChampzDialog
        open={showInfoDialog}
        onClose={() => setShowInfoDialog(false)}
      >
        Select a recipe first
      </ChampzDialog>
      <Box
        sx={{ position: "relative" }}
        onClick={() => handleSelectToggle(props.item)}
      >
        {/* <Box sx={{ position: "absolute", zIndex: 10 }}>
        {selected && "Selected"}
      </Box> */}

        <ItemShowCasePortrait
          selected={selected}
          item={props.item}
          onSelectItem={() => {}}
        />
      </Box>
    </>
  );
}
