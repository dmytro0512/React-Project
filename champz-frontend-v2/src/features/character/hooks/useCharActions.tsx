import { ActionHandler } from "@/consts/actionHandler";
import { MutationKeys } from "@/consts/mutationKeys";
import { QueryKeys } from "@/consts/queryKeys";
import { ReducerActionTypes } from "@/consts/reducerActionTypes";
import useAuthContext from "@/features/auth/contexts/authContext";
import { useApiErrorHandler } from "@/hooks/useApiErrorHandler";
import { CharacterService } from "@/services/characterService";
import { Char } from "@/types/responses/charList";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useRouteContext } from "@tanstack/react-router";
import { AxiosInstance } from "axios";

export function useCharActions() {
  const loadingActivity = {
    activity_id: 99,
  };
  const { updateCharList, selectedChar, setGameData } = useAuthContext();
  const routeContext = useRouteContext({ strict: false });
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const clearCharActivities = () => {
    // Remove Action Button until Result is there to avoid unwanted spam or side effects with slow responses
    const selectedCharClone = {
      ...selectedChar,
      activities: [loadingActivity],
    };
    updateCharList({
      type: ReducerActionTypes.UPDATED_LIST,
      charList: [selectedCharClone as Char],
    });
  };

  const handleUpdateCharList = (charList: Char[]) => {
    updateCharList({
      type: ReducerActionTypes.UPDATED_LIST,
      charList: charList,
    });
  };

  const explore = (
    charId: number,
    decision_id?: number,
    answer?: string,
    journal_explore_id?: number,
    fight_id?: number,
  ) => {
    exploreMutation.mutate({
      charId,
      decision_id,
      answer,
      journal_explore_id,
      fight_id,
    });
  };

  const fight = (fightId: number) => {
    navigate({
      to: "/teamfight/$id",
      params: { id: fightId + "" },
    });
  };

  const forage = (charId: number) => {
    forageMutation.mutate(charId);
  };

  const lvlup = (charId: number) => {
    lvlupMutation.mutate(charId);
  };

  const rebirth = (charId: number) => {
    rebirthMutation.mutate(charId);
  };

  const revive = (charId: number) => {
    reviveMutation.mutate(charId);
  };

  const heal = (charId: number) => {
    healMutation.mutate(charId);
  };

  const unforage = (charId: number) => {
    unforageMutation.mutate(charId);
  };

  const lvldown = (charId: number, lvl: number) => {
    lvldownMutation.mutate({ charId, lvl });
  };

  const equip = (charId: number, slotId: number, itemId: number) => {
    equipMutation.mutate({ charId, slotId, itemId });
  };

  const unequip = (charId: number, slotId: number, itemId: number) => {
    unequipMutation.mutate({ charId, slotId, itemId });
  };

  const forageMutation = useMutation({
    mutationKey: [MutationKeys.charForage],
    mutationFn: (charId: number) => {
      return new CharacterService(routeContext.api as AxiosInstance).forage(
        charId,
      );
    },
    onMutate: () => {
      clearCharActivities();
    },
    onSuccess: (data) => {
      handleUpdateCharList(data.charlist);
      setGameData(data.game);
    },
  });

  const unforageMutation = useMutation({
    mutationKey: [MutationKeys.charUnforage],
    mutationFn: (charId: number) => {
      return new CharacterService(routeContext.api as AxiosInstance).unforage(
        charId,
      );
    },
    onMutate: () => {
      clearCharActivities();
    },
    onSuccess: (data) => {
      handleUpdateCharList(data.charlist);
    },
  });

  const reviveMutation = useMutation({
    mutationKey: [ActionHandler.REVIVE],
    mutationFn: (charId: number) => {
      return new CharacterService(routeContext.api as AxiosInstance).revive(
        charId,
      );
    },
    onMutate: () => {
      clearCharActivities();
    },
    onSuccess: (data) => {
      handleUpdateCharList(data.charlist);
    },
  });

  const healMutation = useMutation({
    mutationKey: [ActionHandler.HEAL],
    mutationFn: (charId: number) => {
      return new CharacterService(routeContext.api as AxiosInstance).heal(
        charId,
      );
    },
    onMutate: () => {
      clearCharActivities();
    },
    onSuccess: (data) => {
      handleUpdateCharList(data.charlist);
    },
  });

  const lvlupMutation = useMutation({
    mutationKey: [ActionHandler.LVLUP],
    mutationFn: (charId: number) => {
      return new CharacterService(routeContext.api as AxiosInstance).lvlup(
        charId,
      );
    },
    onMutate: () => {
      clearCharActivities();
    },
    onSuccess: (data) => {
      handleUpdateCharList(data.charlist);
    },
  });

  const lvldownMutation = useMutation({
    mutationKey: [ActionHandler.LVLDOWN],
    mutationFn: ({ charId, lvl }: { charId: number; lvl: number }) => {
      return new CharacterService(routeContext.api as AxiosInstance).lvldown(
        charId,
        lvl,
      );
    },
    onMutate: () => {
      clearCharActivities();
    },
    onSuccess: (data) => {
      handleUpdateCharList(data.charlist);
    },
  });

  const unequipMutation = useMutation({
    mutationKey: [ActionHandler.UNEQUIP],
    mutationFn: ({
      charId,
      slotId,
      itemId,
    }: {
      charId: number;
      slotId: number;
      itemId: number;
    }) => {
      return new CharacterService(routeContext.api as AxiosInstance).unequip(
        charId,
        slotId,
        itemId,
      );
    },
    onMutate: () => {
      clearCharActivities();
    },
    onSuccess: (data) => {
      handleUpdateCharList(data.charlist);
      queryClient.invalidateQueries({ queryKey: [QueryKeys.itemList] });
    },
  });

  const equipMutation = useMutation({
    mutationKey: [ActionHandler.EQUIP],
    mutationFn: ({
      charId,
      slotId,
      itemId,
    }: {
      charId: number;
      slotId: number;
      itemId: number;
    }) => {
      return new CharacterService(routeContext.api as AxiosInstance).equip(
        charId,
        slotId,
        itemId,
      );
    },
    onMutate: () => {
      clearCharActivities();
    },
    onSuccess: (data) => {
      handleUpdateCharList(data.charlist);
    },
  });

  const exploreMutation = useMutation({
    mutationKey: [ActionHandler.EXPLORE],
    mutationFn: ({
      charId,
      decision_id,
      answer,
      journal_explore_id,
      fight_id,
    }: {
      charId: number;
      decision_id?: number;
      answer?: string;
      journal_explore_id?: number;
      fight_id?: number;
    }) => {
      return new CharacterService(routeContext.api as AxiosInstance).explore(
        charId,
        decision_id,
        answer,
        journal_explore_id,
        fight_id,
      );
    },
    onMutate: () => {
      clearCharActivities();
    },
    onSuccess: (data, { charId }) => {
      handleUpdateCharList(data.charlist);

      const explore = data.explore;
      queryClient.setQueryData([MutationKeys.charExplore], {
        explore,
      });

      navigate({
        to: "/explore/character/$id",
        params: { id: charId + "" },
      });
    },
  });

  const rebirthMutation = useMutation({
    mutationKey: [ActionHandler.REBIRTH],
    mutationFn: (charId: number) => {
      return new CharacterService(routeContext.api as AxiosInstance).rebirth(
        charId,
      );
    },
    onMutate: () => {
      clearCharActivities();
    },
    onSuccess: (data) => {
      handleUpdateCharList(data.charlist);
    },
  });

  useApiErrorHandler(exploreMutation);
  useApiErrorHandler(forageMutation);
  useApiErrorHandler(healMutation);
  useApiErrorHandler(lvldownMutation);
  useApiErrorHandler(lvlupMutation);
  useApiErrorHandler(equipMutation);
  useApiErrorHandler(unequipMutation);
  useApiErrorHandler(rebirthMutation);
  useApiErrorHandler(reviveMutation);
  useApiErrorHandler(unforageMutation);

  return {
    explore,
    fight,
    forage,
    heal,
    lvldown,
    lvlup,
    equip,
    unequip,
    rebirth,
    revive,
    unforage,
  };
}
