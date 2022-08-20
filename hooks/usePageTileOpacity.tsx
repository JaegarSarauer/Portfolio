import { useEffect, useState } from "react";
import { useOnResize } from "./useOnResize";
import { useOnScroll } from "./useOnScroll";

export const usePageTileOpacity = (pageIndex: number) => {
  const [scrollPosition] = useOnScroll();
  const [resizeDimension] = useOnResize();
  const [opacity, setOpacity] = useState<number>(0);

  useEffect(() => {
    if (resizeDimension) {
      const opacityBase = 1 - pageIndex;
      const maxOpacityOffest = Math.max(1, pageIndex);

      setOpacity(
        opacityBase +
          Math.min(maxOpacityOffest, scrollPosition / resizeDimension.height)
      );
    }
  }, [scrollPosition, resizeDimension]);

  return [opacity];
};
