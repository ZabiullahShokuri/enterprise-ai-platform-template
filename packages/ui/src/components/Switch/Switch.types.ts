import type { InputHTMLAttributes, ReactNode } from "react";

export type SwitchSize = "sm" | "md" | "lg";

export interface SwitchProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size" | "type" | "children"
> {
  /**
   * Label content
   */
  label?: ReactNode;

  /**
   * Helper text
   */
  helperText?: ReactNode;

  /**
   * Error message
   */
  errorMessage?: ReactNode;

  /**
   * Switch size
   */
  size?: SwitchSize;

  /**
   * Invalid state
   */
  error?: boolean;

  /**
   * Stretch container
   */
  fullWidth?: boolean;

  /**
   * Controlled callback
   */
  onCheckedChange?: (checked: boolean) => void;
}
