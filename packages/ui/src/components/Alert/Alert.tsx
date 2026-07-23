import { forwardRef } from "react";

import { getAlertStyles } from "./Alert.styles";
import type { AlertProps } from "./Alert.types";

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    { children, title, variant = "info", fullWidth = false, style, ...props },
    ref,
  ) => {
    const styles = getAlertStyles({
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
        role="alert"
        {...props}
      >
        {title && <div style={styles.titleStyle}>{title}</div>}

        <div style={styles.contentStyle}>{children}</div>
      </div>
    );
  },
);

Alert.displayName = "Alert";
