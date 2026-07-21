import { forwardRef } from "react";

import { getSwitchStyles } from "./Switch.styles";
import type { SwitchProps } from "./Switch.types";

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (props, ref) => {
    const {
      size = "md",
      error = false,
      disabled = false,

      label,
      helperText,
      errorMessage,

      className,
      style,

      checked,
      defaultChecked,
      name,
      value,

      onChange,
      onCheckedChange,

      ...rest
    } = props;

    const styles = getSwitchStyles({
      size,
      error,
      disabled,
    });

    const handleChange = (
      event: React.ChangeEvent<HTMLInputElement>,
    ) => {
      onChange?.(event);

      onCheckedChange?.(event.target.checked);
    };

    return (
      <div style={styles.containerStyle}>
        <label style={styles.wrapperStyle}>
          <input
            ref={ref}
            type="checkbox"
            role="switch"
            disabled={disabled}
            checked={checked}
            defaultChecked={defaultChecked}
            name={name}
            value={value}
            className={className}
            style={{
              ...styles.switchStyle,
              ...style,
            }}
            onChange={handleChange}
            {...rest}
          />

          {label && (
            <span style={styles.labelStyle}>
              {label}
            </span>
          )}
        </label>

        {(helperText || errorMessage) && (
          <div style={styles.helperStyle}>
            {error ? errorMessage : helperText}
          </div>
        )}
      </div>
    );
  },
);

Switch.displayName = "Switch";