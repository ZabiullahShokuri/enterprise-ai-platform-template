import { forwardRef } from "react";

import { getRadioStyles } from "./Radio.styles";
import type { RadioProps } from "./Radio.types";

export const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
 const {
  size = "md",
  error = false,
  disabled = false,

  label,
  helperText,
  errorMessage,

  checked,
  defaultChecked,
  name,
  value,

  onChange,
  onCheckedChange,

  className,
  style,

  ...rest
} = props;

  const styles = getRadioStyles({
    size,
    error,
    disabled,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event);

    onCheckedChange?.(event.target.checked);
  };

  return (
    <div style={styles.containerStyle}>
      <label style={styles.wrapperStyle}>
        <input
          ref={ref}
          type="radio"
          disabled={disabled}
          className={className}
          style={{
            ...styles.radioStyle,
            ...style,
          }}
          checked={checked}
          defaultChecked={defaultChecked}
          name={name}
          value={value}
          onChange={handleChange}
          {...rest}
        />

        {label && <span style={styles.labelStyle}>{label}</span>}
      </label>

      {(helperText || errorMessage) && (
        <div style={styles.helperStyle}>
          {error ? errorMessage : helperText}
        </div>
      )}
    </div>
  );
});

Radio.displayName = "Radio";
