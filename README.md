# CalcPrice

A multilingual PWA for comparing product prices per unit. Enter price and quantity for multiple products, and the app calculates and ranks them by best value.

**Live:** [calcprice.com](https://calcprice.com)

## Tech Stack

- React 19 + TypeScript + Vite
- styled-components (theming with light/dark mode)
- i18next (Hebrew RTL, English, Spanish, Portuguese)
- Workbox via vite-plugin-pwa (offline support)
- Deployed to Vercel

## Getting Started

### Prerequisites

- Node.js >= 20
- pnpm

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Runs on [http://localhost:5173](http://localhost:5173).

### Build

```bash
pnpm build
```

Outputs to `dist/`.

### Other Commands

| Command | Description |
|---------|-------------|
| `pnpm lint` | Run ESLint |
| `pnpm format:all` | Format code with Prettier |
| `pnpm preview` | Preview production build locally |

## Project Structure

```
src/
├── components/     # Reusable UI components (barrel exports via index.ts)
├── consts/         # Constants (languages, currencies)
├── context/        # React contexts (theme)
├── enums/          # Enums (theme, measurement, cookies)
├── hooks/          # Custom hooks (product handlers)
├── routes/         # Lazy-loaded route definitions
├── services/       # i18n, localStorage, language services
├── styles/         # Theme, global styles, icons
├── types/          # Shared TypeScript types
├── utils/          # Utility functions (calculations, analytics)
└── views/pages/    # Page components
public/
├── locales/        # Translation JSON files (he-IL, en-US, es, pt-BR)
├── icons/          # PWA icons
└── manifest.json   # Web app manifest
```

## Environment Variables

All prefixed with `VITE_`. Copy `.env` and adjust as needed.

| Variable | Description |
|----------|-------------|
| `VITE_DEFAULT_LANGUAGE` | Default language locale (e.g., `he-IL`) |
| `VITE_DEFAULT_CURRENCY_ISO` | Default currency (e.g., `ILS`) |
| `VITE_DEFAULT_THEME` | `darkTheme` or `lightTheme` |
| `VITE_DEFAULT_MEASUREMENT` | `weight`, `liquid`, or `quantity` |
| `VITE_LOCALES_URL` | URL path for translation files |
| `VITE_GOOGLE_ANALYTICS_TRACKING_ID` | GA4 tracking ID |
| `VITE_I18N_DEBUG_MODE` | Enable i18n debug logging |
| `VITE_URL_TO_SHARE` | URL used in the share/QR feature |
| `VITE_INITIAL_ROWS` | Number of product rows on load |
| `VITE_MAX_ROWS` | Maximum product rows allowed |