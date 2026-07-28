import { useDialogContext } from "./Dialog.context";
import type { DialogTitleProps } from "./Dialog.types";

export function DialogTitle({
  children,
  ...props
}: DialogTitleProps) {
  const { titleId } = useDialogContext();

  return (
    <h2
      id={titleId}
      {...props}
    >
      {children}
    </h2>
  );
}