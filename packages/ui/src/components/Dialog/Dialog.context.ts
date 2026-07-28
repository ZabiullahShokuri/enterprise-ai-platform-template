import type { RefObject } from "react";

import { createContext } from "../../foundation";

export interface DialogContextValue {
  open: boolean;

  setOpen: (open: boolean) => void;

  triggerRef: RefObject<HTMLButtonElement | null>;

  contentRef: RefObject<HTMLDivElement | null>;

  titleId: string;

  descriptionId: string;
}

export const [DialogProvider, useDialogContext] =
  createContext<DialogContextValue>("Dialog");