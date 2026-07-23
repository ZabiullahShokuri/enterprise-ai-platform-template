import type { HTMLAttributes } from "react";

export type BadgeVariant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";

export type BadgeSize =
  | "sm"
  | "md"
  | "lg";

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;

  size?: BadgeSize;
}