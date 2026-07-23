import type { CSSProperties } from "react";

import type { SkeletonProps } from "./Skeleton.types";

import { colors } from "../../styles/tokens/colors";
import { radius } from "../../styles/tokens/radius";

export function getSkeletonStyles({
  width = "100%",
  height = 16,
  variant = "text",
  animation = true,
}: Pick<SkeletonProps, "width" | "height" | "variant" | "animation">) {
  const radiusMap = {
    text: radius.sm,
    rectangular: radius.md,
    circular: "50%",
  };

  const style: CSSProperties = {
    width,
    height,

    backgroundColor: colors.gray[200],

    borderRadius: radiusMap[variant],

    overflow: "hidden",

    position: "relative",

    ...(animation && {
      animation: "enterprise-skeleton-pulse 1.5s ease-in-out infinite",
    }),
  };

  return {
    style,
  };
}
