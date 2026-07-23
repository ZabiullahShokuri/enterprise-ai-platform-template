import { forwardRef } from "react";

import { getBadgeStyles } from "./Badge.styles";
import type { BadgeProps } from "./Badge.types";

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, variant = "primary", size = "md", style, ...props }, ref) => {
    const styles = getBadgeStyles({
      variant,
      size,
    });

    return (
      <span
        ref={ref}
        style={{
          ...styles.badgeStyle,
          ...style,
        }}
        {...props}
      >
        {children}
      </span>
    );
  },
);

Badge.displayName = "Badge";
