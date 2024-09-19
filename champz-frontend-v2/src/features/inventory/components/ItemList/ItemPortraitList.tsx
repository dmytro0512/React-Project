import { InventoryListProps } from "../../types/items";
import { useShowItem } from "../../hooks/useShowItem";
import { ChampzButton } from "@/components/ChampzButton";
import { useCharActions } from "@/features/character/hooks/useCharActions";
import { useItemActions } from "../../hooks/useItemActions";
import { Box, Grid, styled } from "@mui/material";
import ItemShowCasePortrait from "../ItemShowCases/ItemShowCasePortrait";

export function ItemPortraitList(props: InventoryListProps) {
  const { showItemByFilter } = useShowItem();
  const { unequip } = useCharActions();
  const { delist } = useItemActions();

  const ButtonHolder = styled(Box)(({ theme }) => ({
    position: "absolute",
    inset: 0,
    zIndex: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  return (
    <>
      {props.itemList?.map((item) => {
        if (showItemByFilter(item, props.filter)) {
          return (
            <Grid item xs={12 / 5} position={"relative"}>
              {item.listed && (
                <ButtonHolder>
                  <ChampzButton onClick={() => delist(item.item_id)}>
                    Delist
                  </ChampzButton>
                </ButtonHolder>
              )}
              {item.equipped && (
                <ButtonHolder>
                  <ChampzButton
                    onClick={() =>
                      unequip(
                        item.equipped_char_id as number,
                        item.slot_id,
                        item.item_id,
                      )
                    }
                  >
                    Unequip
                  </ChampzButton>
                </ButtonHolder>
              )}
              <ItemShowCasePortrait
                item={item}
                onSelectItem={props.onSelectItem}
              />
            </Grid>
          );
        }
      })}
    </>
  );
}
