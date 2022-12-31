import { useEffect, useRef } from "react";

const useDetectFirstRender = () => {
  const ref = useRef(true);

  useEffect(() => {
    ref.current = false;
  }, []);

  return ref.current;
};

export default useDetectFirstRender;
