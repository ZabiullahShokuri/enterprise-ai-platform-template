import type { InputHTMLAttributes, ReactNode } from "react";

export type RadioSize = "sm" | "md" | "lg";

export interface RadioProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "size" | "children"
> {
  label?: ReactNode;

  helperText?: ReactNode;

  errorMessage?: ReactNode;

  size?: RadioSize;

  error?: boolean;

  fullWidth?: boolean;

  labelPlacement?: "start" | "end";

  onCheckedChange?: (checked: boolean) => void;
}
