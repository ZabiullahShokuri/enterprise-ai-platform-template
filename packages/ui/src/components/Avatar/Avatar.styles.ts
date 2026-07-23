import type { CSSProperties } from "react";

import { colors } from "../../styles/tokens/colors";
import { radius } from "../../styles/tokens/radius";
import { typography } from "../../styles/tokens/typography";

import type { AvatarProps } from "./Avatar.types";

const sizeMap = {
  sm: {
    size: 32,
    fontSize: typography.fontSize.sm,
  },

  md: {
    size: 40,
    fontSize: typography.fontSize.md,
  },

  lg: {
    size: 56,
    fontSize: typography.fontSize.lg,
  },
};

export function getAvatarStyles({ size = "md" }: Pick<AvatarProps, "size">) {
  const avatarStyle: CSSProperties = {
    width: sizeMap[size].size,

    height: sizeMap[size].size,

    borderRadius: radius.full,

    display: "flex",

    alignItems: "center",

    justifyContent: "center",

    overflow: "hidden",

    backgroundColor: colors.gray[200],

    color: colors.gray[700],

    fontWeight: typography.fontWeight.semibold,

    fontSize: sizeMap[size].fontSize,

    userSelect: "none",

    flexShrink: 0,
  };

  const imageStyle: CSSProperties = {
    width: "100%",

    height: "100%",

    objectFit: "cover",
  };

  return {
    avatarStyle,

    imageStyle,
  };
}
