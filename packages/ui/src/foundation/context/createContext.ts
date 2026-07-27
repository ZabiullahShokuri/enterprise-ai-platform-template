import {
  createContext as reactCreateContext,
  useContext,
} from "react";

export function createContext<ContextValue>(name: string) {
  const Context = reactCreateContext<ContextValue | null>(null);

  function useContextValue() {
    const context = useContext(Context);

    if (context === null) {
      throw new Error(
        `${name} components must be wrapped in <${name}Provider>.`,
      );
    }

    return context;
  }

  return [
    Context.Provider,
    useContextValue,
  ] as const;
}