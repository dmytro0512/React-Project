import { Char } from "@/types/responses/charList";
import { createContext, useContext } from "react";
import { CharListReducerAction } from "./authContextProvider";
import { AuthenticatedGame } from "@/types/responses/gameConfig";

export interface AuthContextParams {
  gameData: AuthenticatedGame | undefined;
  charList: Char[] | undefined;
  selectedChar: Char | undefined;
  updateCharList: (action: CharListReducerAction) => void;
  setSelectedChar: (char: Char) => void;
  setGameData: (game: AuthenticatedGame) => void;
}

export const AuthContext = createContext<AuthContextParams | undefined>(
  undefined,
);

export default function useAuthContext(): AuthContextParams {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("AuthContext undefined.");
  }

  return context;
}
