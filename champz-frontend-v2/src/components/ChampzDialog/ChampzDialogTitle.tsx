import { DialogTitle } from "@mui/material";
import { styled } from "@mui/material/styles";
import { titleStyles } from "@/components/Title";
import { FontSize } from "@/consts/fontSize";

export const ChampzDialogTitle = styled(DialogTitle)(() => ({
  ...titleStyles,
  fontSize: FontSize.L,
  textAlign: "center",
}));
