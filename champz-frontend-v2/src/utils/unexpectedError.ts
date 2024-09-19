import { ApiError } from "@/types/apiError";
import { AxiosError } from "axios";

/**
 * Error container for http errors (error code >= 400)
 * ToDo not sure if it is the same structure in all cases
 */
export class UnexpectedError implements ApiError {
  constructor(
    public readonly error: AxiosError<ChampzUnexpectedErrorResponse>,
  ) {}

  getErrorMessage(): string {
    return `${this.error.message}: ${this.error.response?.data.error.description}`;
  }
}

interface ChampzUnexpectedErrorResponse {
  error: ChampzUnexpectedError;
  statusCode: number;
}

interface ChampzUnexpectedError {
  description: string;
  type: string;
}
