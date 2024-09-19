import { ChampzOutputFormatNumber } from "@/components/ChampzFormatting/ChampzOutputFormatNumber";
import { RegularText } from "@/components/Text";
import { useGameData } from "@/hooks/useGameData";
import { Stack } from "@mui/material";

export function SporesBalance() {
  const gameData = useGameData();

  return (
    <Stack>
      <RegularText>
        {`Spores balance: `}
        <ChampzOutputFormatNumber
          showBackground={true}
          value={gameData.gameData?.player.spores_balance || 0}
        />
      </RegularText>
    </Stack>
  );
}
