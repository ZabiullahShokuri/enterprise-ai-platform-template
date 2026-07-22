import { forwardRef, useId } from "react";
import type { TextareaProps } from "./Textarea.types";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ id, label, helperText, error, errorMessage, ...props }, ref) => {
    const textareaId = id ?? useId();

    return (
      <div>
        {label && <label htmlFor={textareaId}>{label}</label>}

        <textarea id={textareaId} ref={ref} aria-invalid={error} {...props} />

        {error
          ? errorMessage && <p>{errorMessage}</p>
          : helperText && <p>{helperText}</p>}
      </div>
    );
  },
);

Textarea.displayName = "Textarea";
