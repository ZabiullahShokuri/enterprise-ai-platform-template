import type { CSSProperties } from "react";

export function getModalStyles() {
  const overlayStyle: CSSProperties = {
    position: "fixed",
    inset: 0,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    background: "rgba(0,0,0,.45)",

    zIndex: 1000,
  };

  const modalStyle: CSSProperties = {
    background: "#ffffff",

    borderRadius: 12,

    minWidth: 420,

    maxWidth: 640,

    width: "90%",

    maxHeight: "90vh",

    overflow: "auto",

    boxShadow: "0 20px 60px rgba(0,0,0,.25)",

    display: "flex",

    flexDirection: "column",
  };

  const headerStyle: CSSProperties = {
    display: "flex",

    justifyContent: "space-between",

    alignItems: "center",

    padding: "18px 20px",

    borderBottom: "1px solid #e5e7eb",
  };

  const titleStyle: CSSProperties = {
    fontSize: 18,

    fontWeight: 600,

    color: "#111827",
  };

  const closeButtonStyle: CSSProperties = {
    border: "none",

    background: "transparent",

    cursor: "pointer",

    fontSize: 20,

    lineHeight: 1,

    color: "#6b7280",
  };

  const bodyStyle: CSSProperties = {
    padding: 20,
  };

  const footerStyle: CSSProperties = {
    display: "flex",

    justifyContent: "flex-end",

    gap: 12,

    padding: 20,

    borderTop: "1px solid #e5e7eb",
  };

  return {
    overlayStyle,

    modalStyle,

    headerStyle,

    titleStyle,

    closeButtonStyle,

    bodyStyle,

    footerStyle,
  };
}
