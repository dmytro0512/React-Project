import { ChampzTab } from "@/components/ChampzTabs/ChampzTab";
import { ChampzTabPanel } from "@/components/ChampzTabs/ChampzTabPanel";
import { ChampzTabs } from "@/components/ChampzTabs/ChampzTabs";
import { Avatar, Box, Grid, Stack, styled } from "@mui/material";
import { WorkbenchSlot } from "./WorkbenchSlot";
import { ItemAttributePills } from "@/components/Items/ItemAttributePills";
import { WorkbenchProps } from "../../types/forging";
import { ItemTitle } from "@/components/Text";
import { PillButton } from "@/components/PillButton";
import minusIcon from "@/assets/icons/misc/minus.svg";
import plusIcon from "@/assets/icons/misc/plus.svg";
import deleteIcon from "@/assets/icons/misc/delete.svg";
import { UnstyledButton } from "@/components/UnstyledButton";

import squareItemMask from "@/assets/backgrounds/items/square_item.svg";
import { ItemImage } from "@/components/Items/ItemImage";
import { SquareItemContainer } from "@/components/Items/SquareItemDisplay";
import { useEffect, useRef, useState } from "react";

export function Workbench(props: WorkbenchProps) {
  const [numberOfExecutions, setNumberOfExecutions] = useState(0);
  const maxNumberOfExecutions = useRef(0);

  useEffect(() => {
    if (
      props.selectedItem !== undefined &&
      props.selectedSourceItemList !== undefined
    ) {
      const maxNumberOfExecutionsBasedOnItems = calculateForgingAmount();
      maxNumberOfExecutions.current = maxNumberOfExecutionsBasedOnItems;
      setNumberOfExecutions(maxNumberOfExecutionsBasedOnItems);
    }
  }, [props.selectedItem, props.selectedSourceItemList]);

  const WorkbenchResult = styled(Box)(({ theme }) => ({
    minWidth: "150px",
    aspectRatio: 1,
    padding: theme.spacing(1),
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    backgroundImage: `url(${squareItemMask})`,
    backgroundSize: "100% 100%",
    cursor: "pointer",
  }));

  const handleReduceForgeCount = () => {
    const newNumberOfExecutions = numberOfExecutions - 1;
    if (newNumberOfExecutions < 0) {
      return;
    }

    props.onReduceForgeCount();
  };

  const handleIncreaseForgeCount = () => {
    // const newNumberOfExecutions = numberOfExecutions + 1;
    // console.log(newNumberOfExecutions, maxNumberOfExecutions.current);
    // if (newNumberOfExecutions > maxNumberOfExecutions.current) {
    //   return;
    // }

    props.onIncreaseForgeCount();
  };

  const handleResetWorkbench = () => {
    setNumberOfExecutions(0);
    props.onSelectItem(undefined);
  };

  const calculateForgingAmount = () => {
    let maxNumberOfItemExecutions = 0;

    if (
      props.selectedItem === undefined ||
      props.selectedSourceItemList === undefined
    ) {
      return 0;
    }

    for (let i = 0; i < props.selectedItem.recipe.length; i++) {
      const curRecipeItem = props.selectedItem.recipe[i];

      if (
        curRecipeItem.source_cfg_item_id !== undefined &&
        curRecipeItem.source_cfg_item_id > 0
      ) {
        const filteredSourceItemCount = Math.floor(
          props.selectedSourceItemList.filter(
            (item) => item.cfg_item_id === curRecipeItem.source_cfg_item_id,
          ).length / curRecipeItem.quantity,
        );

        maxNumberOfItemExecutions =
          filteredSourceItemCount >= maxNumberOfItemExecutions
            ? filteredSourceItemCount
            : maxNumberOfItemExecutions;
      }
    }

    return maxNumberOfItemExecutions;
  };

  return (
    <Grid item xs={4}>
      <ChampzTabs value={0}>
        <ChampzTab label="Workbench" id="0" />
      </ChampzTabs>
      <ChampzTabPanel index={0} value={0}>
        <Stack spacing={2} sx={{ alignItems: "center" }}>
          <Box sx={{ position: "relative" }}>
            <SquareItemContainer
              className={props.selectedItem?.src ? "selected" : ""}
              padding={1}
              sx={{
                minWidth: "150px",
                aspectRatio: 1,
              }}
            >
              <ItemImage src={`${props.selectedItem?.src}`} />
            </SquareItemContainer>
            <Stack sx={{ position: "absolute", right: "-3.25em", bottom: 0 }}>
              <UnstyledButton
                disableRipple={true}
                onClick={() => handleResetWorkbench()}
              >
                <Avatar
                  src={deleteIcon}
                  sx={{ width: "22px", height: "22px" }}
                />
              </UnstyledButton>
            </Stack>
          </Box>

          <Stack spacing={0.5} sx={{ alignItems: "center" }}>
            <ItemTitle>{props.selectedItem?.name}</ItemTitle>
            <Stack direction={"row"}>
              <ItemAttributePills item={props.selectedItem} />
            </Stack>
          </Stack>
          <Stack
            sx={{ flexWrap: "wrap", justifyContent: "center" }}
            spacing={1}
            direction={"row"}
            useFlexGap
          >
            <WorkbenchSlot
              selectedSourceItemList={props.selectedSourceItemList}
              selectedSourceConsumableList={props.selectedSourceConsumableList}
              recipe={props.selectedItem?.recipe[0]}
            />
            <WorkbenchSlot
              selectedSourceItemList={props.selectedSourceItemList}
              selectedSourceConsumableList={props.selectedSourceConsumableList}
              recipe={props.selectedItem?.recipe[1]}
            />
            <WorkbenchSlot
              selectedSourceItemList={props.selectedSourceItemList}
              selectedSourceConsumableList={props.selectedSourceConsumableList}
              recipe={props.selectedItem?.recipe[2]}
            />
            <WorkbenchSlot
              selectedSourceItemList={props.selectedSourceItemList}
              selectedSourceConsumableList={props.selectedSourceConsumableList}
              recipe={props.selectedItem?.recipe[3]}
            />
            <WorkbenchSlot
              selectedSourceItemList={props.selectedSourceItemList}
              selectedSourceConsumableList={props.selectedSourceConsumableList}
              recipe={props.selectedItem?.recipe[4]}
            />
            <WorkbenchSlot
              selectedSourceItemList={props.selectedSourceItemList}
              selectedSourceConsumableList={props.selectedSourceConsumableList}
              recipe={props.selectedItem?.recipe[5]}
            />
            <WorkbenchSlot
              selectedSourceItemList={props.selectedSourceItemList}
              selectedSourceConsumableList={props.selectedSourceConsumableList}
              recipe={props.selectedItem?.recipe[6]}
            />
            <WorkbenchSlot
              selectedSourceItemList={props.selectedSourceItemList}
              selectedSourceConsumableList={props.selectedSourceConsumableList}
              recipe={props.selectedItem?.recipe[7]}
            />
            <WorkbenchSlot
              selectedSourceItemList={props.selectedSourceItemList}
              selectedSourceConsumableList={props.selectedSourceConsumableList}
              recipe={props.selectedItem?.recipe[8]}
            />
          </Stack>
          <Stack
            direction={"row"}
            sx={{ alignItems: "center", justifyContent: "center" }}
          >
            <UnstyledButton
              disableRipple={true}
              onClick={handleReduceForgeCount}
            >
              <Avatar src={minusIcon} />
            </UnstyledButton>
            <PillButton>{`Forge ${numberOfExecutions}x`}</PillButton>
            <UnstyledButton
              disableRipple={true}
              onClick={handleIncreaseForgeCount}
            >
              <Avatar src={plusIcon} />
            </UnstyledButton>
          </Stack>
        </Stack>
      </ChampzTabPanel>
    </Grid>
  );
}
