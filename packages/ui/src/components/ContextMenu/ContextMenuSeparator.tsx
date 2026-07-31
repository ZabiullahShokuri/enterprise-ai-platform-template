import { forwardRef } from "react";

import type { ContextMenuSeparatorProps } from "./ContextMenu.types";

export const ContextMenuSeparator = forwardRef<
  HTMLHRElement,
  ContextMenuSeparatorProps
>((props, ref) => {
  return <hr ref={ref} role="separator" {...props} />;
});

ContextMenuSeparator.displayName = "ContextMenuSeparator";
