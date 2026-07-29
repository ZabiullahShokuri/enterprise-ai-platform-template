import { createPortal } from "react-dom";

import type { MenubarPortalProps } from "./Menubar.types";

export function MenubarPortal({ children }: MenubarPortalProps) {
  return createPortal(children, document.body);
}
