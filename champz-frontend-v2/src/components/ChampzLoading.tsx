import { TextColor } from "@/consts/textColor";
import { CircularProgress, styled } from "@mui/material";

export const ChampzLoading = styled(CircularProgress)(({}) => ({
  color: TextColor.light,
}));
