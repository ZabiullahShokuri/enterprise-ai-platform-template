import { forwardRef, useRef } from "react";

import {
  useClickOutside,
  useControllableState,
  useEscapeKey,
} from "../../foundation";

import type { PopoverProps } from "./Popover.types";

import { PopoverProvider } from "./Popover.context";
import { getPopoverStyles } from "./Popover.styles";

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  ({ children, open, defaultOpen, onOpenChange, style, ...props }, ref) => {
    const styles = getPopoverStyles();

    const rootRef = useRef<HTMLDivElement>(null);

    const { value: isOpen, setValue: setOpen } = useControllableState({
      value: open,
      defaultValue: defaultOpen ?? false,
      onChange: onOpenChange,
    });

    useClickOutside(
      rootRef,
      () => {
        setOpen(false);
      },
      {
        enabled: isOpen,
      },
    );

    useEscapeKey(
      () => {
        setOpen(false);
      },
      {
        enabled: isOpen,
      },
    );

    return (
      <PopoverProvider
        value={{
          open: isOpen,
          setOpen,
        }}
      >
        <div
          ref={(node) => {
            rootRef.current = node;

            if (typeof ref === "function") {
              ref(node);
            } else if (ref) {
              ref.current = node;
            }
          }}
          data-state={isOpen ? "open" : "closed"}
          style={{
            ...styles.rootStyle,
            ...style,
          }}
          {...props}
        >
          {children}
        </div>
      </PopoverProvider>
    );
  },
);

Popover.displayName = "Popover";
