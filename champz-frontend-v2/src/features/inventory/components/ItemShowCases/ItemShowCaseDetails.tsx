import { ChampzTabPanel } from "@/components/ChampzTabs/ChampzTabPanel";
import { Avatar, Box, Button, Grid, Stack } from "@mui/material";
import { ItemProps } from "../../types/items";
import { ChampzLoading } from "@/components/ChampzLoading";
import { ItemAttributePills } from "@/components/Items/ItemAttributePills";
import { ItemSlotIcon } from "@/components/Items/ItemSlotIcon";
import { ItemClassIcon } from "@/components/Items/ItemClassIcon";
import { ItemImage } from "@/components/Items/ItemImage";
import { Link } from "@tanstack/react-router";
import { Level } from "@/components/Character/Level";
import { ItemTitle, LightText, TinyText } from "@/components/Text";
import { FontSize } from "@/consts/fontSize";
import { PillButton } from "@/components/PillButton";
import { UnStyledLink } from "@/components/UnStyledLink";
import { memo } from "react";
import { TextShadow } from "@/consts/textShadow";
import { FontWeight } from "@/consts/fontWeight";

const ItemShowCaseDetails = memo(function ItemShowCaseDetails(
  props: ItemProps,
) {
  console.log(props.item);
  // Platzhalter?
  if (!props.item)
    return (
      <ChampzTabPanel value={0} index={0}>
        <ChampzLoading />
      </ChampzTabPanel>
    );

  return (
    <>
      <ChampzTabPanel value={0} index={0}>
        <Stack
          alignItems={"center"}
          sx={{ position: "relative" }}
          spacing={0.5}
        >
          <Level
            level={props.item.item_lvl}
            sx={{
              position: "absolute",
              zIndex: 1,
              left: 0,
              top: 0,
              height: "64px",
              width: "64px",
            }}
          >
            {props.item.item_lvl}
          </Level>
          <ItemImage
            src={props.item.src}
            sx={{ height: "128px", width: "128px" }}
          />
          <Box
            sx={{
              position: "absolute",
              textShadow: "0 0 5px #000000",
              fontSize: FontSize.XS,
              fontWeight: FontWeight.L,
              opacity: 0.8,
            }}
          >
            {props.item.item_id !== undefined && `#${props.item.item_id}`}
          </Box>
          <Stack>
            <Stack
              spacing={1}
              sx={{
                position: "absolute",
                zIndex: 1,
                right: 0,
                top: 0,
              }}
            >
              <ItemSlotIcon slot={props.item.slot_id} />
              <ItemClassIcon weapon_class_id={props.item.weapon_class_id} />
            </Stack>
          </Stack>
          <ItemTitle
            sx={{
              position: "relative",
              width: "100%",
              textAlign: "center",
              fontSize: FontSize.M,
              lineHeight: 1,
            }}
          >
            {props.item.name}
            <Avatar
              src={"Forge Icon Here"}
              sx={{
                position: "absolute",
                right: "0",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
          </ItemTitle>
          <TinyText
            style={{ position: "relative", bottom: "4px", opacity: 0.75 }}
          >
            Min level {props.item.min_lvl_equip}
          </TinyText>
          <Stack direction={"row"} spacing={0.5}>
            <ItemAttributePills item={props.item} />
          </Stack>
          <TinyText sx={{ textAlign: "center" }}>
            {props.item.description}
          </TinyText>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <PillButton sx={{ display: "block", width: "100%" }}>
                Sell
              </PillButton>
            </Grid>
            <Grid item xs={6}>
              <UnStyledLink
                to={"/marketplace"}
                search={() => ({
                  name: props.item?.name,
                  dir: "asc" as "asc",
                  sort: "price" as "price",
                })}
              >
                <PillButton sx={{ display: "block", width: "100%" }}>
                  Buy
                </PillButton>
              </UnStyledLink>
            </Grid>
          </Grid>
        </Stack>
      </ChampzTabPanel>
    </>
  );
});

export default ItemShowCaseDetails;
