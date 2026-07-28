import { forwardRef, useEffect, useId, useRef } from "react";

import {
  useClickOutside,
  useControllableState,
  useEscapeKey,
  useFocusTrap,
} from "../../foundation";

import { DialogProvider } from "./Dialog.context";
import { getDialogStyles } from "./Dialog.styles";

import type { DialogProps } from "./Dialog.types";

export const Dialog = forwardRef<HTMLDivElement, DialogProps>(
  ({ children, open, defaultOpen, onOpenChange, style, ...props }, ref) => {
    const styles = getDialogStyles();

    const rootRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const titleId = useId();
    const descriptionId = useId();

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

    useFocusTrap(contentRef, {
      enabled: isOpen,
    });

    useEffect(() => {
      document.body.style.overflow = isOpen ? "hidden" : "";

      return () => {
        document.body.style.overflow = "";
      };
    }, [isOpen]);

    useEffect(() => {
      if (!isOpen) {
        triggerRef.current?.focus();
      }
    }, [isOpen]);

    return (
      <DialogProvider
        value={{
          open: isOpen,
          setOpen,
          triggerRef,
          contentRef,
          titleId,
          descriptionId,
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
      </DialogProvider>
    );
  },
);

Dialog.displayName = "Dialog";
