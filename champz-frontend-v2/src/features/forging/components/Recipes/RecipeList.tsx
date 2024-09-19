import { InventorySearch } from "@/routes/_auth/inventory";
import { ChampzLoading } from "@/components/ChampzLoading";
import { ItemLandscapeList } from "@/features/inventory/components/AllItemList/ItemLandscapeList";
import { Item, OnSelectItemProps } from "@/features/inventory/types/items";
import { useGetAllRecipes } from "@/features/inventory/hooks/useGetAllRecipes";

export function RecipeList(props: RecipeListProps) {
  const { allRecipes, allRecipesIsLoading, allRecipesIsSuccess } =
    useGetAllRecipes();
  return (
    <>
      {allRecipesIsLoading && <ChampzLoading />}
      {allRecipesIsSuccess && (
        <ItemLandscapeList
          filter={props.filter}
          itemList={allRecipes as Item[]}
          onSelectItem={props.onSelectItem}
        />
      )}
    </>
  );
}

export interface RecipeListProps extends OnSelectItemProps {
  filter: InventorySearch;
}
