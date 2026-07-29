import { forwardRef } from "react";

import type { MenubarMenuProps } from "./Menubar.types";

export const MenubarMenu = forwardRef<HTMLDivElement, MenubarMenuProps>(
  ({ children, ...props }, ref) => {
    return (
      <div ref={ref} {...props}>
        {children}
      </div>
    );
  },
);

MenubarMenu.displayName = "MenubarMenu";
