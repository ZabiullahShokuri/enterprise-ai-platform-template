import type { HTMLAttributes } from "react";

export type ProgressVariant = "primary" | "success" | "warning" | "danger";

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number;

  max?: number;

  showValue?: boolean;

  variant?: ProgressVariant;

  fullWidth?: boolean;
}
