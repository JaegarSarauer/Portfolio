import { styled } from "../styles/theme";

export const Text = styled("p", {
  margin: 0,
  variants: {
    center: {
      true: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      },
    },
  },
});
