import { Box, styled } from "@mui/material";
import { Link, useNavigate } from "@tanstack/react-router";

import pillButton from "@/assets/backgrounds/buttons/pillButton.svg";
import bgTop from "@/assets/navigationwheel/bgTop.png";
import bgBottom from "@/assets/navigationwheel/bgBottom.png";
import nav_bg_auction from "@/assets/navigationwheel/nav_bg_auction.png";
import nav_bg_explore from "@/assets/navigationwheel/nav_bg_explore.png";
import nav_bg_forging from "@/assets/navigationwheel/nav_bg_forging.png";
import nav_bg_guild from "@/assets/navigationwheel/nav_bg_guild.png";
import nav_bg_ranking from "@/assets/navigationwheel/nav_bg_ranking.png";
import nav_bg_socials from "@/assets/navigationwheel/nav_bg_socials.png";
import nav_bg_teamfight from "@/assets/navigationwheel/nav_bg_teamfight.png";
import icon_auction from "@/assets/navigationwheel/icon_auction.png";
import icon_explore_1 from "@/assets/navigationwheel/icon_explore_1.png";
import icon_explore_2 from "@/assets/navigationwheel/icon_explore_2.png";
import icon_forging_1 from "@/assets/navigationwheel/icon_forging_1.png";
import icon_forging_2 from "@/assets/navigationwheel/icon_forging_2.png";
import icon_guild from "@/assets/navigationwheel/icon_guild.png";
import icon_ranking from "@/assets/navigationwheel/icon_ranking.png";
import icon_socials from "@/assets/navigationwheel/icon_socials.png";
import icon_teamfight from "@/assets/navigationwheel/icon_teamfight.png";
import { TextColor } from "@/consts/textColor";
import { FontWeight } from "@/consts/fontWeight";
import { useKeyboardShortcut } from "@/hooks/useKeyboardShortcut";

export const NavigationWheel = () => {
  const NavigationWheelContainer = styled(Box)(() => ({
    backgroundImage: `url(${bgTop})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center top",
    maxHeight: "100%",
    postion: "relative",
    "&::after": {
      content: "''",
      position: "absolute",
      backgroundPosition: "center bottom",
      inset: 0,
      backgroundImage: `url(${bgBottom})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% auto",
      zIndex: -1,
    },
    "&::before": {
      content: "''",
      position: "absolute",
      backgroundPosition: "center center",
      height: "100%",
      width: "20%",
      maxWidth: "20%",
      left: "50%",
      top: "50%",
      transform: "translate(-50%,-50%)",
      backgroundImage: `url(https://img.champz.world/img/logos/Champz_logo.png)`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100%",
    },
  }));
  const NavigationWheelItem = styled(Box)(() => ({
    width: "clamp(200px, 20vw ,340px)",
    position: "absolute",
    zIndex: 10,
    transition: "transform 0.25s ease-in-out",
    ":hover": {
      transform: "scale(1.05) rotate(4deg)",
    },
    "& img": {
      maxWidth: "100%",
    },
  }));
  const NavigationWheelTitle = styled(Box)(({ theme }) => ({
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
    pointerEvents: "none",
    zIndex: 11,
    "&:hover": {
      backgroundColor: "transparent",
    },
  }));
  const NavigationWheelIcon = styled(Box)(() => ({
    position: "absolute",
    maxWidth: "80px",
    width: "20%",
    top: "5%",
    transform: "translateY(-50%)",
    zIndex: 11,
  }));

  const navigate = useNavigate();
  useKeyboardShortcut({
    key: "g",
    onKeyPressed: () =>
      navigate({
        to: "/",
      }),
  });
  useKeyboardShortcut({
    key: "b",
    onKeyPressed: () =>
      navigate({
        to: "/home",
      }),
  });
  useKeyboardShortcut({
    key: "a",
    onKeyPressed: () =>
      navigate({
        to: "/marketplace",
      }),
  });
  useKeyboardShortcut({
    key: "r",
    onKeyPressed: () =>
      navigate({
        to: "/rankings",
      }),
  });

  return (
    <NavigationWheelContainer>
      {/* TOP ROW START */}
      <NavigationWheelItem sx={{ left: "25%", top: "10%" }}>
        <NavigationWheelIcon sx={{ left: "20%" }}>
          <img src={icon_guild} />
        </NavigationWheelIcon>
        <Link to={"/guilds"}>
          <img src={nav_bg_guild} />
        </Link>
        <NavigationWheelTitle>Guilds</NavigationWheelTitle>
      </NavigationWheelItem>
      <NavigationWheelItem sx={{ right: "25%", top: "10%" }}>
        <NavigationWheelIcon sx={{ left: "5%" }}>
          <img src={icon_explore_1} />
        </NavigationWheelIcon>
        <NavigationWheelIcon sx={{ right: "0%", top: "20%" }}>
          <img src={icon_explore_2} />
        </NavigationWheelIcon>
        <Link to={"/quests"}>
          <img src={nav_bg_explore} />
        </Link>
        <NavigationWheelTitle>Explore</NavigationWheelTitle>
      </NavigationWheelItem>
      {/* TOP ROW END */}
      {/* MID ROW START */}
      <NavigationWheelItem sx={{ left: "10%", top: "37%" }}>
        <NavigationWheelIcon sx={{ left: "20%" }}>
          <img src={icon_socials} />
        </NavigationWheelIcon>
        <Link to={"/character/" + 0}>
          <img src={nav_bg_socials} />
        </Link>
        <NavigationWheelTitle>Barracks</NavigationWheelTitle>
      </NavigationWheelItem>
      <NavigationWheelItem sx={{ right: "10%", top: "37%" }}>
        <NavigationWheelIcon sx={{ right: "5%" }}>
          <img src={icon_teamfight} />
        </NavigationWheelIcon>
        <Link to={"/teamfight"}>
          <img src={nav_bg_teamfight} />
        </Link>
        <NavigationWheelTitle>TeamFight</NavigationWheelTitle>
      </NavigationWheelItem>
      {/* MID ROW END */}
      {/* BOT ROW START */}
      <NavigationWheelItem sx={{ left: "15%", bottom: "7%" }}>
        <NavigationWheelIcon sx={{ left: "65%" }}>
          <img src={icon_auction} />
        </NavigationWheelIcon>
        <Link to={"/marketplace"}>
          <img src={nav_bg_auction} />
        </Link>
        <NavigationWheelTitle>Auction</NavigationWheelTitle>
      </NavigationWheelItem>
      <NavigationWheelItem sx={{ left: "40%", bottom: "7%" }}>
        <NavigationWheelIcon sx={{ left: "10%" }}>
          <img src={icon_forging_1} />
        </NavigationWheelIcon>
        <NavigationWheelIcon sx={{ right: "0%", top: "40%" }}>
          <img src={icon_forging_2} />
        </NavigationWheelIcon>
        <Link
          to={"/marketplace"}
          search={() => ({
            name: "Mycelium",
            dir: "asc" as "asc",
            sort: "price" as "price",
            pr_from: 1000,
            pr_to: 1000000,
          })}
        >
          <img src={nav_bg_forging} />
        </Link>
        <NavigationWheelTitle>Forging</NavigationWheelTitle>
      </NavigationWheelItem>
      <NavigationWheelItem sx={{ right: "15%", bottom: "7%" }}>
        <NavigationWheelIcon sx={{ left: "65%" }}>
          <img src={icon_ranking} />
        </NavigationWheelIcon>
        <Link to={"/rankings"}>
          <img src={nav_bg_ranking} />
        </Link>
        <NavigationWheelTitle>Ranking</NavigationWheelTitle>
      </NavigationWheelItem>
      {/* BOT ROW END */}
    </NavigationWheelContainer>
  );
};
