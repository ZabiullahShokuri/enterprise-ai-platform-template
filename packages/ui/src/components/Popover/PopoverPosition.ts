export interface PopoverPosition {
  top: number;
  left: number;
}

export function calculatePopoverPosition(
  trigger: HTMLElement,
): PopoverPosition {
  const rect = trigger.getBoundingClientRect();

  return {
    top: rect.bottom + window.scrollY,
    left: rect.left + window.scrollX,
  };
}
