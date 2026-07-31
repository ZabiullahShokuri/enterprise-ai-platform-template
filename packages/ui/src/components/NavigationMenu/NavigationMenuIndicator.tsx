import { forwardRef } from "react";

import type { NavigationMenuIndicatorProps } from "./NavigationMenu.types";

export const NavigationMenuIndicator = forwardRef<
  HTMLDivElement,
  NavigationMenuIndicatorProps
>(({ children, ...props }, ref) => {
  return (
    <div ref={ref} aria-hidden="true" data-state="closed" {...props}>
      {children}
    </div>
  );
});

NavigationMenuIndicator.displayName = "NavigationMenuIndicator";
