import type { HTMLAttributes, InputHTMLAttributes, ReactNode } from "react";

export interface CommandProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;

  query?: string;

  defaultQuery?: string;

  onQueryChange?: (query: string) => void;

  value?: string;

  defaultValue?: string;

  onValueChange?: (value: string | undefined) => void;
}

export interface CommandInputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
}

export interface CommandListProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface CommandGroupProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;

  heading?: ReactNode;
}

export interface CommandItemProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "onSelect"
> {
  children: ReactNode;

  value: string;

  disabled?: boolean;

  onSelect?: (value: string) => void;
}

export interface CommandEmptyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface CommandSeparatorProps extends HTMLAttributes<HTMLHRElement> {}

export interface CommandLoadingProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface CommandContextValue {
  query: string;

  setQuery: (query: string) => void;

  value: string | null;

  setValue: (value: string | null) => void;

  items: string[];

  activeIndex: number;

  setActiveIndex: (index: number) => void;

  registerItem: (value: string, onSelect?: (value: string) => void) => number;

  unregisterItem: (value: string) => void;

  isItemVisible: (value: string) => boolean;

  selectItem: (value: string) => void;

  visibleItemCount: number;
}
