import { Grid } from "@mui/material";
import { ChampzTab } from "@/components/ChampzTabs/ChampzTab";
import { ChampzTabs } from "@/components/ChampzTabs/ChampzTabs";
import { AllItemList } from "./AllItemList/AllItemList";
import { ItemList } from "./ItemList/ItemList";
import { useState } from "react";
import { Item } from "../types/items";
import { ChampzTabPanel } from "@/components/ChampzTabs/ChampzTabPanel";
import { MarketplaceHistory } from "./Marketplace/MarketplaceHistory";
import ItemShowCaseDetails from "./ItemShowCases/ItemShowCaseDetails";

export function Inventory() {
  const [selectedItem, setSelectedItem] = useState<Item>();

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <ChampzTabs value={0}>
            <ChampzTab label="Items" />
          </ChampzTabs>
          <AllItemList onSelectItem={setSelectedItem} />
        </Grid>
        <Grid item xs={5}>
          <ChampzTabs value={0}>
            <ChampzTab label="Items" />
          </ChampzTabs>
          <ItemList item={selectedItem} onSelectItem={setSelectedItem} />
        </Grid>
        <Grid item xs={3}>
          <ChampzTabs value={0}>
            <ChampzTab label="Das Item" />
          </ChampzTabs>
          <ItemShowCaseDetails item={selectedItem} />
          <ChampzTabPanel value={0} index={0} sx={{ marginTop: "2em" }}>
            {selectedItem && <MarketplaceHistory item={selectedItem} />}
          </ChampzTabPanel>
        </Grid>
      </Grid>
    </>
  );
}
