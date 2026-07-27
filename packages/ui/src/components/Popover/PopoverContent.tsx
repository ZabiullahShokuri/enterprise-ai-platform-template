import type { HTMLAttributes } from "react";

import { getPopoverStyles } from "./Popover.styles";
import { usePopoverContext } from "./Popover.context";

export interface PopoverContentProps extends HTMLAttributes<HTMLDivElement> {}

export function PopoverContent({
  children,
  style,
  ...props
}: PopoverContentProps) {
  const { open } = usePopoverContext();

  const styles = getPopoverStyles();

  if (!open) {
    return null;
  }

  return (
    <div
      role="dialog"
      tabIndex={-1}
      data-state="open"
      style={{
        ...styles.contentStyle,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
