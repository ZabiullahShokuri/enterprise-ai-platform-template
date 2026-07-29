import { forwardRef } from "react";

import type { MenubarLabelProps } from "./Menubar.types";

export const MenubarLabel = forwardRef<HTMLDivElement, MenubarLabelProps>(
  ({ children, ...props }, ref) => {
    return (
      <div ref={ref} role="presentation" {...props}>
        {children}
      </div>
    );
  },
);

MenubarLabel.displayName = "MenubarLabel";
