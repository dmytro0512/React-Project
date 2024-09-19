import { TabPanel } from "@/components/TabPanel";
import { styled } from "@mui/material/styles";

export const ChampzTabPanelV2 = styled(TabPanel)(({ theme }) => {
  return {
    padding: theme.spacing(2),
    position: "relative",
  };
});
