import { TableCell } from "@mui/material";
import { styled } from "@mui/material/styles";
import { TextColor } from "@/consts/textColor";
import { FontWeight } from "@/consts/fontWeight";
import { FontSize } from "@/consts/fontSize";

export const ChampzTableCell = styled(TableCell)(({ theme }) => ({
  color: TextColor.lightGreen,
  fontWeight: FontWeight.L,
  fontSize: FontSize.XS,
  textAlign: "center",
  marginBlock: "10px",
  padding: `${theme.spacing(2.5)}`,
  borderBottom: "none",
  position: "relative",
  whiteSpace: "nowrap",
  "&::after": {
    content: '""',
    position: "absolute",
    backgroundColor: TextColor.lightGreen,
    opacity: 0.3,
    width: "2px",
    height: "50%",
    right: 0,
    top: "50%",
    transform: "translateY(-50%)",
  },
  "&:last-child::after": {
    display: "none",
  },
}));
