import { useSnackbar } from "@/hooks/useSnackbar";
import { getApiErrorMessage } from "@/utils/getApiErrorMessage";
import { useEffect } from "react";

export function useApiErrorHandler(result: {
  isError: boolean;
  error: Error | null;
}) {
  const snackbar = useSnackbar();

  useEffect(() => {
    if (result.isError && result.error) {
      snackbar.displayAlert({
        severity: "error",
        message: getApiErrorMessage(result.error),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result.isError, result.error]);
}
