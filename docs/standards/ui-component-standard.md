# UI Component Standard

Version: 1.0

Status: Active

---

# Purpose

This document defines the official engineering standard for every UI component inside the Enterprise AI Platform Template.

Every component MUST follow these rules.

No exception.

---

# Architecture Principles

Every component must be:

- Reusable
- Predictable
- Typed
- Tested
- Accessible
- Framework Independent
- Token Driven
- Easy to Maintain

---

# Folder Structure

Every component must have exactly this structure.

Component/

├── Component.tsx

├── Component.types.ts

├── Component.styles.ts

├── Component.test.tsx

└── index.ts

---

# Component Rules

Every component must:

- use forwardRef when appropriate
- export named component
- use import type
- receive typed props
- support className
- support style
- support children when applicable

---

# Styling Rules

No CSS files.

No SCSS.

No Styled Components.

No Tailwind.

Every style must be generated from:

getComponentStyles()

Styles must use Design Tokens only.

Allowed tokens:

colors

spacing

radius

typography

shadows

motion

zIndex

---

# Type Rules

Always use:

import type

Never import runtime values for types.

Every prop must be explicitly typed.

Avoid any.

Avoid unknown unless required.

---

# Design Tokens

Components never hardcode colors.

Components never hardcode spacing.

Components never hardcode radius.

Always use tokens.

---

# Testing Rules

Every component requires:

Rendering

Variants

States

Disabled

Interaction

Accessibility

Minimum:

6 tests

---

# Accessibility

Use semantic HTML.

Support keyboard interaction.

Support ARIA when required.

Never sacrifice accessibility for styling.

---

# Export Rules

Every component exports from:

index.ts

Every component is exported from:

components/index.ts

---

# Git Workflow

Implementation

↓

TypeScript

↓

Tests

↓

Review

↓

Commit

↓

Push

---

# Definition of Done

A component is complete only if:

✓ Types pass

✓ Tests pass

✓ Export added

✓ Documentation updated (when needed)

✓ Repository clean

✓ Commit completed

✓ Push completed

---

# Forbidden

No inline hacks.

No duplicated logic.

No duplicated tokens.

No unused props.

No dead code.

No commented code.

No temporary fixes.

---

# Engineering Principle

Architecture First.

Documentation Second.

Implementation Third.

Quality Always.
