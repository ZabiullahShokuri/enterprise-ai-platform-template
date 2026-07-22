import type { InputHTMLAttributes, ReactNode } from "react";

export interface TextareaProps
  extends Omit<
    InputHTMLAttributes<HTMLTextAreaElement>,
    "size" | "onChange"
  > {
  label?: ReactNode;

  helperText?: ReactNode;

  errorMessage?: ReactNode;

  size?: "sm" | "md" | "lg";

  error?: boolean;

  fullWidth?: boolean;

  resize?: "none" | "both" | "horizontal" | "vertical";

  onValueChange?: (value: string) => void;
}