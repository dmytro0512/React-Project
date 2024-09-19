import {
  Consumable,
  ConsumableProps,
  Item,
  ItemProps,
  OnSelectItemProps,
  Recipe,
  SelectedItemProps,
} from "@/features/inventory/types/items";
import { InventorySearch } from "@/routes/_auth/inventory";

export interface SelectedSourceConsumableListProps {
  selectedSourceConsumableList: Consumable[] | undefined;
}

export interface SelectedSourceItemListProps {
  selectedSourceItemList: Item[] | undefined;
}

export interface SelectedTargetItem {
  selectedTargetItem: Item | undefined;
}

export interface OnSourceItemSelect {
  onSourceItemSelect(item: Item, add: boolean): void;
}

export interface OnSourceConsumableSelect {
  onSourceConsumableSelect(consumable: Consumable, add: boolean): void;
}

export interface ForgeCountControls {
  onReduceForgeCount(): void;
  onIncreaseForgeCount(): void;
}

export interface WorkbenchProps
  extends OnSelectItemProps,
    SelectedItemProps,
    SelectedSourceConsumableListProps,
    SelectedSourceItemListProps,
    ForgeCountControls {}

export interface RecipeProps
  extends SelectedSourceConsumableListProps,
    SelectedSourceItemListProps {
  recipe: Recipe | undefined;
}

export interface ForgableItemsListProps
  extends OnSourceItemSelect,
    SelectedSourceItemListProps,
    SelectedTargetItem {
  filter: InventorySearch;
}

export interface OnItemSelectTargetProps
  extends OnSourceItemSelect,
    OnSourceConsumableSelect,
    SelectedSourceItemListProps,
    SelectedSourceConsumableListProps,
    SelectedTargetItem {}

export interface ForgableItemSelectableProps
  extends OnSourceItemSelect,
    ItemProps,
    SelectedTargetItem {
  isSelected: boolean;
}

export interface ForgableConsumableListProps
  extends OnSourceConsumableSelect,
    SelectedSourceConsumableListProps,
    SelectedTargetItem {
  filter: InventorySearch;
}

export interface ForgableConsumableSelectableProps
  extends OnSourceConsumableSelect,
    ConsumableProps,
    SelectedTargetItem {
  isSelected: boolean;
}
