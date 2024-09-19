import { styled } from "@mui/material/styles";
import { Avatar, AvatarProps, Box, BoxProps } from "@mui/material";
import { BorderColor } from "@/consts/borderColor";
import { ImagePath } from "@/consts/imagePaths";
import { getImageHost } from "@/utils/getImageHost";

//export function Hp({ hp, hpBase, ...rest }: HpProps & BoxProps) {

export function ProfileIcon({
  url,
}: ProfileIconProps & BoxProps & AvatarProps) {
  const ProfileIconHolder = styled(Box)(({}) => ({
    display: "inline",
    height: "1em",
    paddingInline: "1em",
    marginInline: "0.5em",
    position: "relative",
    zIndex: 0,
  }));
  const ProfileIcon = styled(Avatar)(({}) => ({
    border: `2px solid ${BorderColor.highlight}`,
    position: "absolute",
    height: `1.5em`,
    width: `1.5em`,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  }));

  return (
    <ProfileIconHolder component={"span"}>
      <ProfileIcon src={`${getImageHost()}${ImagePath.CHARS}${url}`} />
    </ProfileIconHolder>
  );
}

export interface ProfileIconProps {
  url: string;
  small?: boolean;
}
