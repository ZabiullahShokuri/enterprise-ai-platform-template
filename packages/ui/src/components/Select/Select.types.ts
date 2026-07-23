import type { SelectHTMLAttributes } from "react";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export type SelectSize = "sm" | "md" | "lg";

export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  label?: string;

  helperText?: string;

  error?: boolean;

  errorMessage?: string;

  options: SelectOption[];

  size?: SelectSize;

  fullWidth?: boolean;
}