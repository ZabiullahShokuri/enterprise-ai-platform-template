import type { CSSProperties } from "react";

import { colors } from "../../styles/tokens/colors";
import { spacing } from "../../styles/tokens/spacing";
import { radius } from "../../styles/tokens/radius";

export function getAccordionStyles() {
  const rootStyle: CSSProperties = {
    width: "100%",
    border: `1px solid ${colors.gray[200]}`,
    borderRadius: radius.lg,
    overflow: "hidden",
    background: colors.white,
  };

  const itemStyle: CSSProperties = {
    borderBottom: `1px solid ${colors.gray[200]}`,
  };

  const triggerStyle: CSSProperties = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    padding: spacing.lg,

    background: colors.white,

    color: colors.gray[900],

    border: "none",

    cursor: "pointer",

    font: "inherit",

    transition: "background .2s ease",
  };

  const contentStyle: CSSProperties = {
    padding: spacing.lg,
    background: colors.gray[50],
    color: colors.gray[800],
  };

  return {
    rootStyle,
    itemStyle,
    triggerStyle,
    contentStyle,
  };
}
