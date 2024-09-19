import { TextColor } from "@/consts/textColor";
import { TextField as MuiTextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  formElementFontStyles,
  formElementStyles,
} from "@/components/form/formElementStyles";

export const ChampzTextField = styled(MuiTextField)(({ theme }) => ({
  ...formElementStyles,

  input: {
    borderRadius: "4px",
    color: TextColor.light2,
  },
  ".MuiInputBase-root": {
    backgroundColor: "transparent",
    padding: theme.spacing(0.5),
  },
  ".MuiInputBase-root::before": {
    border: "none",
  },
  ".MuiInputBase-root:hover::before": {
    border: "none",
    display: "none",
  },
  ".MuiInputBase-root::after": {
    border: "none",
  },
  ".MuiInputBase-root:hover::after": {
    border: "none",
    display: "none",
  },
  ".MuiInputBase-input": {
    padding: 0,
    ...formElementFontStyles,
  },
}));

ChampzTextField.defaultProps = {
  ...ChampzTextField.defaultProps,
  variant: "filled",
  hiddenLabel: true,
};
