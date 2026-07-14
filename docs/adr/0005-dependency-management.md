# ADR-0005: Dependency Management Strategy

- Status: Accepted
- Date: 2026-07-14

---

## Context

The Enterprise AI Platform Template is built as a pnpm Workspace with a Turborepo monorepo architecture.

To ensure reproducible builds, consistent dependency resolution, and long-term maintainability, the project requires a standardized dependency management strategy.

---

## Decision

The project adopts the following rules:

### Package Manager

- pnpm is the official package manager.
- All installations are performed from the workspace root.

---

### Lockfile

- `pnpm-lock.yaml` is committed to Git.
- Every dependency change updates the lockfile.

---

### Workspace Dependencies

Internal packages always use:

workspace:*

Example:

@enterprise/ui
@enterprise/types
@enterprise/tsconfig

---

### External Dependencies

Dependencies are added only to the package that requires them.

Applications own application dependencies.

Shared packages own shared dependencies.

---

### Installation

Use:

pnpm install

from the workspace root.

Package-specific installations use:

pnpm --filter <package> add <dependency>

---

### Version Management

The pnpm version is pinned in the workspace root.

Dependencies are updated intentionally.

---

## Consequences

Advantages:

- Reproducible builds
- Stable CI/CD
- Predictable dependency graph
- Easier maintenance
- Enterprise-ready workspace