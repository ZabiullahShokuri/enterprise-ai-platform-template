import { forwardRef } from "react";

import type { MenubarItemProps } from "./Menubar.types";

export const MenubarItem = forwardRef<HTMLDivElement, MenubarItemProps>(
  ({ children, ...props }, ref) => {
    return (
      <div ref={ref} role="menuitem" tabIndex={-1} {...props}>
        {children}
      </div>
    );
  },
);

MenubarItem.displayName = "MenubarItem";
