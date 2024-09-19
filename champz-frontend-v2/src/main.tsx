import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CssBaseline from "@mui/material/CssBaseline";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { arbitrumSepolia, sepolia } from "wagmi/chains";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme.ts";
import { CookiesProvider } from "react-cookie";
import { App } from "@/App.tsx";
import { AppUpdatePrompt } from "@/AppUpdatePrompt.tsx";

const config = getDefaultConfig({
  appName: "Champz",
  projectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID,
  chains: [sepolia, arbitrumSepolia],
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
    <WagmiProvider config={config}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CookiesProvider>
          <App />
          <AppUpdatePrompt />
        </CookiesProvider>
      </ThemeProvider>
    </WagmiProvider>
  // </React.StrictMode>,
);
