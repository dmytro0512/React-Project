import { ImagePath } from "@/consts/imagePaths";
import { Attribute } from "@/types/responses/charList";
import { getImageHost } from "@/utils/getImageHost";
import { Avatar, Stack, styled } from "@mui/material";
import { TinyText } from "../Text";

export function ItemAttributePill(props: Attribute) {
  const ItemAttributePill = styled(Stack)(({ theme }) => ({
    padding: `0 ${theme.spacing(1)}`,
    backgroundColor: "#343A19",
    borderRadius: "90px",
  }));

  return (
    <ItemAttributePill direction={"row"} sx={{ alignItems: "center" }}>
      <Avatar
        variant="square"
        src={`${getImageHost()}${ImagePath.ATTRIBUTES}${props.src}`}
        sx={{ width: "0.75em", height: "0.75em" }}
      />
      <TinyText sx={{ whiteSpace: "nowrap" }}>
        {props.prefix}
        {props.value}
        {props.postfix}
        {props.secondary_value ? ` (${props.secondary_value})` : ""}
      </TinyText>
    </ItemAttributePill>
  );
}
