import { forwardRef, useRef } from "react";

import { useControllableState } from "../../foundation";

import { NavigationMenuProvider } from "./NavigationMenu.context";

import type { NavigationMenuProps } from "./NavigationMenu.types";

export const NavigationMenu = forwardRef<HTMLDivElement, NavigationMenuProps>(
  ({ children, value, defaultValue, onValueChange, ...props }, ref) => {
    const triggerRef = useRef<HTMLButtonElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const { value: activeValue, setValue } = useControllableState<
      string | undefined
    >({
      value,
      defaultValue,
      onChange: onValueChange,
    });

    return (
      <NavigationMenuProvider
        value={{
          value: activeValue ?? null,
          setValue: (nextValue) => {
            setValue(nextValue ?? undefined);
          },
          triggerRef,
          contentRef,
        }}
      >
        <nav ref={ref} aria-label="Main navigation" {...props}>
          {children}
        </nav>
      </NavigationMenuProvider>
    );
  },
);

NavigationMenu.displayName = "NavigationMenu";
