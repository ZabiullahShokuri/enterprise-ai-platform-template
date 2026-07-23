import { forwardRef } from "react";

import { getSelectStyles } from "./Select.styles";
import type { SelectProps } from "./Select.types";

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      helperText,
      error,
      errorMessage,
      options,

      size = "md",

      disabled,

      className,

      style,

      ...props
    },
    ref,
  ) => {
    const styles = getSelectStyles({
      size,
      disabled,
      error,
    });

    return (
      <div style={styles.containerStyle}>
        {label && <label style={styles.labelStyle}>{label}</label>}

        <select
          ref={ref}
          disabled={disabled}
          style={{
            ...styles.selectStyle,
            ...style,
          }}
          className={className}
          {...props}
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>

        {(helperText || errorMessage) && (
          <span style={styles.helperStyle}>
            {error ? errorMessage : helperText}
          </span>
        )}
      </div>
    );
  },
);

Select.displayName = "Select";
