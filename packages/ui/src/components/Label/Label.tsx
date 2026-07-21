import type { LabelProps } from "./Label.types";
import { getLabelStyles } from "./Label.styles";

export function Label({
  children,
  size = "md",
  error = false,
  disabled = false,
  required = false,
  className,
  ...props
}: LabelProps) {
  const styles = getLabelStyles({
    size,
    error,
    disabled,
  });

  return (
    <label
      className={className}
      style={styles.style}
      aria-disabled={disabled}
      {...props}
    >
      <span>{children}</span>

      {required && (
        <span
          aria-hidden="true"
          style={{
            color: "#DC2626",
            marginLeft: 4,
          }}
        >
          *
        </span>
      )}
    </label>
  );
}