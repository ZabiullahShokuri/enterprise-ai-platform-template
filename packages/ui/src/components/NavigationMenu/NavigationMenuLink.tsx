import { forwardRef } from "react";

import type { NavigationMenuLinkProps } from "./NavigationMenu.types";

export const NavigationMenuLink = forwardRef<
  HTMLAnchorElement,
  NavigationMenuLinkProps
>(({ children, active = false, ...props }, ref) => {
  return (
    <a
      ref={ref}
      data-active={active ? "true" : "false"}
      aria-current={active ? "page" : undefined}
      {...props}
    >
      {children}
    </a>
  );
});

NavigationMenuLink.displayName = "NavigationMenuLink";
