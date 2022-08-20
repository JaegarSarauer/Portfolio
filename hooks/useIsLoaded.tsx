import { useEffect, useState } from "react";

export const useIsLoaded = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsLoaded(true)
    }
  });

  return [isLoaded];
};
