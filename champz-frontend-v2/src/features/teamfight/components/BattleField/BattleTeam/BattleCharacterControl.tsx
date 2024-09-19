import { useMemo, useState } from "react";
import { BattleCharacterDisplay } from "./BattleCharacterDisplay";
import { BattleCharacterControlProps } from "@/features/teamfight/types/teamfight";
import { useSelection } from "@/features/teamfight/hooks/useSelection";
import { useFightData } from "@/features/teamfight/hooks/useFightData";
import { ChampzLoading } from "@/components/ChampzLoading";
import { useFightContext } from "@/features/teamfight/hooks/useFightContext";
import { useProcessFightActions } from "@/features/teamfight/hooks/useProcessFightActions";

export function BattleCharacterControl(props: BattleCharacterControlProps) {
  const { getBattleCharacter } = useFightData();
  const { updateStatsAfterAnimation } = useProcessFightActions();

  const fightContext = useFightContext();
  const {
    selectedActor,
    selectedAbility,
    selectActor,
    selectAbility,
    selectTarget,
  } = useSelection();

  const battleCharacter = useMemo(
    () => getBattleCharacter(props.teamId, props.posId),
    [props.teamId, props.posId, fightContext.battleTeam],
  );

  const isTargetable = useMemo(() => {
    if (selectedAbility === undefined) {
      return false;
    }

    return selectedAbility.primary_targets.some(
      (primary_target) =>
        primary_target.pos_id === battleCharacter?.pos_id &&
        primary_target.team_id === battleCharacter?.team_id,
    );
  }, [selectedAbility]);

  const isSelected = battleCharacter?.id === selectedActor?.id;
  const isSelectable = battleCharacter?.team_id === 1;

  if (battleCharacter === undefined) return <ChampzLoading />;

  return (
    <BattleCharacterDisplay
      key={battleCharacter.team_id + battleCharacter.pos_id}
      className="battle-character"
      isTargetable={isTargetable}
      isSelected={isSelected}
      isSelectable={isSelectable}
      selectActor={selectActor}
      selectTarget={selectTarget}
      selectAbility={selectAbility}
      selectedAbility={selectedAbility}
      onAnimationEnd={updateStatsAfterAnimation}
      protagonist={battleCharacter}
    />
  );
}
