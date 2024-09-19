// Assets
import SnowImage from "@/assets/img/quest/snow.png";
import SnowImage2 from "@/assets/img/quest/snow2.png";

// MUI componenets
import { Box } from "@mui/material";

// Custom Components

export function SnowEffect() {
  return (
    <>
      <Box
        component="img"
        src={SnowImage}
        alt="Snow Effect"
        sx={{
          zIndex: -5,
          position: "fixed",
          top: 0,
          left: 0,
          height: "100%",
          opacity: "10%",
        }}
      />
      <Box
        component="img"
        src={SnowImage2}
        alt="Snow Effect2"
        sx={{
          zIndex: -5,
          position: "fixed",
          top: 0,
          left: "50%",
          height: "100%",
          opacity: "10%",
        }}
      />
    </>
  );
}
