// MUI Component
import { Box } from "@mui/material";

// Custom Components
import { Span } from "./Overlay";

// Constants
import { BorderColor } from "@/consts/borderColor";
import { BgColor } from "@/consts/bgColor";
import { TextColor } from "@/consts/textColor";
import { TextShadow } from "@/consts/textShadow";

interface QuestProgressProps {
  total: number;
  progress: number;
}

function QuestProgress({ total, progress }: QuestProgressProps) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "24px",
        border: `solid 1.4px ${BorderColor.darkGreen}`,
        backgroundColor: BgColor.progress,
        borderRadius: "5.56px",
        position: "relative",
      }}
    >
      <Box
        sx={{
          backgroundColor: BgColor.stick,
          borderRadius: "4.17px",
          height: "100%",
          position: "absolute",
          left: 0,
          top: 0,
          width: `${(progress / total) * 100}%`,
        }}
      ></Box>
      <Span
        sx={{
          color: TextColor.progress,
          textShadow: TextShadow.progress,
          position: "absolute",
          textAlign: "center",
          width: "100%",
        }}
      >
        {progress}/{total}
      </Span>
    </Box>
  );
}

export default QuestProgress;
