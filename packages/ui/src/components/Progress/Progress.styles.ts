import type { CSSProperties } from "react";

import type { ProgressProps } from "./Progress.types";

import { colors } from "../../styles/tokens/colors";
import { spacing } from "../../styles/tokens/spacing";
import { radius } from "../../styles/tokens/radius";
import { typography } from "../../styles/tokens/typography";

export function getProgressStyles({
  value,
  max = 100,
  variant = "primary",
  fullWidth = false,
}: Pick<ProgressProps, "value" | "max" | "variant" | "fullWidth">) {
  const percentage = Math.max(0, Math.min((value / max) * 100, 100));

  const colorMap = {
    primary: colors.primary[600],
    success: colors.success[600],
    warning: colors.warning[600],
    danger: colors.danger[600],
  };

  const containerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: spacing.xs,
    width: fullWidth ? "100%" : 260,
  };

  const trackStyle: CSSProperties = {
    width: "100%",
    height: 8,
    background: colors.gray[200],
    borderRadius: radius.full,
    overflow: "hidden",
  };

  const barStyle: CSSProperties = {
    width: `${percentage}%`,
    height: "100%",
    background: colorMap[variant],
    transition: "width .25s ease",
    borderRadius: radius.full,
  };

  const valueStyle: CSSProperties = {
    alignSelf: "flex-end",
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    color: colors.gray[600],
  };

  return {
    percentage,
    containerStyle,
    trackStyle,
    barStyle,
    valueStyle,
  };
}
