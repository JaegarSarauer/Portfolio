import { useEffect, useState } from "react";
import { useOnResize } from "./useOnResize";
import { useOnScroll } from "./useOnScroll";

export const usePageTileFocus = (pageIndex: number) => {
  const [scrollPosition] = useOnScroll();
  const [resizeDimension] = useOnResize();
  const [focus, setFocus] = useState<number>(0);
  const [windowFocus, setWindowFocus] = useState<number>(0);

  const calcFocussedPageFocus = (currentPageIndex: number) => {
    return currentPageIndex >= pageIndex && currentPageIndex <= pageIndex + 1
      ? pageIndex + 1 - currentPageIndex
      : calcTransitionPageFocus(currentPageIndex);
  };

  const calcTransitionPageFocus = (currentPageIndex: number) => {
    const endPageIndex = currentPageIndex + 1;
    return endPageIndex >= pageIndex && endPageIndex <= pageIndex + 1
      ? endPageIndex % 1
      : 0;
  };

  useEffect(() => {
    if (resizeDimension) {
      const currentPageIndex = scrollPosition / resizeDimension.height;
      setFocus(calcFocussedPageFocus(currentPageIndex));
      setWindowFocus(currentPageIndex);
    }
  }, [scrollPosition, resizeDimension]);

  return [focus, windowFocus];
};
