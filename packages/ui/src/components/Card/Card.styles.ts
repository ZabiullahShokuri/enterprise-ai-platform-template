import type { CSSProperties } from "react";

import type { CardProps } from "./Card.types";

import { colors } from "../../styles/tokens/colors";
import { spacing } from "../../styles/tokens/spacing";
import { radius } from "../../styles/tokens/radius";

export function getCardStyles({
  variant = "default",
  padding = "md",
  fullWidth = false,
}: Pick<CardProps, "variant" | "padding" | "fullWidth">) {
  const paddingMap = {
    sm: spacing.sm,
    md: spacing.lg,
    lg: spacing.xl,
  };

  const variantMap = {
    default: {
      background: colors.white,
      border: `1px solid ${colors.gray[200]}`,
      boxShadow: "none",
    },

    outlined: {
      background: colors.white,
      border: `1px solid ${colors.gray[300]}`,
      boxShadow: "none",
    },

    elevated: {
      background: colors.white,
      border: "none",
      boxShadow: "0 8px 24px rgba(0,0,0,.08)",
    },
  };

  const cardStyle: CSSProperties = {
    width: fullWidth ? "100%" : "fit-content",

    borderRadius: radius.lg,

    padding: paddingMap[padding],

    transition: "all .2s ease",

    ...variantMap[variant],
  };

  return {
    cardStyle,
  };
}
