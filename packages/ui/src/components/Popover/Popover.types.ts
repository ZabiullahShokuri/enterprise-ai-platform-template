import type { CSSProperties, HTMLAttributes, ReactNode } from "react";

export interface PopoverProps extends HTMLAttributes<HTMLDivElement> {
  open?: boolean;

  defaultOpen?: boolean;

  onOpenChange?: (open: boolean) => void;

  children: ReactNode;

  style?: CSSProperties;
}

export interface PopoverTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export interface PopoverContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface PopoverPortalProps {
  children: ReactNode;
}
