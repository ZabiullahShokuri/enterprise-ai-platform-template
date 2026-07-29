import type { DropdownMenuSeparatorProps } from "./DropdownMenu.types";

export function DropdownMenuSeparator({
  ...props
}: DropdownMenuSeparatorProps) {
  return <hr role="separator" {...props} />;
}
