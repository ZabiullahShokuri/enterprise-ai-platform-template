import { forwardRef } from "react";

import { getSpinnerStyles } from "./Spinner.styles";
import type { SpinnerProps } from "./Spinner.types";

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  ({ size = "md", label = "Loading...", style, ...props }, ref) => {
    const styles = getSpinnerStyles({ size });

    return (
      <div
        ref={ref}
        style={{
          ...styles.containerStyle,
          ...style,
        }}
        role="status"
        aria-label={label}
        {...props}
      >
        <div style={styles.spinnerStyle} aria-hidden="true" />
      </div>
    );
  },
);

Spinner.displayName = "Spinner";
