import { createPortal } from "react-dom";

import type { ReactNode } from "react";

export interface DropdownMenuPortalProps {
  children: ReactNode;
}

export function DropdownMenuPortal({ children }: DropdownMenuPortalProps) {
  return createPortal(children, document.body);
}
