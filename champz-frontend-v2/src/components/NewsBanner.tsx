import { Box, BoxProps, styled } from "@mui/material";
import newsBannerFrame from "@/assets/borders/newsBanner.svg";
import newsBannerMask from "@/assets/masks/newsBannerMask.svg";
import { RegularText, SmallText } from "./Text";

export const NewsBanner = (props: NewsBanner) => {
  const NewsBanner = styled(Box)(({ theme }) => ({
    width: "338px",
    height: "143px",
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    backgroundImage: `url(${newsBannerFrame}), linear-gradient(to top, #000000, #00000000 70%), url(${props.imgSrc})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    gap: theme.spacing(1),
    mask: `url(${newsBannerMask})`,
    cursor: "pointer",
  }));

  return (
    <NewsBanner {...props}>
      <SmallText textAlign={"right"} lineHeight={1}>
        {props.headline}
      </SmallText>
      <RegularText>&#10095;</RegularText>
    </NewsBanner>
  );
};

interface NewsBanner extends BoxProps {
  headline: String;
  imgSrc: String;
}
