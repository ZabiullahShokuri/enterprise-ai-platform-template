import type { CSSProperties } from "react";

import type { DividerProps } from "./Divider.types";

import { colors } from "../../styles/tokens/colors";

export function getDividerStyles({
  orientation = "horizontal",
  thickness = 1,
  color = colors.gray[300],
  length = "100%",
}: Pick<DividerProps, "orientation" | "thickness" | "color" | "length">) {
  const style: CSSProperties =
    orientation === "horizontal"
      ? {
          width: length,
          height: thickness,
          border: "none",
          backgroundColor: color,
          flexShrink: 0,
        }
      : {
          width: thickness,
          height: length,
          border: "none",
          backgroundColor: color,
          display: "inline-block",
          flexShrink: 0,
        };

  return {
    style,
  };
}
