import type { ButtonProps } from "./Button.types";
import { getButtonStyles } from "./Button.styles";
export function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  disabled,
  className,
  ...props
}: ButtonProps) {
  const styles = getButtonStyles({
    variant,
    size,
    fullWidth,
  });

  return (
    <button
      type="button"
      disabled={disabled || loading}
      data-variant={variant}
      data-size={size}
      data-loading={loading}
      data-full-width={fullWidth}
      className={[styles.className, className].filter(Boolean).join(" ")}
      style={styles.style}
      {...props}
    >
      {leftIcon}

      {loading ? "Loading..." : children}

      {rightIcon}
    </button>
  );
}
