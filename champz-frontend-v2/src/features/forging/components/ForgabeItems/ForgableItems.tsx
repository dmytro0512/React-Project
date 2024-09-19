import { useState } from "react";
import { InventorySearch } from "@/routes/_auth/inventory";
import { ForgableItemsFilter } from "./ForgableItemsFilter";
import { ForgableItemsList } from "./ForgableItemsList";
import { ForgableConsumablesList } from "./ForgableConsumablesList";
import { OnItemSelectTargetProps } from "../../types/forging";
import { Grid } from "@mui/material";

export function ForgableItems(props: OnItemSelectTargetProps) {
  const [filter, setFilter] = useState<InventorySearch>({
    name: "",
  });

  return (
    <>
      <ForgableItemsFilter filter={filter} setFilter={setFilter} />
      <Grid container xs={12} spacing={1}>
        <ForgableConsumablesList
          filter={filter}
          onSourceConsumableSelect={props.onSourceConsumableSelect}
          selectedSourceConsumableList={props.selectedSourceConsumableList}
          selectedTargetItem={props.selectedTargetItem}
        />
        <ForgableItemsList
          filter={filter}
          onSourceItemSelect={props.onSourceItemSelect}
          selectedSourceItemList={props.selectedSourceItemList}
          selectedTargetItem={props.selectedTargetItem}
        />
      </Grid>
    </>
  );
}
