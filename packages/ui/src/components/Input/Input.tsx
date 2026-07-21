import { forwardRef } from "react";

import { getInputStyles } from "./Input.styles";
import type { InputProps } from "./Input.types";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      errorMessage,
      error = false,
      variant = "default",
      size = "md",
      fullWidth = false,
      leftIcon,
      rightIcon,
      disabled = false,
      className,
      id,
      ...props
    },
    ref,
  ) => {
    const styles = getInputStyles({
      variant,
      size,
      error,
      fullWidth,
      disabled,
    });

    const helperId = id ? `${id}-helper` : undefined;

    return (
      <div style={styles.wrapperStyle}>
        {label && (
          <label htmlFor={id} style={styles.labelStyle}>
            {label}
          </label>
        )}

        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            width: fullWidth ? "100%" : 260,
          }}
        >
          {leftIcon && (
            <span
              style={{
                position: "absolute",
                left: 12,
                display: "flex",
                alignItems: "center",
              }}
            >
              {leftIcon}
            </span>
          )}

          <input
            ref={ref}
            id={id}
            {...props}
            disabled={disabled}
            aria-invalid={error}
            aria-describedby={helperId}
            className={className}
            style={{
              ...styles.inputStyle,
              paddingLeft: leftIcon ? 40 : undefined,
              paddingRight: rightIcon ? 40 : undefined,
            }}
          />

          {rightIcon && (
            <span
              style={{
                position: "absolute",
                right: 12,
                display: "flex",
                alignItems: "center",
              }}
            >
              {rightIcon}
            </span>
          )}
        </div>

        {(helperText || errorMessage) && (
          <span id={helperId} style={styles.helperStyle}>
            {error ? errorMessage : helperText}
          </span>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
