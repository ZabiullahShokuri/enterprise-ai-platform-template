import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  HTMLAttributes,
  ReactNode,
} from "react";

export interface NavigationMenuProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;

  value?: string;

  defaultValue?: string;

  onValueChange?: (value: string | undefined) => void;
}

export interface NavigationMenuListProps extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode;
}

export interface NavigationMenuItemProps extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode;

  value?: string;
}

export interface NavigationMenuTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;

  value: string;
}

export interface NavigationMenuContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;

  value?: string;
}

export interface NavigationMenuLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;

  active?: boolean;
}

export interface NavigationMenuIndicatorProps extends HTMLAttributes<HTMLDivElement> {}

export interface NavigationMenuViewportProps extends HTMLAttributes<HTMLDivElement> {}

export interface NavigationMenuPortalProps {
  children: ReactNode;
}

export interface NavigationMenuContextValue {
  value: string | null;

  setValue: (value: string | null) => void;

  triggerRef: React.RefObject<HTMLButtonElement | null>;

  contentRef: React.RefObject<HTMLDivElement | null>;
}
