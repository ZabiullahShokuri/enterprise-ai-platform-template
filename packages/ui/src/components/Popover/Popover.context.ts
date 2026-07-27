import { createContext } from "../../foundation";

export interface PopoverContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const [PopoverProvider, usePopoverContext] =
  createContext<PopoverContextValue>("Popover");