import { Box, Button, ButtonProps, styled } from "@mui/material";

import pillButton from "@/assets/backgrounds/buttons/pillButton.svg";
import { TextColor } from "@/consts/textColor";
import { FontWeight } from "@/consts/fontWeight";

export const NavigationItem = (props: NavigationItemProps) => {
  const NavigationItem = styled(Button)(({ theme }) => ({
    width: "clamp(200px, 20vw ,340px)",
    position: "absolute",
    zIndex: 10,
    transition: "transform 0.25s ease-in-out",
    ":hover": {
      backgroundColor: "transparent",
      transform: "scale(1.05) rotate(4deg)",
    },
    "&.Mui-disabled": {
      filter: "grayscale(100%)",
    },
    "& img": {
      maxWidth: "100%",
    },
    "&  button": {
      // color: `${TextColor.dark} !important`,
      // fontWeight: `${FontWeight.XL} !important`,
      // boxShadow: "none !important",
      // background: "none !important",
      // textTransform: "uppercase",
      // paddingBlock: theme.spacing(2),
      // paddingInline: theme.spacing(4),
    },
  }));
  const NavigationItemTitle = styled(Button)(({ theme }) => ({
    paddingBlock: theme.spacing(2),
    paddingInline: theme.spacing(4),
    color: TextColor.dark,
    fontWeight: FontWeight.XL,
    textTransform: "uppercase",
    position: "absolute",
    bottom: "-1em",
    left: "50%",
    transform: "translateX(-50%)",
    borderImageSource: `url(${pillButton})`,
    borderImageWidth: "16px",
    borderImageOutset: 0,
    borderImageRepeat: "stretch",
    borderImageSlice: "16 fill",
    borderStyle: "solid",
    boxSizing: "border-box",
    backfaceVisibility: "hidden", //Fixes jagged edges on Chrome
    // pointerEvents: "none",
    whiteSpace: "nowrap",
    zIndex: 11,
    "&:hover": {
      backgroundColor: "transparent",
    },
  }));
  const NavigationItemIcon = styled(Box)(() => ({
    position: "absolute",
    maxWidth: "80px",
    width: "20%",
    top: "5%",
    transform: "translateY(-50%)",
    zIndex: 11,
  }));

  return (
    <NavigationItem
      disableRipple
      disabled={props.disabled}
      onClick={props.onClick}
      sx={props.sx}
    >
      {/* <NavigationItemIcon>
        <img src={icon_guild} />
      </NavigationItemIcon> */}
      <img src={props.image} />
      <NavigationItemTitle disableRipple>{props.children}</NavigationItemTitle>
    </NavigationItem>
  );
};

interface NavigationItemProps extends ButtonProps {
  image: string;
}
