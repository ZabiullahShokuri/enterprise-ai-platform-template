import { createPortal } from "react-dom";
import type { ReactNode } from "react";

export interface PopoverPortalProps {
  children: ReactNode;
}

export function PopoverPortal({ children }: PopoverPortalProps) {
  if (typeof document === "undefined") {
    return null;
  }

  return createPortal(children, document.body);
}
