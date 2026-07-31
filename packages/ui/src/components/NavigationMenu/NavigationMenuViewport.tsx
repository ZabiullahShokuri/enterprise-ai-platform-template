import { forwardRef } from "react";

import type { NavigationMenuViewportProps } from "./NavigationMenu.types";

export const NavigationMenuViewport = forwardRef<
  HTMLDivElement,
  NavigationMenuViewportProps
>(({ children, ...props }, ref) => {
  return (
    <div ref={ref} data-state="closed" {...props}>
      {children}
    </div>
  );
});

NavigationMenuViewport.displayName = "NavigationMenuViewport";
