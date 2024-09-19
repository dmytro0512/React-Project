import { ChampzSearchField } from "@/components/form/ChampzSearchField";
import { DarkText, RegularText, TinyText } from "@/components/Text";
import { Stack } from "@mui/material";
import { PropsWithChildren, useEffect } from "react";
import { getRouteApi } from "@tanstack/react-router";
import { InventorySearch } from "@/routes/_auth/inventory";

export function ItemFilter(props: InventoryFilterProps) {
  const routeApi = getRouteApi("/_auth/inventory");
  const routeSearch = routeApi.useSearch();

  const handleChangeNameFilter = (name: string) => {
    const newFilter = { ...props.filter, name: name };
    props.setFilter(newFilter);
  };

  useEffect(() => {
    const newFilter = { ...props.filter };
    newFilter.name = routeSearch.name;
    newFilter.cfg_item_id = routeSearch.cfg_item_id;
    props.setFilter(newFilter);
  }, [routeSearch]);

  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      rowGap={1}
      justifyContent="space-between"
      paddingBlock={1}
    >
      <Stack direction="row" sx={{ alignItems: "center" }} spacing={1}>
        <FilterItem>
          <RegularText>Name/Attribute</RegularText>
          <ChampzSearchField
            defaultValue={routeSearch.name}
            onChange={(event) => {
              handleChangeNameFilter(event.target.value);
            }}
          />
        </FilterItem>
      </Stack>
    </Stack>
  );
}

export function FilterItem({ children }: PropsWithChildren) {
  return (
    <Stack direction="row" sx={{ alignItems: "center" }} spacing={1}>
      {children}
    </Stack>
  );
}

export interface InventoryFilterProps {
  setFilter: (filter: InventorySearch) => void;
  filter: InventorySearch;
}
