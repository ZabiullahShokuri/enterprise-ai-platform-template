import type { ReactNode } from "react";

import { ThemeContext } from "./theme-context";
import { lightTheme } from "../styles/themes";

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({
  children,
}: ThemeProviderProps) {
  return (
    <ThemeContext.Provider value={lightTheme}>
      {children}
    </ThemeContext.Provider>
  );
}