import type { CSSProperties, HTMLAttributes, ReactNode } from "react";

export interface AccordionItem {
  id: string;

  title: ReactNode;

  content: ReactNode;

  disabled?: boolean;
}

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  items: AccordionItem[];

  value?: string[];

  defaultValue?: string[];

  multiple?: boolean;

  collapsible?: boolean;

  onValueChange?: (value: string[]) => void;

  style?: CSSProperties;
}
