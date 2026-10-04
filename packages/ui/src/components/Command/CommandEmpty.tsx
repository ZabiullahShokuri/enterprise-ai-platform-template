import { forwardRef } from "react";

import { useCommandContext } from "./Command.context";

import type { CommandEmptyProps } from "./Command.types";

export const CommandEmpty = forwardRef<HTMLDivElement, CommandEmptyProps>(
  ({ children, ...props }, ref) => {
    const { visibleItemCount } = useCommandContext();

    if (visibleItemCount > 0) {
      return null;
    }

    return (
      <div ref={ref} role="status" {...props}>
        {children}
      </div>
    );
  },
);

CommandEmpty.displayName = "CommandEmpty";
