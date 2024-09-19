import { ApiError } from "@/types/apiError";

export function getApiErrorMessage(apiError: Error) {
  return (apiError as unknown as ApiError).getErrorMessage();
}
