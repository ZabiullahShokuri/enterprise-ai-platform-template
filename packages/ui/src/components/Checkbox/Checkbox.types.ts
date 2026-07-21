import type {
  InputHTMLAttributes,
  ReactNode,
} from "react";

export type CheckboxSize =
  | "sm"
  | "md"
  | "lg";

export interface CheckboxProps
  extends Omit<
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
   * Checkbox size
   */
  size?: CheckboxSize;

  /**
   * Invalid state
   */
  error?: boolean;

  /**
   * Stretch container
   */
  fullWidth?: boolean;

  /**
   * Indeterminate state
   */
  indeterminate?: boolean;

  /**
   * Label before checkbox
   */
  labelPlacement?:
    | "start"
    | "end";

  /**
   * Controlled change callback
   */
  onCheckedChange?: (
    checked: boolean
  ) => void;
}