import { useSnackbar } from "@/hooks/useSnackbar";
import { useEffect } from "react";

export function useBlockchainErrorHandler(result: {
  isError: boolean;
  error: Error | null;
}) {
  const snackbar = useSnackbar();

  console.log(result);

  useEffect(() => {
    if (result.isError && result.error) {
      snackbar.displayAlert({
        severity: "error",
        message: result.error?.shortMessage || "Unknown error",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result.isError, result.error]);
}
