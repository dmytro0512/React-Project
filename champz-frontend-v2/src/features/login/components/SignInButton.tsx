import { ChampzSignInButton } from "@/components/ChampzSignInButton";
import { useEffect } from "react";
import { useAccount, useSignMessage } from "wagmi";

export function SignInButton({ onMessageSigned }: SignInButtonProps) {
  const { signMessage, data: signMessageData } = useSignMessage();
  const { address } = useAccount();

  useEffect(() => {
    if (signMessageData) {
      onMessageSigned(signMessageData);
    }
  }, [signMessageData, onMessageSigned]);

  const sign = () => {
    signMessage({
      message: `Welcome Champ! Click to sign in and accept our Terms of Service and Privacy Policy (https://champz.world/terms). Verify your address ${address} v${APP_VERSION}`,
    });
  };

  return (
    <ChampzSignInButton
      disableRipple
      variant="contained"
      size="large"
      onClick={() => {
        sign();
      }}
    >
      Sign in
    </ChampzSignInButton>
  );
}

interface SignInButtonProps {
  onMessageSigned: (signedMessage: `0x${string}`) => void;
}
