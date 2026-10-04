# ADR-0013: Command Component Architecture

## Status

Accepted

## Date

2026-07-29

## Context

The Enterprise UI library requires a reusable Command primitive for searchable
and keyboard-driven collections of actions, navigation targets, and other
selectable items.

Command is intended to provide the foundation for future interaction patterns
such as command palettes, searchable selectors, and Combobox-like components.

The component must integrate with the existing Enterprise UI Foundation and
follow the compound-component and Context-based architecture already used
throughout the library.

The implementation must support:

- controlled and uncontrolled query state
- controlled and uncontrolled selection state
- item registration and unregistration
- centralized filtering
- active item tracking
- keyboard navigation
- item selection
- grouped items
- empty state
- loading state
- separators
- accessible collection semantics
- TypeScript safety
- testability
- reusable Context API

## Decision

Command will be implemented as a compound component system coordinated through
a dedicated React Context.

The public API consists of:

- `Command`
- `CommandInput`
- `CommandList`
- `CommandGroup`
- `CommandItem`
- `CommandEmpty`
- `CommandSeparator`
- `CommandLoading`

The root `Command` component owns shared interaction state, while child
components consume the state and actions they require through Context.

## State Management

The root `Command` component owns the shared interaction state.

The state model includes:

- query
- selected value
- active item
- registered items
- filtered items
- visible item count

The existing `useControllableState` Foundation hook is reused for query and
selection state.

Both controlled and uncontrolled patterns are supported where appropriate.

### Query State

The root manages the current query through:

- `query`
- `defaultQuery`
- `onQueryChange`

### Selection State

The root manages selection through:

- `value`
- `defaultValue`
- `onValueChange`

Selection is coordinated centrally so that mouse and keyboard interaction
follow the same selection path.

## Context

The Command Context coordinates:

- current query
- query updates
- selected value
- active item
- active item updates
- item registration
- item unregistration
- filtering
- visible item count
- item selection

The Context exposes only the state and actions required by child components.

### Item Registration

`CommandItem` registers itself with the root Command component.

The registry maintains:

- item values
- item order
- item selection callbacks

The root uses the registry to determine filtered items and to resolve
keyboard selection.

This keeps selection coordination inside the root rather than duplicating
selection behavior across individual interaction paths.

## CommandInput

`CommandInput` is responsible for collecting the user's search query.

It:

- renders a native input element
- exposes `searchbox` semantics
- updates the shared query
- handles keyboard navigation
- selects the active item on `Enter`
- supports controlled input behavior through the Command root state

The current keyboard interactions are:

- `ArrowDown` — move to the next visible item
- `ArrowUp` — move to the previous visible item
- `Home` — move to the first visible item
- `End` — move to the last visible item
- `Enter` — select the active visible item

`Escape` behavior is intentionally not part of the current implementation
contract and may be added in a future iteration depending on the consumer
context.

## CommandList

`CommandList` contains the searchable collection.

It exposes `listbox` semantics and contains the command items presented to the
user.

## CommandGroup

`CommandGroup` groups related command items.

It exposes `group` semantics and may provide an accessible group label through
the `heading` prop.

Filtering remains centralized at the Command root so individual items do not
implement independent filtering rules.

## CommandItem

`CommandItem` represents one selectable command.

It:

- registers with the root Command context
- participates in centralized filtering
- exposes active state
- exposes disabled state
- supports selection
- supports mouse interaction
- supports keyboard selection when focused

An enabled item is selected through the shared `selectItem` action.

The root updates the shared selection state and invokes the registered
selection callback for that item.

Disabled items cannot be directly selected.

## CommandEmpty

`CommandEmpty` displays when the current query produces no visible items.

It uses `status` semantics and is rendered only when the Command collection
contains no currently visible items.

## CommandSeparator

`CommandSeparator` provides semantic separation between command groups or
sections.

It uses `separator` semantics.

## CommandLoading

`CommandLoading` represents a loading or pending state for command results.

It uses `status` semantics with polite live-region behavior.

The component does not implement asynchronous state management itself; the
consumer controls when it is rendered.

## Filtering

Filtering is controlled centrally by the root Command component.

The root determines whether each registered item matches the current query.

The current filtering behavior is:

- empty query — all registered items are visible
- non-empty query — item values are compared case-insensitively
- matching is based on whether the item value contains the query

Individual items do not implement independent filtering rules.

This keeps filtering behavior consistent and leaves room for future search
strategies, including fuzzy matching, without changing the compound-component
structure.

## Keyboard Interaction

The current keyboard interaction model supports:

- `ArrowDown` — move to the next visible item
- `ArrowUp` — move to the previous visible item
- `Home` — move to the first visible item
- `End` — move to the last visible item
- `Enter` — select the active item

Navigation wraps when moving beyond the first or last visible item.

Keyboard navigation is currently based on visibility. Disabled-aware keyboard
navigation is a follow-up enhancement; direct selection of a disabled item is
already prevented by `CommandItem`.

`Escape` behavior is intentionally deferred until a consumer-level dismissal
contract is established.

## Accessibility

Command uses semantic roles appropriate for a searchable collection.

The current implementation provides:

- `searchbox` semantics for `CommandInput`
- `listbox` semantics for `CommandList`
- `option` semantics for `CommandItem`
- `group` semantics for `CommandGroup`
- `status` semantics for `CommandEmpty`
- `status` and polite live-region behavior for `CommandLoading`
- `separator` semantics for `CommandSeparator`
- active-state communication through `aria-selected`
- disabled-state communication through `aria-disabled`

The consumer is responsible for providing an accessible name for the search
input when required, for example through `aria-label` or
`aria-labelledby`.

Command intentionally avoids menu-specific semantics because its primary use
case is searchable collection interaction rather than traditional menu
navigation.

## Selection

Selection follows a single root-owned path.

When an enabled item is selected:

1. `CommandItem` requests selection through the Command Context.
2. The root updates the selected value.
3. The root invokes the registered `onSelect` callback for the selected item.

This applies to both mouse and keyboard selection.

Disabled items do not invoke selection.

## Consequences

### Positive

- reusable searchable interaction primitive
- centralized filtering
- centralized selection coordination
- composable compound-component API
- keyboard-first interaction model
- reusable foundation for future Combobox and Command Palette components
- predictable state coordination
- strong TypeScript support
- straightforward testing model

### Negative

- item registration adds implementation complexity
- centralized filtering requires registry synchronization
- keyboard navigation requires comprehensive testing
- active-item state must remain synchronized with filtered results
- disabled-aware keyboard navigation requires additional coordination

## Alternatives Considered

### Independent Item Filtering

Rejected because it would duplicate filtering logic and make active-item
management less predictable.

### Monolithic Command Component

Rejected because it reduces composability and makes advanced integrations
more difficult.

### Third-Party Command Primitive

Rejected because the Enterprise UI library is intentionally building its own
reusable primitives and Foundation.

## Current Scope

The current implementation intentionally focuses on the core searchable
collection behavior:

- query management
- item registration
- filtering
- active-item navigation
- selection
- disabled direct-selection protection
- compound components
- accessibility semantics
- testability

The following behaviors remain candidates for future iterations:

- `Escape` dismissal/clear behavior
- disabled-aware keyboard navigation
- advanced search or fuzzy filtering
- more sophisticated active-item accessibility relationships

## Validation

The implementation is considered valid when:

- TypeScript reports zero errors for the UI package
- Command-specific tests pass
- the complete UI test suite passes
- public exports are available
- filtering behavior is tested
- keyboard navigation and selection are tested
- documentation matches the implemented contract

Current validation includes:

- Command tests: passing
- UI test suite: passing
- UI TypeScript check: passing
- lint: passing
- production build: passing
- public Command exports: available through the UI component index
