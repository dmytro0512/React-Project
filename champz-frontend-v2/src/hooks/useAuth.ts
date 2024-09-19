import { useCallback } from "react";
import { useCookies } from "react-cookie";

const AUTH_TOKEN_COOKIE_NAME = "authToken";

export function useAuth() {
  const [cookies, setCookies, removeCookie] = useCookies();

  const logout = useCallback((): void => {
    removeCookie(AUTH_TOKEN_COOKIE_NAME, { path: "/" });
  }, [removeCookie]);

  const login = useCallback(
    (_token: string) => {
      setCookies(AUTH_TOKEN_COOKIE_NAME, _token, { path: "/" });
    },
    [setCookies],
  );

  return {
    token: cookies[AUTH_TOKEN_COOKIE_NAME],
    login,
    logout,
  };
}
