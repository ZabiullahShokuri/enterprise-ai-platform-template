import { createPortal } from "react-dom";
import type { ReactNode } from "react";

export interface NavigationMenuPortalProps {
  children: ReactNode;
}

export function NavigationMenuPortal({ children }: NavigationMenuPortalProps) {
  if (typeof document === "undefined") {
    return null;
  }

  return createPortal(children, document.body);
}
