import { InventorySearch } from "@/routes/_auth/forging";
import { Attribute } from "@/types/responses/charList";

export interface Item {
  item_id: number;
  cfg_item_id: number;
  description: string;
  min_lvl_equip: number;
  item_lvl: number;
  name: string;
  rarity_id: number;
  slot_id: number;
  weapon_class_id: number;
  src: string;
  text_attributes: Attribute[];
  recipe: Recipe[];
  weapon_class: string;
  listed?: boolean;
  equipped?: boolean;
  equipped_char_id?: number;
}

export interface Recipe {
  quantity: number;
  source_cfg_item_id?: number;
  source_consumable_id?: number;
}

export interface Consumable {
  balance: number;
  can_be_opened: boolean;
  consumable_id: number;
  description: string;
  dropable: boolean;
  forgable: boolean;
  id: number;
  min_lvl_drop: number;
  max_lvl_drop: number;
  name: string;
  owner: string;
  rarity_id?: number;
  rarity: string;
  src: string;
  src_opened: string;
  type: string;
}

export interface OnSelectItemProps {
  onSelectItem(item: Item | undefined): void;
}

export interface SelectedItemProps {
  selectedItem?: Item;
}

export interface ItemProps {
  item?: Item;
}

export interface ConsumableProps {
  consumable?: Consumable;
}

export interface ItemFilterSetterGetterProps {
  setFilter: (filter: InventorySearch) => void;
  filter: InventorySearch;
}

export interface ItemFilterGetterProps {
  filter: InventorySearch;
}

export interface ItemListProps {
  itemList: Item[];
}

export interface InventoryListProps
  extends ItemFilterGetterProps,
    OnSelectItemProps,
    ItemListProps {}

export interface ItemShowCaseProps extends OnSelectItemProps, ItemProps {
  selected?: boolean;
}
