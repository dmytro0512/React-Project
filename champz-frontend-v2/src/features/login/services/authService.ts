import { RegisterResponse } from "@/features/login/types/register";
import { AxiosInstance } from "axios";

export class AuthService {
  constructor(private api: AxiosInstance) {}

  register(
    address: `0x${string}`,
    signedMessage: `0x${string}`,
    devMode?: boolean,
    refCode?: string,
  ): Promise<string> {
    return this.api
      .post<RegisterResponse>("/game/register", {
        address,
        signature: signedMessage,
        devMode,
        refCode,
      })
      .then((resp) => {
        return resp.data.jwt as string;
      });
  }
}
