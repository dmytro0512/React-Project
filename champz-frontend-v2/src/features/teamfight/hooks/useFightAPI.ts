import { MutationKeys } from "@/consts/mutationKeys";
import { CharacterService } from "@/services/characterService";
import { useMutation } from "@tanstack/react-query";
import { useRouteContext } from "@tanstack/react-router";
import { Fight, RoundCommand } from "../types/teamfight";
import { useState } from "react";
import { AxiosInstance } from "axios";
import { FightService } from "@/services/fightService";
import testDataFightResponse from "../../../../src/test/fightResponse.json";
import { useFightContext } from "./useFightContext";

export function useFightAPI() {
  const [fight, setFight] = useState<Fight>();
  const routeContext = useRouteContext({ strict: false });
  const fightMutation = useMutation({
    mutationKey: [MutationKeys.charFight],
    mutationFn: ({
      fightId,
    }: {
      fightId: number;
      roundCommands?: RoundCommand[];
    }) => {
      return new CharacterService(routeContext.api as AxiosInstance).fight(
        fightId,
      );
    },
    onError: () => {
      console.log("Error Calling Fight");
    },
    onMutate: () => {},
    onSuccess: (data) => {
      setFight(data.fight);
    },
  });

  const nextRoundMutation = useMutation({
    mutationKey: [MutationKeys.fightNextRound],
    mutationFn: ({
      fightId,
      roundCommands,
    }: {
      fightId: number;
      roundCommands?: RoundCommand[];
    }) => {
      return new FightService(routeContext.api as AxiosInstance).nextRound(
        fightId,
        roundCommands,
      );
    },
    onError: () => {
      console.log("Error Calling Fight");
    },
    onMutate: () => {},
    onSuccess: (data) => {
      setFight(data.fight);
    },
  });

  const getFightById = (fightId: number) => {
    fightMutation.mutate({
      fightId,
    });
  };

  const getNextRound = (fightId: number, roundCommands: RoundCommand[]) => {
    nextRoundMutation.mutate({
      fightId,
      roundCommands,
    });
  };

  const getTestRound = () => {
    console.log(testDataFightResponse);
    // fightContext.setFight(testDataFightResponse.fight);
    return testDataFightResponse.fight;
  };

  return {
    fight,
    getFightById,
    getNextRound,
    getTestRound,
  };
}
