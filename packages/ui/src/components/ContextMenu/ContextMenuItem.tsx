import { forwardRef } from "react";

import { useContextMenuContext } from "./ContextMenu.context";

import type { ContextMenuItemProps } from "./ContextMenu.types";

export const ContextMenuItem = forwardRef<HTMLDivElement, ContextMenuItemProps>(
  ({ children, disabled = false, onClick, onSelect, ...props }, ref) => {
    const { setOpen } = useContextMenuContext();

    return (
      <div
        role="menuitem"
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled}
        ref={ref}
        onClick={(event) => {
          if (disabled) {
            event.preventDefault();
            return;
          }

          onClick?.(event);

          if (!event.defaultPrevented) {
            onSelect?.();
            setOpen(false);
          }
        }}
        {...props}
      >
        {children}
      </div>
    );
  },
);

ContextMenuItem.displayName = "ContextMenuItem";
