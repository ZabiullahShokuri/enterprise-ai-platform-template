# ADR-0014: Application Shell Architecture

Status: Accepted

Date: 2026-10-04

---

## Context

The Enterprise AI Platform Template requires the `apps/web` application to
consume the reusable UI primitives provided by `@enterprise/ui`.

Before this decision, the Web application contained only the initial Next.js
App Router bootstrap page and did not define an Application Shell that
integrated the shared UI library.

The integration must preserve the architectural boundary between the Web
application and the shared UI package.

The solution must also account for React Server Components and Client
Components. Several `@enterprise/ui` components provide interactive behavior
and therefore require a Client Component boundary when consumed by the Web
application.

The initial Application Shell should provide a small, testable integration
surface without introducing authentication, backend services, business
logic, AI functionality, or premature application-wide state.

The Web application also requires integration tests that can render the
Client-side Application Shell and verify its public behavior and accessibility
contracts.

---

## Decision

The Web application will introduce an `ApplicationShell` component under:

`apps/web/src/layouts/ApplicationShell.tsx`

`ApplicationShell` will act as the initial integration boundary between the
Next.js Web application and the shared `@enterprise/ui` package.

The dependency direction is:

`apps/web -> @enterprise/ui`

The UI package must not depend on the Web application.

### Public UI Package Consumption

The Web application will consume UI components exclusively through the public
`@enterprise/ui` package API.

Application code must not import UI implementation files directly from
`packages/ui/src`.

The initial Shell integrates existing UI primitives including:

- `NavigationMenu`
- `Command`
- `Button`

The NavigationMenu public export is exposed through the UI component index
because it is required by the first real Web application consumer.

No unrelated UI components are exported solely for Sprint 13.

### Server and Client Boundary

The Next.js App Router page will remain a Server Component.

`apps/web/src/app/page.tsx` will render the Client Component
`ApplicationShell`.

`ApplicationShell.tsx` will explicitly declare:

`"use client"`

This establishes the following boundary:

`page.tsx (Server Component) -> ApplicationShell (Client Component) -> @enterprise/ui`

The Web application will not add `"use client"` to the root page merely to
consume interactive UI components.

The Client boundary belongs at the application layout integration point so
that interactive behavior remains localized.

### Initial Shell Scope

The first Application Shell intentionally remains minimal.

It provides:

- primary navigation containing the Home link
- a main application area
- a heading identifying the platform
- a Command primitive with an accessible search input and one Home item
- a Button demonstrating shared UI integration

The Shell does not introduce:

- authentication
- authorization
- backend or API integration
- database access
- AI or LLM functionality
- business workflows
- CRM functionality
- application-wide state management
- additional routes
- new UI primitives created solely for the Shell

The Command component is consumed as an existing primitive. It is not treated
as a complete modal Command Palette in this iteration.

### Integration Testing

The Web application will use Vitest with jsdom and Testing Library for
component-level integration tests.

The Web test configuration will:

- use the React Vite plugin for JSX transformation
- use jsdom as the test environment
- load `@testing-library/jest-dom`
- support the Web application's `@/*` path alias
- expose a standard `test` package script

The Application Shell integration test will verify observable public behavior
rather than implementation details.

The initial test covers:

- main navigation semantics
- Home navigation link
- Command searchbox accessibility
- Shell heading
- integrated Button

This establishes a baseline contract for future Shell evolution.

---

## Scope

This decision affects:

- `apps/web`
- `packages/ui` public component exports
- Web application component testing configuration
- Web application integration tests
- Sprint 13 Application Shell architecture

The decision does not change the internal architecture of individual UI
primitives.

Existing component-specific architecture remains governed by their respective
ADRs, including:

- ADR-0012: NavigationMenu Component Architecture
- ADR-0013: Command Component Architecture

Existing frontend Server/Client Component principles remain governed by
ADR-0004.

---

## Consequences

### Advantages

- establishes a clear Web-to-UI package boundary
- preserves the Server Component default in the App Router
- localizes client-side behavior inside the Application Shell
- creates the first real consumer of the shared UI library
- provides a small and testable integration surface
- keeps Sprint 13 focused on application architecture rather than business
  logic
- provides a foundation for future navigation and application-level features
- introduces repeatable Web integration testing

### Trade-offs

- the Application Shell currently contains only minimal application behavior
- interactive UI consumption requires a Client Component boundary
- Web test infrastructure requires additional configuration and the React Vite
  plugin
- the Shell will require further evolution as authentication, routing,
  application state, and business features are introduced

---

## Alternatives Considered

### Direct UI Consumption from Server Components

Pros

- fewer Client Component boundaries
- simpler page structure

Cons

- interactive UI components require client-side behavior
- direct consumption of the current interactive UI surface from the Server
  Component boundary caused compatibility problems during integration

Decision

Rejected

---

### Mark the Root Page as a Client Component

Pros

- simple integration model
- interactive UI can be consumed directly

Cons

- unnecessarily converts the application entry page into a Client Component
- weakens the Server Component boundary
- makes the client boundary broader than required

Decision

Rejected

---

### Create a Separate Global Client UI Barrel

Pros

- explicitly separates client-oriented exports
- could provide a dedicated client package surface

Cons

- adds another public API surface
- duplicates package export concepts
- is unnecessary for the current minimal Shell
- would increase architectural complexity before a concrete need exists

Decision

Rejected

---

## Rationale

The selected architecture keeps the Web application's Server Component model
intact while introducing a single explicit Client Component boundary where
interactive application UI is actually required.

Using `ApplicationShell` as the boundary also gives the Web application a
clear place to evolve future navigation, application layout, and interactive
features without forcing the entire App Router page tree to become client
rendered.

Consuming `@enterprise/ui` through its public API preserves package
encapsulation and the intended monorepo dependency direction.

The minimal Shell is intentional: it proves that the shared UI library can be
consumed successfully by the Web application while avoiding premature
application architecture.

The integration test provides a concrete behavioral and accessibility
contract for this boundary.

---

## Related Decisions

- ADR-0004: Frontend Architecture
- ADR-0005: Dependency Management
- ADR-0012: NavigationMenu Component Architecture
- ADR-0013: Command Component Architecture

---

## References

- Next.js App Router documentation
- React Server Components documentation
- Vitest documentation
- Testing Library documentation
- `@enterprise/ui` component architecture
- Sprint 13 Application Shell implementation
