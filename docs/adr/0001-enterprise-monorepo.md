# ADR-0001: Enterprise Monorepo Architecture

Status: Accepted

Date: 2026-07-11

---

## Context

The goal of this repository is to become the reusable foundation for multiple enterprise-grade software products.

Future products include:

- AI Automation Platform
- Smart Building Platform
- Industrial IoT
- AI CRM
- AI ERP
- SaaS Products
- Internal Enterprise Tools

The repository must support long-term scalability, shared packages, reusable services, cloud-native deployment, and AI integration.

---

## Decision

The project will use a Monorepo architecture.

Core technologies:

- pnpm Workspace
- Turborepo
- Next.js
- FastAPI
- Docker
- PostgreSQL
- Redis

Shared code will live inside the `packages` directory.

Applications will live inside the `apps` directory.

Infrastructure code will remain isolated inside the `infrastructure` directory.

Reusable services such as MQTT, AI Agents and Automation will be developed independently under `services`.

---
## Scope

This decision applies to the entire repository and all future applications,
packages, services, and infrastructure components developed within this
Enterprise AI Platform Template.

## Consequences

### Advantages

- Shared code
- Faster development
- Unified tooling
- Easier CI/CD
- Reusable architecture
- Better scalability

### Trade-offs

- Initial setup is more complex.
- Developers must understand workspace architecture.
- Build tooling requires proper configuration.

---

## Alternatives Considered

### Polyrepo

Pros

- Simpler for very small projects.

Cons

- Code duplication
- Multiple repositories
- Harder maintenance
- Harder dependency management

Rejected.

---

## Why Monorepo

This repository is intended to become an Enterprise Platform rather than a single application.

The architecture should support multiple products without redesigning the repository structure.

---

## Related Decisions

- ADR-0002 — Package Manager (Planned)
- ADR-0003 — Build System (Planned)
