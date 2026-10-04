import { createContext } from "../../foundation/context/createContext";

import type { CommandContextValue } from "./Command.types";

export const [CommandProvider, useCommandContext] =
  createContext<CommandContextValue>("Command");
