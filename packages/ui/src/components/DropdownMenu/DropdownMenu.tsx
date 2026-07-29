import { forwardRef, useRef } from "react";

import { useControllableState } from "../../foundation";

import { DropdownMenuProvider } from "./DropdownMenu.context";

import type { DropdownMenuProps } from "./DropdownMenu.types";

export const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(
  ({ children, open, defaultOpen, onOpenChange, ...props }, ref) => {
    const { value: isOpen, setValue: setOpen } = useControllableState({
      value: open,
      defaultValue: defaultOpen ?? false,
      onChange: onOpenChange,
    });

    const triggerRef = useRef<HTMLButtonElement>(null);

    const contentRef = useRef<HTMLDivElement>(null);

    const activeIndexRef = useRef(0);

    return (
      <DropdownMenuProvider
        value={{
          open: isOpen,
          setOpen,
          triggerRef,
          contentRef,
          activeIndex: activeIndexRef.current,
          setActiveIndex(index) {
            activeIndexRef.current = index;
          },
        }}
      >
        <div ref={ref} {...props}>
          {children}
        </div>
      </DropdownMenuProvider>
    );
  },
);

DropdownMenu.displayName = "DropdownMenu";
