# Command

## Overview

`Command` is a searchable, keyboard-driven collection primitive for actions,
navigation targets, and other selectable items.

It is designed as a reusable foundation for:

* command palettes
* searchable action lists
* application launchers
* filtered navigation
* future Combobox-like components

Unlike `DropdownMenu` and `ContextMenu`, `Command` is primarily query-driven
and search-oriented.

---

## Features

* searchable command collection
* controlled and uncontrolled query state
* controlled and uncontrolled selection state
* centralized filtering
* active-item tracking
* keyboard navigation
* selectable items
* disabled items
* grouped items
* empty state
* loading state
* separators
* accessible collection semantics
* compound-component API
* TypeScript support
* reusable Context API

---

## Components

The Command API consists of:

* `Command`
* `CommandInput`
* `CommandList`
* `CommandGroup`
* `CommandItem`
* `CommandEmpty`
* `CommandSeparator`
* `CommandLoading`

---

## Basic Usage

```tsx
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@enterprise/ui";

export function Example() {
  return (
    <Command>
      <CommandInput placeholder="Search commands..." />

      <CommandList>
        <CommandEmpty>No commands found.</CommandEmpty>

        <CommandGroup heading="Actions">
          <CommandItem value="New file">New file</CommandItem>
          <CommandItem value="Open file">Open file</CommandItem>
          <CommandItem value="Save">Save</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
```

---

## Command

The root `Command` component owns the shared interaction state.

It coordinates:

* query state
* selection state
* item registration
* filtering
* active-item state
* item selection

### Props

| Prop            | Type                                   | Description                          |
| --------------- | -------------------------------------- | ------------------------------------ |
| `query`         | `string`                               | Controlled search query              |
| `defaultQuery`  | `string`                               | Initial query for uncontrolled usage |
| `onQueryChange` | `(query: string) => void`              | Called when the query changes        |
| `value`         | `string \| undefined`                  | Controlled selected value            |
| `defaultValue`  | `string \| undefined`                  | Initial selected value               |
| `onValueChange` | `(value: string \| undefined) => void` | Called when selection changes        |

All standard `HTMLDivElement` props are also supported.

---

## CommandInput

`CommandInput` is the search input for the Command collection.

It:

* updates the shared query
* exposes `searchbox` semantics
* supports keyboard navigation
* selects the active item when `Enter` is pressed

Example:

```tsx
<CommandInput
  placeholder="Search commands..."
  aria-label="Search commands"
/>
```

For accessibility, consumers should provide an accessible name using
`aria-label`, `aria-labelledby`, or an equivalent labeling strategy.

---

## CommandList

`CommandList` contains the command items.

It exposes `listbox` semantics.

Example:

```tsx
<CommandList>
  <CommandItem value="Open">Open</CommandItem>
  <CommandItem value="Save">Save</CommandItem>
</CommandList>
```

---

## CommandGroup

`CommandGroup` groups related command items.

It exposes `group` semantics.

Example:

```tsx
<CommandGroup heading="File">
  <CommandItem value="New">New</CommandItem>
  <CommandItem value="Open">Open</CommandItem>
  <CommandItem value="Save">Save</CommandItem>
</CommandGroup>
```

The `heading` prop may be used to provide an accessible group label.

---

## CommandItem

`CommandItem` represents a selectable command.

### Props

| Prop       | Type                      | Description                                           |
| ---------- | ------------------------- | ----------------------------------------------------- |
| `value`    | `string`                  | Unique command value used for filtering and selection |
| `disabled` | `boolean`                 | Prevents direct selection when `true`                 |
| `onSelect` | `(value: string) => void` | Called when the item is selected                      |

Standard `HTMLDivElement` props are also supported.

Example:

```tsx
<CommandItem
  value="Save"
  onSelect={(value) => {
    console.log("Selected:", value);
  }}
>
  Save
</CommandItem>
```

Disabled items cannot be directly selected:

```tsx
<CommandItem value="Delete" disabled>
  Delete
</CommandItem>
```

---

## CommandEmpty

`CommandEmpty` is rendered when no registered item matches the current
query.

Example:

```tsx
<CommandList>
  <CommandEmpty>No results found.</CommandEmpty>

  <CommandItem value="Settings">Settings</CommandItem>
</CommandList>
```

The component uses `status` semantics.

---

## CommandLoading

`CommandLoading` represents a loading or pending state.

Example:

```tsx
<CommandLoading>Loading commands...</CommandLoading>
```

The component uses `status` semantics with polite live-region behavior.

`CommandLoading` does not manage asynchronous state itself. The consumer
controls when it is rendered.

---

## CommandSeparator

`CommandSeparator` provides semantic separation between command sections.

Example:

```tsx
<CommandGroup heading="File">
  <CommandItem value="New">New</CommandItem>
  <CommandItem value="Open">Open</CommandItem>
</CommandGroup>

<CommandSeparator />

<CommandGroup heading="Account">
  <CommandItem value="Profile">Profile</CommandItem>
</CommandGroup>
```

---

## Filtering

Filtering is centralized at the `Command` root.

The current filtering behavior is:

1. An empty query displays all registered items.
2. A non-empty query is compared against each item's `value`.
3. Matching is case-insensitive.
4. An item is visible when its value contains the query.

For example, searching for:

```text
sav
```

matches:

```text
Save
Save as
```

but does not match:

```text
Open
```

Individual `CommandItem` components do not implement their own filtering
logic.

---

## Keyboard Navigation

The search input supports the following keyboard interactions:

| Key         | Behavior                          |
| ----------- | --------------------------------- |
| `ArrowDown` | Move to the next visible item     |
| `ArrowUp`   | Move to the previous visible item |
| `Home`      | Move to the first visible item    |
| `End`       | Move to the last visible item     |
| `Enter`     | Select the active item            |

Navigation wraps from the last visible item to the first and from the first
to the last.

`Escape` behavior is not currently implemented and is reserved for a future
iteration.

Disabled-aware keyboard navigation is also a future enhancement. Direct
selection of disabled items is prevented by `CommandItem`.

---

## Selection

Selection is coordinated by the root `Command` component.

When an enabled item is selected:

1. The item requests selection through Command Context.
2. The root updates the selected value.
3. The registered `onSelect` callback is invoked.

This provides the same selection path for mouse and keyboard interaction.

Example:

```tsx
<Command
  defaultValue="Open"
  onValueChange={(value) => {
    console.log("Selected value:", value);
  }}
>
  <CommandInput aria-label="Search commands" />

  <CommandList>
    <CommandItem
      value="Open"
      onSelect={(value) => {
        console.log("Command selected:", value);
      }}
    >
      Open
    </CommandItem>
  </CommandList>
</Command>
```

---

## Controlled Query

The query can be controlled by the consumer:

```tsx
const [query, setQuery] = useState("");

<Command
  query={query}
  onQueryChange={setQuery}
>
  <CommandInput aria-label="Search commands" />
  <CommandList>
    <CommandItem value="Settings">Settings</CommandItem>
  </CommandList>
</Command>;
```

---

## Controlled Selection

Selection can also be controlled:

```tsx
const [value, setValue] = useState<string | undefined>();

<Command
  value={value}
  onValueChange={setValue}
>
  <CommandInput aria-label="Search commands" />

  <CommandList>
    <CommandItem value="Profile">Profile</CommandItem>
    <CommandItem value="Settings">Settings</CommandItem>
  </CommandList>
</Command>;
```

---

## Accessibility

Command uses semantic roles appropriate for a searchable collection.

The current implementation provides:

* `searchbox` for `CommandInput`
* `listbox` for `CommandList`
* `option` for `CommandItem`
* `group` for `CommandGroup`
* `status` for `CommandEmpty`
* `status` with polite live-region behavior for `CommandLoading`
* `separator` for `CommandSeparator`
* `aria-selected` for active item state
* `aria-disabled` for disabled item state

Consumers should provide an accessible name for the search input.

Command intentionally does not use menu semantics because its primary use case
is a searchable collection rather than a traditional menu.

---

## Architecture

Command follows the Enterprise UI compound-component pattern.

The root `Command` owns shared state and exposes it through a dedicated
Context.

`CommandItem` registers with the root and provides its selection callback.

The root maintains the item registry and centralized filtering logic.

This architecture keeps:

* state coordination centralized
* filtering consistent
* selection behavior deterministic
* child components composable
* future search strategies possible without changing the public API

---

## Current Limitations

The current implementation intentionally keeps the first Command iteration
focused on the core interaction model.

The following behaviors are not currently implemented:

* `Escape` dismissal or query clearing
* disabled-aware keyboard navigation
* fuzzy search
* advanced search ranking
* sophisticated active-item accessibility relationships

These can be introduced in future iterations without changing the fundamental
compound-component architecture.

---

## Testing

Command currently has tests covering:

* rendering
* item rendering
* query filtering
* empty state
* keyboard navigation
* keyboard selection

The UI package test suite should also be run when changing Command behavior.

Recommended commands:

```cmd
pnpm --filter @enterprise/ui exec tsc --noEmit
pnpm --filter @enterprise/ui exec vitest run src/components/Command/Command.test.tsx
pnpm --filter @enterprise/ui exec vitest run
```

For repository-level validation:

```cmd
pnpm lint
pnpm build
```
