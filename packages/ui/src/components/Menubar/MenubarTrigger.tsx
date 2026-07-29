import { forwardRef } from "react";

import { useMenubarContext } from "./Menubar.context";
import type { MenubarTriggerProps } from "./Menubar.types";

export const MenubarTrigger = forwardRef<
  HTMLButtonElement,
  MenubarTriggerProps
>(({ children, onClick, ...props }, ref) => {
  const { open, setOpen, triggerRef } = useMenubarContext();

  return (
    <button
      type="button"
      role="menuitem"
      aria-haspopup="menu"
      aria-expanded={open}
      onClick={(event) => {
        onClick?.(event);

        if (!event.defaultPrevented) {
          setOpen(!open);
        }
      }}
      ref={(node) => {
        triggerRef.current = node;

        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
});

MenubarTrigger.displayName = "MenubarTrigger";
