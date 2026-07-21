import type { CSSProperties } from "react";

import type { InputSize, InputVariant } from "./Input.types";

interface InputStyleOptions {
  variant: InputVariant;
  size: InputSize;
  error: boolean;
  fullWidth: boolean;
  disabled: boolean;
}

export function getInputStyles({
  variant,
  size,
  error,
  fullWidth,
  disabled,
}: InputStyleOptions) {
  const sizeMap = {
    sm: {
      height: 36,
      fontSize: 14,
      padding: "0 12px",
    },

    md: {
      height: 42,
      fontSize: 15,
      padding: "0 14px",
    },

    lg: {
      height: 48,
      fontSize: 16,
      padding: "0 16px",
    },
  };

  const variantMap = {
    default: {
      background: "#ffffff",
      border: "1px solid #d1d5db",
    },

    filled: {
      background: "#f3f4f6",
      border: "1px solid transparent",
    },

    unstyled: {
      background: "transparent",
      border: "none",
    },
  };

  const wrapperStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: fullWidth ? "100%" : "fit-content",
    gap: 6,
  };

  const labelStyle: CSSProperties = {
    fontSize: 14,
    fontWeight: 500,
    color: "#111827",
  };

  const inputStyle: CSSProperties = {
    width: fullWidth ? "100%" : 260,

    outline: "none",

    borderRadius: 8,

    transition: "all .2s",

    color: "#111827",

    ...sizeMap[size],

    ...variantMap[variant],

    ...(error && {
      border: "1px solid #ef4444",
    }),

    ...(disabled && {
      cursor: "not-allowed",
      opacity: 0.6,
    }),
  };

  const helperStyle: CSSProperties = {
    fontSize: 13,

    color: error ? "#ef4444" : "#6b7280",
  };

  return {
    wrapperStyle,

    labelStyle,

    inputStyle,

    helperStyle,
  };
}
