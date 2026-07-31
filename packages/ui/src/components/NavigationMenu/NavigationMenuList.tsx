import { forwardRef } from "react";

import type { NavigationMenuListProps } from "./NavigationMenu.types";

export const NavigationMenuList = forwardRef<
  HTMLUListElement,
  NavigationMenuListProps
>(({ children, ...props }, ref) => {
  return (
    <ul ref={ref} role="menubar" {...props}>
      {children}
    </ul>
  );
});

NavigationMenuList.displayName = "NavigationMenuList";
