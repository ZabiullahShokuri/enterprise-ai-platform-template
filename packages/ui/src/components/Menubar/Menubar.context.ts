import type { RefObject } from "react";

import { createContext } from "../../foundation";

export interface MenubarContextValue {
  open: boolean;

  setOpen: (open: boolean) => void;

  triggerRef: RefObject<HTMLButtonElement | null>;

  contentRef: RefObject<HTMLDivElement | null>;
}
export const [MenubarProvider, useMenubarContext] =
  createContext<MenubarContextValue>("Menubar");
