import { Table } from "@mui/material";
import { styled } from "@mui/material/styles";
import { TextColor } from "@/consts/textColor";
import { FontWeight } from "@/consts/fontWeight";
import { FontSize } from "@/consts/fontSize";

export const ChampzTable = styled(Table)(({ theme }) => ({
  backgroundSize: "100% auto",
  color: TextColor.dark,
  fontWeight: FontWeight.XL,
  fontSize: FontSize.XS,
  width: "100%",
  borderCollapse: "separate",
  borderSpacing: `0 ${theme.spacing(0.75)}`,
  "&.small td": {
    fontSize: FontSize.XS2,
    padding: `${theme.spacing(1.5)}`,
  },
  "&.small th": {
    fontSize: FontSize.XS,
    padding: `${theme.spacing(1)}`,
  },
  "&:hover": {
    backgroundColor: "transparent",
  },
}));
