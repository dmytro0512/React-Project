import { Box, Stack, styled } from "@mui/material";
import { ItemShowCaseProps } from "../../types/items";
import { ItemAttributePills } from "@/components/Items/ItemAttributePills";
import { ItemSlotIcon } from "@/components/Items/ItemSlotIcon";
import { ItemClassIcon } from "@/components/Items/ItemClassIcon";
import { ItemImage } from "@/components/Items/ItemImage";
import { ChampzLoading } from "@/components/ChampzLoading";
import { Level } from "@/components/Character/Level";
import { ItemTitle, TinyText } from "@/components/Text";
import { memo } from "react";
import borderUrl from "@/assets/backgrounds/items/landscape_item.svg";

const ItemShowCaseLandscape = memo(function (props: ItemShowCaseProps) {
  const LandscapeItemContainer = styled(Stack)(({ theme }) => ({
    position: "relative",
    cursor: "pointer",
    borderImageSource: `url(${borderUrl})`,
    borderImageWidth: "16px",
    borderImageOutset: 0,
    borderImageRepeat: "stretch",
    borderImageSlice: `16 fill`,
    borderStyle: "solid",
    padding: theme.spacing(1),
  }));
  if (props.item === undefined) {
    return <ChampzLoading />;
  }

  return (
    <LandscapeItemContainer
      direction={"row"}
      spacing={1}
      onClick={() => {
        props.onSelectItem(props.item);
      }}
    >
      <Level
        sx={{
          position: "absolute",
          zIndex: 1,
          height: "40px",
          width: "40px",
        }}
        small={true}
        level={props.item.item_lvl}
      >
        {props.item.item_lvl}
      </Level>
      <Box width={"96px"}>
        <ItemImage src={props.item.src} />
      </Box>
      <Stack sx={{ flexGrow: 1, justifyContent: "space-between" }}>
        <Stack
          direction={"row"}
          sx={{ flexGrow: 1, justifyContent: "space-between" }}
        >
          <Stack sx={{ flexGrow: 1, justifyContent: "space-between" }}>
            <ItemTitle>{props.item.name}</ItemTitle>
            <TinyText>Min Level {props.item.min_lvl_equip}</TinyText>
          </Stack>
          <Stack direction={"row"}>
            <ItemSlotIcon slot={props.item.slot_id} />
            <ItemClassIcon weapon_class_id={props.item.weapon_class_id} />
          </Stack>
        </Stack>
        <Stack direction={"row"} paddingBlock={0.5} spacing={0.5}>
          <ItemAttributePills item={props.item} />
        </Stack>
      </Stack>
    </LandscapeItemContainer>
  );
});

export default ItemShowCaseLandscape;
