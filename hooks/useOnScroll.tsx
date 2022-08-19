import { useEffect, useState } from "react";

export const useOnScroll = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  useEffect(() => {
    const onScroll = (e: any) => {
      setScrollPosition(e.target.documentElement.scrollTop)
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  });
  return [scrollPosition];
};
