import type { CSSProperties } from "react";

import { colors } from "../../styles/tokens/colors";

import type { SpinnerProps } from "./Spinner.types";

export function getSpinnerStyles({ size = "md" }: Pick<SpinnerProps, "size">) {
  const sizeMap = {
    sm: 18,
    md: 24,
    lg: 32,
  };

  const spinnerStyle: CSSProperties = {
    width: sizeMap[size],
    height: sizeMap[size],

    border: `3px solid ${colors.gray[200]}`,
    borderTop: `3px solid ${colors.primary[600]}`,

    borderRadius: "50%",

    animation: "enterprise-spinner .8s linear infinite",

    display: "inline-block",
    boxSizing: "border-box",
  };

  const containerStyle: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return {
    containerStyle,
    spinnerStyle,
  };
}
