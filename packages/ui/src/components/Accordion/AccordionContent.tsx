import type { HTMLAttributes } from "react";

import { getAccordionStyles } from "./Accordion.styles";

export interface AccordionContentProps extends HTMLAttributes<HTMLDivElement> {}

export function AccordionContent({
  children,
  style,
  ...props
}: AccordionContentProps) {
  const styles = getAccordionStyles();

  return (
    <div
      style={{
        ...styles.contentStyle,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
