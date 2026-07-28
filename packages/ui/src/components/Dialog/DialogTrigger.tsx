import { forwardRef } from "react";

import { useDialogContext } from "./Dialog.context";

import type { DialogTriggerProps } from "./Dialog.types";
export const DialogTrigger = forwardRef<HTMLButtonElement, DialogTriggerProps>(
  ({ children, onClick, ...props }, ref) => {
    const { open, setOpen, triggerRef } = useDialogContext();

    return (
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={(event) => {
          onClick?.(event);

          if (!event.defaultPrevented) {
            setOpen(!open);
          }
        }}
        ref={(node) => {
          triggerRef.current = node;

          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        {...props}
      >
        {children}
      </button>
    );
  },
);

DialogTrigger.displayName = "DialogTrigger";
