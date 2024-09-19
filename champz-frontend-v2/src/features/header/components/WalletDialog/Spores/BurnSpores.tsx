import { RegularText } from "@/components/Text";
import { FontWeight } from "@/consts/fontWeight";
import { BurnButton } from "@/components/BurnButton";
import { TextField } from "@/components/TextField";
import { useApiErrorHandler } from "@/hooks/useApiErrorHandler";
import { GameService } from "@/services/gameService";
import { Accordion, AccordionDetails, Stack } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getRouteApi } from "@tanstack/react-router";
import { useState } from "react";
import { PlayerService } from "@/services/playerService";
import { QueryKeys } from "@/consts/queryKeys";
import { ChampzOutputFormatNumber } from "@/components/ChampzFormatting/ChampzOutputFormatNumber";
import { useGameData } from "@/hooks/useGameData";
import { ChampzLoading } from "@/components/ChampzLoading";
import { ChampzAccordionSummary } from "@/components/ChampzAccordion";

export function BurnSpores(props: BurnSporesProps) {
  const routeApi = getRouteApi("/_auth");
  const routeContext = routeApi.useRouteContext();
  const routeSearch = routeApi.useSearch();
  const [amount, setAmount] = useState<number | null>(null);
  const queryClient = useQueryClient();
  const gameData = useGameData();
  const [expanded, setExpanded] = useState<boolean>(
    routeSearch.tabAcc ? (routeSearch.tabAcc === 0 ? true : false) : true,
  );

  const sporesLogQuery = useQuery({
    queryKey: [QueryKeys.sporesLog],
    queryFn: () => new PlayerService(routeContext.api).getSporesLog(),
  });

  const burnMutation = useMutation({
    mutationKey: ["burnSpores"],
    mutationFn: (amount: number | null) => {
      return new GameService(routeContext.api).burnSpores(amount);
    },
    onSuccess: (data) => {
      props.onSuccess();
      gameData.updateGameData(data.game);
      queryClient.invalidateQueries({ queryKey: [QueryKeys.sporesLog] });
    },
  });

  useApiErrorHandler(burnMutation);

  return (
    <Accordion
      disableGutters
      elevation={0}
      square
      sx={{ padding: "0 !important", "&:before": { display: "none" } }}
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
    >
      <ChampzAccordionSummary>Burn Spores</ChampzAccordionSummary>
      <AccordionDetails>
        <Stack spacing={2}>
          <RegularText
            sx={{
              textAlign: "center",
              color: "white",
              fontWeight: FontWeight.M,
            }}
          >
            Burn your Spores to participate in the daily raffle.
          </RegularText>
          <RegularText>
            {`You already burned `}
            {sporesLogQuery?.data ? (
              <ChampzOutputFormatNumber
                value={sporesLogQuery?.data?.burned_by_player_current_day ?? 0}
                highLightText={true}
                showBackground={false}
              />
            ) : (
              <ChampzLoading />
            )}
            {` Spores current day.`}
          </RegularText>
          <RegularText>
            {`You burned a total of `}
            <ChampzOutputFormatNumber
              value={sporesLogQuery?.data?.burned_by_player ?? 0}
              highLightText={true}
              showBackground={false}
            />
            {` Spores.`}
          </RegularText>
          <Stack direction="row" spacing={2}>
            <TextField
              label="Amount of spores to burn"
              sx={{ flex: 1 }}
              type="number"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setAmount(Number(event.target.value));
              }}
            />
            <BurnButton
              sx={{ width: "85px" }}
              onClick={() => {
                burnMutation.mutateAsync(amount);
              }}
            >
              Burn
            </BurnButton>
          </Stack>
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}

interface BurnSporesProps {
  onSuccess: () => void;
}
