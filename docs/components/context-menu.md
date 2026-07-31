# ContextMenu

## Overview

`ContextMenu` is an accessible compound component for displaying a contextual
action menu in response to a secondary mouse interaction.

It is designed for interfaces such as:

- file explorers
- document editors
- tables
- dashboards
- asset managers
- design tools

The component integrates with the Enterprise UI foundation and follows the
same architectural conventions used by `Dialog`, `Popover`, and
`DropdownMenu`.

---

## Features

- right-click activation
- controlled and uncontrolled state
- Escape-to-close behavior
- click-outside dismissal
- portal rendering
- composable compound components
- menu and menu-item semantics
- disabled items
- labels
- separators
- TypeScript support
- accessible structure
- reusable Foundation hooks

---

## API

### ContextMenu

Root provider for a ContextMenu instance.

#### Props

| Prop           | Type                      | Required | Description                        |
| -------------- | ------------------------- | -------: | ---------------------------------- |
| `children`     | `ReactNode`               |      Yes | ContextMenu contents               |
| `open`         | `boolean`                 |       No | Controlled open state              |
| `defaultOpen`  | `boolean`                 |       No | Initial uncontrolled state         |
| `onOpenChange` | `(open: boolean) => void` |       No | Called when the open state changes |

---

### ContextMenuTrigger

Defines the region that activates the ContextMenu.

The component listens to the native `contextmenu` event.

#### Props

It extends:

```ts
HTMLAttributes<HTMLElement>;
```
