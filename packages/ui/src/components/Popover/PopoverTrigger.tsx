import type { ButtonHTMLAttributes } from "react";

import { usePopoverContext } from "./Popover.context";

export interface PopoverTriggerProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function PopoverTrigger({
  children,
  onClick,
  ...props
}: PopoverTriggerProps) {
  const {
    open,
    setOpen,
    triggerRef,
  } = usePopoverContext();

  return (
    <button
      ref={triggerRef}
      type="button"
      aria-expanded={open}
      aria-haspopup="dialog"
      onClick={(event) => {
        onClick?.(event);

        if (!event.defaultPrevented) {
          setOpen(!open);
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
}