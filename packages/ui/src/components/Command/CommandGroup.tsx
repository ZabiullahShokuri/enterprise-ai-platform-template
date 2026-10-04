import { forwardRef } from "react";

import type { CommandGroupProps } from "./Command.types";

export const CommandGroup = forwardRef<HTMLDivElement, CommandGroupProps>(
  ({ children, heading, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="group"
        aria-label={typeof heading === "string" ? heading : undefined}
        {...props}
      >
        {heading ? <div data-command-group-heading>{heading}</div> : null}

        {children}
      </div>
    );
  },
);

CommandGroup.displayName = "CommandGroup";
