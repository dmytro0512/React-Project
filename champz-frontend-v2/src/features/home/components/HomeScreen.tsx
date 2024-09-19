import { Box, Grid, Stack } from "@mui/material";
import { ContentHeading, HeadingHuge } from "@/components/Heading";
import { CustomStatistics } from "./CustomStatistics";
import { useGameData } from "@/hooks/useGameData";
import { News } from "./News";
import { useNavigate } from "@tanstack/react-router";
import { LoginStreak } from "@/features/rankings/components/LoginStreak";
import { Logo } from "@/features/login/components/Logo";
import { XpBar } from "@/components/Character/XpBar";
import theme from "@/theme";
import { HeaderButton } from "@/components/HeaderButton";
import useGlobalContext from "@/contexts/globalContext";
import { ContentPanel } from "@/components/ContentPanel";
import { ChampzLoading } from "@/components/ChampzLoading";

export function HomeScreen() {
  const gameData = useGameData();
  const globalContext = useGlobalContext();
  const navigate = useNavigate();

  return (
    <>
      {/* <AvailableStatisticsList />        */}
      <Grid
        container
        spacing={3}
        sx={{
          justifyContent: "center",
        }}
      >
        <Grid
          item
          container
          xs={12}
          order={{ xs: 1 }}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            top: "2em",
            paddingTop: "0 !important",
            [theme.breakpoints.down("sm")]: {
              top: "0",
            },
          }}
        >
          <Logo sx={{ maxWidth: "200px" }} />
        </Grid>
        <Grid item xs={12} sm={4} order={{ xs: 3, sm: 2 }}>
          <CustomStatistics />
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          order={{ xs: 2, sm: 3 }}
          sx={{
            position: "relative",
            [theme.breakpoints.down("sm")]: {
              top: "0",
            },
          }}
        >
          <Box>
            <HeadingHuge textAlign={"center"}>
              {gameData.gameData?.player.name === undefined ? (
                <ChampzLoading />
              ) : (
                `Welcome Champignon!`
              )}
            </HeadingHuge>
            <Stack spacing={2} padding={theme.spacing(2)}>
              <Stack spacing={2} order={{ xs: 2, sm: 1 }}>
                <XpBar
                  min_exp={0}
                  max_exp={500}
                  current_exp={gameData.gameData?.player.output_exp ?? 0}
                  lvl={gameData.gameData?.player.lvl ?? 1}
                  text={gameData.gameData?.player.name}
                ></XpBar>
                <XpBar
                  min_exp={0}
                  max_exp={2000}
                  current_exp={1600}
                  lvl={32}
                  text={"Guild Name"}
                ></XpBar>
              </Stack>
              <Box
                sx={{ display: "flex", justifyContent: "center" }}
                order={{ xs: 1, sm: 2 }}
              >
                <HeaderButton
                  icon="play_now"
                  pixelSize={130}
                  onClick={() => {
                    globalContext.handle.enter();
                    navigate({
                      to: "/mainnav",
                    });
                  }}
                />
              </Box>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} order={{ xs: 4, sm: 4 }}>
          <ContentHeading textAlign={"center"}>Guild Ranking</ContentHeading>
          <ContentPanel>
            <LoginStreak />
          </ContentPanel>
        </Grid>
        <Grid item xs={12} order={{ xs: 5, sm: 5 }}>
          <News />
        </Grid>
      </Grid>
    </>
  );
}
