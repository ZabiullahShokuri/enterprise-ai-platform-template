import { forwardRef } from "react";

import type { CommandSeparatorProps } from "./Command.types";

export const CommandSeparator = forwardRef<
  HTMLHRElement,
  CommandSeparatorProps
>((props, ref) => {
  return <hr ref={ref} role="separator" {...props} />;
});

CommandSeparator.displayName = "CommandSeparator";
