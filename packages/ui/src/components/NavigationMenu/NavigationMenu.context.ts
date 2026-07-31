import { createContext } from "../../foundation/context/createContext";

import type { NavigationMenuContextValue } from "./NavigationMenu.types";

export const [NavigationMenuProvider, useNavigationMenuContext] =
  createContext<NavigationMenuContextValue>("NavigationMenu");
