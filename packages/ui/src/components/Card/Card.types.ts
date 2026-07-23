import type { HTMLAttributes, ReactNode } from "react";

export type CardVariant = "default" | "outlined" | "elevated";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;

  variant?: CardVariant;

  padding?: "sm" | "md" | "lg";

  fullWidth?: boolean;
}
