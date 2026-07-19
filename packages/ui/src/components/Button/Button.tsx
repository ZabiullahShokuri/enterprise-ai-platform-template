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
  disabled = false,
  className,
  ...props
}: ButtonProps) {
  const styles = getButtonStyles({
    variant,
    size,
    fullWidth,
    disabled,
    loading,
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
      onMouseEnter={(e) => {
        e.currentTarget.style.filter = "brightness(0.95)";
      }}

      onMouseLeave={(e) => {
        e.currentTarget.style.filter = "brightness(1)";
      }}
    >
      {leftIcon}

      {loading ? "Loading..." : children}

      {rightIcon}
    </button>
  );
}
