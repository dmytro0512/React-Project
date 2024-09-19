import { Box, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { RegularText } from "@/components/Text";
import React from "react";
import { RarityId } from "@/consts/rarityId";
import emptySlotImage from "@/assets/equipment-empty-slot.png";
import { ActionCardHeading } from "@/components/Heading";
import {
  CommonContainer,
  EmptySlotContainer,
  LegendaryContainer,
} from "@/features/character/components/Equipments/EquipmentContainer";
import { EquipmentLayout } from "@/features/character/components/Equipments/EquipmentLayout";
import { EquipmentInfo } from "@/features/character/components/Equipments/EquipmentInfo";
import { ImagePath } from "@/consts/imagePaths";
import { getImageHost } from "@/utils/getImageHost";
import { Item } from "@/features/inventory/types/items";

const EquipmentBonus = styled(RegularText)(({ theme }) => ({
  padding: theme.spacing(1),
  backgroundColor: "#62583B",
  borderRadius: "90px",
}));

export function Equipment(props: EquipmentProps) {
  const isEquipped = Object.getOwnPropertyNames(props.equipmentItem).length > 0;

  const Container = isEquipped
    ? props.equipmentItem.rarity_id >= RarityId.LEGENDARY
      ? LegendaryContainer
      : CommonContainer
    : EmptySlotContainer;

  const itemImage = isEquipped
    ? `${getImageHost()}${ImagePath.ITEMS}${props.equipmentItem.src}`
    : emptySlotImage;

  return (
    <Container>
      <EquipmentLayout image={itemImage}>
        {isEquipped && (
          <EquipmentInfo
            id={props.equipmentItem.item_id}
            name={props.equipmentItem.name}
            bonuses={props.equipmentItem?.text_attributes?.map(
              (attr, index) => (
                <Stack direction="row" spacing={1} alignItems="center">
                  <EquipmentBonus key={index}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <img
                        src={`${getImageHost()}${ImagePath.ATTRIBUTES}${attr.src}`}
                        alt={attr.text_attribute}
                        style={{ width: "22px" }}
                      />
                      {attr.prefix}
                      {attr.value}
                      {attr.postfix}
                      {attr.secondary_value ? ` (${attr.secondary_value})` : ""}
                    </Stack>
                  </EquipmentBonus>
                </Stack>
              ),
            )}
            properties={props.properties}
          />
        )}

        {!isEquipped && (
          <Stack spacing={2} alignItems="center">
            <ActionCardHeading>+ Equip an item</ActionCardHeading>
            {props.properties}
          </Stack>
        )}
      </EquipmentLayout>
    </Container>
  );
}

export function EquipmentProperty(props: EquipmentPropertyProps) {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      {/* <Box
        sx={{
          width: "32px",
          height: "32px",
          backgroundImage: `url(${props.background})`,
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      > */}
      <img src={props.icon} style={{ width: "22px" }} />
      {/* </Box> */}
      <RegularText>{props.text}</RegularText>
    </Stack>
  );
}

interface EquipmentPropertyProps {
  background: string;
  icon: string;
  text: string;
}

interface EquipmentProps {
  equipmentItem: Item | Record<string, never>;
  properties: React.ReactElement[];
}
