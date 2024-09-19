import { Avatar, Box, Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { HeaderIcons } from "@/consts/headerIcons";
import menuImg from "@/assets/icons/buttons/menu.svg";
import messagesImg from "@/assets/icons/buttons/messages.svg";
import walletImg from "@/assets/icons/buttons/wallet.svg";
import backImg from "@/assets/icons/buttons/back.svg";
import playNowImg from "@/assets/icons/buttons/playNow.svg";
import cog from "@/assets/icons/buttons/cog.svg";
import close from "@/assets/icons/buttons/close.svg";
import inventory from "@/assets/icons/buttons/inventory.svg";
import forging from "@/assets/icons/buttons/forging.svg";
import gift from "@/assets/icons/buttons/gift.svg";
import bell from "@/assets/icons/buttons/bell.svg";
import soundon from "@/assets/icons/buttons/soundOn.svg";
import home from "@/assets/icons/buttons/home.svg";
import mobItemList from "@/assets/icons/buttons/mobItemList.svg";

export function HeaderButton(props: HeaderButtonProps) {
  const { icon, ...other } = props;
  const size = props.pixelSize ? props.pixelSize : 56;

  const HeaderButton = styled(Button)(({ theme }) => ({
    transition: "scale 0.25s ease-in-out",
    "&:hover": {
      backgroundColor: "transparent",
      scale: "1.1",
    },
  }));

  const getHeaderIcon = (icon: String) => {
    switch (icon) {
      case HeaderIcons.MENU:
        return menuImg;
      case HeaderIcons.MESSAGES:
        return messagesImg;
      case HeaderIcons.WALLET:
        return walletImg;
      case HeaderIcons.BACK:
        return backImg;
      case HeaderIcons.PLAY_NOW:
        return playNowImg;
      case HeaderIcons.COG:
        return cog;
      case HeaderIcons.CLOSE:
        return close;
      case HeaderIcons.INVENTORY:
        return inventory;
      case HeaderIcons.FORGING:
        return forging;
      case HeaderIcons.GIFT:
        return gift;
      case HeaderIcons.BELL:
        return bell;
      case HeaderIcons.SOUNDON:
        return soundon;
      case HeaderIcons.HOME:
        return home;
      case HeaderIcons.MOBITEMLIST:
        return mobItemList;
      default:
        return undefined;
    }
  };

  return (
    <HeaderButton {...other} disableRipple>
      <Avatar
        variant="square"
        sx={{ height: `${size}px`, width: `${size}px` }}
        src={getHeaderIcon(icon)}
      />
    </HeaderButton>
  );
}

interface HeaderButtonProps extends ButtonProps {
  icon: String;
  pixelSize?: Number;
}
