import type { CSSProperties } from "react";

import { colors } from "../../styles/tokens/colors";
import { spacing } from "../../styles/tokens/spacing";
import { radius } from "../../styles/tokens/radius";
import { shadows } from "../../styles/tokens/shadows";

export function getPopoverStyles() {
  const rootStyle: CSSProperties = {
    position: "relative",
    display: "inline-block",
  };

  const contentStyle: CSSProperties = {
    position: "absolute",
    top: "100%",
    left: 0,

    minWidth: 220,

    marginTop: spacing.sm,

    padding: spacing.lg,

    borderRadius: radius.lg,

    border: `1px solid ${colors.gray[200]}`,

    background: colors.white,

    boxShadow: shadows.lg,

    zIndex: 1000,
  };

  return {
    rootStyle,
    contentStyle,
  };
}
