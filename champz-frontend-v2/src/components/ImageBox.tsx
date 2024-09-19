import { Box, styled } from "@mui/material";

interface ImageBoxProps {
  image: string;
}

export const BgImageBox = styled(Box)<ImageBoxProps>(({ image }) => ({
  backgroundImage: `url(${image})`,
  backgroundRepeat: "repeat",
  zIndex: -5,
  position: "fixed",
  left: 0,
  width: "100%",
  height: "100%",
  opacity: "20%",
}));

export const BlogImageBox = styled(Box)<ImageBoxProps>(({ image }) => ({
  backgroundImage: `url(${image})`,
  backgroundRepeat: "repeat",
  zIndex: 0,
  position: "absolute",
  left: 0,
  width: "100%",
  height: "100%",
  opacity: "60%",
}));
