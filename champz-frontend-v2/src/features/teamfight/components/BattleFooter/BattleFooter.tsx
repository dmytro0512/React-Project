import FlagBtnBg from "@/assets/img/teamfight/flag.png";
import NoteBtnBg from "@/assets/img/teamfight/draft.png";
import PlaySpeedBtnBg from "@/assets/img/teamfight/forward.png";
import PauseBtnBg from "@/assets/img/teamfight/pause.png";
import LogoImage from "@/assets/img/teamfight/champ.png";
import { Box } from "@mui/material";

const BattleFooter = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Box height={"100%"}>
        <img src={LogoImage} className="height-of-parent" alt="Logo image" />
      </Box>
      <Box height={"100%"} py={"0.8em"} display={"flex"} gap={"0.5em"}>
        <Box height={"100%"} sx={{ cursor: "pointer" }}>
          <img src={FlagBtnBg} className="height-of-parent" />
        </Box>
        <Box height={"100%"} sx={{ cursor: "pointer" }}>
          <img src={NoteBtnBg} className="height-of-parent" />
        </Box>
        <Box height={"100%"} sx={{ cursor: "pointer" }}>
          <img src={PlaySpeedBtnBg} className="height-of-parent" />
        </Box>
        <Box height={"100%"} sx={{ cursor: "pointer" }}>
          <img src={PauseBtnBg} className="height-of-parent" />
        </Box>
      </Box>
    </Box>
  );
};

export default BattleFooter;
