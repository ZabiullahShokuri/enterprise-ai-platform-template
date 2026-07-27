import type { RefObject } from "react";

import { createContext } from "../../foundation";

export interface PopoverContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: RefObject<HTMLButtonElement | null>;
}

export const [PopoverProvider, usePopoverContext] =
  createContext<PopoverContextValue>("Popover");
