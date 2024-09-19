// Assets
import TreeImage from "@/assets/img/quest/reward-tree.png";
import MoneyImage from "@/assets/img/quest/reward-money.png";
import PlayButtonImage from "@/assets/img/quest/play-video.png";
import blogBg from "@/assets/img/quest/reward-back.png";
import blogBg2 from "@/assets/img/quest/reset-back.png";
import SnowImage3 from "@/assets/img/quest/snow3.png";

// MUI Components
import { Box, BoxProps, Button, styled } from "@mui/material";

// Constants
import { FontWeight } from "@/consts/fontWeight";
import { FontSize } from "@/consts/fontSize";
import { TextColor } from "@/consts/textColor";
import { TextShadow } from "@/consts/textShadow";
import { FontFamily } from "@/consts/fontFamily";

// Custom Components
import { Image, Img } from "./Overlay";
import { HeaderSpan } from "./QuestTabs";

interface BlogItemProps {
  url: string;
}

function QuestBlog() {
  const step = 0;
  const reward = 600000;

  const BlogWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
    overflow: "auto",

    [theme.breakpoints.down("lg")]: {
      display: "flex",
      flexDirection: "column",
    },
  }));

  const BlogItemWrapper = styled(Box)<BlogItemProps & BoxProps>(
    ({ theme, url }) => ({
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 26px",
      backgroundImage: `url(${url})`,
      backgroundSize: "100% 100%",
      height: "188px",
      minWidth: "550px",
      width: "100%",
      position: "relative",
      overflow: "hidden",

      [theme.breakpoints.down("lg")]: {
        minWidth: "600px",
      },

      [theme.breakpoints.down("md")]: {
        minWidth: "inherit",
        padding: "0 5px",
      },
    }),
  );

  const BlogItemText = styled(Box)(({ theme }) => ({
    margin: 0,
    fontWeight: FontWeight.M,
    fontSize: FontSize.XL,
    lineHeight: `${FontSize.L}px`,
    color: TextColor.light,
    textShadow: TextShadow.blog,
    fontFamily: FontFamily.aladin,

    [theme.breakpoints.down("lg")]: {
      fontSize: FontSize.L,
      lineHeight: `${FontSize.M}px`,
    },

    [theme.breakpoints.down("md")]: {
      fontSize: FontSize.M,
      lineHeight: `${FontSize.S}px`,
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: FontSize.S,
      lineHeight: `${FontSize.XS}px`,
    },
  }));

  const BlogItemTextWrapper = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transform: "rotate(-1.48deg)",
    flexShrink: 0,
    zIndex: 1,
  });

  const ProgressWrapper = styled(Box)(() => ({
    padding: "23px 0",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
    justifyContent: "space-between",
    zIndex: 1,
  }));

  const MoneyWrapper = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    columnGap: 16,
  }));

  const MoneySpan = styled(Box)(({ theme }) => ({
    fontWeight: FontWeight.M,
    fontSize: FontSize.L,
    color: TextColor.lightGreen,
    fontFamily: FontFamily.aladin,
    textShadow: TextShadow.ligh2,

    [theme.breakpoints.down("lg")]: {
      fontSize: FontSize.S,
    },

    [theme.breakpoints.down("md")]: {
      fontSize: FontSize.XS,
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: FontSize.XS2,
    },
  }));

  return (
    <BlogWrapper>
      <BlogItemWrapper url={blogBg}>
        <Box
          component="img"
          src={SnowImage3}
          alt="Snow Effect"
          sx={{
            position: "absolute",
            opacity: "60%",
          }}
        />
        <Box
          component="img"
          src={TreeImage}
          alt="Tree Image"
          sx={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            margin: "auto",
            justifyContent: "center",
            marginLeft: "50%",
            transform: "translate(-40%, 0)",
            zIndex: 0,
          }}
        />
        <BlogItemTextWrapper>
          <BlogItemText>Complete all</BlogItemText>
          <BlogItemText>daily quests and</BlogItemText>
          <BlogItemText>get a reward</BlogItemText>
        </BlogItemTextWrapper>
        <ProgressWrapper>
          <HeaderSpan
            sx={{ color: TextColor.blog, textShadow: TextShadow.blog }}
          >
            {step}/4 Completed
          </HeaderSpan>
          <MoneyWrapper>
            <MoneySpan>{reward.toLocaleString()}</MoneySpan>
            <Image url={MoneyImage} alt="Money Image" />
          </MoneyWrapper>
        </ProgressWrapper>
      </BlogItemWrapper>
      <BlogItemWrapper url={blogBg2}>
        <Box
          component="img"
          src={SnowImage3}
          alt="Snow Effect"
          sx={{
            marginLeft: "-26px",
            width: "100%",
            position: "absolute",
            opacity: "40%",
          }}
        />
        <Box
          component="img"
          src={TreeImage}
          alt="Tree Image"
          sx={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            margin: "auto",
            justifyContent: "center",
            marginLeft: "50%",
            transform: "translate(-40%, 0)",
            zIndex: 0,
          }}
        />
        <BlogItemTextWrapper>
          <BlogItemText>Watch the video</BlogItemText>
          <BlogItemText>to reset daily </BlogItemText>
          <BlogItemText>quests!</BlogItemText>
        </BlogItemTextWrapper>
        <Button sx={{ zIndex: 1 }}>
          <Img
            url={PlayButtonImage}
            alt="Play Button Image"
            width={120}
            height={45}
          />
        </Button>
      </BlogItemWrapper>
    </BlogWrapper>
  );
}

export default QuestBlog;
