import { createContext, useContext } from "react";
import { FullScreenHandle } from "react-full-screen";

export interface GlobalContextParams {
  handle: FullScreenHandle;
}

export const GlobalContext = createContext<GlobalContextParams | undefined>(
  undefined,
);

export default function useGlobalContext(): GlobalContextParams {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("GlobalContext undefined.");
  }

  return context;
}
