import { Box, styled } from "@mui/material";

import tabPanelBh from "@/assets/backgrounds/tabPanel.svg";

export const ContentPanel = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  borderImageSource: `url(${tabPanelBh})`,
  borderImageWidth: "8px",
  borderImageOutset: "8px 0px 0px",
  borderImageRepeat: "round",
  borderImageSlice: "8 fill",
  position: "relative",
  maxWidth: "1440px",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(0),
    borderImageSlice: 0,
  },
}));
