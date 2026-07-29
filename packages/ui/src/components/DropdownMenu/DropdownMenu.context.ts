import type { RefObject } from "react";

import { createContext } from "../../foundation";

export interface DropdownMenuContextValue {
  open: boolean;

  setOpen: (open: boolean) => void;

  triggerRef: RefObject<HTMLButtonElement | null>;

  contentRef: RefObject<HTMLDivElement | null>;

  activeIndex: number;

  setActiveIndex: (index: number) => void;
}

export const [DropdownMenuProvider, useDropdownMenuContext] =
  createContext<DropdownMenuContextValue>("DropdownMenu");
