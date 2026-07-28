import type { DialogContentProps } from "./Dialog.types";

import { useDialogContext } from "./Dialog.context";
import { getDialogStyles } from "./Dialog.styles";

export function DialogContent({
  children,
  style,
  ...props
}: DialogContentProps) {
  const { open, contentRef, titleId, descriptionId } = useDialogContext();

  const styles = getDialogStyles();

  if (!open) {
    return null;
  }

  return (
    <div
      ref={contentRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      tabIndex={-1}
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
