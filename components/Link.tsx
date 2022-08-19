import { CSS } from "@stitches/react";
import { default as NextLink } from "next/link";
import { styled } from "../styles/theme";
import { center, textCenter } from "../styles/variants";

const StyledLink = styled("a", {
  margin: 0,
  textDecoration: "none",
  color: "black",
  variants: {
    center,
    textCenter,
  },
});

interface Props {
  children?: any
  href: any;
  css?: CSS;
}

export const Link = ({ children, href, css }: Props) => (
  <NextLink href={href} passHref>
    <StyledLink css={css}>{children}</StyledLink>
  </NextLink>
);
