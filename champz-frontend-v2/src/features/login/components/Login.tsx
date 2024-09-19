import { useAccount } from "wagmi";
import { Box, styled } from "@mui/material";
import { AuthService } from "@/features/login/services/authService";
import { defaultApi } from "@/api";
import { getRouteApi } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";
import { useApiErrorHandler } from "@/hooks/useApiErrorHandler";
import { useCallback } from "react";
import bgTop from "@/assets/navigationwheel/bgTop.png";
import bgBottom from "@/assets/navigationwheel/bgBottom.png";
import nav_bg_sign_in from "@/assets/navigationwheel/nav_sign_in.png";
import nav_bg_login from "@/assets/navigationwheel/nav_login.png";
import { SignInButton } from "./SignInButton";
import { ConnectButton } from "./ConnectButton";
import { NavigationItem } from "@/components/NavigationItem";
import { useCookies } from "react-cookie";

const route = getRouteApi("/login");

export function Login() {
  const NavigationWheelContainer = styled(Box)(() => ({
    backgroundImage: `url(${bgTop})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center top",
    height: "100dvh",
    maxHeight: "100%",
    postion: "relative",
    "&::after": {
      content: "''",
      position: "absolute",
      backgroundPosition: "center bottom",
      inset: 0,
      backgroundImage: `url(${bgBottom})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% auto",
      zIndex: 1,
    },
    "&::before": {
      content: "''",
      position: "absolute",
      backgroundPosition: "center center",
      height: "100%",
      width: "20%",
      maxWidth: "20%",
      left: "50%",
      top: "35%",
      transform: "translate(-50%,-50%)",
      backgroundImage: `url(https://img.champz.world/img/logos/Champz_logo.png)`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100%",
    },
  }));

  const [cookies] = useCookies(["refCode"]);
  const { address } = useAccount();
  const context = route.useRouteContext();
  const { mutate: loginMutate, ...loginMutation } = useMutation({
    mutationFn: ({
      signedMessage,
      devMode,
    }: {
      signedMessage: `0x${string}`;
      devMode?: boolean;
    }) => {
      return new AuthService(defaultApi).register(
        address!,
        signedMessage,
        devMode,
        cookies.refCode
      );
    },
    onSuccess: (jwt) => {
      context.auth.login(jwt);
    },
  });

  const onMessageSigned = useCallback(
    (signedMessage: `0x${string}`, devMode?: boolean) => {
      loginMutate({ signedMessage, devMode });
    },
    [loginMutate],
  );

  useApiErrorHandler(loginMutation);

  return (
    <>
      <NavigationWheelContainer>
        <NavigationItem sx={{ left: "30%", top: "50%" }} image={nav_bg_sign_in}>
          {address && <SignInButton onMessageSigned={onMessageSigned} />}
          <ConnectButton />
        </NavigationItem>
        <NavigationItem
          sx={{ right: "10%", top: "10%" }}
          image={nav_bg_login}
          onClick={() => onMessageSigned("0x", true)}
          // disabled={true}
        >
          DevLogin
        </NavigationItem>
        <NavigationItem
          sx={{ right: "30%", top: "50%" }}
          image={nav_bg_login}
          disabled={true}
        >
          Login with Email
        </NavigationItem>
      </NavigationWheelContainer>
    </>
  );
}
