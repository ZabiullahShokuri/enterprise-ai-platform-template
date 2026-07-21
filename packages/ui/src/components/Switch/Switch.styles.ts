import type { CSSProperties } from "react";
import type { SwitchProps } from "./Switch.types";

import { colors } from "../../styles/tokens/colors";
import { spacing } from "../../styles/tokens/spacing";
import { radius } from "../../styles/tokens/radius";
import { typography } from "../../styles/tokens/typography";

const sizeMap = {
  sm: {
    width: 32,
    height: 18,
  },
  md: {
    width: 40,
    height: 22,
  },
  lg: {
    width: 48,
    height: 26,
  },
};

export function getSwitchStyles({
  size = "md",
  error = false,
  disabled = false,
}: Pick<SwitchProps, "size" | "error" | "disabled">) {
  const color = disabled
    ? colors.gray[400]
    : error
      ? colors.danger[600]
      : colors.gray[900];

  const accentColor = error
    ? colors.danger[600]
    : colors.primary[600];

  const containerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: "fit-content",
  };

  const wrapperStyle: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: spacing.sm,
    cursor: disabled ? "not-allowed" : "pointer",
  };

  const switchStyle: CSSProperties = {
    ...sizeMap[size],

    margin: 0,

    accentColor,

    borderRadius: radius.full,

    cursor: disabled ? "not-allowed" : "pointer",

    flexShrink: 0,
  };

  const labelStyle: CSSProperties = {
    fontSize: typography.fontSize[size],
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.normal,
    color,
  };

  const helperStyle: CSSProperties = {
    fontSize: typography.fontSize.sm,
    lineHeight: typography.lineHeight.normal,
    color: error
      ? colors.danger[600]
      : colors.gray[500],
  };

  return {
    containerStyle,
    wrapperStyle,
    switchStyle,
    labelStyle,
    helperStyle,
  };
}