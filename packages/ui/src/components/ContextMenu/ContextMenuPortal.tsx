import { createPortal } from "react-dom";
import type { ReactNode } from "react";

export interface ContextMenuPortalProps {
  children: ReactNode;
}

export function ContextMenuPortal({ children }: ContextMenuPortalProps) {
  if (typeof document === "undefined") {
    return null;
  }

  return createPortal(children, document.body);
}
