import { forwardRef } from "react";

import { getCheckboxStyles } from "./Checkbox.styles";
import type { CheckboxProps } from "./Checkbox.types";

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  
  (props, ref) => {
    const {
      label,
      helperText,
      errorMessage,

      size = "md",
      error = false,
      disabled = false,

      className,
      style,

      ...rest
    } = props;

    const styles = getCheckboxStyles({
      size,
      error,
      disabled,
    });
    const message = error ? errorMessage : helperText;
    return (
      <div style={styles.containerStyle}>
        <label style={styles.wrapperStyle}>
          <input
            ref={ref}
            type="checkbox"
            disabled={disabled}
            className={className}
            style={{
              ...styles.checkboxStyle,
              ...style,
            }}
            {...rest}
          />

          {label && <span style={styles.labelStyle}>{label}</span>}
        </label>

        {message && <div style={styles.helperStyle}>{message}</div>}
      </div>
    );
  },
);

Checkbox.displayName = "Checkbox";
