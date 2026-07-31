# ADR-0012: NavigationMenu Component Architecture

## Status

Accepted

## Date

2026-07-29

## Context

The Enterprise UI library requires a reusable NavigationMenu primitive for
primary and secondary site navigation.

NavigationMenu differs from action-oriented components such as DropdownMenu,
ContextMenu, and Menubar. Its primary responsibility is navigation rather than
executing contextual actions.

The component must support:

- composable navigation items
- links and navigation targets
- trigger/content relationships
- controlled and uncontrolled state
- keyboard navigation
- focus management
- Escape dismissal
- outside interaction handling
- portal rendering where required
- accessible navigation semantics
- reusable Context API
- consistent TypeScript patterns
- testable public behavior

## Decision

NavigationMenu will be implemented as a compound component system.

The public API will consist of:

- `NavigationMenu`
- `NavigationMenuList`
- `NavigationMenuItem`
- `NavigationMenuTrigger`
- `NavigationMenuContent`
- `NavigationMenuLink`
- `NavigationMenuIndicator`
- `NavigationMenuViewport`
- `NavigationMenuPortal`

### Root State

`NavigationMenu` owns the active/open navigation state.

It will support:

- controlled state through `value` and `onValueChange`
- uncontrolled state through `defaultValue`

The existing `useControllableState` Foundation hook will be reused.

### Context

A dedicated NavigationMenu Context will provide the state and element
references required by compound children.

The Context should expose only data and actions required for coordination
between the root, menu items, triggers, content, viewport, and indicator.

### NavigationMenuList

`NavigationMenuList` represents the primary navigation list.

It groups navigation items and provides the semantic structure required by the
navigation system.

### NavigationMenuItem

`NavigationMenuItem` represents one navigation entry.

An item may contain:

- a direct link
- a trigger
- associated content

### NavigationMenuTrigger

A trigger opens or activates associated navigation content.

It is intended for navigation sections that contain additional links rather
than immediate actions.

### NavigationMenuContent

`NavigationMenuContent` contains secondary navigation links associated with a
specific item.

Content visibility is coordinated through NavigationMenu Context.

### NavigationMenuLink

`NavigationMenuLink` represents an actual navigation destination.

It should remain semantically link-oriented and support standard anchor
behavior.

### NavigationMenuIndicator

`NavigationMenuIndicator` visually identifies the currently active navigation
item or content relationship.

### NavigationMenuViewport

`NavigationMenuViewport` provides a shared visual viewport for navigation
content and allows future positioning and animation improvements without
changing the compound component API.

### NavigationMenuPortal

`NavigationMenuPortal` renders navigation content through React Portal when
layering or overflow constraints require it.

The implementation will follow the existing portal conventions in the
repository.

## Accessibility

NavigationMenu will follow accessible navigation semantics.

The implementation will provide:

- meaningful navigation structure
- keyboard interaction
- focus management
- trigger/content relationships
- accessible names
- appropriate link semantics
- predictable Escape behavior

Keyboard behavior will be documented as part of the public component contract.

## Interaction Model

NavigationMenu is navigation-oriented.

It must not inherit action-menu semantics from DropdownMenu or ContextMenu
unless a behavior is explicitly required by the navigation pattern.

Navigation targets should remain real links whenever possible.

## Consequences

### Positive

- reusable navigation architecture
- clear separation between navigation and action menus
- composable API
- strong TypeScript support
- compatibility with the existing Foundation
- future support for advanced navigation layouts
- consistent architecture with the rest of the Enterprise UI library

### Negative

- more complex than a simple list of links
- requires coordination between trigger, content, viewport, and indicator
- advanced keyboard and focus behavior requires careful testing

## Alternatives Considered

### Simple Navigation List

Rejected because it does not provide composable triggered navigation sections.

### DropdownMenu-Based Navigation

Rejected because DropdownMenu is action-oriented and uses menu semantics
that are not appropriate as the default model for site navigation.

### Third-Party Navigation Primitive

Rejected because the Enterprise UI library is intentionally implementing
its own reusable design-system primitives.

## Validation

The implementation is considered complete when:

- TypeScript reports zero errors
- NavigationMenu-specific tests pass
- the complete UI test suite passes
- all public exports are available
- ADR and component documentation match the implementation
- accessibility behavior is covered by tests
