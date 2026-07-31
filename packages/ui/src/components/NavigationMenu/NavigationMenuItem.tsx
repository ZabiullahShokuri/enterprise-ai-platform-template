import { forwardRef } from "react";

import type { NavigationMenuItemProps } from "./NavigationMenu.types";

export const NavigationMenuItem = forwardRef<
  HTMLLIElement,
  NavigationMenuItemProps
>(({ children, value, ...props }, ref) => {
  return (
    <li ref={ref} data-value={value} {...props}>
      {children}
    </li>
  );
});

NavigationMenuItem.displayName = "NavigationMenuItem";
