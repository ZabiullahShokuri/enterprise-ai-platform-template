import type { DropdownMenuGroupProps } from "./DropdownMenu.types";

export function DropdownMenuGroup({
  children,
  ...props
}: DropdownMenuGroupProps) {
  return (
    <div role="group" {...props}>
      {children}
    </div>
  );
}
