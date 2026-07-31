import type { CSSProperties, HTMLAttributes, ReactNode } from "react";

export interface ContextMenuProps {
  children: ReactNode;

  open?: boolean;

  defaultOpen?: boolean;

  onOpenChange?: (open: boolean) => void;
}

export interface ContextMenuTriggerProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export interface ContextMenuContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;

  className?: string;

  style?: CSSProperties;
}

export interface ContextMenuItemProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;

  disabled?: boolean;

  onSelect?: () => void;
}

export interface ContextMenuLabelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface ContextMenuSeparatorProps extends HTMLAttributes<HTMLHRElement> {}

export interface ContextMenuPortalProps {
  children: ReactNode;
}

export interface ContextMenuContextValue {
  open: boolean;

  setOpen: (open: boolean) => void;

  triggerRef: React.RefObject<HTMLElement | null>;

  contentRef: React.RefObject<HTMLDivElement | null>;
}
