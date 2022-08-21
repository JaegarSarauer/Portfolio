import { CSS } from "@stitches/react";
import { styled } from "../styles/theme";
import * as NextImage from "next/image";
import { Container } from "./Container";

const StyledImage = styled(NextImage.default, {
});

export interface ImageProps {
  css?: CSS;
  src: string | any;
  width?: number;
  height?: number;
  layout?: any;
  objectFit?: any;
}

export const Image = ({ css, src, width, height, layout, objectFit }: ImageProps) => (
  <Container css={css}>
    <StyledImage
      src={src}
      width={width}
      height={height}
      layout={layout}
      objectFit={objectFit}
    />
  </Container>
);
