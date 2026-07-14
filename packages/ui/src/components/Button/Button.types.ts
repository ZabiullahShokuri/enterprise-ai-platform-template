import type { ReactNode, MouseEventHandler } from "react";
export type ButtonVariant =
  "primary" | "secondary" | "outline" | "ghost" | "danger";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps {
  /**
   * Button content.
   */
  children: ReactNode;

  /**
   * Visual style.
   *
   * @default "primary"
   */
  variant?: ButtonVariant;

  /**
   * Button size.
   *
   * @default "md"
   */
  size?: ButtonSize;

  /**
   * Full width button.
   *
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Disabled state.
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * Loading state.
   *
   * @default false
   */
  loading?: boolean;

  /**
   * Click handler.
   */

  onClick?: MouseEventHandler<HTMLButtonElement>;
}
