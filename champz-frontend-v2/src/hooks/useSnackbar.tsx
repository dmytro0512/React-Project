import { Alert, AlertColor } from "@mui/material";
import { atom, useAtom } from "jotai";
import React, { useCallback } from "react";

export const snackbarPropsAtom = atom<SnackbarProps | null>(null);

export function useSnackbar() {
  const [snackbarProps, setSnackbarProps] = useAtom(snackbarPropsAtom);

  const displaySnackbar = useCallback(
    (_snackbarProps: SnackbarProps | null): void => {
      setSnackbarProps(_snackbarProps);
    },
    [setSnackbarProps],
  );

  const hideSnackbar = useCallback(
    (_?: React.SyntheticEvent | Event, reason?: string): void => {
      if (reason === "clickaway") {
        return;
      }

      setSnackbarProps(null);
    },
    [setSnackbarProps],
  );

  const displayAlert = useCallback(
    (notification: AlertSnackbarProps): void => {
      displaySnackbar({
        component: (
          <Alert
            onClose={hideSnackbar}
            severity={notification.severity}
            sx={{ width: "100%" }}
            variant="filled"
          >
            {notification.message}
          </Alert>
        ),
      });
    },
    [displaySnackbar, hideSnackbar],
  );

  return { hideSnackbar, displaySnackbar, displayAlert, snackbarProps };
}

export interface SnackbarProps {
  component: React.ReactElement;
}

export interface AlertSnackbarProps {
  message: string;
  severity: AlertColor;
}
