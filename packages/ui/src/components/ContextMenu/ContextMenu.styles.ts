export function getContextMenuStyles() {
  return {
    content: {
      minWidth: 180,
      padding: 4,
      borderRadius: 8,
      backgroundColor: "#ffffff",
      border: "1px solid #e5e7eb",
      boxShadow:
        "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    },

    item: {
      padding: "8px 12px",
      cursor: "pointer",
    },

    label: {
      padding: "8px 12px",
      fontWeight: 600,
    },

    separator: {
      margin: "4px 0",
    },
  };
}
