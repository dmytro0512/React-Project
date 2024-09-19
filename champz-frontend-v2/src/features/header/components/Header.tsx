import { Box, Button, Grid, Stack, styled, Tooltip } from "@mui/material";
import { getRouteApi, useNavigate, useRouter } from "@tanstack/react-router";
import { WalletDialog } from "@/features/header/components/WalletDialog/WalletDialog";
import { useState } from "react";
import { HeaderButton } from "@/components/HeaderButton";
import { PriceTag } from "@/components/PriceTag";
import { Currencies } from "@/consts/currencies";
import { HeaderIcons } from "@/consts/headerIcons";
import { useGameData } from "@/hooks/useGameData";
import { ProfileButton } from "@/components/ProfileButton";
import { ContentHeading, Heading } from "@/components/Heading";
import { NewDayCountDownTooltip } from "./NewDayCountDownTooltip";

export function Header(props: HeaderProps) {
  const Header = styled(Grid)(() => ({
    position: "relative",
    zIndex: 50,
  }));

  const routeApi = getRouteApi("/_auth");
  const routeSearch = routeApi.useSearch();

  const [walletDialogOpen, setWalletDialogOpen] = useState(
    routeSearch.wdopen ? true : false,
  );
  const { gameData } = useGameData();
  const navigate = useNavigate();
  const router = useRouter();

  // useKeyboardShortcut({
  //   key: "Backspace",
  //   onKeyPressed: () => router.history.back(),
  // });

  return (
    <>
      <Header container>
        <Grid
          item
          xs={6}
          {...{ [breakpoint]: 4 }}
          sx={{ alignItems: "center" }}
        >
          <Stack direction={"row"}>
            <HeaderButton
              icon={HeaderIcons.BACK}
              onClick={() => router.history.back()}
            />
            <HeaderButton
              icon={HeaderIcons.HOME}
              onClick={() =>
                navigate({
                  to: "/",
                })
              }
            />

            {gameData && (
              <Tooltip title={<NewDayCountDownTooltip />}>
                <ContentHeading>Day {gameData.active_day}</ContentHeading>
              </Tooltip>
            )}
          </Stack>
        </Grid>
        <Grid
          item
          {...{ [breakpoint]: 4 }}
          sx={{
            textAlign: "center",
            display: { xs: "none", [breakpoint]: "flex" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {gameData && (
            <PriceTag
              type={Currencies.SPORES}
              value={gameData.player.spores_balance}
            />
          )}
        </Grid>

        <Grid item xs={6} {...{ [breakpoint]: 4 }} sx={{ textAlign: "right" }}>
          <Button
            onClick={() =>
              navigate({
                to: "/mainnav",
              })
            }
          >
            MAIN
          </Button>
          <Button onClick={() => props.onLogoutClicked()}>Logout</Button>

          <HeaderButton
            icon={HeaderIcons.WALLET}
            onClick={() => setWalletDialogOpen(true)}
          />
          <HeaderButton
            icon={HeaderIcons.SOUNDON}
            onClick={() => alert("Implement me!")}
          />
          <HeaderButton
            icon={HeaderIcons.BELL}
            onClick={() => alert("Implement me!")}
          />
          <HeaderButton
            icon={HeaderIcons.GIFT}
            onClick={() => alert("Implement me!")}
          />
        </Grid>
      </Header>

      <WalletDialog
        open={walletDialogOpen}
        onClose={() => {
          setWalletDialogOpen(false);
        }}
      />
    </>
  );
}

interface HeaderProps {
  onLogoutClicked: () => void;
}

const breakpoint = "md";
