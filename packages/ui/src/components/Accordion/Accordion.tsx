import { forwardRef } from "react";

import { useControllableState } from "../../foundation";

import type { AccordionProps } from "./Accordion.types";
import { getAccordionStyles } from "./Accordion.styles";

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  (
    { children, value, defaultValue = [], onValueChange, style, ...props },
    ref,
  ) => {
    const styles = getAccordionStyles();

    const { value: currentValue } = useControllableState({
      value,
      defaultValue,
      onChange: onValueChange,
    });

    return (
      <div
        ref={ref}
        data-accordion
        data-value={currentValue.join(",")}
        style={{
          ...styles.rootStyle,
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Accordion.displayName = "Accordion";
