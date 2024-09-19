import { Button } from "@mui/material";
import { Theme, styled } from "@mui/material/styles";
import buttonV1 from "@/assets/backgrounds/buttons/action/v1.svg";
import buttonV2 from "@/assets/backgrounds/buttons/action/v2.svg";
import buttonV3 from "@/assets/backgrounds/buttons/action/v3.svg";
import { TextColor } from "@/consts/textColor";
import { FontWeight } from "@/consts/fontWeight";
import { FontSize } from "@/consts/fontSize";

const getActionButtonStyles = (theme: Theme) => ({
  backgroundSize: "contain",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  color: TextColor.dark,
  fontWeight: FontWeight.XL,
  fontSize: FontSize.XS,
  width: "100%",
  padding: `${theme.spacing(1)} 0 ${theme.spacing(2)} 0`,
  "&:hover": {
    backgroundColor: "transparent",
  },
});

function getActionButton(tabIndex: number | undefined) {
  const buttonSvgs = [buttonV1, buttonV2, buttonV3];
  if (tabIndex === undefined) {
    return buttonSvgs[0];
  }

  return buttonSvgs[tabIndex % buttonSvgs.length];
}

export const ActionButtonV1 = styled(Button)(({ theme }) => ({
  ...getActionButtonStyles(theme),
  backgroundImage: `url(${buttonV1})`,
}));

export const ActionButtonV2 = styled(Button)(({ theme }) => ({
  ...getActionButtonStyles(theme),
  backgroundImage: `url(${buttonV2})`,
}));

export const ActionButtonV3 = styled(Button)(({ theme }) => ({
  ...getActionButtonStyles(theme),
  backgroundImage: `url(${buttonV3})`,
}));

export const ActionButtonByIndex = styled(Button)(({ theme, tabIndex }) => ({
  ...getActionButtonStyles(theme),
  backgroundImage: `url(${getActionButton(tabIndex)})`,
}));
