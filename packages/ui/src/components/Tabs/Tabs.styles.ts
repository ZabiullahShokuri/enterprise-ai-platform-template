import type { CSSProperties } from "react";

export function getTabsStyles() {
  const containerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  };

  const listStyle: CSSProperties = {
    display: "flex",
    borderBottom: "1px solid #e5e7eb",
    gap: 4,
  };

  const tabStyle: CSSProperties = {
    border: "none",
    background: "transparent",
    cursor: "pointer",
    padding: "12px 18px",
    fontSize: 14,
    fontWeight: 500,
    color: "#6b7280",
    borderBottom: "2px solid transparent",
    transition: "all .2s ease",
  };

  const activeTabStyle: CSSProperties = {
    color: "#2563eb",
    borderBottom: "2px solid #2563eb",
  };

  const disabledTabStyle: CSSProperties = {
    opacity: 0.5,
    cursor: "not-allowed",
  };

  const panelStyle: CSSProperties = {
    padding: "20px 0",
  };

  return {
    containerStyle,
    listStyle,
    tabStyle,
    activeTabStyle,
    disabledTabStyle,
    panelStyle,
  };
}
