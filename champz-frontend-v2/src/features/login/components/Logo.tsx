import { Box, BoxProps, styled } from "@mui/material";
import { ImagePath } from "@/consts/imagePaths";
import { getImageHost } from "@/utils/getImageHost";

export function Logo(props: BoxProps) {
  const LogoContainer = styled(Box)(({}) => ({
    width: "100%",
    maxWidth: 560,
  }));

  const logoUrl = `${getImageHost()}${ImagePath.LOGOS}${"Champz_logo.png"}`;

  return (
    <LogoContainer {...props}>
      <img src={logoUrl} style={{ width: "100%" }} />
    </LogoContainer>
  );
}
