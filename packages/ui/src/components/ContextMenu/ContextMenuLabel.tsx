import { forwardRef } from "react";

import type { ContextMenuLabelProps } from "./ContextMenu.types";

export const ContextMenuLabel = forwardRef<
  HTMLDivElement,
  ContextMenuLabelProps
>(({ children, ...props }, ref) => {
  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  );
});

ContextMenuLabel.displayName = "ContextMenuLabel";
