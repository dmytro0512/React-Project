import { Avatar, Box, ButtonProps, styled } from "@mui/material";
import { PillButton } from "./PillButton";
import profileIcon from "@/assets/icons/misc/profile.svg";
import iconBG from "@/assets/icons/buttons/iconBg.png";

export const ProfileButton = (props: ButtonProps) => {
  const ProfileButtonIcon = styled(Avatar)(() => ({
    position: "absolute",
    left: "0.75em",
    top: "50%",
    transform: "translateY(calc(-50% - 1px))",
    borderRadius: 0,
    padding: "0.5em",
    objectFit: "contain",
    backgroundImage: `url(${iconBG})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  }));

  return (
    <PillButton
      {...props}
      sx={{ ...props.sx, position: "relative" }}
      disableRipple
    >
      <ProfileButtonIcon src={profileIcon} />
      <Box sx={{ paddingLeft: "2em" }}>Player Profile</Box>
    </PillButton>
  );
};
