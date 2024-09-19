import { PropsWithChildren } from "react";
import { GlobalContext } from "@/contexts/globalContext";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

export function GlobalContextProvider(props: PropsWithChildren) {
  const handle = useFullScreenHandle();

  return (
    <GlobalContext.Provider value={{ handle }}>
      <FullScreen handle={handle}>{props.children}</FullScreen>
    </GlobalContext.Provider>
  );
}
