import { CSS, keyframes } from "@stitches/react";

export const scale = (scaleFrom: number, scaleTo: number) =>
  keyframes({
    "0%": { transform: `scale(${scaleFrom})` },
    "100%": { transform: `scale(${scaleTo})` },
  });

export const opacity = (opacityFrom: number, opacityTo: number) =>
  keyframes({
    "0%": { opacity: opacityFrom },
    "100%": { opacity: opacityTo },
  });

export const linearFrames = (cssFrom: CSS, cssTo: CSS) =>
  keyframes({
    "0%": cssFrom,
    "100%": cssTo,
  });
