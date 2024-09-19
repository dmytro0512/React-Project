import meleeAttack from "@/assets/icons/inventory/Icon_Attack_Melee.svg";
import rangedAttack from "@/assets/icons/inventory/Icon_Attack_Ranged.svg";
import magicAttack from "@/assets/icons/inventory/Icon_Attack_Magic.svg";
import allAttack from "@/assets/icons/inventory/Icon_Attack_All.svg";
import { Avatar } from "@mui/material";

export function ItemClassIcon(props: { weapon_class_id: number }) {
  const getIconByClassId = (weapon_class_id: number) => {
    switch (weapon_class_id) {
      case 1:
        return meleeAttack;
      case 2:
        return rangedAttack;
      case 3:
        return magicAttack;
      case 4:
        return allAttack;
    }
  };

  return (
    <Avatar variant="square" src={getIconByClassId(props.weapon_class_id)} />
  );
}
