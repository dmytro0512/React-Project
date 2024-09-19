import { ChampzOutputFormatNumber } from "@/components/ChampzFormatting/ChampzOutputFormatNumber";
import { RegularText } from "@/components/Text";
import { useGameData } from "@/hooks/useGameData";
import { Stack } from "@mui/material";

export function TruffleBalance() {
  const gameData = useGameData();

  return (
    <Stack>
      <RegularText>
        {`Truffle balance: `}
        <ChampzOutputFormatNumber
          showBackground={true}
          value={gameData.gameData?.player.truffle_balance || 0}
        />
      </RegularText>
    </Stack>
  );
}
