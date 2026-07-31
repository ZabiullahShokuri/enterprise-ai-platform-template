import { forwardRef } from "react";

import { useContextMenuContext } from "./ContextMenu.context";

import type { ContextMenuTriggerProps } from "./ContextMenu.types";

export const ContextMenuTrigger = forwardRef<
  HTMLElement,
  ContextMenuTriggerProps
>(({ children, onContextMenu, ...props }, ref) => {
  const { setOpen, triggerRef } = useContextMenuContext();

  return (
    <div
      {...props}
      onContextMenu={(event) => {
        onContextMenu?.(event);

        if (event.defaultPrevented) {
          return;
        }

        event.preventDefault();
        setOpen(true);
      }}
      ref={(node) => {
        triggerRef.current = node;

        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      }}
    >
      {children}
    </div>
  );
});

ContextMenuTrigger.displayName = "ContextMenuTrigger";
