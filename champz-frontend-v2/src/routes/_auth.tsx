import { Header } from "@/features/header/components/Header";
import { MobHeader } from "@/features/header/components/mobHeader";
import { MobStateList } from "@/features/header/components/mobStateList";
import { SocketClient } from "@/socketClient";
import { Container, Grid } from "@mui/material";
import { useState } from "react";
import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";
import { AxiosInstance } from "axios";
import pvp from "assets/wallpaper/PvP.jpg";
import construction from "assets/wallpaper/construction.png";
import guilds from "assets/wallpaper/guilds.png";
import marketplace from "assets/wallpaper/marketplace.jpg";
import lss from "assets/wallpaper/lss.png";
import { UrlWithRequestId } from "@/types/urlWithRequestId";
import { PreloadAssets } from "@/components/PreloadAssets";
import { useLoadProgress } from "@/hooks/useLoadProgress";
import { fonts } from "@/fonts/fonts";
import { AuthContextProvider } from "@/features/auth/contexts/authContextProvider";
import { defaultGridSpacing } from "@/consts/spacings";
import { MobRollNewChamp } from "@/features/character/components/RollChamp/mobRollNewChamp"
import mobWholeBg from "@/assets/backgrounds/mobWholeBg.svg"

export type WalletDialogSearch = {
  wdopen?: boolean;
  wdtab?: "spores" | "truffles" | "earnings";
  tabAcc?: number;
};

export const Route = createFileRoute("/_auth")({
  validateSearch: (search: Record<string, unknown>): WalletDialogSearch => {
    return {
      wdopen: search.wdopen as boolean,
      wdtab: search.wdtab as "spores" | "truffles" | "earnings",
      tabAcc: search.tabAcc as number,
    };
  },
  component: AuthComponent,
  beforeLoad: ({ context, location }) => {
    if (!context.auth.token) {
      throw redirect({
        to: "/login",
        search: {
          redirect: location.href,
        },
      });
    } else {
      // if token is available, these are not null
      return {
        api: context.api as AxiosInstance,
        socketClient: context.socketClient as SocketClient,
      };
    }
  },
});

const imageUrlsWithRequestId: UrlWithRequestId[] = [
  pvp,
  construction,
  guilds,
  marketplace,
  lss,
].map((url) => ({
  url,
  requestId: encodeURIComponent(url),
}));

const requestIds = [...imageUrlsWithRequestId].map(
  (imageUrlWithRequestId) => imageUrlWithRequestId.requestId,
);

function AuthComponent() {
  const [ wWidth, setWWidth ] = useState(window.innerWidth)
  // resize
  window.onresize = function() {
    setWWidth(window.innerWidth)
  }
  
  const context = Route.useRouteContext();
  const { aggregatedProgressPercent, ready, setReady } = useLoadProgress({
    requestIds,
  });

  if (!ready) {
    return (
      <PreloadAssets
        imageUrlsWithRequestId={imageUrlsWithRequestId}
        fonts={fonts}
        progressPercent={aggregatedProgressPercent}
        onReady={() => setReady(true)}
      />
    );
  }

  const bg = !(wWidth > 430) && `url(${mobWholeBg})`

  return (
    <Container maxWidth="xl" style={{padding:0, background: `${bg}` }}>
      <AuthContextProvider api={context.api}>
        <Grid container columnSpacing={defaultGridSpacing}>
          {!(wWidth > 430) &&
            <Grid item xs={12}>
              <MobStateList />
            </Grid>
          }
          <Grid item xs={12}>
            {(wWidth > 430) ? <Header onLogoutClicked={() => context.auth.logout()} />
            : <MobHeader />}
          </Grid>
          <Grid item xs={12}>
            {(wWidth > 430) ? <Outlet />
            : <MobRollNewChamp />}
          </Grid>
        </Grid>
      </AuthContextProvider>
    </Container>
  );
}
