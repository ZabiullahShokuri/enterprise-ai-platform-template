import type { InputHTMLAttributes, ReactNode } from "react";

export type InputVariant = "default" | "filled" | "unstyled";

export type InputSize = "sm" | "md" | "lg";

export interface InputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size"
> {
  /**
   * Visual variant
   */
  variant?: InputVariant;

  /**
   * Component size
   */
  size?: InputSize;

  /**
   * Stretch to parent width
   */
  fullWidth?: boolean;

  /**
   * Validation state
   */
  error?: boolean;

  /**
   * Error message
   */
  errorMessage?: string;

  /**
   * Helper text
   */
  helperText?: string;

  /**
   * Input label
   */
  label?: string;

  /**
   * Left icon
   */
  leftIcon?: ReactNode;

  /**
   * Right icon
   */
  rightIcon?: ReactNode;
}
