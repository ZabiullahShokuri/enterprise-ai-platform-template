# ADR-0011: ContextMenu Component Architecture

## Status

Accepted

## Date

2026-07-29

## Context

The Enterprise UI library requires an accessible ContextMenu primitive for actions
that are associated with the user's contextual interaction, typically initiated
with the secondary mouse button.

The component must integrate with the existing UI foundation and follow the same
architectural patterns already established by Dialog, Popover, DropdownMenu,
and Menubar.

The implementation must support:

- controlled and uncontrolled open state
- right-click activation
- dismissal with Escape
- dismissal when clicking outside the menu
- portal rendering
- focus and keyboard interaction readiness
- WAI-ARIA menu semantics
- composable child components
- reusable Context API
- consistent TypeScript and testing patterns

## Decision

We will implement ContextMenu as a compound component system built around a
shared React Context.

The public component API will consist of:

- `ContextMenu`
- `ContextMenuTrigger`
- `ContextMenuContent`
- `ContextMenuPortal`
- `ContextMenuItem`
- `ContextMenuLabel`
- `ContextMenuSeparator`

### State Management

The root `ContextMenu` component owns the open state and supports both:

- controlled mode through `open` and `onOpenChange`
- uncontrolled mode through `defaultOpen`

The existing `useControllableState` foundation hook will be reused.

### Context

A dedicated `ContextMenuContext` will expose:

- `open`
- `setOpen`
- `triggerRef`
- `contentRef`

The Context is responsible only for state and references required by the
compound components.

### Trigger

`ContextMenuTrigger` will listen to the native `contextmenu` event.

The default behavior is:

1. prevent the browser context menu
2. open the ContextMenu
3. preserve the consumer's ability to prevent the default behavior

### Content

`ContextMenuContent` will:

- render only while the menu is open
- expose `role="menu"`
- register the content element through Context
- close on Escape
- close when clicking outside

Existing foundation hooks such as `useEscapeKey` and `useClickOutside`
will be reused.

### Portal

`ContextMenuPortal` will render the menu into `document.body` using React
DOM's `createPortal`.

The implementation will follow the existing Portal pattern used by
`PopoverPortal`.

### Menu Items

`ContextMenuItem` will expose:

- `role="menuitem"`
- disabled state
- `aria-disabled`
- item selection callback through `onSelect`

Selecting an enabled item will close the menu unless the interaction has been
prevented.

### Label and Separator

`ContextMenuLabel` provides non-interactive descriptive content.

`ContextMenuSeparator` provides a semantic separator using:

- `role="separator"`

### Accessibility

The component will use WAI-ARIA menu semantics and expose meaningful roles
for triggers, menus, menu items, groups, and separators where applicable.

Keyboard behavior is part of the component contract and is expected to evolve
with the shared menu interaction foundation.

## Consequences

### Positive

- consistent architecture across interactive Enterprise UI components
- reusable compound component API
- compatibility with existing Foundation hooks
- controlled and uncontrolled usage
- accessible semantic structure
- portal-based layering
- clear separation between state, trigger, content, and items

### Negative

- the component depends on the existing Foundation Context and state hooks
- keyboard behavior requires careful focus management
- ContextMenu and DropdownMenu intentionally share patterns, which requires
  maintaining consistency between both implementations

## Alternatives Considered

### Standalone Monolithic Component

Rejected because it would reduce composability and make advanced integrations
more difficult.

### Third-Party Menu Primitive

Rejected because the library is intentionally building its own reusable
Enterprise UI foundation.

### Shared Global Menu Context

Rejected because ContextMenu state must remain isolated to each ContextMenu
instance.

## Validation

The implementation is considered valid when:

- TypeScript completes with zero errors
- ContextMenu-specific tests pass
- the complete UI test suite passes
- public exports are available through `ContextMenu/index.ts`
- documentation matches the implemented API
