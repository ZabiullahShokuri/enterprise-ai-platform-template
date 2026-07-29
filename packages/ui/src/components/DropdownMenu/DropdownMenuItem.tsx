import { forwardRef } from "react";

import { useDropdownMenuContext } from "./DropdownMenu.context";

import type { DropdownMenuItemProps } from "./DropdownMenu.types";

export const DropdownMenuItem = forwardRef<
  HTMLDivElement,
  DropdownMenuItemProps
>(({ children, disabled = false, onClick, onSelect, ...props }, ref) => {
  const { setOpen } = useDropdownMenuContext();

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
});

DropdownMenuItem.displayName = "DropdownMenuItem";
