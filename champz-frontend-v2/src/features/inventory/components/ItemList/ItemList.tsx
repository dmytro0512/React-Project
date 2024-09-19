import { ChampzTabPanel } from "@/components/ChampzTabs/ChampzTabPanel";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { InventorySearch } from "@/routes/_auth/forging";
import { Item, ItemProps, OnSelectItemProps } from "../../types/items";
import { ItemPortraitList } from "./ItemPortraitList";
import { ChampzLoading } from "@/components/ChampzLoading";
import { InventoryFilter } from "./InventoryFilter";
import { useGetPlayerItemList } from "../../hooks/useGetPlayerItemList";

interface ItemListProps extends ItemProps, OnSelectItemProps {}

export function ItemList(props: ItemListProps) {
  const { itemList, itemListIsLoading, itemListIsSuccess } =
    useGetPlayerItemList();
  const [filter, setFilter] = useState<InventorySearch>({
    name: props.item?.name,
  });

  useEffect(() => {
    setFilter((prevState) => {
      let copy = { ...prevState };
      copy.cfg_item_id = props.item?.cfg_item_id;
      return copy;
    });
  }, [props.item]);

  return (
    <ChampzTabPanel value={0} index={0}>
      <InventoryFilter filter={filter} setFilter={setFilter} />
      {itemListIsLoading && <ChampzLoading />}
      {itemListIsSuccess && (
        <Grid container xs={12} spacing={1}>
          <ItemPortraitList
            filter={filter}
            itemList={itemList as Item[]}
            onSelectItem={props.onSelectItem}
          />
        </Grid>
      )}
    </ChampzTabPanel>
  );
}
