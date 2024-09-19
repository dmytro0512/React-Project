import { FontWeight } from "@/consts/fontWeight";
import { TextColor } from "@/consts/textColor";
import { Button, styled } from "@mui/material";

export const ChampzSignInButton = styled(Button)({
  color: TextColor.dark,
  fontWeight: FontWeight.XL,
  textTransform: "uppercase",
  backgroundColor: "transparent",
  boxShadow: "none",
  padding: "0",
  "&:hover": {
    backgroundColor: "transparent",
    boxShadow: "none",
  },
});
