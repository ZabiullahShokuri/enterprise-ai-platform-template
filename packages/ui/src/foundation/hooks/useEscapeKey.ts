import { useEffect } from "react";

export interface UseEscapeKeyOptions {
  enabled?: boolean;
}

export function useEscapeKey(
  handler: () => void,
  options?: UseEscapeKeyOptions,
) {
  useEffect(() => {
    if (options?.enabled === false) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handler();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handler, options?.enabled]);
}
