import { TabPanel } from "@/components/TabPanel";
import { styled } from "@mui/material/styles";
import tabPanelBh from "@/assets/backgrounds/tabPanel.svg";

export const ChampzTabPanel = styled(TabPanel)(({ theme }) => {
  return {
    padding: `${theme.spacing(1)} ${theme.spacing(3)} ${theme.spacing(3)}`,
    borderImageSource: `url(${tabPanelBh})`,
    borderImageWidth: "8px",
    borderImageOutset: "8px 0px 0px",
    borderImageRepeat: "round",
    // borderImageSlice: "8 fill",
    borderImageSlice: "10% fill",
    position: "relative",
    maxWidth: "1440px",
    width: "100%",
  };
});
