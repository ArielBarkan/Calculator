# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CalcPrice is a multilingual PWA (Progressive Web App) for comparing product prices per unit. Users enter price and quantity for multiple products, and the app calculates and ranks them by best value. Built with React 19 + TypeScript + Vite, styled with styled-components, deployed to Vercel.

## Commands

- **Dev server:** `pnpm dev` (runs on localhost:5173)
- **Build:** `pnpm build` (runs `tsc -b && vite build`, outputs to `dist/`)
- **Lint:** `pnpm lint` (ESLint with typescript-eslint)
- **Format:** `pnpm format:all` (Prettier across src/)
- **Preview production build:** `pnpm preview`

Package manager is **pnpm** (pinned with `save-exact=true` in `.npmrc`).

## Architecture

### Routing & Pages

All routes are lazy-loaded in `src/routes/app.routes.tsx`. Pages live in `src/views/pages/`. The main layout wraps all routes (`src/components/layouts/main.layout.tsx`).

Routes: `/` (calculator), `/settings`, `/settings/language`, `/settings/currency`, `/share`, `/why`, `/why-we`.

### Styling Pattern

Uses **styled-components** with a theme system. Each component has a `*.wrappers.tsx` file containing its styled-components (not a React wrapper — it's the styled elements). Theme definitions are in `src/styles/theme.ts` (light/dark). The `CustomThemeProvider` in `src/context/theme.context.tsx` injects both theme colors and text direction (`ltr`/`rtl`) into the styled-components theme.

### i18n & RTL

Internationalization uses **i18next** with HTTP backend loading translation JSON files from `/locales/{lng}/common.json`. Supported languages (Hebrew RTL, English, Spanish, Portuguese) are defined in `src/consts/languages.const.ts`. The app fully supports RTL layouts — direction is tracked via `document.body.dir` with a MutationObserver in the theme context.

### State & Data Flow

No global state library. User preferences (language, theme, currency, measurement unit, cookie consent) are persisted via `localStorage` through `src/services/localStorage.service.ts`. Defaults come from environment variables (`VITE_DEFAULT_LANGUAGE`, `VITE_DEFAULT_CURRENCY_ISO`, etc.).

Product comparison logic lives in `src/hooks/useProductHandlers.hook.ts` — manages product list state, unified price calculation, and ranking. Calculation utilities are in `src/utils/product.util.ts`.

### Types

All shared types are centralized in `src/types/index.ts`. `LocaleType` and `CurrencyISOType` are derived from the const arrays, so they auto-update when languages/currencies change.

### Environment Variables

All prefixed with `VITE_`. Key vars: `VITE_LOCALES_URL`, `VITE_URL_TO_SHARE`, `VITE_I18N_DEBUG_MODE`, `VITE_GOOGLE_ANALYTICS_TRACKING_ID`, `VITE_DEFAULT_LANGUAGE`, `VITE_DEFAULT_CURRENCY_ISO`.

## Code Conventions

- Prettier: 4-space indent, double quotes, no trailing commas, 120 char line width
- Components use barrel exports (`index.ts` files) throughout `src/components/`
- Styled-components go in `componentName.wrappers.tsx`, not inline
- Enums in `src/enums/`, constants in `src/consts/`, utilities in `src/utils/`
