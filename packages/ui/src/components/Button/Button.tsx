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
      onFocus={(e) => {
        e.currentTarget.style.boxShadow = "0 0 0 3px rgba(59,130,246,.35)";
      }}

      onBlur={(e) => {
        e.currentTarget.style.boxShadow = "0 0 0 0 transparent";
      }}
      className={styles.className}
      style={styles.style}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      aria-busy={loading}
      type="button"
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
