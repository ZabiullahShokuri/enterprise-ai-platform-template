import { forwardRef } from "react";

import { useClickOutside, useEscapeKey } from "../../foundation";

import { useContextMenuContext } from "./ContextMenu.context";

import type { ContextMenuContentProps } from "./ContextMenu.types";

export const ContextMenuContent = forwardRef<
  HTMLDivElement,
  ContextMenuContentProps
>(({ children, ...props }, ref) => {
  const { open, setOpen, contentRef } = useContextMenuContext();

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
});

ContextMenuContent.displayName = "ContextMenuContent";
