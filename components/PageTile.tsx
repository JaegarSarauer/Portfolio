import { CSS } from "@stitches/react";
import { usePageTileFocus } from "../hooks/usePageTileFocus";
import { styled } from "../styles/theme";
import { TransitionCSS } from "../types/css";

const StyledPageTile = styled("div", {
  margin: 0,
  height: "100vh",
  position: "fixed",
  width: "100vw",
});

export interface PageTileProps {
  pageIndex: number;
  children?: any;
  ref?: any;
  transitionCSS?: TransitionCSS;
}

export const PageTile = ({ pageIndex, children, ref, transitionCSS }: PageTileProps) => {
  const [focus] = usePageTileFocus(pageIndex);
  return (
    <StyledPageTile css={{...transitionCSS?.(focus)}} ref={ref}>
      {children}
    </StyledPageTile>
  );
};
