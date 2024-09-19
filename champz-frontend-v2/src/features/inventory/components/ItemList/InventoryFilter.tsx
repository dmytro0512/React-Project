import { ChampzSearchField } from "@/components/form/ChampzSearchField";
import { DarkText, RegularText } from "@/components/Text";
import { Stack } from "@mui/material";
import { useEffect } from "react";
import { getRouteApi } from "@tanstack/react-router";
import { ItemFilterSetterGetterProps } from "../../types/items";

interface InventoryFilterProps extends ItemFilterSetterGetterProps {}

export function InventoryFilter(props: InventoryFilterProps) {
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

  const handleClearFilter = () => {
    props.setFilter({ name: "", cfg_item_id: undefined });
  };

  return (
    <Stack
      paddingBlock={1}
      direction="row"
      flexWrap="wrap"
      rowGap={1}
      justifyContent="space-between"
    >
      <Stack direction="row" sx={{ alignItems: "center" }} spacing={1}>
        <RegularText>Name/Attribute</RegularText>
        <ChampzSearchField
          defaultValue={routeSearch.name}
          onChange={(event) => {
            handleChangeNameFilter(event.target.value);
          }}
        />
        <div onClick={() => handleClearFilter()}>Clear</div>
      </Stack>
    </Stack>
  );
}
