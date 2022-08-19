import { styled } from "../styles/theme";
import { center, textCenter } from "../styles/variants";

export const Text = styled("p", {
  margin: 0,
  variants: {
    center, textCenter
  }
});
