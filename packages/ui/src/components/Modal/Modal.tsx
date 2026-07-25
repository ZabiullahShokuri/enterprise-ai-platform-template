import { useEffect } from "react";
import { createPortal } from "react-dom";

import type { ModalProps } from "./Modal.types";
import { getModalStyles } from "./Modal.styles";

export function Modal({
  open,
  title,
  children,
  footer,
  onClose,
  closeOnEsc = true,
  closeOnOverlayClick = true,
}: ModalProps) {
  const styles = getModalStyles();

  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    if (!open || !closeOnEsc) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, closeOnEsc, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      style={styles.overlayStyle}
      onClick={() => {
        if (closeOnOverlayClick) {
          onClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        style={styles.modalStyle}
        onClick={(event) => event.stopPropagation()}
      >
        <div style={styles.headerStyle}>
          <div style={styles.titleStyle}>{title}</div>

          <button
            type="button"
            style={styles.closeButtonStyle}
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <div style={styles.bodyStyle}>{children}</div>

        {footer && <div style={styles.footerStyle}>{footer}</div>}
      </div>
    </div>,
    document.body,
  );
}
