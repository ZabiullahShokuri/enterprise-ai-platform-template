import { forwardRef } from "react";

import { getProgressStyles } from "./Progress.styles";
import type { ProgressProps } from "./Progress.types";

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      value,
      max = 100,
      showValue = false,
      variant = "primary",
      fullWidth = false,
      style,
      ...props
    },
    ref,
  ) => {
    const styles = getProgressStyles({
      value,
      max,
      variant,
      fullWidth,
    });

    return (
      <div
        ref={ref}
        style={{
          ...styles.containerStyle,
          ...style,
        }}
        {...props}
      >
        <div style={styles.trackStyle}>
          <div style={styles.barStyle} />
        </div>
        <div
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
          style={styles.trackStyle}
        >
          <div style={styles.barStyle} />
        </div>

        {showValue && (
          <span style={styles.valueStyle}>
            {Math.round(styles.percentage)}%
          </span>
        )}
      </div>
    );
  },
);

Progress.displayName = "Progress";
