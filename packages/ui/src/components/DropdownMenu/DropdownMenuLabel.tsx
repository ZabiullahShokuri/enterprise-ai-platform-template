import type { DropdownMenuLabelProps } from "./DropdownMenu.types";

export function DropdownMenuLabel({
  children,
  ...props
}: DropdownMenuLabelProps) {
  return (
    <div role="presentation" {...props}>
      {children}
    </div>
  );
}
