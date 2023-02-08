import { useContext } from "react";
import { SocketContext } from "../contexts/socketContext";

const useSocketContext = () => {
  return useContext(SocketContext);
};

export default useSocketContext;
