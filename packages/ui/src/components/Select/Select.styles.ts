import type { CSSProperties } from "react";

import { colors } from "../../styles/tokens/colors";
import { spacing } from "../../styles/tokens/spacing";
import { radius } from "../../styles/tokens/radius";
import { typography } from "../../styles/tokens/typography";

import type { SelectProps } from "./Select.types";

export function getSelectStyles({
  size = "md",
  error = false,
  disabled = false,
  fullWidth = false,
}: Pick<SelectProps, "size" | "error" | "disabled" | "fullWidth">) {
  const sizeMap = {
    sm: {
      height: 36,
      fontSize: typography.fontSize.sm,
      padding: `0 ${spacing.md}`,
    },

    md: {
      height: 42,
      fontSize: typography.fontSize.md,
      padding: `0 ${spacing.lg}`,
    },

    lg: {
      height: 48,
      fontSize: typography.fontSize.lg,
      padding: `0 ${spacing.xl}`,
    },
  };

  const containerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: fullWidth ? "100%" : "fit-content",
    gap: spacing.sm,
  };

  const labelStyle: CSSProperties = {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    color: colors.gray[800],
  };

  const selectStyle: CSSProperties = {
    width: fullWidth ? "100%" : 260,

    outline: "none",

    borderRadius: radius.md,

    border: `1px solid ${
      error ? colors.danger[600] : colors.gray[300]
    }`,

    backgroundColor: disabled
      ? colors.gray[100]
      : colors.white,

    color: disabled
      ? colors.gray[500]
      : colors.gray[900],

    fontFamily: typography.fontFamily.sans,

    fontWeight: typography.fontWeight.regular,

    lineHeight: typography.lineHeight.normal,

    transition: "all .2s ease",

    cursor: disabled ? "not-allowed" : "pointer",

    appearance: "none",

    ...sizeMap[size],
  };

  const helperStyle: CSSProperties = {
    fontSize: typography.fontSize.sm,

    color: error
      ? colors.danger[600]
      : colors.gray[500],
  };

  return {
    containerStyle,
    labelStyle,
    selectStyle,
    helperStyle,
  };
}