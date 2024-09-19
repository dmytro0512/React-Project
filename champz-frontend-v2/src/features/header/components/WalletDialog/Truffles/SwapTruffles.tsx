import { useRef, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  Stack,
  TextFieldProps,
} from "@mui/material";
import { TextField } from "../../../../../components/TextField";
import { BurnButton } from "../../../../../components/BurnButton";
import { formatNumberOutput } from "@/hooks/useNumberFormatter";
import { ChampzAccordionSummary } from "@/components/ChampzAccordion";
import {
  getRouteApi,
  useNavigate,
  useRouteContext,
} from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { QueryKeys } from "@/consts/queryKeys";
import { GameService } from "@/services/gameService";
import { AxiosInstance } from "axios";
import { roundToMinStep } from "@/utils/roundToMinStep";
import { MutationKeys } from "@/consts/mutationKeys";
import { PlayerService } from "@/services/playerService";
import { useGameData } from "@/hooks/useGameData";
import { RegularText } from "@/components/Text";
import { ChampzOutputFormatNumber } from "@/components/ChampzFormatting/ChampzOutputFormatNumber";

export function SwapTruffles() {
  const routeContext = useRouteContext({ strict: false });
  const truffleAmountToSwapRef = useRef<TextFieldProps>(null);
  const routeApi = getRouteApi("/_auth");
  const routeSearch = routeApi.useSearch();
  const navigate = useNavigate();

  const [expanded, setExpanded] = useState<boolean>(
    routeSearch.tabAcc ? (routeSearch.tabAcc === 1 ? true : false) : false,
  );
  const [showSwapButton, setShowSwapButton] = useState<boolean>(false);
  const [ethOutput, setEthOutput] = useState<number>(0);
  const queryClient = useQueryClient();

  const queryResult = useQuery({
    queryKey: [QueryKeys.truffleRates],
    queryFn: () =>
      new GameService(routeContext.api as AxiosInstance).getTruffleRates(),
  });
  const gameData = useGameData();

  const swapMutation = useMutation({
    mutationKey: [MutationKeys.swapTruffles],
    mutationFn: (amount: number) => {
      return new PlayerService(
        routeContext.api as AxiosInstance,
      ).swapTrufflesToETH(amount);
    },
    onSuccess: (data) => {
      gameData.updateGameData(data.game);
      queryClient.invalidateQueries({ queryKey: [QueryKeys.sporesLog] });
      navigate({
        search: () => ({
          wdopen: true,
          wdtab: "earnings",
          tabAcc: 0,
        }),
      });
    },
  });

  const handleSetTruffleAmountToSwap = () => {
    if (truffleAmountToSwapRef.current?.value) {
      truffleAmountToSwapRef.current.value = Math.abs(
        Number(truffleAmountToSwapRef.current.value as number),
      );

      const minSwap = queryResult.data?.min_swap as number;
      const truffleRate = queryResult.data?.truffles_rate as number;

      const truffleAmountToSwap = truffleAmountToSwapRef.current
        .value as number;
      const ethOutput = truffleAmountToSwap / truffleRate;

      if (truffleAmountToSwap >= minSwap) {
        truffleAmountToSwapRef.current.value = roundToMinStep(
          minSwap,
          truffleAmountToSwap,
        );
        setShowSwapButton(true);
        setEthOutput(ethOutput);
      } else {
        truffleAmountToSwapRef.current.value = 0;
        setShowSwapButton(false);
        setEthOutput(0);
      }
    }
  };

  const handleSwapTruffles = () => {
    swapMutation.mutate(truffleAmountToSwapRef.current?.value as number);
    setShowSwapButton(false);
    setEthOutput(0);
  };

  return (
    <Accordion
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
      disableGutters
      elevation={0}
      square
      sx={{ padding: "0 !important", "&:before": { display: "none" } }}
    >
      <ChampzAccordionSummary>Swap Truffles</ChampzAccordionSummary>
      <AccordionDetails>
        <Stack spacing={2}>
          <TextField
            label={
              queryResult.data?.min_swap
                ? `Amount of Truffles to swap (steps of ${formatNumberOutput(queryResult.data?.min_swap as number)})`
                : `Amount of Truffles to swap`
            }
            sx={{ flex: 1 }}
            type="number"
            inputRef={truffleAmountToSwapRef}
            onBlur={() => {
              handleSetTruffleAmountToSwap();
            }}
          />

          <Stack>
            {(truffleAmountToSwapRef.current?.value as number) > 0 &&
              showSwapButton && (
                <>
                  <Stack>
                    <RegularText>
                      {`You will get `}
                      <ChampzOutputFormatNumber
                        showBackground={false}
                        highLightText={true}
                        value={ethOutput}
                      />
                      {` ETH.`}
                    </RegularText>
                  </Stack>
                  <BurnButton onClick={() => handleSwapTruffles()}>
                    Swap
                  </BurnButton>
                </>
              )}
          </Stack>
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}
