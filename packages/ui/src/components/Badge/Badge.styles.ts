import type { CSSProperties } from "react";

import type { BadgeProps } from "./Badge.types";

import { colors } from "../../styles/tokens/colors";
import { spacing } from "../../styles/tokens/spacing";
import { radius } from "../../styles/tokens/radius";
import { typography } from "../../styles/tokens/typography";

export function getBadgeStyles({
  variant = "primary",
  size = "md",
}: Pick<BadgeProps, "variant" | "size">) {
  const sizeMap = {
    sm: {
      fontSize: typography.fontSize.sm,
      padding: `${spacing.xs} ${spacing.sm}`,
    },

    md: {
      fontSize: typography.fontSize.md,
      padding: `${spacing.sm} ${spacing.md}`,
    },

    lg: {
      fontSize: typography.fontSize.lg,
      padding: `${spacing.sm} ${spacing.lg}`,
    },
  };

  const variantMap = {
    primary: {
      backgroundColor: colors.primary[100],
      color: colors.primary[700],
    },

    secondary: {
      backgroundColor: colors.gray[100],
      color: colors.gray[700],
    },

    success: {
      backgroundColor: colors.success[500],
      color: colors.white,
    },

    warning: {
      backgroundColor: colors.warning[500],
      color: colors.white,
    },

    danger: {
      backgroundColor: colors.danger[500],
      color: colors.white,
    },
  };

  const badgeStyle: CSSProperties = {
    display: "inline-flex",

    alignItems: "center",

    justifyContent: "center",

    borderRadius: radius.full,

    fontWeight: typography.fontWeight.medium,

    lineHeight: typography.lineHeight.normal,

    whiteSpace: "nowrap",

    ...sizeMap[size],

    ...variantMap[variant],
  };

  return {
    badgeStyle,
  };
}
