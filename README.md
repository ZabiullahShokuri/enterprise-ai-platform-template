# Enterprise AI Platform Template

Enterprise-grade monorepo template for building scalable AI, Automation, IoT, Smart Building, and Cloud-native applications.

---

# Vision

Build once.

Scale everywhere.

This repository is designed as a reusable enterprise foundation for AI-powered software products, automation platforms, enterprise SaaS systems, IoT solutions, and cloud-native services.

---

# Current Status

## Milestone 1 — Foundation (In Progress)

The foundational architecture of the platform has been successfully established.

### Completed

- ✅ Enterprise Monorepo
- ✅ pnpm Workspace
- ✅ Turborepo Build System
- ✅ Shared Configuration Packages
- ✅ TypeScript Configuration Package
- ✅ ESLint Configuration Package
- ✅ Prettier Configuration Package
- ✅ Next.js Frontend Foundation
- ✅ Shared UI Package
- ✅ Design Token System
- ✅ Theme System
- ✅ ThemeProvider
- ✅ useTheme Hook
- ✅ UI Component Architecture
- ✅ Documentation Structure
- ✅ Architecture Decision Records (ADR)

### Current Phase

🚧 Documentation Finalization

Sprint documentation, Milestone documentation, Release Notes and repository documentation are being completed before starting the Design System components.

---

# Technology Stack

## Frontend

- Next.js
- React
- TypeScript

## Backend

- FastAPI
- Python

## Database

- PostgreSQL
- Redis

## Infrastructure

- Docker
- Turborepo
- pnpm

## Automation

- n8n
- Node-RED

## IoT

- MQTT
- Home Assistant

## Monitoring

- Grafana

## CI/CD

- GitHub Actions
- Vercel

---

# Repository Structure

```text
apps/
packages/
services/
infrastructure/
scripts/
tooling/
docs/
```

The repository follows a modular enterprise architecture where shared packages are reusable across all applications.

---

# Documentation

Project documentation is available inside the **docs/** directory.

Major sections include:

- Architecture
- ADR
- Development
- Frontend
- Backend
- DevOps
- Cloud
- Security
- Testing
- Release Notes
- Milestones

---

# Development Workflow

Each Sprint follows the same engineering workflow:

```
Sprint
│
├── Code
├── Tests
├── Documentation
├── ADR (if required)
├── Release Notes (Milestones)
├── Commit
├── Push
└── Tag (Milestones)
```

This workflow keeps source code, documentation and architectural decisions synchronized throughout the project lifecycle.

---

# Project Roadmap

## Milestone 1 — Foundation

- Sprint 0 — Repository Initialization
- Sprint 1 — Monorepo Foundation
- Sprint 2 — Workspace & Shared Configuration
- Sprint 3 — Frontend Foundation
- Sprint 4 — Design System Foundation

---

## Milestone 2 — Design System

- Sprint 5 — Core UI Components
- Sprint 6 — Forms & Layout System

---

## Milestone 3 — Platform

- Sprint 7 — Backend Services
- Sprint 8 — Authentication & Authorization

---

## Milestone 4 — Enterprise Platform

- Sprint 9 — AI Automation
- Sprint 10 — IoT Integration
- Sprint 11 — Cloud Deployment

---

# Current Focus

The next development phase is:

**Sprint 5 — Core UI Components**

Initial components:

- Button
- IconButton
- Text
- Heading
- Badge
- Spinner

These components will be built on top of the completed Design System foundation.

---

# Getting Started

```bash
pnpm install

pnpm lint

pnpm typecheck

pnpm turbo build
```

---

# License

MIT License

Copyright (c) Zabiullah Shokuri
