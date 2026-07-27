import { useEffect } from "react";
import type { RefObject } from "react";

export interface UseFocusTrapOptions {
  enabled?: boolean;
}

export function useFocusTrap(
  ref: RefObject<HTMLElement | null>,
  options?: UseFocusTrapOptions,
) {
  useEffect(() => {
    if (!options?.enabled) {
      return;
    }

    const root = ref.current;

    if (!root) {
      return;
    }

    const firstFocusable = root.querySelector<HTMLElement>(
      [
        "button",
        "[href]",
        "input",
        "select",
        "textarea",
        "[tabindex]:not([tabindex='-1'])",
      ].join(","),
    );

    firstFocusable?.focus();
  }, [ref, options?.enabled]);
}
