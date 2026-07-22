import type { CSSProperties } from "react";

import type { TextareaProps } from "./Textarea.types";

import { spacing } from "../../styles/tokens/spacing";
import { colors } from "../../styles/tokens/colors";
import { radius } from "../../styles/tokens/radius";
import { typography } from "../../styles/tokens/typography";

const sizeMap = {
  sm: {
    minHeight: 80,
    padding: spacing.sm,
  },

  md: {
    minHeight: 100,
    padding: spacing.md,
  },

  lg: {
    minHeight: 120,
    padding: spacing.lg,
  },
};

export function getTextareaStyles({
  size = "md",
  error = false,
  disabled = false,
  fullWidth = false,
  resize = "vertical",
}: Pick<
  TextareaProps,
  "size" | "error" | "disabled" | "fullWidth" | "resize"
>) {
  const borderColor = error ? colors.danger[600] : colors.gray[300];

  const textColor = disabled ? colors.gray[400] : colors.gray[900];

  const containerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: fullWidth ? "100%" : "fit-content",
  };

  const textareaStyle: CSSProperties = {
    ...sizeMap[size],

    width: fullWidth ? "100%" : 320,

    border: `1px solid ${borderColor}`,

    borderRadius: radius.md,

    backgroundColor: disabled ? colors.gray[100] : colors.white,

    color: textColor,

    fontSize: typography.fontSize[size],

    fontWeight: typography.fontWeight.regular,

    lineHeight: typography.lineHeight.normal,

    resize,

    outline: "none",

    boxSizing: "border-box",
  };

  const labelStyle: CSSProperties = {
    marginBottom: spacing.xs,

    fontSize: typography.fontSize[size],

    fontWeight: typography.fontWeight.medium,

    color: textColor,
  };

  const helperStyle: CSSProperties = {
    marginTop: spacing.xs,

    fontSize: typography.fontSize.sm,

    color: error ? colors.danger[600] : colors.gray[500],
  };

  return {
    containerStyle,
    textareaStyle,
    labelStyle,
    helperStyle,
  };
}
