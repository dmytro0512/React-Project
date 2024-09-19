import {
  ItemFilterGetterProps,
  ItemListProps,
  OnSelectItemProps,
} from "../../types/items";
import { useShowItem } from "../../hooks/useShowItem";

import { Stack } from "@mui/material";
import ItemShowCaseLandscape from "../ItemShowCases/ItemShowCaseLandscape";

interface ItemLandscapeList
  extends ItemListProps,
    OnSelectItemProps,
    ItemFilterGetterProps {}

export function ItemLandscapeList(props: ItemLandscapeList) {
  const { showItemByFilter } = useShowItem();

  return (
    <Stack spacing={1}>
      {props.itemList?.map((item) => {
        if (showItemByFilter(item, props.filter)) {
          // return <>{item.name}</>;
          return (
            <ItemShowCaseLandscape
              item={item}
              onSelectItem={props.onSelectItem}
            />
          );
        }
      })}
    </Stack>
  );
}
