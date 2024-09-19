import { getRouteApi } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { ChampzTabs } from "@/components/ChampzTabs/ChampzTabs";
import { ChampzTab } from "@/components/ChampzTabs/ChampzTab";
import { ChampzTabPanel } from "@/components/ChampzTabs/ChampzTabPanel";
import { Recipes } from "./Recipes/Recipes";
import { Item } from "@/features/inventory/types/items";
import { Workbench } from "./Workbench/Workbench";
import { ForgableItems } from "./ForgabeItems/ForgableItems";
import { useSelectedSourceItemList } from "../hooks/useSelectedSourceItemList";
import { useSelectedSourceConsumableList } from "../hooks/useSelectedSourceConsumableList";

export function Forging() {
  const routeApi = getRouteApi("/_auth/forging");
  const routeSearch = routeApi.useSearch();
  const [selectedTargetItem, setSelectedTargetItem] = useState<Item>();
  const {
    selectedSourceItemList,
    setSelectedSourceItemList,
    setSelectedSourceItemListViaRecipe,
    handleToggleSourceItemSelect,
    handleReduceItemFromSourceItemList,
    handleIncreaseItemFromSourceList,
  } = useSelectedSourceItemList();

  const {
    selectedSourceConsumableList,
    setSelectedSourceConsumableList,
    setSelectedSourceConsumableListViaRecipe,
    handleToggleSourceConsumableSelect,
  } = useSelectedSourceConsumableList();

  useEffect(() => {
    if (selectedTargetItem === undefined) {
      setSelectedSourceItemList([]);
      setSelectedSourceConsumableList([]);
    } else {
      // Set all items per default that are part of the recipe
      setSelectedSourceItemListViaRecipe(selectedTargetItem);
      setSelectedSourceConsumableListViaRecipe(selectedTargetItem);
    }
  }, [selectedTargetItem]);

  return (
    <>
      {/* <RecipeFilter filter={filter} setFilter={setFilter} />
      <RecipeList filter={filter} /> */}
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <ChampzTabs value={0}>
            <ChampzTab label="Recipes" id="0" />
          </ChampzTabs>
          <ChampzTabPanel index={0} value={0}>
            <Recipes onSelectItem={setSelectedTargetItem} />
          </ChampzTabPanel>
        </Grid>
        <Workbench
          selectedItem={selectedTargetItem}
          selectedSourceItemList={selectedSourceItemList}
          selectedSourceConsumableList={selectedSourceConsumableList}
          onSelectItem={setSelectedTargetItem}
          onReduceForgeCount={() => {
            handleReduceItemFromSourceItemList(selectedTargetItem as Item);
          }}
          onIncreaseForgeCount={() => {
            handleIncreaseItemFromSourceList(selectedTargetItem as Item);
          }}
        />
        <Grid item xs={4}>
          <ChampzTabs value={0}>
            <ChampzTab label="Forgable Items" id="0" />
          </ChampzTabs>
          <ChampzTabPanel index={0} value={0}>
            <ForgableItems
              selectedTargetItem={selectedTargetItem}
              selectedSourceItemList={selectedSourceItemList}
              selectedSourceConsumableList={selectedSourceConsumableList}
              onSourceItemSelect={handleToggleSourceItemSelect}
              onSourceConsumableSelect={handleToggleSourceConsumableSelect}
            />
          </ChampzTabPanel>
        </Grid>
      </Grid>
    </>
  );
}
