import offensiveIcon from "@/assets/icons/inventory/Icon_Item_Offensive.svg";
import defensiveIcon from "@/assets/icons/inventory/Icon_Item_Defensive.svg";
import specialIcon from "@/assets/icons/inventory/Icon_Item_Special.svg";
import spellbookIcon from "@/assets/icons/inventory/Icon_Item_Spellbook.svg";
import { Avatar } from "@mui/material";

export function ItemSlotIcon(props: { slot: number }) {
  const getIconBySlotId = (slot: number) => {
    switch (slot) {
      case 1:
        return offensiveIcon;
      case 2:
        return defensiveIcon;
      case 3:
        return specialIcon;
      case 4:
        return spellbookIcon;
    }
  };

  return <Avatar variant="square" src={getIconBySlotId(props.slot)} />;
}
