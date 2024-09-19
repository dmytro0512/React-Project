import { Tabs } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ChampzTabs = styled(Tabs)(() => ({
  "& .MuiTabs-indicator": {
    display: "none",
  },
}));
