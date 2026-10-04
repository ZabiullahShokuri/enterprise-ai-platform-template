import { forwardRef } from "react";

import type { CommandLoadingProps } from "./Command.types";

export const CommandLoading = forwardRef<HTMLDivElement, CommandLoadingProps>(
  ({ children, ...props }, ref) => {
    return (
      <div ref={ref} role="status" aria-live="polite" {...props}>
        {children}
      </div>
    );
  },
);

CommandLoading.displayName = "CommandLoading";
