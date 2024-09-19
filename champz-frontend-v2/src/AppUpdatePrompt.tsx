import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useRegisterSW } from "virtual:pwa-register/react";

const SW_UPDATE_INTERVAL = 5 * 60 * 1000;

export function AppUpdatePrompt() {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisteredSW(swUrl, r) {
      console.log(`Service Worker at: ${swUrl}`);
      if (navigator.serviceWorker.controller === null) {
        // reload after force refresh (https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/controller)
        window.location.reload();
      }
      r &&
        setInterval(() => {
          console.log("Checking for sw update");
          r.update();
        }, SW_UPDATE_INTERVAL);
    },
  });

  const onClose = () => {
    setNeedRefresh(false);
  };

  return (
    <Dialog open={needRefresh} onClose={onClose}>
      <DialogTitle>Please refresh</DialogTitle>
      <DialogContent>
        <DialogContentText>
          A new version of Champz is available
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Later</Button>
        <Button
          onClick={() => {
            updateServiceWorker(true);
          }}
          autoFocus
        >
          Refresh
        </Button>
      </DialogActions>
    </Dialog>
  );
}
