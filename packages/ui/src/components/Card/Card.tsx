import { forwardRef } from "react";

import { getCardStyles } from "./Card.styles";
import type { CardProps } from "./Card.types";

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      variant = "default",
      padding = "md",
      fullWidth = false,
      style,
      ...props
    },
    ref,
  ) => {
    const styles = getCardStyles({
      variant,
      padding,
      fullWidth,
    });

    return (
      <div
        ref={ref}
        style={{
          ...styles.cardStyle,
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = "Card";
