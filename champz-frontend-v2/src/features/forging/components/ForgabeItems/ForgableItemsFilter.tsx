import { ChampzSearchField } from "@/components/form/ChampzSearchField";
import { RegularText } from "@/components/Text";
import { ItemFilterSetterGetterProps } from "@/features/inventory/types/items";
import { Stack } from "@mui/material";
import { getRouteApi } from "@tanstack/react-router";

export function ForgableItemsFilter(props: ItemFilterSetterGetterProps) {
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
        <RegularText>Name/Attribute</RegularText>
        <ChampzSearchField
          defaultValue={routeSearch.name}
          onChange={(event) => {
            handleChangeNameFilter(event.target.value);
          }}
        />
      </Stack>
    </Stack>
  );
}
