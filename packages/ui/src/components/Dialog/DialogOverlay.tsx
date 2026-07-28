import type { DialogOverlayProps } from "./Dialog.types";

import { useDialogContext } from "./Dialog.context";
import { getDialogStyles } from "./Dialog.styles";

export function DialogOverlay({ style, ...props }: DialogOverlayProps) {
  const { open } = useDialogContext();

  const styles = getDialogStyles();

  if (!open) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      style={{
        ...styles.overlayStyle,
        ...style,
      }}
      {...props}
    />
  );
}
