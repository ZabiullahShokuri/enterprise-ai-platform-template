import { useDialogContext } from "./Dialog.context";
import type { DialogDescriptionProps } from "./Dialog.types";

export function DialogDescription({
  children,
  ...props
}: DialogDescriptionProps) {
  const { descriptionId } = useDialogContext();

  return (
    <p id={descriptionId} {...props}>
      {children}
    </p>
  );
}
