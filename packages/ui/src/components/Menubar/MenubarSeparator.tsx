import { forwardRef } from "react";

import type { MenubarSeparatorProps } from "./Menubar.types";

export const MenubarSeparator = forwardRef<
  HTMLHRElement,
  MenubarSeparatorProps
>((props, ref) => {
  return <hr ref={ref} role="separator" {...props} />;
});

MenubarSeparator.displayName = "MenubarSeparator";
