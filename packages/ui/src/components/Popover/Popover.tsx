import { forwardRef, useEffect, useRef } from "react";

import {
  useClickOutside,
  useControllableState,
  useEscapeKey,
  useFocusTrap,
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

    const triggerRef = useRef<HTMLButtonElement | null>(null);

    // Behavior Hooks

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

    useFocusTrap(rootRef, {
      enabled: isOpen,
    });

    useEffect(() => {
      if (!isOpen) {
        triggerRef.current?.focus();
      }
    }, [isOpen]);

    return (
      <PopoverProvider
        value={{
          open: isOpen,
          setOpen,
          triggerRef,
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
