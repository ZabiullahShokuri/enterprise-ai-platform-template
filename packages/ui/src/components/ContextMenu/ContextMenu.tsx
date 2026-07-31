import { forwardRef, useRef } from "react";

import {
  useControllableState,
  useEscapeKey,
} from "../../foundation";

import { ContextMenuProvider } from "./ContextMenu.context";

import type { ContextMenuProps } from "./ContextMenu.types";

export const ContextMenu = forwardRef<HTMLDivElement, ContextMenuProps>(
  ({ children, open, defaultOpen, onOpenChange }, ref) => {
    const state = useControllableState({
      value: open,
      defaultValue: defaultOpen ?? false,
      onChange: onOpenChange,
    });

    const triggerRef = useRef<HTMLElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);

    useEscapeKey(
      () => {
        state.setValue(false);
      },
      {
        enabled: state.value,
      },
    );

    return (
      <ContextMenuProvider
        value={{
          open: state.value,
          setOpen: state.setValue,
          triggerRef,
          contentRef,
        }}
      >
        <div ref={ref}>{children}</div>
      </ContextMenuProvider>
    );
  },
);

ContextMenu.displayName = "ContextMenu";
