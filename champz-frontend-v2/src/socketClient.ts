import { io, Socket } from "socket.io-client";

export interface ServerToClientEvents {
  marketplaceUpdate: () => void;
}

export interface ClientToServerEvents {}

export type SocketClient = Socket<ServerToClientEvents, ClientToServerEvents>;

export const getSocketClient = (jwtToken: string) => {
  const socket = io(import.meta.env.VITE_SOCKET_URL, {
    withCredentials: true,
    auth: { token: `Bearer ${jwtToken}` },
  });
  socket.connect();
  return socket;
};
