import { BorderColor } from "@/consts/borderColor";
import { TextColor } from "@/consts/textColor";
import { TextField as MuiTextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TextField = styled(MuiTextField)(() => ({
  input: {
    backgroundColor: BorderColor.darkTransparent,
    borderRadius: "4px",
  },
  label: {
    color: `${TextColor.light} !important`,
  },
  ".MuiInputBase-root": {
    backgroundColor: "transparent",
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
}));

TextField.defaultProps = {
  ...TextField.defaultProps,
  variant: "filled",
};
