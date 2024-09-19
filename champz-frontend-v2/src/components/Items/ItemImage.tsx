import { ImagePath } from "@/consts/imagePaths";
import { getImageHost } from "@/utils/getImageHost";
import { Box, BoxProps } from "@mui/material";

export function ItemImage(props: ItemImageProps) {
  return (
    <Box
      sx={{
        height: "100%",
        aspectRatio: 1,
        backgroundImage: `url(${getImageHost()}${ImagePath.ITEMS}${props.src})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        minWidth: "32px",
        minHeight: "32px",
        maxWidth: "100%",
        ...props.sx,
      }}
    ></Box>
  );
}
interface ItemImageProps extends BoxProps {
  src: string;
}
