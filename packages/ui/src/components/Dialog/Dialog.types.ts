import type { HTMLAttributes, ReactNode, ButtonHTMLAttributes } from "react";

export interface DialogProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;

  open?: boolean;

  defaultOpen?: boolean;

  onOpenChange?: (open: boolean) => void;
}

export interface DialogTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface DialogContentProps extends HTMLAttributes<HTMLDivElement> {}

export interface DialogOverlayProps extends HTMLAttributes<HTMLDivElement> {}

export interface DialogTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

export interface DialogDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

export interface DialogCloseProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
