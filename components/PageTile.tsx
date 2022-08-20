import { CSS } from "@stitches/react";
import { usePageTileFocus } from "../hooks/usePageTileFocus";
import { styled } from "../styles/theme";

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
  css?: CSS;
}

export const PageTile = ({ pageIndex, children, ref, css }: PageTileProps) => {
  const [focus] = usePageTileFocus(pageIndex);
  return (
    <StyledPageTile css={{ opacity: focus, ...css }} ref={ref}>
      {children}
    </StyledPageTile>
  );
};
