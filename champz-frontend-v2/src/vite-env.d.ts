/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/react" />
/// <reference types="vite-plugin-pwa/info" />
/// <reference lib="webworker" />

interface ImportMetaEnv {
  readonly VITE_SOCKET_URL: string;
  readonly VITE_WALLET_CONNECT_PROJECT_ID: string;
  readonly VITE_API_HOST_NAME: string;
  readonly VITE_IMAGE_HOST_URL: string;
  readonly VITE_BUY_TRUFFLES_CONTRACT_ETH: string;
  readonly VITE_BUY_TRUFFLES_CONTRACT_ARB: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
