import { createContext } from "../../foundation/context/createContext";

import type { ContextMenuContextValue } from "./ContextMenu.types";

export const [ContextMenuProvider, useContextMenuContext] =
  createContext<ContextMenuContextValue>("ContextMenu");
