import { forwardRef } from "react";

import { useClickOutside, useEscapeKey } from "../../foundation";

import { useDropdownMenuContext } from "./DropdownMenu.context";

import type { DropdownMenuContentProps } from "./DropdownMenu.types";

export const DropdownMenuContent = forwardRef<
  HTMLDivElement,
  DropdownMenuContentProps
>(({ children, ...props }, ref) => {
  const { open, setOpen, contentRef } = useDropdownMenuContext();
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case "Escape":
        event.preventDefault();
        setOpen(false);
        break;

      default:
        break;
    }
  };
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
      ref={(node) => {
        contentRef.current = node;

        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      }}
      role="menu"
      {...props}
      onKeyDown={handleKeyDown}
    >
      {children}
    </div>
  );
});

DropdownMenuContent.displayName = "DropdownMenuContent";
