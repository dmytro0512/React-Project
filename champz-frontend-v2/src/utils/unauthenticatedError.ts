import { UnexpectedError } from "@/utils/unexpectedError";

export class UnauthenticatedError extends UnexpectedError {
  getErrorMessage(): string {
    return `${this.error.message}`;
  }
}
