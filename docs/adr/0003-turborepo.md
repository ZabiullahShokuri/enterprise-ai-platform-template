# ADR-0003: Turborepo Build System

Status: Accepted

Date: 2026-07-12

---

## Context

The Enterprise AI Platform Template will host multiple applications,
backend services, shared packages, and infrastructure modules.

As the repository grows, build times, dependency management, and task
execution become increasingly complex.

A build orchestration system is required to ensure efficient local
development and scalable Continuous Integration (CI).

---

## Decision

The repository will use **Turborepo** as the build orchestration system.

Turborepo will manage:

- Build pipelines
- Development tasks
- Test execution
- Linting
- Dependency-aware task execution
- Local and remote caching

The build pipeline will be configured through a single `turbo.json`
file located at the repository root.

---

## Scope

This decision applies to all applications, services, packages, and
tooling modules managed within this monorepo.

---

## Consequences

### Advantages

- Incremental builds
- Dependency-aware execution
- Local caching
- Remote cache support
- Faster CI/CD pipelines
- Excellent integration with pnpm Workspace

### Trade-offs

- Additional configuration
- Learning curve for new contributors
- Cache management requires understanding

---

## Alternatives Considered

### Nx

Pros

- Rich ecosystem
- Advanced code generators

Cons

- Higher complexity
- More opinionated architecture

Rejected.

---

### Native npm Scripts

Pros

- Simple
- No additional tooling

Cons

- No task orchestration
- No caching
- Poor scalability

Rejected.

---

## Why Turborepo

Turborepo provides a lightweight, high-performance build system that
integrates seamlessly with pnpm Workspace and scales effectively for
enterprise monorepos. Its incremental execution and caching
capabilities significantly improve developer productivity and CI/CD
performance.

---

## Related Decisions

- ADR-0001 — Enterprise Monorepo Architecture
- ADR-0002 — pnpm Workspace

## References

- https://turbo.build/
- https://pnpm.io/workspaces
