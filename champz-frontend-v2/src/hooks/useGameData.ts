import useAuthContext from "@/features/auth/contexts/authContext";
import { AuthenticatedGame } from "@/types/responses/gameConfig";

export function useGameData() {
  const authContext = useAuthContext();

  const gameData = authContext.gameData;

  const updateGameData = (game: AuthenticatedGame) => {
    authContext.setGameData(game);
  };

  return { gameData, updateGameData };
}
