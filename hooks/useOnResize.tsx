import { useEffect, useState } from "react";

export interface BoxSize {
  width: number;
  height: number;
}

export const useOnResize = () => {
  const [resizeDimension, setResizeDimension] = useState<BoxSize>({
    width: 0, 
    height: 0,
  });
  useEffect(() => {
    const onResize = (e: any) => {
      setResizeDimension({
        width: e.target.window.innerWidth,
        height: e.target.window.innerHeight,
      });
    };
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  });

  useEffect(() => {
    setResizeDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  return [resizeDimension];
};
