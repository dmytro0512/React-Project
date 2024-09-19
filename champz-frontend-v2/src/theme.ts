import { createTheme } from "@mui/material/styles";
import bgTop from "@/assets/navigationwheel/bgTop.png";
import bgBottom from "@/assets/navigationwheel/bgBottom.png";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#343A19",
          backgroundImage: `url(${bgBottom}), url(${bgTop})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% auto, cover",
          backgroundPosition: "center bottom, center top",
        },
      },
    },
  },
});

export default theme;
