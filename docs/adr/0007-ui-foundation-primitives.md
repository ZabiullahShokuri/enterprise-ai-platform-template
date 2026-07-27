# ADR-0007

Title

Enterprise UI Foundation Primitives

---

## Status

Accepted

---

## Context

The Enterprise UI Platform Template requires a reusable
foundation layer that is independent from individual UI
components.

Instead of implementing infrastructure repeatedly inside
each component, the project introduces a dedicated
Foundation Layer.

This layer provides generic primitives used across all
current and future components.

---

## Decision

The Foundation Layer is composed of four categories:

• Context
• Collections
• Hooks
• Utilities

The initial primitives are:

- composeRefs
- createContext
- createCompoundComponent
- createCollection
- useControllableState

These primitives are framework-independent and reusable
throughout the Design System.

Collections follow an Enterprise-Level architecture instead
of a minimal registry implementation.

The collection system supports:

- Stable registration
- Ordered items
- Dynamic insertion
- Dynamic removal
- Nested collections
- Keyboard navigation
- Future virtualization support

---

## Consequences

Benefits

- Single implementation
- Consistent behavior
- Shared engineering patterns
- Lower maintenance cost
- Easier testing
- Easier documentation
- Better scalability

Trade-offs

- Slightly larger initial investment
- Higher abstraction level
- Requires engineering discipline

---

## Alternatives Considered

Minimal Collection Registry

Rejected.

Reason:

The minimal implementation would require future rewrites
when introducing advanced components such as:

- Select
- Menu
- Combobox
- Tree
- Navigation Menu

---

## References

ADR-0004 Frontend Architecture

ADR-0006 Design System Architecture
