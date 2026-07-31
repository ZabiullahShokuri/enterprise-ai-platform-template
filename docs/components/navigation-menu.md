# NavigationMenu

## Overview

`NavigationMenu` is a compound navigation component for building accessible
primary and secondary navigation systems.

It is intended for application headers, website navigation, dashboards, and
other interfaces where navigation items may contain nested navigation content.

Unlike `DropdownMenu` and `ContextMenu`, `NavigationMenu` is navigation-first.
Its primary purpose is navigating between destinations rather than executing
contextual actions.

---

## Features

- compound component architecture
- controlled and uncontrolled state
- navigation lists
- navigation items
- triggers
- nested navigation content
- navigation links
- shared viewport
- active indicator
- portal support
- keyboard navigation
- focus management
- Escape handling
- accessible structure
- TypeScript support
- reusable Foundation integration

---

## API

### NavigationMenu

Root component responsible for navigation state and coordination.

#### Props

| Prop            | Type                      | Required | Description                                 |
| --------------- | ------------------------- | -------: | ------------------------------------------- |
| `children`      | `ReactNode`               |      Yes | NavigationMenu contents                     |
| `value`         | `string`                  |       No | Controlled active value                     |
| `defaultValue`  | `string`                  |       No | Initial uncontrolled value                  |
| `onValueChange` | `(value: string) => void` |       No | Called when active navigation value changes |

---

### NavigationMenuList

Groups navigation items into the primary navigation list.

Typical structure:

```tsx
<NavigationMenuList>
  <NavigationMenuItem>...</NavigationMenuItem>
</NavigationMenuList>
```
