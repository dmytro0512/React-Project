import { Switch, SwitchProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ChampzSwitch = styled((props: SwitchProps) => (
  <Switch disableRipple {...props} />
))(() => ({
  width: 46,
  height: 26,
  padding: 0,

  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    "&.Mui-checked": {
      "& + .MuiSwitch-track": {
        backgroundColor: "#FDF0C6",
        opacity: 1,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    width: 22,
    height: 22,
    background: `linear-gradient(3.74deg, #C5AD75 -7.61%, #FAF1BF 109.67%);
linear-gradient(3.74deg, color(display-p3 0.757 0.682 0.486) -7.61%, color(display-p3 0.973 0.945 0.769) 109.67%)`,
    border,
  },
  "& .MuiSwitch-track": {
    backgroundColor: "#FDF0C6",
    opacity: 1,
    border,
    borderRadius: "90px",
  },
}));

const border = `1px solid rgba(78, 60, 34, 1)`;
