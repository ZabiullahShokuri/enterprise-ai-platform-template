import type { LabelHTMLAttributes, ReactNode } from "react";

export type LabelSize = "sm" | "md" | "lg";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * Label content
   */
  children: ReactNode;

  /**
   * Size variant
   */
  size?: LabelSize;

  /**
   * Required field indicator
   */
  required?: boolean;

  /**
   * Error state
   */
  error?: boolean;

  /**
   * Disabled state
   */
  disabled?: boolean;
}
