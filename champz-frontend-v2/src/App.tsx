import { getAuthenticatedApi } from "@/api";
import { useAuth } from "@/hooks/useAuth";
import { useSnackbar } from "@/hooks/useSnackbar";
import { getSocketClient } from "@/socketClient";
import { Snackbar } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { useEffect, useMemo, useRef } from "react";
import { routeTree } from "./routeTree.gen";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { GlobalContextProvider } from "@/contexts/globalContextProvider";

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const queryClient = new QueryClient();

const router = createRouter({
  routeTree,
  context: {
    auth: undefined!,
    api: undefined!,
    socketClient: undefined!,
    queryClient,
  },
  defaultPreload: "intent",
});

export function App() {
  const auth = useAuth();
  const initialToken = useRef(() => auth.token);
  const snackbar = useSnackbar();
  const api = useMemo(
    () => (auth.token ? getAuthenticatedApi(auth.token, auth.logout) : null),
    [auth.token, auth.logout],
  );
  const socketClient = useMemo(
    () => (auth.token ? getSocketClient(auth.token) : null),
    [auth.token],
  );

  useEffect(() => {
    if (initialToken !== auth.token || !auth.token) {
      // to avoid invalidating at first load
      router.invalidate();
    }
  }, [auth.token]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme()}>
          <GlobalContextProvider>
            <RouterProvider
              router={router}
              context={{
                auth,
                api,
                socketClient,
                queryClient,
              }}
            />
          </GlobalContextProvider>
        </RainbowKitProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>

      <Snackbar
        open={snackbar.snackbarProps !== null}
        autoHideDuration={6000}
        onClose={snackbar.hideSnackbar}
      >
        {snackbar.snackbarProps?.component}
      </Snackbar>
    </>
  );
}
