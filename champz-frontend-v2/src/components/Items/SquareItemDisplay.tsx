import { Box, keyframes, styled } from "@mui/material";
import { FontSize } from "@/consts/fontSize";
import { ItemTitle } from "@/components/Text";
import squareItemMask from "@/assets/backgrounds/items/square_item.svg";
import { BackgroundColor } from "@/consts/backgroundColor";
import { TextColor } from "@/consts/textColor";
import { FontWeight } from "@/consts/fontWeight";

export const SquareItemContainer = styled(Box)(({ theme }) => ({
  backgroundColor: BackgroundColor.dark,
  boxShadow: "inset 0px 0px 5px #00000088",
  aspectRatio: 1,
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
  mask: `url(${squareItemMask})`,
  maskSize: "100% 100%",
  cursor: "pointer",
  transition: "box-shadow 0.25s ease-out",
  "&.selected": {
    opacity: 1,
    backgroundColor: `${TextColor.light}22`,
    boxShadow: `inset 0px 0px 10px 5px ${TextColor.light}, inset 0px 0px 5px 5px ${TextColor.light}`,
  },
}));
export const SquareItemNameContainer = styled(ItemTitle)(({ theme }) => ({
  fontSize: FontSize.XS,
  padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
  backgroundColor: BackgroundColor.itemBanner,
  boxShadow: "inset 0px 0px 5px #00000088",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
}));
export const SquareItemNumber = styled(ItemTitle)(({ theme }) => ({
  fontSize: FontSize.XS2,
}));
