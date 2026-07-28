import { shadows } from "../../styles/tokens/shadows";

export function getDialogStyles() {
  return {
    rootStyle: {
      position: "relative",
    } as const,

    overlayStyle: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,.45)",
    } as const,

    contentStyle: {
      position: "fixed",

      top: "50%",

      left: "50%",

      transform: "translate(-50%, -50%)",

      minWidth: 400,

      background: "#fff",

      borderRadius: 12,

      boxShadow: shadows.lg,

      padding: 24,
    } as const,
  };
}