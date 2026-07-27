import { useEffect } from "react";
import type { RefObject } from "react";

export interface UseClickOutsideOptions {
  enabled?: boolean;
}

export function useClickOutside(
  ref: RefObject<HTMLElement | null>,
  handler: () => void,
  options?: UseClickOutsideOptions,
) {
  useEffect(() => {
    if (options?.enabled === false) {
      return;
    }

    function handlePointerDown(event: MouseEvent) {
      const element = ref.current;

      if (!element) {
        return;
      }

      if (!element.contains(event.target as Node)) {
        handler();
      }
    }

    document.addEventListener("mousedown", handlePointerDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, [ref, handler, options?.enabled]);
}
