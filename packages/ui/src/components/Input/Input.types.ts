import type { InputHTMLAttributes, ReactNode } from "react";

export type InputSize = "sm" | "md" | "lg";

export type InputVariant = "default" | "filled" | "unstyled";

export interface InputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size"
> {
  size?: InputSize;

  variant?: InputVariant;

  error?: boolean;

  fullWidth?: boolean;

  leftIcon?: ReactNode;

  rightIcon?: ReactNode;
}
  