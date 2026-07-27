import type { HTMLAttributes } from "react";

import { getAccordionStyles } from "./Accordion.styles";

export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {}

export function AccordionItem({
  children,
  style,
  ...props
}: AccordionItemProps) {
  const styles = getAccordionStyles();

  return (
    <div
      style={{
        ...styles.itemStyle,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
