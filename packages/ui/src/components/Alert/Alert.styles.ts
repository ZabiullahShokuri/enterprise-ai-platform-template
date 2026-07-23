import type { CSSProperties } from "react";

import type { AlertProps } from "./Alert.types";

import { colors } from "../../styles/tokens/colors";
import { spacing } from "../../styles/tokens/spacing";
import { radius } from "../../styles/tokens/radius";
import { typography } from "../../styles/tokens/typography";

export function getAlertStyles({
  variant = "info",
  fullWidth = false,
}: Pick<AlertProps, "variant" | "fullWidth">) {
  const variantMap = {
    success: {
      background: "#ecfdf5",
      border: `1px solid ${colors.success[500]}`,
      color: colors.success[600],
    },

    warning: {
      background: "#fffbeb",
      border: `1px solid ${colors.warning[500]}`,
      color: colors.warning[600],
    },

    danger: {
      background: "#fef2f2",
      border: `1px solid ${colors.danger[500]}`,
      color: colors.danger[600],
    },

    info: {
      background: colors.primary[50],
      border: `1px solid ${colors.primary[500]}`,
      color: colors.primary[700],
    },
  };

  const containerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",

    width: fullWidth ? "100%" : "fit-content",

    gap: spacing.xs,

    padding: spacing.md,

    borderRadius: radius.md,

    ...variantMap[variant],
  };

  const titleStyle: CSSProperties = {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight.normal,
  };

  const contentStyle: CSSProperties = {
    fontSize: typography.fontSize.sm,
    lineHeight: typography.lineHeight.relaxed,
  };

  return {
    containerStyle,
    titleStyle,
    contentStyle,
  };
}
