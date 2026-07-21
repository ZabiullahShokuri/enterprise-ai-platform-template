import type { CSSProperties } from "react";
import type { CheckboxProps } from "./Checkbox.types";

import { colors } from "../../styles/tokens/colors";
import { spacing } from "../../styles/tokens/spacing";
import { radius } from "../../styles/tokens/radius";
import { typography } from "../../styles/tokens/typography";

interface CheckboxStyleOptions {
  size: NonNullable<CheckboxProps["size"]>;
  error: boolean;
  disabled: boolean;
}

export function getCheckboxStyles({
  size,
  error,
  disabled,
}: CheckboxStyleOptions) {
  return {
    containerStyle: {
      display: "flex",
      flexDirection: "column",
      gap: spacing.xs,
    } as CSSProperties,

    wrapperStyle: {
      display: "inline-flex",
      alignItems: "center",
      gap: spacing.sm,
      cursor: disabled ? "not-allowed" : "pointer",
    } as CSSProperties,

    checkboxStyle: {
      width: size === "sm" ? 16 : size === "md" ? 18 : 20,

      height: size === "sm" ? 16 : size === "md" ? 18 : 20,

      border: `1px solid ${error ? colors.danger[600] : colors.gray[300]}`,

      borderRadius: radius.sm,

      backgroundColor: colors.white,

      transition: "all .2s ease",

      cursor: disabled ? "not-allowed" : "pointer",

      flexShrink: 0,

      display: "inline-flex",

      alignItems: "center",

      justifyContent: "center",
    } as CSSProperties,

    labelStyle: {
      fontFamily: typography.fontFamily.sans,

      fontSize:
        size === "sm"
          ? typography.fontSize.sm
          : size === "md"
            ? typography.fontSize.md
            : typography.fontSize.lg,

      fontWeight: typography.fontWeight.medium,

      lineHeight: typography.lineHeight.normal,

      color: disabled
        ? colors.gray[400]
        : error
          ? colors.danger[600]
          : colors.gray[900],

      userSelect: "none",
    } as CSSProperties,

    helperStyle: {
      fontFamily: typography.fontFamily.sans,

      fontSize: typography.fontSize.sm,

      fontWeight: typography.fontWeight.regular,

      lineHeight: typography.lineHeight.normal,

      color: error ? colors.danger[600] : colors.gray[500],
    } as CSSProperties,
  };
}
