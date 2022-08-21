import React from "react";
import { Container } from "../components/Container";
import { PageTile } from "../components/PageTile";

interface PageTileContainerProps {
  children: any; // TODO PageTile[]
}

const defaultTransitionCSS = (step: number) => ({
  opacity: step,
});

export const PageTileContainer = ({ children }: PageTileContainerProps) => {
  return (
    <Container
      css={{
        height: `${children?.length * 100}vh`,
      }}
    >
      {children?.map((child: any, pageIndex: number) => (
        <PageTile
          key={pageIndex}
          pageIndex={pageIndex}
          transitionCSS={child?.props?.transitionCSS ?? defaultTransitionCSS}
        >
          {child}
        </PageTile>
      ))}
    </Container>
  );
};
