import type { CSSProperties } from "react";
import type { RadioProps } from "./Radio.types";
import { spacing } from "../../styles/tokens/spacing";
import { colors } from "../../styles/tokens/colors";
import { radius } from "../../styles/tokens/radius";
import { typography } from "../../styles/tokens/typography";

const sizeMap = {
  sm: {
    width: 16,
    height: 16,
  },
  md: {
    width: 18,
    height: 18,
  },
  lg: {
    width: 20,
    height: 20,
  },
};

export function getRadioStyles({
  size = "md",
  error = false,
  disabled = false,
}: Pick<RadioProps, "size" | "error" | "disabled">) {
  const containerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: "fit-content",
  };

  const wrapperStyle: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: spacing.sm,
    cursor: disabled ? "not-allowed" : "pointer",
  };

  const radioStyle: CSSProperties = {
    ...sizeMap[size],

    margin: 0,

    accentColor: error ? colors.danger[600] : colors.primary[600],

    borderRadius: radius.full,

    cursor: disabled ? "not-allowed" : "pointer",

    flexShrink: 0,
  };

  const labelStyle: CSSProperties = {
    fontSize: typography.fontSize[size],
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.normal,

    color: disabled
      ? colors.gray[400]
      : error
        ? colors.danger[600]
        : colors.gray[900],
  };
  const accentColor = error ? colors.danger[600] : colors.primary[600];

  const helperStyle: CSSProperties = {
    fontSize: typography.fontSize.sm,
    lineHeight: typography.lineHeight.normal,

    color: error ? colors.danger[600] : colors.gray[500],
  };

  return {
    containerStyle,
    wrapperStyle,
    radioStyle,
    labelStyle,
    helperStyle,
  };
}
