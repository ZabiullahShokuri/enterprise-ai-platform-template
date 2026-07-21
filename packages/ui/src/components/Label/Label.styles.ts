import type { CSSProperties } from "react";

import type { LabelProps } from "./Label.types";

import { colors } from "../../styles/tokens/colors";
import { typography } from "../../styles/tokens/typography";

export function getLabelStyles({
  size = "md",
  error = false,
  disabled = false,
}: Pick<LabelProps, "size" | "error" | "disabled">) {
  const color = disabled
    ? colors.gray[400]
    : error
      ? colors.danger[600]
      : colors.gray[900];

  const style: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",

    fontSize: typography.fontSize[size],

    fontWeight: typography.fontWeight.medium,

    lineHeight: typography.lineHeight.normal,

    color,

    cursor: disabled ? "not-allowed" : "pointer",

    userSelect: "none",

    transition: "all .2s ease",
  };

  return {
    style,
  };
}
