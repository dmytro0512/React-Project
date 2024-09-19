import { ChampzTabPanel } from "@/components/ChampzTabs/ChampzTabPanel";
import { ItemFilter } from "../ItemFilter";
import { Stack } from "@mui/material";
import { ItemLandscapeList } from "./ItemLandscapeList";
import { useState } from "react";
import { InventorySearch } from "@/routes/_auth/forging";
import { Item, OnSelectItemProps } from "../../types/items";
import { ChampzLoading } from "@/components/ChampzLoading";
import { useGetAllItemList } from "../../hooks/useGetAllItemList";

export function AllItemList(props: OnSelectItemProps) {
  const [filter, setFilter] = useState<InventorySearch>({
    name: "",
  });

  const { allItems, allItemsIsLoading, allItemsIsSuccess } =
    useGetAllItemList();

  return (
    <ChampzTabPanel value={0} index={0}>
      <ItemFilter filter={filter} setFilter={setFilter} />
      <Stack spacing={1}>
        {allItemsIsLoading && <ChampzLoading />}
        {allItemsIsSuccess && (
          <ItemLandscapeList
            filter={filter}
            itemList={allItems as Item[]}
            onSelectItem={props.onSelectItem}
          />
        )}
      </Stack>
    </ChampzTabPanel>
  );
}
