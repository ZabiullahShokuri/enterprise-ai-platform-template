import { forwardRef } from "react";

import { getSkeletonStyles } from "./Skeleton.styles";
import type { SkeletonProps } from "./Skeleton.types";

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      width = "100%",
      height = 16,
      variant = "text",
      animation = true,
      style,
      ...props
    },
    ref,
  ) => {
    const styles = getSkeletonStyles({
      width,
      height,
      variant,
      animation,
    });

    return (
      <div
        ref={ref}
        aria-hidden="true"
        style={{
          ...styles.style,
          ...style,
        }}
        {...props}
      />
    );
  },
);

Skeleton.displayName = "Skeleton";
