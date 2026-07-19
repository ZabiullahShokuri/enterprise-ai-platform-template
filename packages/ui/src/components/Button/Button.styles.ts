import { lightTheme } from "../../styles/themes";
import type { ButtonProps } from "./Button.types";
import type { CSSProperties } from "react";

type ButtonStyleResult = {
  className: string;
  style: React.CSSProperties;
};

export function getButtonStyles({
  variant = "primary",
  size = "md",
  fullWidth = false,
}: Pick<ButtonProps, "variant" | "size" | "fullWidth">): ButtonStyleResult {
  const theme = lightTheme;
  const classes = [
    "enterprise-button",

    `enterprise-button--${variant}`,

    `enterprise-button--${size}`,

    fullWidth && "enterprise-button--full-width",
  ]
    .filter(Boolean)
    .join(" ");

  const variantStyles = {
    primary: {
      backgroundColor: theme.colors.primary[600],
      color: theme.colors.white,
    },

    secondary: {
      backgroundColor: theme.colors.gray[200],
      color: theme.colors.gray[900],
    },

    outline: {
      backgroundColor: theme.colors.transparent,
      color: theme.colors.primary[600],
      border: `1px solid ${theme.colors.primary[600]}`,
    },

    ghost: {
      backgroundColor: theme.colors.transparent,
      color: theme.colors.primary[600],
    },

    danger: {
      backgroundColor: theme.colors.danger[600],
      color: theme.colors.white,
    },
  } as const;

  const sizeStyles = {
    sm: {
      padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
      fontSize: theme.typography.fontSize.sm,
    },

    md: {
      padding: `${theme.spacing.sm} ${theme.spacing.md}`,
      fontSize: theme.typography.fontSize.md,
    },

    lg: {
      padding: `${theme.spacing.md} ${theme.spacing.lg}`,
      fontSize: theme.typography.fontSize.lg,
    },
  } as const;

  return {
    className: classes,

  style: {
  borderRadius: theme.radius.md,

  ...sizeStyles[size],

  fontWeight: theme.typography.fontWeight.medium,

  cursor: "pointer",

  ...variantStyles[variant],
}
  };
}
