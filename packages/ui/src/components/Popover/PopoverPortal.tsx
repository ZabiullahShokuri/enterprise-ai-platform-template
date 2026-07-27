import type { ReactNode } from "react";

export interface PopoverPortalProps {
  children: ReactNode;
}

export function PopoverPortal({ children }: PopoverPortalProps) {
  return <>{children}</>;
}
