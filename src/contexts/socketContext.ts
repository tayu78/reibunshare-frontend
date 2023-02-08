import { createContext } from "react";
import * as socketIO from "socket.io-client";

type SocketContextType = socketIO.Socket | null;

export const SocketContext = createContext<SocketContextType>(null);
