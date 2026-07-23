import type { HTMLAttributes, ReactNode } from "react";

export type AlertVariant = "success" | "warning" | "danger" | "info";

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;

  title?: string;

  variant?: AlertVariant;

  fullWidth?: boolean;
}
