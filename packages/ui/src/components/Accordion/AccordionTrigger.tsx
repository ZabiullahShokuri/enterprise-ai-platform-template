import type { ButtonHTMLAttributes } from "react";

import { getAccordionStyles } from "./Accordion.styles";

export interface AccordionTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function AccordionTrigger({
  children,
  style,
  ...props
}: AccordionTriggerProps) {
  const styles = getAccordionStyles();

  return (
    <button
      type="button"
      style={{
        ...styles.triggerStyle,
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
}
