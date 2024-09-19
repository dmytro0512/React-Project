import { ChampzSelect } from "@/components/form/ChampzSelect";
import { XpBarProps } from "../../../../components/Character/XpBar";
import { MenuItem, SelectChangeEvent } from "@mui/material";
import { useEffect, useRef } from "react";

interface LevelDownModalContentProps extends XpBarProps {
  onLevelSelect(lvl: number): void;
}

export function LevelDownModalContent(props: LevelDownModalContentProps) {
  const targetLevel = useRef(props.lvl - 1);

  useEffect(() => {
    props.onLevelSelect(targetLevel.current);
  }, []);

  const handleChangeLevelSelect = (event: SelectChangeEvent<unknown>) => {
    console.log("handleChangeLevelSelect", event.target.value);
    props.onLevelSelect(parseInt(event.target.value as string));
  };

  const getLevelOptions = (startLevel: number) => {
    const levelOptions = [];
    for (let i = startLevel - 1; i > 0; i--) {
      levelOptions.push(i);
    }
    return levelOptions;
  };

  const levelOptions = getLevelOptions(props.lvl);

  return (
    <>
      <ChampzSelect
        onChange={handleChangeLevelSelect}
        defaultValue={targetLevel.current}
      >
        {levelOptions?.map((lvl) => {
          return (
            <MenuItem
              key={`level${lvl}`}
              value={lvl}
            >{`Level ${lvl}`}</MenuItem>
          );
        })}
      </ChampzSelect>
      {
        "Reset the character level to a lower one. This comes without costs but is irreversible"
      }
      {`${props.char?.name} will keep any rebirth attributes.`}
      {`${props.char?.name} will start at miniumum EXP for the chosen level.`}
      {`${props.char?.name} will be unequipped with the reset.`}
    </>
  );
}
