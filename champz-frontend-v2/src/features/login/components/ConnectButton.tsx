import { Box, Stack } from "@mui/material";
import { ConnectButton as RainbowConnectButton } from "@rainbow-me/rainbowkit";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ChampzSignInButton } from "@/components/ChampzSignInButton";
import { BackgroundColor } from "@/consts/backgroundColor";
import { TextColor } from "@/consts/textColor";
import { BorderColor } from "@/consts/borderColor";

export const ConnectButton = () => {
  return (
    <RainbowConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <ChampzSignInButton
                    disableRipple
                    onClick={openConnectModal}
                    size="large"
                  >
                    Connect Wallet
                  </ChampzSignInButton>
                );
              }

              if (chain.unsupported) {
                return (
                  <ChampzSignInButton
                    disableRipple
                    onClick={openChainModal}
                    size="large"
                  >
                    Wrong network
                  </ChampzSignInButton>
                );
              }

              return (
                <ChampzSignInButton
                  disableRipple
                  onClick={openAccountModal}
                  size="large"
                  sx={{
                    position: "absolute",
                    bottom: "-2em",
                    left: "50%",
                    transform: "translateX(-50%)",
                    color: TextColor.white,
                  }}
                >
                  <Stack direction="row" gap={1} alignItems="center">
                    <Box
                      sx={{
                        background: chain.iconBackground,
                        borderRadius: 12,
                        overflow: "hidden",
                      }}
                    >
                      <img alt={chain.name} src={chain.iconUrl} />
                    </Box>
                    <Box>{account.displayName}</Box>
                    <ExpandMoreIcon />
                  </Stack>
                </ChampzSignInButton>
              );
            })()}
          </div>
        );
      }}
    </RainbowConnectButton.Custom>
  );
};
