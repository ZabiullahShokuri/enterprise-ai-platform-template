import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

export interface DropdownMenuProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;

  open?: boolean;

  defaultOpen?: boolean;

  onOpenChange?: (open: boolean) => void;
}

export interface DropdownMenuTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface DropdownMenuContentProps extends HTMLAttributes<HTMLDivElement> {}

export interface DropdownMenuItemProps extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;

  onSelect?: () => void;
}

export interface DropdownMenuSeparatorProps extends HTMLAttributes<HTMLHRElement> {}

export interface DropdownMenuLabelProps extends HTMLAttributes<HTMLDivElement> {}

export interface DropdownMenuGroupProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
