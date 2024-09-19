import { ChampzDialog } from "@/components/ChampzDialog/ChampzDialog";
import { ChampzDialogTitle } from "@/components/ChampzDialog/ChampzDialogTitle";
import {
  ActionButtonV1,
  ActionButtonV2,
} from "@/features/character/components/Actions/ActionButton";
import { Box, Grid } from "@mui/material";
import { ReactElement } from "react";

export function ConfirmationDialog(props: ConfirmationDialogProps) {
  return (
    <ChampzDialog open={props.open} onClose={props.onClose}>
      <Box textAlign={"center"} sx={{ maxWidth: "100%", minWidth: "540px" }}>
        <ChampzDialogTitle>Confirm</ChampzDialogTitle>
        {props.content}
      </Box>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: "1em" }}
      >
        <Grid item xs={6}>
          <ActionButtonV1
            onClick={(event) => {
              if (!event.currentTarget.disabled) {
                event.currentTarget.disabled = true;
                props.onConfirm();
              }
            }}
          >
            Yes, do it!
          </ActionButtonV1>
        </Grid>
        <Grid item xs={6}>
          <ActionButtonV2
            onClick={(event) => {
              if (!event.currentTarget.disabled) {
                event.currentTarget.disabled = true;
                props.onClose();
              }
            }}
          >
            Meeehh, nevermind
          </ActionButtonV2>
        </Grid>
      </Grid>
    </ChampzDialog>
  );
}

interface ConfirmationDialogProps {
  open: boolean;
  content: ReactElement;
  onClose: () => void;
  onConfirm: () => void;
}
