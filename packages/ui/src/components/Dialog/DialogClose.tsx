import { forwardRef } from "react";

import { useDialogContext } from "./Dialog.context";

import type { DialogCloseProps } from "./Dialog.types";

export const DialogClose = forwardRef<HTMLButtonElement, DialogCloseProps>(
  ({ children, onClick, ...props }, ref) => {
    const { setOpen } = useDialogContext();

    return (
      <button
        type="button"
        ref={ref}
        onClick={(event) => {
          onClick?.(event);

          if (!event.defaultPrevented) {
            setOpen(false);
          }
        }}
        {...props}
      >
        {children}
      </button>
    );
  },
);

DialogClose.displayName = "DialogClose";
