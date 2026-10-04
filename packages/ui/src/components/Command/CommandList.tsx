import { forwardRef } from "react";

import type { CommandListProps } from "./Command.types";

export const CommandList = forwardRef<HTMLDivElement, CommandListProps>(
  ({ children, ...props }, ref) => {
    return (
      <div ref={ref} role="listbox" {...props}>
        {children}
      </div>
    );
  },
);

CommandList.displayName = "CommandList";
