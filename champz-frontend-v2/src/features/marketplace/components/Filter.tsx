import { ChampzSearchField } from "@/components/form/ChampzSearchField";
import { ChampzSelect } from "@/components/form/ChampzSelect";
import { ChampzTextField } from "@/components/form/ChampzTextField";
import { DarkText } from "@/components/Text";
import { Checkbox, ListItemText, MenuItem, Stack } from "@mui/material";
import { PropsWithChildren } from "react";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import { TextColor } from "@/consts/textColor";
import { ChampzSwitch } from "@/components/form/ChampzSwitch";
import { getRouteApi } from "@tanstack/react-router";
import {
  MarketplaceSearch,
  MarketplaceSearchDirectionOptions,
  MarketplaceSearchSortOptions,
} from "@/routes/_auth/marketplace";

export function Filter(props: MarketplaceFilterProps) {
  const routeApi = getRouteApi("/_auth/marketplace");
  const routeSearch = routeApi.useSearch();
  const sortBy = routeSearch.sort === "price" ? 2 : 1;
  const sortDir = routeSearch.dir === "asc" ? 2 : 1;

  const handleChangeNameFilter = (name: string) => {
    const newFilter = { ...props.filter, name: name };
    props.setFilter(newFilter);
  };

  const handleChangePriceFromFilter = (pr_from: string) => {
    const newFilter = { ...props.filter, pr_from: Number(pr_from) };
    props.setFilter(newFilter);
  };

  const handleChangePriceToFilter = (pr_to: string) => {
    const newFilter = { ...props.filter, pr_to: Number(pr_to) };
    props.setFilter(newFilter);
  };

  const handleChangeSortBy = (sort: MarketplaceSearchSortOptions) => {
    const newFilter = { ...props.filter, sort: sort };
    props.setFilter(newFilter);
  };

  const handleChangeSortDirection = (
    dir: MarketplaceSearchDirectionOptions,
  ) => {
    const newFilter = { ...props.filter, dir: dir };
    props.setFilter(newFilter);
  };

  return (
    <Stack
      sx={{ backgroundColor: "#C1AE7C", p: 1 }}
      direction="row"
      flexWrap="wrap"
      rowGap={1}
      justifyContent="space-between"
    >
      <Stack direction="row" sx={{ alignItems: "center" }} spacing={1}>
        <FilterItem>
          <DarkText>Name/Attribute</DarkText>
          <ChampzSearchField
            defaultValue={routeSearch.name}
            onChange={(event) => {
              handleChangeNameFilter(event.target.value);
            }}
          />
        </FilterItem>
        <FilterItem>
          <ChampzSelect>
            {/* // https://mui.com/material-ui/react-select/ */}
            <MenuItem>
              <Checkbox />
              <ListItemText primary={`Offensive`} />
            </MenuItem>
            <MenuItem>
              <Checkbox />
              <ListItemText primary={`Defensive`} />
            </MenuItem>
            <MenuItem>
              <Checkbox />
              <ListItemText primary={`Special`} />
            </MenuItem>
            <MenuItem>
              <Checkbox />
              <ListItemText primary={`Spellbook`} />
            </MenuItem>
          </ChampzSelect>
        </FilterItem>

        <FilterItem>
          <DarkText>Price</DarkText>
          <ChampzTextField
            sx={{ width: priceInputWidth }}
            defaultValue={routeSearch.pr_from}
            onChange={(event) =>
              handleChangePriceFromFilter(event.target.value)
            }
          />
          <DarkText>-</DarkText>
          <ChampzTextField
            sx={{ width: priceInputWidth }}
            defaultValue={routeSearch.pr_to}
            onChange={(event) => handleChangePriceToFilter(event.target.value)}
          />
        </FilterItem>
      </Stack>

      <Stack direction="row" sx={{ alignItems: "center" }} spacing={1}>
        <SortingFilterItem>
          <DarkText>Sort by</DarkText>
          <ChampzSelect
            onChange={(event) =>
              handleChangeSortBy(event.target.value === 1 ? "time" : "price")
            }
            defaultValue={sortBy}
          >
            <MenuItem value={1}>Time left</MenuItem>
            <MenuItem value={2}>Price</MenuItem>
          </ChampzSelect>
          <ChampzSelect
            onChange={(event) =>
              handleChangeSortDirection(
                event.target.value === 1 ? "desc" : "asc",
              )
            }
            defaultValue={sortDir}
          >
            <MenuItem value={1}>Descending</MenuItem>
            <MenuItem value={2}>Ascending</MenuItem>
          </ChampzSelect>
        </SortingFilterItem>

        <FilterItem>
          <DarkText>Special offers</DarkText>
          <ChampzSwitch />
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

export function SortingFilterItem({ children }: PropsWithChildren) {
  return (
    <Stack direction="row" sx={{ alignItems: "center" }}>
      <SwapVertIcon sx={{ color: TextColor.dark2 }} />
      <FilterItem>{children}</FilterItem>
    </Stack>
  );
}

const priceInputWidth = "70px";

export interface MarketplaceFilterProps {
  setFilter: (filter: MarketplaceSearch) => void;
  filter: MarketplaceSearch;
}
