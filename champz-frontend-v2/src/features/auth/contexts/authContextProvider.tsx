import { PropsWithChildren, useEffect, useReducer, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { GameService } from "@/services/gameService";
import { AuthContext } from "@/features/auth/contexts/authContext";
import { AxiosInstance } from "axios";
import { Char } from "@/types/responses/charList";
import { useApiErrorHandler } from "@/hooks/useApiErrorHandler";
import { QueryKeys } from "@/consts/queryKeys";
import { ReducerActionTypes } from "@/consts/reducerActionTypes";
import { AuthenticatedGame } from "@/types/responses/gameConfig";

export interface CharListReducerAction {
  type: string;
  charList: Char[];
}

function updateCharListReducer(state: Char[], action: CharListReducerAction) {
  switch (action.type) {
    case ReducerActionTypes.NEW_LIST:
      return action.charList;
    case ReducerActionTypes.UPDATED_LIST:
      const new_state = state.map((char) => {
        const charIndex = action.charList.findIndex(
          (element: Char) => element.id === char.id,
        );
        if (charIndex !== -1) {
          return action.charList[charIndex];
        } else {
          return char;
        }
      });

      return new_state;
    case ReducerActionTypes.NEW_CHAR:
      const stateOld = state;
      stateOld.push(...action.charList);
      return stateOld;
    default:
      return state;
  }
}

export function AuthContextProvider(
  props: PropsWithChildren<AuthContextProviderProps>,
) {
  const charlistQueryResult = useQuery({
    queryKey: [QueryKeys.charList],
    queryFn: () => new GameService(props.api).getCharlist(),
  });

  const [charList, setCharList] = useReducer(updateCharListReducer, []);
  const [gameData, setGameData] = useState<AuthenticatedGame | undefined>();
  const [selectedChar, setSelectedChar] = useState<Char | undefined>(undefined);

  useEffect(() => {
    if (charlistQueryResult?.data) {
      setCharList({ type: "new_list", charList: charlistQueryResult.data });
    }
  }, [charlistQueryResult.isSuccess]);

  const gameConfigQueryResult = useQuery({
    queryKey: [QueryKeys.authenticatedGameConfig],
    queryFn: () => new GameService(props.api).getAuthenticatedGameConfig(),
  });

  useEffect(() => {
    if (gameConfigQueryResult?.data) {
      setGameData(gameConfigQueryResult.data.game);
    }
  }, [gameConfigQueryResult.isSuccess]);

  useApiErrorHandler(charlistQueryResult);
  useApiErrorHandler(gameConfigQueryResult);

  const updateCharList = (action: CharListReducerAction) => {
    setCharList(action);
  };

  return (
    <AuthContext.Provider
      value={{
        charList,
        updateCharList,
        selectedChar,
        setSelectedChar,
        gameData,
        setGameData,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

interface AuthContextProviderProps {
  api: AxiosInstance;
}
