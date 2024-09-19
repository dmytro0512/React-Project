import { ChampzSearchField } from "@/components/form/ChampzSearchField";
import { RegularText } from "@/components/Text";
import { Stack } from "@mui/material";
import { PropsWithChildren } from "react";
import { getRouteApi } from "@tanstack/react-router";
import { ItemFilterSetterGetterProps } from "@/features/inventory/types/items";

export function RecipeFilter(props: ItemFilterSetterGetterProps) {
  const routeApi = getRouteApi("/_auth/forging");
  const routeSearch = routeApi.useSearch();

  const handleChangeNameFilter = (name: string) => {
    const newFilter = { ...props.filter, name: name };
    props.setFilter(newFilter);    
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
