import { ApiError } from "@/types/apiError";

/**
 * Error container for successful http requests which have success: false in the response
 */
export class ExpectedError implements ApiError {
  constructor(
    public readonly response: {
      success: boolean;
      status?: string;
    },
  ) {}

  getErrorMessage(): string {
    return this.response.status ?? "Unkown Error";
  }
}
