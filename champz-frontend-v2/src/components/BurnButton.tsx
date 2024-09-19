import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import bg from "@/assets/backgrounds/buttons/burn.svg";
import { TextColor } from "@/consts/textColor";
import { FontWeight } from "@/consts/fontWeight";
import { FontSize } from "@/consts/fontSize";

export const BurnButton = styled(Button)(({ theme }) => ({
  color: TextColor.dark,
  fontWeight: FontWeight.L,
  fontSize: FontSize.XS,
  height: "48px",
  "&:hover": {
    backgroundColor: "transparent",
  },
  borderImageSource: `url(${bg})`,
  borderImageWidth: "8px",
  borderImageOutset: 0,
  borderImageRepeat: "stretch",
  borderImageSlice: "8 fill",
  borderStyle: "solid",
}));
