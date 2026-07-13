# ADR-0004: Frontend Architecture (Next.js)

Status: Accepted

Date: 2026-07-12

---

## Context

The Enterprise AI Platform Template is intended to support multiple
enterprise-grade applications, including AI platforms, SaaS products,
IoT systems, internal business tools, and customer-facing web
applications.

The frontend architecture must provide a scalable, maintainable, and
high-performance foundation that supports long-term development while
remaining consistent across multiple products.

A standardized frontend framework and project structure are required to
ensure code reuse, developer productivity, and architectural consistency
throughout the monorepo.

---

## Decision

The repository will adopt **Next.js** as the standard framework for all
web frontend applications developed within this monorepo.

New frontend applications will use:

- React
- Next.js App Router
- TypeScript
- Shared ESLint Configuration
- Shared TypeScript Configuration
- Shared Prettier Configuration
- Turborepo
- pnpm Workspace

The architecture is intended to maximize scalability, maintainability,
developer experience, and long-term consistency across all frontend
applications.

---

## Frontend Principles

All frontend applications within this monorepo must follow the
following architectural principles:

- Feature-first organization
- Component reusability
- Separation of concerns
- Type safety by default
- Composition over inheritance
- Shared configuration packages
- Shared UI and business logic where appropriate
- Convention over configuration
- Minimal coupling between features
- Scalable folder organization
- Performance by default
- Accessibility by default

---

## Directory Structure

Every frontend application within this monorepo should follow a
consistent and feature-oriented directory structure.

```
apps/
└── web/
    ├── public/
    ├── src/
    │   ├── app/
    │   ├── features/
    │   ├── components/
    │   ├── layouts/
    │   ├── providers/
    │   ├── hooks/
    │   ├── services/
    │   ├── store/
    │   ├── shared/
    │   ├── lib/
    │   ├── config/
    │   ├── styles/
    │   ├── types/
    │   └── utils/
    ├── tests/
    ├── middleware.ts
    ├── next.config.ts
    ├── package.json
    ├── tsconfig.json
    └── .env.example
```

---

### Responsibilities

- `app/` — Next.js App Router entry point.
- `features/` — Business features organized by domain. Feature-specific components, hooks, services, and types should remain
  inside their respective feature directories whenever possible.
- `components/` — Shared presentation components that are reusable across multiple features.
- `layouts/` — Application layouts and layout components.
- `hooks/` — Shared React hooks.
- `lib/` — Framework-independent helper libraries.
- `services/` — API clients and external integrations.
- `providers/` — React context providers.
- `store/` — Global state management.
- `styles/` — Global styles and design tokens.
- `types/` — Application-specific TypeScript types.
- `utils/` — Generic utility functions.
- `config/` — Frontend configuration.
- `middleware.ts` — Request middleware and route protection.
- `tests/` — Unit, integration, and end-to-end tests.
- `shared/` — Shared frontend modules, constants, schemas, and utilities used across multiple features.

## Standards

All frontend applications developed within this monorepo must comply
with the following engineering standards.

### Language

- TypeScript is mandatory.
- Strict TypeScript mode must remain enabled.
- JavaScript source files should be avoided unless explicitly required.

### Framework

- Next.js App Router is the standard routing system.
- React Server Components should be preferred whenever applicable.
- Client Components must be explicitly declared using the `"use client"` directive.

### Architecture

- Business logic must remain inside feature modules.
- Presentation components should remain stateless whenever practical.
- Shared functionality should be extracted into reusable packages or shared modules.
- Features should remain loosely coupled and independently maintainable.

### Code Quality

- Shared ESLint configuration is mandatory.
- Shared Prettier configuration is mandatory.
- Type checking must succeed before merging changes.
- Linting errors must be resolved before merging changes.

### Configuration

- Environment variables must be accessed through a centralized configuration layer.
- Application configuration should not be duplicated across projects.

### Performance

- Server-side rendering should be preferred when appropriate.
- Static rendering should be used whenever possible.
- Client-side rendering should only be used when necessary.

### Security

- Secrets must never be committed to the repository.
- Sensitive configuration must remain outside version control.

### Testing

- New features should include appropriate tests.
- Shared packages should be tested independently whenever applicable.

## Naming Conventions

To ensure consistency across all frontend applications, the following
naming conventions must be followed.

### Directories

- Directory names must use **kebab-case**.
- Feature directories must use domain-oriented names.
- Avoid generic directory names unless they represent shared modules.

Examples:

```
user-profile/
authentication/
billing/
dashboard/
```

### React Components

- React component filenames must use **PascalCase**.
- Each component should export a single primary component.

Examples:

```
UserCard.tsx
LoginForm.tsx
DashboardHeader.tsx
```

### Hooks

- Custom hooks must begin with `use`.
- Hook filenames should use **camelCase**.

Examples:

```
useAuth.ts
useTheme.ts
usePagination.ts
```

### Utility Modules

- Utility files should use **camelCase**.

Examples:

```
formatDate.ts
generateSlug.ts
parseCurrency.ts
```

### Types

- Shared interfaces, types, and enums should use **PascalCase**.
- Type aliases should clearly describe their purpose.

Examples:

```
User.ts
ApiResponse.ts
ThemeMode.ts
```

### Constants

- Constant filenames should use **camelCase**.
- Exported constant values should use **UPPER_SNAKE_CASE** when immutable.

Examples:

```
apiEndpoints.ts

export const DEFAULT_PAGE_SIZE = 20;
export const API_TIMEOUT = 30000;
```

### Environment Files

Environment files must follow the standard Next.js naming convention.

Examples:

```
.env
.env.local
.env.development
.env.production
.env.example
```

## Import Strategy

To maintain a scalable and maintainable codebase, frontend applications
must follow a predictable import hierarchy.

Imports should always flow from higher-level application modules toward
lower-level shared modules.

### Import Priority

1. External libraries
2. Shared packages (`@enterprise/*`)
3. Shared application modules (`@/shared`)
4. Feature modules (`@/features`)
5. Local modules
6. Relative imports (same directory only)

Example:

```ts
import { useState } from "react";

import { User } from "@enterprise/types";

import { Button } from "@/shared/components";
import { apiClient } from "@/shared/lib/api";

import { LoginForm } from "@/features/authentication";

import { helpers } from "./helpers";
```

---

### Path Aliases

Applications should use TypeScript path aliases instead of deep relative
imports.

Preferred:

```ts
import { Button } from "@/shared/components";
```

Avoid:

```ts
import Button from "../../../../shared/components/Button";
```

---

### Feature Isolation

Features should remain independent whenever possible.

A feature must not directly import internal implementation details from
another feature.

Preferred:

```text
authentication
        ↓
shared
```

Avoid:

```text
authentication
        ↓
dashboard
```

If multiple features require common functionality, that functionality
must be extracted into a shared module or reusable package.

---

### Shared Packages

Reusable code shared across multiple applications should reside inside
the `packages/` workspace.

Examples:

- @enterprise/types
- @enterprise/eslint-config
- @enterprise/tsconfig
- @enterprise/prettier-config

---

### Relative Imports

Relative imports are permitted only within the same feature or local
directory.

Avoid long relative import chains.

Preferred:

```ts
./Button
./types
./helpers
```

Avoid:

```ts
../../../../components/Button
```

---

### Dependency Direction

Dependencies should follow a one-way architecture.

```text
Application
      ↓
Features
      ↓
Shared
      ↓
Packages
```

Lower layers must never depend on higher layers.

This dependency direction helps maintain modularity, simplifies testing,
and reduces architectural coupling.

## Consequences

Adopting this frontend architecture establishes a consistent foundation
for all web applications within the Enterprise AI Platform Template.

### Advantages

- Consistent architecture across all frontend applications.
- Faster onboarding for new developers.
- Improved code maintainability and readability.
- Clear separation of business logic and presentation.
- Better scalability as the number of applications and features grows.
- Increased code reuse through shared packages and modules.
- Simplified maintenance of shared tooling and configuration.
- Improved developer experience through standardized project structure.
- Better support for automated testing and CI/CD pipelines.
- Reduced architectural drift across teams and products.

### Trade-offs

- Initial project setup requires additional planning.
- Developers must understand the feature-oriented architecture.
- Strict architectural rules require continuous code reviews.
- Some simple applications may initially appear more structured than necessary.

### Long-term Impact

This architecture is intended to serve as the default frontend
foundation for future applications within the monorepo. Maintaining
consistent standards reduces technical debt, simplifies long-term
maintenance, and enables sustainable growth of the platform.

## Alternatives Considered

### React with Vite

#### Pros

- Lightweight development environment.
- Fast startup and build times.
- Minimal configuration.

#### Cons

- No built-in full-stack capabilities.
- Additional setup required for routing, SSR, and API integration.
- Less suitable as the default framework for enterprise applications.

Rejected.

---

### Remix

#### Pros

- Excellent performance.
- Strong support for web standards.
- Modern routing model.

#### Cons

- Smaller ecosystem compared to Next.js.
- Fewer enterprise integrations.
- Lower adoption across large development teams.

Rejected.

---

### Nuxt

#### Pros

- Excellent developer experience.
- Strong SSR capabilities.

#### Cons

- Vue ecosystem.
- Does not align with the organization's React-based frontend strategy.

Rejected.

---

### Plain React

#### Pros

- Maximum flexibility.
- Minimal framework constraints.

#### Cons

- No standardized application architecture.
- Requires additional tooling for routing, rendering, and optimization.
- Higher maintenance effort across multiple applications.

Rejected.

## Why Next.js

Next.js was selected as the standard frontend framework because it
provides a mature, scalable, and production-ready foundation for
enterprise web applications.

Its support for React Server Components, the App Router, Server-Side
Rendering (SSR), Static Site Generation (SSG), Incremental Static
Regeneration (ISR), API Routes, and built-in performance optimizations
makes it well suited for modern enterprise development.

In addition, Next.js integrates seamlessly with TypeScript, Turborepo,
pnpm Workspace, shared configuration packages, and cloud deployment
platforms such as Vercel, Azure, AWS, and Google Cloud.

By standardizing on Next.js, all frontend applications within this
monorepo share a common architecture, tooling, and development
experience, reducing long-term maintenance costs and improving
developer productivity.

This decision aligns with the project's goals of scalability,
maintainability, consistency, and long-term enterprise growth.

## Related Decisions

This decision builds upon the following Architecture Decision Records:

- ADR-0001 — Enterprise Monorepo Architecture
- ADR-0002 — pnpm Workspace
- ADR-0003 — Turborepo Build System

Together, these decisions establish the architectural foundation for
building scalable, maintainable, and reusable enterprise applications
within this monorepo.

## References

Official documentation referenced by this Architecture Decision Record:

- Next.js Documentation — https://nextjs.org/docs
- React Documentation — https://react.dev
- TypeScript Documentation — https://www.typescriptlang.org/docs
- Turborepo Documentation — https://turbo.build/repo/docs
- pnpm Workspace Documentation — https://pnpm.io/workspaces
