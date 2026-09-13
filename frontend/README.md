# CuriousLLM — Frontend

AI-powered document intelligence and semester-exam preparation platform for MAKAUT B.Tech students.

## Stack

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lucide React · React Flow (knowledge graph)

## Getting started

```bash
bun install
bun run dev
```

Visit http://localhost:3000. The marketing site is at `/`; the product lives under `/dashboard`, `/subjects`, `/documents`, `/chat`, `/pyq-analysis`, `/predicted-paper`, `/study-plan`, `/flashcards`, `/quiz`, `/mock-test`, `/viva`, `/knowledge-graph`, and `/settings`.

## Structure

- `app/` — routes. Marketing page at `app/page.tsx`; the authenticated product lives in the `app/(app)` route group, which shares one layout (sidebar + navbar + mobile bottom nav).
- `components/` — reusable UI, grouped by domain (`layout`, `ui`, `brand`, `landing`, `dashboard`, `documents`, `chat`, `pyq`, `exam`, `study`, `shared`).
- `lib/mock-data/` — realistic MAKAUT B.Tech sample data (subjects, PYQs, documents, study plans, flashcards, quiz questions, chat, knowledge graph).
- `lib/api/` — API abstraction layer. Every function currently resolves mock data; swap the body for an `apiClient.request(...)` call once the FastAPI backend is live. Set `NEXT_PUBLIC_API_URL` in `.env.local` to point at it.
- `types/` — shared TypeScript interfaces.

## Design notes

The design intentionally avoids typical "AI SaaS" tropes (glassmorphism, gradient hero, cookie-cutter rounded cards) in favour of a quieter, academic-ledger aesthetic: a warm paper background, hairline borders, a serif display face (Fraunces) paired with Inter for body text and IBM Plex Mono for data, and a single amber accent used consistently to mean "this matters for your exam."

Fonts are self-hosted via `@fontsource` rather than fetched from Google Fonts at build time, so the project builds fully offline.

## What's mocked vs. real

Everything renders from realistic static data in `lib/mock-data`. Interactions that would normally hit a backend (chat replies, quiz scoring, study-plan generation, paper generation, document upload/processing) are simulated client-side so every flow is fully clickable end-to-end. Replace the corresponding function in `lib/api/*.ts` with a real fetch once the FastAPI backend exists — components don't need to change.
