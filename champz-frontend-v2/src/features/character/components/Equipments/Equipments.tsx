import { styled } from "@mui/material/styles";
import equipmentBg from "@/assets/backgrounds/equipment.svg";
import { Box, Stack } from "@mui/material";
import useAuthContext from "@/features/auth/contexts/authContext";
import { Stats } from "@/features/character/components/Equipments/Stats";
import {
  EquipmentProperty,
  Equipment,
} from "@/features/character/components/Equipments/Equipment";
import { Heading } from "@/components/Heading";
import propertyBgV1 from "@/assets/backgrounds/buttons/equipment/v1.svg";
import propertyBgV3 from "@/assets/backgrounds/buttons/equipment/v3.svg";
import propertyBgV5 from "@/assets/backgrounds/buttons/equipment/v5.svg";
import { ChampzLoading } from "@/components/ChampzLoading";
import { getImageHost } from "@/utils/getImageHost";
import { ImagePath } from "@/consts/imagePaths";

export function Equipments() {
  const { selectedChar } = useAuthContext();

  if (!selectedChar) {
    return <ChampzLoading />;
  }

  return (
    <EquipmentsContainer>
      <Stack>
        <Stats
          ap={selectedChar.ap}
          hp={selectedChar.hp}
          hpBase={selectedChar.hp_base}
          attackMax={selectedChar.attack_max}
          attackMin={selectedChar.attack_min}
          defense={selectedChar.defense}
        ></Stats>
        <Heading>Equipment</Heading>
        <Stack spacing={1}>
          <Equipment
            equipmentItem={selectedChar.equipment.attack_item}
            properties={[
              <EquipmentProperty
                background={propertyBgV1}
                icon={`${getImageHost()}${ImagePath.ICONS}Icon_Item_Offensive.svg`}
                text="Offensive"
                key="Offensive"
              />,
            ]}
          />

          <Equipment
            equipmentItem={selectedChar.equipment.defense_item}
            properties={[
              <EquipmentProperty
                background={propertyBgV3}
                icon={`${getImageHost()}${ImagePath.ICONS}Icon_Item_Defensive.svg`}
                text="Defensive"
                key="Defensive"
              />,
            ]}
          />

          <Equipment
            equipmentItem={selectedChar.equipment.special_item}
            properties={[
              <EquipmentProperty
                background={propertyBgV5}
                icon={`${getImageHost()}${ImagePath.ICONS}Icon_Item_Special.svg`}
                text="Special slot"
                key="Special"
              />,
            ]}
          />
        </Stack>
      </Stack>
    </EquipmentsContainer>
  );
}

const EquipmentsContainer = styled(Box)(({ theme }) => {
  return {
    padding: theme.spacing(2),
    paddingBottom: "32px",
    backgroundImage: `url(${equipmentBg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
  };
});
