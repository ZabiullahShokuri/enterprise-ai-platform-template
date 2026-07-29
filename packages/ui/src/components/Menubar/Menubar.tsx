import { forwardRef, useRef } from "react";

import { useControllableState } from "../../foundation";

import { MenubarProvider } from "./Menubar.context";
import { getMenubarStyles } from "./Menubar.styles";

import type { MenubarProps } from "./Menubar.types";

export const Menubar = forwardRef<HTMLDivElement, MenubarProps>(
  ({ children, open, defaultOpen = false, onOpenChange, ...props }, ref) => {
    const styles = getMenubarStyles();

    const triggerRef = useRef<HTMLButtonElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const { value: isOpen, setValue: setOpen } = useControllableState({
      value: open,
      defaultValue: defaultOpen,
      onChange: onOpenChange,
    });

    return (
      <MenubarProvider
        value={{
          open: isOpen,
          setOpen,
          triggerRef,
          contentRef,
        }}
      >
        <div ref={ref} className={styles.root} role="menubar" {...props}>
          {children}
        </div>
      </MenubarProvider>
    );
  },
);

Menubar.displayName = "Menubar";
