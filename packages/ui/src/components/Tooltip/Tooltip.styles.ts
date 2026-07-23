import type { CSSProperties } from "react";

import type { TooltipPlacement } from "./Tooltip.types";

import { colors } from "../../styles/tokens/colors";
import { spacing } from "../../styles/tokens/spacing";
import { radius } from "../../styles/tokens/radius";
import { typography } from "../../styles/tokens/typography";

export function getTooltipStyles(placement: TooltipPlacement = "top") {
  const containerStyle: CSSProperties = {
    position: "relative",
    display: "inline-flex",
    width: "fit-content",
  };

  const tooltipStyle: CSSProperties = {
    position: "absolute",

    zIndex: 1000,

    whiteSpace: "nowrap",

    padding: `${spacing.xs} ${spacing.sm}`,

    borderRadius: radius.sm,

    backgroundColor: colors.gray[900],

    color: colors.white,

    fontSize: typography.fontSize.sm,

    fontWeight: typography.fontWeight.medium,

    lineHeight: typography.lineHeight.normal,

    pointerEvents: "none",

    transition: "opacity .2s ease",

    opacity: 0,
  };

  const placementStyle: Record<TooltipPlacement, CSSProperties> = {
    top: {
      bottom: "100%",
      left: "50%",
      transform: "translateX(-50%) translateY(-8px)",
    },

    bottom: {
      top: "100%",
      left: "50%",
      transform: "translateX(-50%) translateY(8px)",
    },

    left: {
      right: "100%",
      top: "50%",
      transform: "translateX(-8px) translateY(-50%)",
    },

    right: {
      left: "100%",
      top: "50%",
      transform: "translateX(8px) translateY(-50%)",
    },
  };

  return {
    containerStyle,

    tooltipStyle: {
      ...tooltipStyle,
      ...placementStyle[placement],
    },
  };
}
