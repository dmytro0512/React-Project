import { useState } from "react";
import { RecipeFilter } from "./RecipeFilter";
import { RecipeList } from "./RecipeList";
import { InventorySearch } from "@/routes/_auth/inventory";
import { OnSelectItemProps } from "@/features/inventory/types/items";

export function Recipes(props: OnSelectItemProps) {
  const [filter, setFilter] = useState<InventorySearch>({
    name: "",
  });

  return (
    <>
      <RecipeFilter filter={filter} setFilter={setFilter} />
      <RecipeList filter={filter} onSelectItem={props.onSelectItem} />
    </>
  );
}
