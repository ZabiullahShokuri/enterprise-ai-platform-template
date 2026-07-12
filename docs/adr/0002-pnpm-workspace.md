# ADR-0002: pnpm Workspace

Status: Accepted

Date: 2026-07-12

---

## Context

The Enterprise AI Platform Template will contain multiple applications,
shared packages, backend services, infrastructure modules, and reusable
libraries.

Managing dependencies independently for each project would increase
duplication, installation time, and maintenance complexity.

A unified workspace solution is required.

---

## Decision

The repository will use **pnpm Workspace** as the package management
strategy.

The workspace will be defined using a single `pnpm-workspace.yaml`
configuration file located at the repository root.

The workspace will manage:

- Applications
- Shared Packages
- Tooling
- Configuration Packages

All JavaScript and TypeScript projects will share dependencies through a
single workspace.

---

## Scope

This decision applies to every JavaScript and TypeScript application,
package, service, and tooling module inside this repository.

---

## Consequences

### Advantages

- Faster installation
- Disk space optimization
- Shared dependency management
- Better monorepo support
- Excellent compatibility with Turborepo

### Trade-offs

- Slight learning curve
- Different node_modules structure
- Some legacy packages may require adjustments

---

## Alternatives Considered

### npm Workspaces

Pros

- Built into npm

Cons

- Slower
- Less efficient storage
- Weaker monorepo tooling

Rejected.

---

### Yarn

Pros

- Mature ecosystem

Cons

- Multiple versions
- More configuration complexity

Rejected.

---

## Why pnpm

pnpm was selected because it provides excellent performance, efficient
disk usage through content-addressable storage, first-class monorepo
support, and seamless integration with Turborepo. These characteristics
make it well suited for long-term enterprise-scale development.

---

## Related Decisions

- ADR-0001 — Enterprise Monorepo Architecture
- ADR-0003 — Turborepo (Planned)

## References

- https://pnpm.io/workspaces
- https://turbo.build/
