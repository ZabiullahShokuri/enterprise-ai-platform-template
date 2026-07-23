import type { HTMLAttributes } from "react";

export type SkeletonVariant = "text" | "rectangular" | "circular";

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  width?: number | string;

  height?: number | string;

  variant?: SkeletonVariant;

  animation?: boolean;
}
