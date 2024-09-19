import { SocketClient } from "@/socketClient";
import { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { AxiosInstance } from "axios";

interface RouterContext {
  auth: {    
    token: string | null;
    login: (token: string) => void;
    logout: () => void;
  };
  api: AxiosInstance | null;
  socketClient: SocketClient | null;
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
