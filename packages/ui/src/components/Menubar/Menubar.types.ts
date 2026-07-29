import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

export interface MenubarProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;

  open?: boolean;

  defaultOpen?: boolean;

  onOpenChange?: (open: boolean) => void;
}

export interface MenubarTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export interface MenubarContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface MenubarMenuProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface MenubarItemProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface MenubarLabelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface MenubarSeparatorProps extends HTMLAttributes<HTMLHRElement> {}

export interface MenubarPortalProps {
  children: ReactNode;
}
