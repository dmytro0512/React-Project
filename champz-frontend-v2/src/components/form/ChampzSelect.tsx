import { formElementStyles } from "@/components/form/formElementStyles";
import { BorderColor } from "@/consts/borderColor";
import { TextColor } from "@/consts/textColor";
import { Select } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ChampzSelect = styled(Select)(({ theme }) => ({
  ...formElementStyles,
  padding: theme.spacing(0.5),
  color: TextColor.light,
  backgroundColor: BorderColor.darkTransparent,
  "&::before": {
    border: "none",
  },
  "&:hover::before": {
    border: "none",
    display: "none",
  },
  "&::after": {
    border: "none",
  },
  "&:hover::after": {
    border: "none",
    display: "none",
  },
  ".MuiInputBase-input": {
    padding: 0,
  },
  ".MuiSvgIcon-root": {
    color: TextColor.light,
  },
}));

ChampzSelect.defaultProps = {
  ...ChampzSelect.defaultProps,
  variant: "filled",
};
