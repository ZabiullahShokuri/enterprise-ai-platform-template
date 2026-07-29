import { forwardRef } from "react";

import { useEscapeKey, useClickOutside } from "../../foundation";

import { useMenubarContext } from "./Menubar.context";

import type { MenubarContentProps } from "./Menubar.types";

export const MenubarContent = forwardRef<HTMLDivElement, MenubarContentProps>(
  ({ children, ...props }, ref) => {
    const { open, setOpen, contentRef } = useMenubarContext();

    useEscapeKey(
      () => {
        setOpen(false);
      },
      {
        enabled: open,
      },
    );

    useClickOutside(
      contentRef,
      () => {
        setOpen(false);
      },
      {
        enabled: open,
      },
    );

    if (!open) {
      return null;
    }

    return (
      <div
        role="menu"
        ref={(node) => {
          contentRef.current = node;

          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        {...props}
      >
        {children}
      </div>
    );
  },
);

MenubarContent.displayName = "MenubarContent";
