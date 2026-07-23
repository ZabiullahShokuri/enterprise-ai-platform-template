import { forwardRef, useState } from "react";

import { getTooltipStyles } from "./Tooltip.styles";
import type { TooltipProps } from "./Tooltip.types";

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  ({ children, content, placement = "top", disabled = false }, ref) => {
    const [open, setOpen] = useState(false);

    const styles = getTooltipStyles(placement);

    return (
      <div
        ref={ref}
        style={styles.containerStyle}
        onMouseEnter={() => !disabled && setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {children}

        {!disabled && (
          <div
            role="tooltip"
            style={{
              ...styles.tooltipStyle,
              opacity: open ? 1 : 0,
            }}
          >
            {content}
          </div>
        )}
      </div>
    );
  },
);

Tooltip.displayName = "Tooltip";
