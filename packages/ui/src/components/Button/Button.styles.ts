import type { ButtonProps } from "./Button.types";

export function getButtonStyles({
  variant,
  size,
  fullWidth,
}: Pick<ButtonProps, "variant" | "size" | "fullWidth">) {
  return {
    variant,
    size,
    fullWidth,
  };
}
