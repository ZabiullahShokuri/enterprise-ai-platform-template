import { forwardRef } from "react";

import { useClickOutside, useEscapeKey } from "../../foundation";

import { useNavigationMenuContext } from "./NavigationMenu.context";

import type { NavigationMenuContentProps } from "./NavigationMenu.types";

export const NavigationMenuContent = forwardRef<
  HTMLDivElement,
  NavigationMenuContentProps
>(({ children, value: contentValue, ...props }, ref) => {
  const { value, setValue, contentRef } = useNavigationMenuContext();

  const isActive = contentValue !== undefined && value === contentValue;

  useEscapeKey(
    () => {
      setValue(null);
    },
    {
      enabled: isActive,
    },
  );

  useClickOutside(
    contentRef,
    () => {
      setValue(null);
    },
    {
      enabled: isActive,
    },
  );

  if (!isActive) {
    return null;
  }

  return (
    <div
      ref={(node) => {
        contentRef.current = node;

        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      }}
      role="region"
      data-state="open"
      {...props}
    >
      {children}
    </div>
  );
});

NavigationMenuContent.displayName = "NavigationMenuContent";
