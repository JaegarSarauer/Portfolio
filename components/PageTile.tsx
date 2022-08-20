import { CSS } from "@stitches/react";
import { usePageTileOpacity } from "../hooks/usePageTileOpacity";
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
  const [opacity] = usePageTileOpacity(pageIndex);
  return (
    <StyledPageTile css={{ opacity, ...css }} ref={ref}>
      {children}
    </StyledPageTile>
  );
};
