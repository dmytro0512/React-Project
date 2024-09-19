import { ItemProps } from "@/features/inventory/types/items";
import { ItemAttributePill } from "./ItemAttributePill";

export function ItemAttributePills(props: ItemProps) {
  return (
    <>
      {props.item?.text_attributes.map((attribute) => {
        return <ItemAttributePill {...attribute} />;
      })}
    </>
  );
}
