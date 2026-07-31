import { forwardRef } from "react";

import { useNavigationMenuContext } from "./NavigationMenu.context";

import type { NavigationMenuTriggerProps } from "./NavigationMenu.types";

export const NavigationMenuTrigger = forwardRef<
  HTMLButtonElement,
  NavigationMenuTriggerProps
>(({ children, value: itemValue, onClick, ...props }, ref) => {
  const { value, setValue, triggerRef } = useNavigationMenuContext();

  const isActive = value === itemValue;

  return (
    <button
      type="button"
      aria-haspopup="menu"
      aria-expanded={isActive}
      data-state={isActive ? "open" : "closed"}
      onClick={(event) => {
        onClick?.(event);

        if (event.defaultPrevented) {
          return;
        }

        setValue(isActive ? null : itemValue);
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

NavigationMenuTrigger.displayName = "NavigationMenuTrigger";
