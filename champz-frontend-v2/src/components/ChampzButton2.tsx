import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import buttonV1 from "@/assets/borders/button-v1.svg";

console.log(buttonV1);

export const ChampzButton2 = styled(Button)({
  borderImageSource: `url(${buttonV1})`,
  borderImageWidth: "20px",
  borderImageOutset: 0,
  borderImageRepeat: "stretch",
  borderImageSlice: "21",
  width: "190px",
  height: "67px",
  borderStyle: "solid",
  //backgroundColor: "#D1DCD6",
});
